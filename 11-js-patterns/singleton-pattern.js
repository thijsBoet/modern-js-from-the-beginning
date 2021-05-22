// CAN ONLY RETURN ONE INSTANCE OF AN OBJECT AT A TIME
// VARIATION ON MODULE PATTERN AND

const Singleton = (function(){
    let instance;

    function createInstance() {
        const object = new Object({name: "Brad"});
        return object;
    }

    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})()

const instanceA = Singleton.getInstance();

console.log(instanceA)