// Basic structure

// (function() {
//     Declare private vars and functions (cannot be accessed outside the module)

//     return {
//         Declare public vars and functions (can be accessed outside the module)
//     }
// })()

// STANDARD MODULE PATTERN
const UICtrl = (function() {
    // Private
    let text = 'Hello World';

    const changeText = function (){
        const element = document.querySelector("h1");
        element.textContent = text;
    }

    // Public
    return {
        callChangeText: function(){
            changeText();
            console.log(text)
        }
    }
})();

UICtrl.callChangeText();

// REVEALING MODULE PATTERNS
const ItemCtrl = (function() {
    let _data = [];

    function add(item) {
        _data.push(item);
        console.log("Item Added.....")
    }

    function get(id) {
        return _data.find(item => item.id === id)
    }

    return {
        add,
        get,
    }
})()

ItemCtrl.add({id: 1, name: "Nike Air Max"});
// ItemCtrl.add({id: 2, name: "Nike Air Jordan"});
console.log(ItemCtrl.get(1))
