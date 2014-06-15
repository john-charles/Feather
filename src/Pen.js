;define(['./pen/Selection'], function(Selection){
    
    function Pen(el){
        
        if(this === window){
            throw "Error, please instantiate a new Pen instance!";
        }
        
        this.el = el;
        
        
        var selectStart = false, shiftKey = false, mouseDown = false;
        
        el.addEventListener('selectstart', function(){
            console.log('selectStart');
            selectStart = true;
        });
        
        el.addEventListener('keydown', function(event){
            
            var selection, keyCode = event.key || event.keyCode;
            if(keyCode === 16){
                shiftDown = true;
            }
            
            
            
            selection = window.getSelection();
            if(!selection.getRangeAt(0).collapsed && keyCode >= 37 && keyCode <= 40){
                selectStart = true;
                console.log('pseudo selectStart');
            }
            
        });
        
        el.addEventListener('keyup', function(event){
            
            var keyCode = event.key || event.keyCode;
            if(keyCode === 16){
                shiftDown = false;
                
                if(selectStart){
                    selectStart = false;
                    console.log('event: selectEnd');
                }
            }
            
            
        });
        
        el.addEventListener('mousedown', function(event){
            console.log('mousedown');
            mouseDown = true;
        });
        
        el.addEventListener('mouseup', function(event){
            console.log('mouseup');
            
            if(selectStart){
                selectStart = false;
                console.log('event: selectEnd');
            }
            
            mouseDown = false;
        });
        
    }    
    
    return Pen;
    
});