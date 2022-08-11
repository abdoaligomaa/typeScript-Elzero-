interface PLAY {
  id: number;
  title: string;
  level: number | string;
  logIn(): void;
  logOut(msg: string): void;
}

// Create Your Class Here
class PLAYER implements PLAY{
    constructor(public id:number,public title:string,public level:number|string){}
    logIn(){
        console.log('log IN')
    }
   logOut(msg:string){
        console.log(msg)
    }
}

let newPlayer = new PLAYER(100, "Elzero", 95);

console.log(newPlayer.id); // 100
console.log(newPlayer.title); // "Elzero"
console.log(newPlayer.level); // 95
newPlayer.logIn(); // Logged In
newPlayer.logOut("Good Bye"); // Logged Out, Good Bye