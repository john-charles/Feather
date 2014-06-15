;define(function(){
    
    function EventEmitter(){
        this.events = Object.create(null);
    }
    
    EventEmitter.prototype.on = function(eventName, callback){
        
        var handlers = this.events[eventName] || [];
        
        if(handlers.indexOf(callback) === -1){
            handlers.push(callback);
        }
        
        this.events[eventName] = handlers;
    }
    
    EventEmitter.prototype.off = function(eventName, callback){
        var idx, handlers = this.events[eventName] || [];
        
        idx = handlers.indexOf(callback);
        
        if(idx !== -1){
            this.events[eventName] = handlers.splice(idx, 1);
        }        
    }
    
    EventEmitter.prototype.once = function(eventName, callback){
        
        var wrapper = function(){            
            callback.apply(this, arguments);
            this.off(eventName, wrapper);
        }.bind(this);
        
        this.on(eventName, wrapper);
        
    }
    
    return EventEmitter;
    
});