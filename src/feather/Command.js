/**
 * @author John-Charles D. Sokolow <john.charles.sokolow@gmail.com>
 * 
 * See License.txt distributed with this package for usage terms.
 * 
 * **/
;define(function(){
    
    function Command(commandName, currentSelection){
        this.commandName = commandName;
        this.selection = currentSelection;
    }
    
    Command.prototype.exec = function(arg){
        return document.execCommand(this.commandName, null, arg);
    }
    
    Command.prototype.canQuery = function(){
        return document.queryStateEnabled(this.commandName);
    }
    
    Command.prototype.queryState = function(){
        return document.queryState(this.commandName);
    }
    
    return Command;
    
});