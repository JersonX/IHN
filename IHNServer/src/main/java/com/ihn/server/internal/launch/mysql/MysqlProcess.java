package com.ihn.server.internal.launch.mysql;

import java.io.BufferedReader;
import java.io.FileReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.ihn.server.internal.launch.BizContext;
import com.ihn.server.internal.launch.service.ExternalService;
import com.ihn.server.util.SysUtils;
import com.ihn.server.util.process.RunCmdService;
import com.mysql.jdbc.CommunicationsException;



public class MysqlProcess implements ExternalService{

    @Override
    public String getServiceName() {
        return "MYSQL";
    }
    
    @Override
    public boolean checkIsRun() {
        return checkDB(7788,"root","",new ArrayList<Exception>());
    }
    
    private boolean checkDB(int dbPort,String userName,String password,List<Exception> exceptionList) {
        try{
            Class.forName("com.mysql.jdbc.Driver").newInstance();
            String url ="jdbc:mysql://localhost:"+dbPort+"/ihn?user="+userName+"&password="+password+"&useUnicode=true&characterEncoding=8859_1";
            Connection ihnConn = DriverManager.getConnection(url);
            if(ihnConn==null){
            	System.out.println("can't connect to mysql server on localhost:"+dbPort+"/ihn?user="+userName);
                return false;
            }else{
            	
            	String sqlFile=BizContext.runHomeDir+"mysql/ihn_sql.txt";
            	initDataFromSqlFile(ihnConn, sqlFile);
            	
            	ihnConn.close(); 
                return true;
            }
        }catch(CommunicationsException ex1){
        	System.out.println("can't connect to mysql server on localhost:"+dbPort+"/ihn?user="+userName);
            return false;
        }catch(Exception ex){
        	System.out.println("can't connect to mysql server on localhost:"+dbPort+"/ihn?user="+userName);
            exceptionList.add(ex);
            return false;
        }
    }
    
    private void initDataFromSqlFile(Connection ihnConn,String sqlFile) throws Exception{
    	Statement stmt=ihnConn.createStatement();
    	FileReader reader=new FileReader(sqlFile);
    	BufferedReader bufferReader=new BufferedReader(reader);
    	String sqlLine;
    	StringBuilder sb=new StringBuilder();
    	while((sqlLine=bufferReader.readLine())!=null){
    		if(sqlLine.trim().endsWith(";")){
    			sb.append(sqlLine);
    			stmt.executeUpdate(sb.toString());
    			
    			sb.delete(0, sb.length());
    		}else{
    			sb.append(sqlLine);
    		}
    	}
    	if(sb.length()>0)
    		stmt.executeUpdate(sb.toString());
    	
    	stmt.close();
    	bufferReader.close();
    	reader.close();
    }

    @Override
    public boolean isInited() {
        return true;
    }

    @Override
    public void init() {
    }

    @Override
    public void start() {
    	if(SysUtils.getOSPlatform().startsWith("Win")){
	        RunCmdService service=new RunCmdService();
	        service.setStartupMode(RunCmdService.OUTSIDE_THREAD);
	        
	        String cmd=BizContext.runHomeDir+"mysql/run-mysql.bat";
	        service.setStartCmdLine(cmd);
	        service.startService();
    	}
    }

    @Override
    public void stop() {
    	if(SysUtils.getOSPlatform().startsWith("Win")){
	        RunCmdService service=new RunCmdService();
	        service.setStartupMode(RunCmdService.OUTSIDE_THREAD);
	        
	        String cmd=BizContext.runHomeDir+"mysql/shutdown-mysql.bat";
	        service.setStartCmdLine(cmd);
	        service.startService();
    	}
    }

}
