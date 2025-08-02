/**
 * create a custom event emitter
 */

class CustomEventEmitter {
    constructor(){
        this.events = {}
    }

    on(event, listener){
        if(!this.events[event]){
            this.events[event] = []
        }

        this.events[event].push(listener);
    }

    emit(event, ...args){
        const listeners = this.events[event]
        if(!listeners) return;

        let results = [];
        if(listeners)
            results = listeners.map(listener => listener(...args))

        return results[0] !== undefined ? results[0] : null;
    }

    off(event, listenerToRemove){
        if(!this.events[event]) return

        this.events[event] = this.events[event].filter(listener => listener !== listenerToRemove);
    }

    once(event, listener){
        const onceWrapper = (...args) => {
            this.off(event, onceWrapper)
            return listener(...args)
        }

        this.on(event, onceWrapper);
    }

    removeAllListeners(event) {
        if (this.events[event]) {
            delete this.events[event];
        }
    }
}

//Example usage
const emitter = new CustomEventEmitter();

function greet(name) {
    return (`Hello, ${name}!`);
}

function farewell(name) {
    return (`Goodbye, ${name}!`);
}

emitter.on('welcome', greet);
console.log(emitter.emit('welcome', 'Varun')) // Output: Hello, Varun!

emitter.off('welcome', greet);
console.log(emitter.emit('welcome', 'Varun')) // No output, as the listener has been removed


emitter.once('bye', farewell);
console.log(emitter.emit('bye', 'Varun')) // Goodbye, Varun!
console.log(emitter.emit('bye', 'Varun')) // No output, as the listener has been removed