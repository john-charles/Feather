;define(function(){
    
    function Selection(){
        this.selecting = false;
        this.storeSelection();
    };
    
    Selection.prototype.storeSelection = function(){
        
        this.native = window.getSelection();
        
        try {
            this.range = this.native.getRangeAt(0);
        } catch(e){
            this.range = null;
        }
    }
    
    Selection.prototype.applySelecton = function(){
        
        if(this.range){
            
            var selection = window.getSelection();
            
            selection.removeAllRanges();
            selection.addRange(this.range);
            
        }
    }
    
    Selection.prototype.selectStart = function(){
        this.selecting = true;
    }
    
    Selection.prototype.mouseDown = function(){
        this.selecting = true;
    }
    
    Selection.prototype.mouseUp = function(){
        this.selecting = false;
        this.storeSelection();
    }
    
    Selection.prototype.shiftDown = function(){
        this.selecting = true;
    }
    
    Selection.prototype.shiftUp = function(){
        this.selecting = false;
        this.storeSelection();
    }
    
    Selection.prototype.focus = function(){
        this.applySelecton();
    }
    
    return Selection;
    
});