import { Hono } from "hono";
import { db } from "../db/PrismaClinet";
import { sign } from "hono/jwt";
import { SignIn, SignUp } from "@ay1x/common-package"
import errorMap from "zod/locales/en.js";

const userRoute= new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        userId:string
    }
}>();



userRoute.post('/signup', async(c)=>{
    try{
        
        // axcess the body 
        const body = await c.req.json();
        console.log(body);
        
        //validate the body
        const {success}=SignUp.safeParse(body);
        console.log(success);
        
        if(!success){
          c.status(403);
         return c.json({
            "error":"invalid inputs"
        })
     }
        //db call
        const prisma=db(c.env.DATABASE_URL);
        const user= await prisma.user.create({
            data:{
                name:body?.name,
                email:body?.email,
                password:body?.password

            }
        })
        const token=await sign({id:user.id},c.env.JWT_SECRET);
        return c.json({
            "msg":"signed successfuly",
            "token":`Bearer ${token}`
        })

    }catch(error){
        console.error('Error creating user:', error); // Log the error for debugging
        c.status(403)
        
         return c.json({
            "error":error,
            
         })
    }

})


// signin route
userRoute.post('/signin', async(c)=>{
    try{
        // axcess  for body
        const body= await c.req.json();
        // validate the body
        const {success}=SignIn.safeParse(body);
       if(!success){
        c.status(403);
        return c.json({
            "msg":"invalid inputs"
        })
     }


        // check if user exist
        const prisma=db(c.env.DATABASE_URL);
        const user= await prisma.user.findUnique({
            where:{
                email:body.email
            }
        })
        console.log(user);
        
        // if no user
        if(!user){
            c.status(403)
            return c.json({
                "msg":"user does not exist signup"
            })
        }
        // if user exist
        // check if password matches
        if(user?.password !== body.password){
            c.status(403)
            return c.json({
                "msg":"password does not match"
            })
        }
        // create the token 
        const token=await sign({id:user.id},c.env.JWT_SECRET);
        console.log(token);
        
        return c.json({
            "msg":"signed successfuly",
            "token":`Bearer ${token}`
        })


    }catch(e){
        console.log(`error occured while signin ${e}`);
        c.status(403);
        return c.json({
            "msg":"error occured while signin",
            "error":e
        })
        
    }

})

   export default userRoute;
