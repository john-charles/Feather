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
        
        var off = this.off.bind(this);
            
        function wrapper(){            
            
            callback.apply(this, arguments);
            off(eventName, wrapper);
        };
        
        this.on(eventName, wrapper);
        
    }
    
    EventEmitter.prototype.fire = function(eventName, args){
        
        var handlers = this.events[eventName] || [];
        
        handlers.forEach(function(handler){
            handler.apply(this, args);
        });
        
    }
    
    return EventEmitter;
    
});