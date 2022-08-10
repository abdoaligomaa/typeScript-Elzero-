class Show {
  public get title_1(): string {
      return this._title;
  }
  public set title_1(value: string) {
      this._title = value;
  }
  constructor (private _title: string) {}
}
const tester=new Show("abdo")

// let tester = new Show("Elzero");

// console.log(tester.title_1); // Property 'title' does not exist on type 'Show'
// tester.title = "Osama"; // Property 'title' does not exist on type 'Show'
// console.log(tester.title); // Property 'title' does not exist on type 'Show'