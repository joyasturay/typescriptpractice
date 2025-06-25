type User={
    name:string,
    age:number,
    password:string
}

type updateOptional=Pick<User,"name" | "age">;
type updateOptionalOptional=Partial<updateOptional>;
type config={
     endpoint:string,
    apikey:string
}
const chatApi:Readonly<config>={
    endpoint:"URL_ADDRESS",
    apikey:"1234567890"
}

interface idCard{
    id:number,
    name:string
}

const idMap=new Map<number,idCard>();
idMap.set(1,{id:1,name:"abc"});
console.log(idMap.get(1));