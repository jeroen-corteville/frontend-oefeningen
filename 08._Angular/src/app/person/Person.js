function Person(name, firstname, img) {
    this.name = name;
    this.firstname = firstname;
    this.img = img;
}

Person.prototype = {
    get Name() { return this.name; },
    set Name(v) { this.name = v; },
    
    get Firstname() { return this.firstname; },
    set Firstname(v) { this.firstname = v; },

    get Image() { return this.img; },
    set Image(x) { this.img = v;}
}