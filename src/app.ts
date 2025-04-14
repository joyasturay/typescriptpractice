
const x:number=1;
console.log(x);
function greet(name:string){
    console.log("Hello "+name);
}
greet("Rahul");
function add(x:number,y:number):number{
    return x+y;
}
let z=add(1,2);
console.log(z);

function validage(age:number):boolean{
    if(age>18){
        return true;
    }
    else{
        return false;
    }
}
console.log(validage(19));

function delay(fn:()=>void){
 setTimeout(fn,1000);
}
delay(()=>{
    console.log("Hello");
});
interface user{
    name:string;
    age:number;
}
function isLegal(user:user){
    if(user.age>18){
        return true;
    }
    else{
        return false;
    }
}
console.log(isLegal({name:"Rahul",age:19}));

type profile={
    name:string;
    age:number;
}

type greetArg= string|number;
function greet1(arg:greetArg){
    if(typeof arg==="string"){
        console.log("Hello "+arg);
    }
    else{
        console.log("Hello "+arg);
    }
}
greet1("Rahul");
function printnumber(arr:number[]){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
printnumber([1,2,3,4,5]);

enum Direction{
    Up,
    Down,
    Left,
    Right
}
function keypress(key:Direction){
    if(key==Direction.Up){
        console.log("Up");
    }
    else if(key==Direction.Down){
        console.log("Down");
    }
    else if(key==Direction.Left){
        console.log("Left");
    }
    else{
        console.log("Right");
    }
}
keypress(Direction.Up);

function identity<T>(arg:T):T{
    return arg;
}
console.log(identity<number>(1));
console.log(identity("Rahul").toUpperCase());