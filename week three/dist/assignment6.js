"use strict";
class Show {
    constructor(_title) {
        this._title = _title;
    }
    get title_1() {
        return this._title;
    }
    set title_1(value) {
        this._title = value;
    }
}
const tester = new Show("abdo");
// let tester = new Show("Elzero");
// console.log(tester.title_1); // Property 'title' does not exist on type 'Show'
// tester.title = "Osama"; // Property 'title' does not exist on type 'Show'
// console.log(tester.title); // Property 'title' does not exist on type 'Show'
