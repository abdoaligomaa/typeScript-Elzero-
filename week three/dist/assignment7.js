"use strict";
// Create Your Class Here
class PLAYER {
    constructor(id, title, level) {
        this.id = id;
        this.title = title;
        this.level = level;
    }
    logIn() {
        console.log('log IN');
    }
    logOut(msg) {
        console.log(msg);
    }
}
let newPlayer = new PLAYER(100, "Elzero", 95);
console.log(newPlayer.id); // 100
console.log(newPlayer.title); // "Elzero"
console.log(newPlayer.level); // 95
newPlayer.logIn(); // Logged In
newPlayer.logOut("Good Bye"); // Logged Out, Good Bye
