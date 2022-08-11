class Shorten {
  constructor ( public id: number,public username: string,protected title: string) {
     
  }
}

let anyname = new Shorten(100, "Elzero", "Developer");

console.log(anyname.id);
console.log(anyname.username);