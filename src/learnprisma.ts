import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient()
 async function main(){
    try{
        const newUser=await prisma.user.create({
            data: {
                name: 'Test User',
                email: 'test@example.com',
                password: 'password123',
              },
        })
        console.log(newUser);

        const newTodo=await prisma.todo.create({
            data:{
                title:'Learn Prisma',
                description:'Learn how to use Prisma with TypeScript',
                user:{
                    connect:{
                        id:newUser.id
                    }
                }
            }
        })
        console.log(newTodo);
        const allTodos=await prisma.user.findMany({
            where:{
                id:newUser.id
            }
        })
        console.log(allTodos);
    }
    catch(err){
        console.log(err);
    }
    finally{
        await prisma.$disconnect();
    }
 }
 main();
