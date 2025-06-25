/*interface User{
    name:string,
    age:number,
    email:string,
    password:string,
}
type updateProps=Pick<User,"name" | "age" | "email">;//only update name
type updatePropsOptional=Partial<updateProps>;//update optioanlly
 

type config={
    readonly endpoint:string,
    readonly apikey:string
}

const chatApi:Readonly<config>={
    endpoint:"URL_ADDRESS",
    apikey:"1234567890"
}
function updateUser(user:updatePropsOptional){
    console.log(user);
}
function sum(user1:User,user2:User){
    return user1.age+user2.age;
}

type phoneBook=Record<string,number>;
const contacts:phoneBook={
    "abc":1234567890,
    "xyz":1234567890
}

type events="pick"| "drop"| "leave";
type excludeEvents=Exclude<events,"leave">;
 function handleIt(event:excludeEvents){
    console.log(event);
 }
 handleIt("pick");
 handleIt("drop");*/