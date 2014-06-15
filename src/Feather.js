;define(['./feather/Selection', './feather/Command'], function(Selection, Command){
    
    function Feather(el){
        
        if(this === window){
            throw "Error, please instantiate a new Pen instance!";
        }
        
        this.el = el;
        var justFocused = false, selection = new Selection();
        
        this.selection = selection;
        this.commands = Object.create(null);
        
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
        
        selection.on('change-selection', function(){
            console.log('selection changed');
        });
        
    }
    
    Feather.prototype.use = function(extension){
        extension(this);
    }
    
    Feather.prototype.getCurrentSelection = function(){
        return this.selection;
    }
    
    Feather.prototype.registerCommand = function(commandName, command){
        if(this.commands[commandName]){
            throw "Feather does not currently support command chaining.";
        }
        
        this.commands[commandName] = command;
        
    }
    
    Feather.prototype.getCommand = function(commandName){
        var command = this.commands[commandName];
        
        if(!command){
            command = this.commands[commandName] = new Command(commandName);
        }
        
        return command;
        
    }   
    
    
    return Feather;
    
});