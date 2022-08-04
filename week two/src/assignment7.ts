// Create Enums + Function Here
const insaneFunc=(num:number)=>{
    return Game.Hard-num
}

enum Game {
    Easy =100,
    Medium=Easy-20,
    Hard=Medium-(Easy/2),
    Insane= insaneFunc(10)
}
// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20