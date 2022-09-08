class MyModule{
    _name = "";

    constructor(_name){
        this._name = _name;
    }

    getGreetingMessage() {
        return `Hello, ${this._name}`;
    }
}

module.exports.MyModule = MyModule;