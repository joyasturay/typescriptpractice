interface User{
    name:String,
    age:number
}
function sum(user1:User,user2:User){
    return user1.age+user2.age;
}
console.log(sum({name:"Rahul",age:19},{name:"Raj",age:29}));