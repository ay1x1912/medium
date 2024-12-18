import { Hono } from "hono";
import { verify } from "hono/jwt";
import { db } from "../db/PrismaClinet";
import z from 'zod'
import { CreatePost, UpdatePost } from "@ay1x/common-package";


const blogRoute=new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        userId:string
    }
}>();


blogRoute.post('/',async(c)=>{
    // axcess the author id
  const id =c.get("userId");
  try{
    //  axcess body
     const body =await c.req.json();
    //  validate the body
    const {success}=CreatePost.safeParse(body);
    if(!success){
       c.status(403);
       return c.json({
           "msg":"invalid inputs"
       })
    }


    // create a new post

    const prisma=db(c.env.DATABASE_URL);
    const post= await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:id,
            published:body?.published
        }
    })
 console.log(post);
 
    
    return c.json({
        "id":post.id,
        "msg":"post created successfully"
    })
  }catch(e){
    console.log(`error while creating post ${e}`);
    c.status(403)
    return c.json({
        "msg":"error while creating post",
        "error":e
    })
    
  }

   
})





blogRoute.put('/:id',async(c)=>{
    // axcess the author id 
  const id=c.get('userId');
//   axcess the blog id 
  const postId=c.req.param("id")
  const postIdInNum=parseInt(postId);
  try{
    // body
    const body=await c.req.json();
    const {success}=UpdatePost.safeParse(body);
     if(!success){
        c.status(403);
        return c.json({
            "msg":"invalid inputs"
        })
     }
    
    //  db update
    const prisma=db(c.env.DATABASE_URL);
      const updatedPost= await prisma.post.update({
        where:{
            id:postIdInNum
        },data:{
            title:body?.title,
            content:body?.content,
            published:body?.published
        }
      })
      
      
        return c.json({
            "msg":"user updated successfully"
        })
      
  }catch(e){
    console.log(`erroe while updating the post${e}`);
    c.status(403)
   return c.json({
        "msg":"error while upatin post "
    })
    
  }

})



blogRoute.get("/bulk",async(c)=>{

    const prisma=db(c.env.DATABASE_URL);
    try{
        const bulk= await prisma.post.findMany({
            where:{
                published:true
            },
            select:{
                content:true,
                title:true,
                id:true,
                createdAt:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
            
        })
        return c.json({
            bulk
        })

    }catch(e){
        console.log(`error while getting blogs ${e}`);
        c.status(403)
        return c.json({
            "msg":"error while getting all the blogs"
        })
        
    }
    

})
blogRoute.get('/:id',async(c)=>{
    // axcess the blog id
    const id =c.req.param("id");

    const prisma=db(c.env.DATABASE_URL);
    try{
        // db call 
        const post =await prisma.post.findFirst({
            where:{
                id:parseInt(id)
            },select:{
                id:true, 
                content:true,
                title:true,
                createdAt:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        })
        return c.json({
            post
        })
    }catch(e){
        console.log(`error while getting the post with id${id} and error is ${e}`);
        c.status(403)
        return c.json({
            "msg":"errow while getting the post"
        })
        
    }
    
    
    
    return c.text("get by id ")
})
export default  blogRoute