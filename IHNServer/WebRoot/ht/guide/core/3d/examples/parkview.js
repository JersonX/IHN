function initFormPane(g3d, rightFormPane){
    rightFormPane.addRow(['����:',
    {
      id: 'movable',
      checkBox: {
          label: '���ƶ�',
          selected: false
      }
    },
    {
      id: 'editable',
      checkBox: {
          label: '�ɱ༭',
          selected: false,
          onClicked : function(){
              var selected=rightFormPane.v('editable')
              g3d.setEditable(selected);
          }
      }
    }
    ], [80, 0.1+80, 0.1]);
    
    rightFormPane.addRow([null,
    {
      id: 'centerAxis',
      checkBox: {
          label: '����',
          selected: false,
          onClicked : function(){
              var selected=rightFormPane.v('centerAxis')
              g3d.setCenterAxisVisible(selected);                           
          }
      }
    },
    {
      id: 'wireframe',
      checkBox: {
          label: '�߿�ͼ',
          selected: false,
          onClicked: function(){
                var selected=rightFormPane.v('wireframe')
                if(selected){
                    dataModel.each(function(data){
                        data.s({
                            'wf.visible': 'selected',
                            'wf.color': 'red'                                        
                        });
                    });                                
                }else{
                    dataModel.each(function(data){
                        data.s({
                            'wf.visible': false                                       
                        });
                    });                               
                }                            
            }                     
          }
    }
    ], [80, 0.1+80, 0.1]);

		rightFormPane.addRow([null,
    {
      id: 'originAxis',
      checkBox: {
          label: '������',
          selected: false,
          onClicked: function(){
              var selected=rightFormPane.v('originAxis')
              g3d.setOriginAxisVisible(selected);                           
          }
      }
    },
    {
      id: 'grid',
      checkBox: {
          label: '��ʾ����',
          selected: false,
          onClicked: function(){
              var selected=rightFormPane.v('grid')
              g3d.setGridVisible(selected);
          }
      }
    }
    ], [80, 0.1+80, 0.1]);
    
    rightFormPane.addRow();
    rightFormPane.addRow(['����:',
    {
        button: {
            label: '��ΪͼƬ',
            onClicked: function(){
                var w = window.open();
                w.document.open();                            
                w.document.write("<img src='" + g3d.toDataURL(g3d.getView().style.background) + "'/>");
                w.document.close();
            }
        }
    },
    {
        button: {
            label: '�����λ',
            onClicked: function(){ 
            }
        }
    }
    ],[80, 0.1+80, 0.1]);

    rightFormPane.addRow([null,
    {
        button: {
            label: 'ͣ��ռλ',
            onClicked: function(){
            }
        }
    },
    {
        button: {
            label: '�뿪��λ',
            onClicked: function(){ 
            }
        }
    }
    ], [80, 0.1+80, 0.1]);
    
    rightFormPane.addRow([null,
    {
        button: {
            label: 'ģ��澯',
            onClicked: function(){
            }
        }
    },
    {
        button: {
            label: '����澯',
            onClicked: function(){ 
            }
        }
    }
    ], [80, 0.1+80, 0.1]);
    
    rightFormPane.addRow();
    rightFormPane.addRow(['�����̼�:',
    {
      id: 'keywords',
      textField: {
          text: '�ؼ���'
      }
    },
    {
        button: {
            label: '����',
            onClicked: function(){
                
            }
        }
    }
    ], [80, 0.1+80, 0.1]);

		rightFormPane.addRow();
    rightFormPane.addRow(['������λ:',
    {
        id: 'direction',
        checkBox: {
          label: '��������',  //Landscape/Portait
          selected: true
        }
    },
    {
      id: 'prefixId',
      textField: {
          label: 'Prefix',
          text: 'ǰ׺:��H0'
      }
    }
    ], [80, 0.1+80,  0.1]);
    
    rightFormPane.addRow([null,
    {
      id: 'rows',
      textField: {
          text: '����'
      }
    },
    {
      id: 'columns',
      textField: {
          text: '����'
      }
    }
    ], [80, 0.1+80, 0.1]);
    rightFormPane.addRow([null,
    {
        button: {
            label: '����',
            onClicked: function(){
                
            }
        }
    }
    ], [80, 0.1]);
}