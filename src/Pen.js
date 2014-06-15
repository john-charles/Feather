;define(['./pen/Selection'], function(Selection){
    
    function Pen(el){
        
        if(this === window){
            throw "Error, please instantiate a new Pen instance!";
        }
        
        this.el = el;
        var justFocused = false, selection = new Selection();
        
        el.addEventListener('selectstart', function(){
            selection.selectStart();
        });
        
        el.addEventListener('keydown', function(event){
            
            var keyCode = event.key || event.keyCode;
            if(keyCode === 16){
                selection.shiftDown();
            }
            
        });
        
        el.addEventListener('keyup', function(event){
            
            var keyCode = event.key || event.keyCode;
            if(keyCode === 16){
                selection.shiftUp();
            }
            
        });
        
        el.addEventListener('focus', function(){            
            justFocused = true;
        });
        
        el.addEventListener('mousedown', function(event){
            if(el.hasFocus){
                selection.mouseDown();
            }
        });
        
        el.addEventListener('mouseup', function(event){
            if(justFocused){                
                justFocused = false;
                event.preventDefault();
                selection.focus();
            } else {                
                selection.mouseUp();
            }            
        });
        
        
        
    }
    
    return Pen;
    
});