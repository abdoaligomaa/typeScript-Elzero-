"use strict";
class Shorten {
    constructor(id, username, title) {
        this.id = id;
        this.username = username;
        this.title = title;
    }
}
let anyname = new Shorten(100, "Elzero", "Developer");
console.log(anyname.id);
console.log(anyname.username);
