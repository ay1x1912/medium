import { Hono } from 'hono'
import userRoute from './Routes/userRoutes';
import blogRoute from './Routes/blogRoutes';
import { verify } from 'hono/jwt';
import { cors } from 'hono/cors';
const app = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        userId:string
    }
}>()
 //cors
 app.use(cors());
// middlewaare for auth 
app.use('/api/v1/blog/*',async(c,next)=>{
    
    try{
        //token excess
        const jwt= c.req.header("Authorization");
        console.log(jwt);
        
        if(!jwt){
            return c.json({
                'msg':"jwt token missing"
            })
        }
        const token=jwt.split(" ")[1];
        
        
        // verify
        const user=await verify(token,c.env.JWT_SECRET);
        
        
        if(!user.id){
            return c.json({
                "msg":"you are unthorized"
            })
        }
        c.set("userId",`${user.id}`)
    
        await  next();
    }catch{
        c.json({
            "msg":"error while authentication"
        })
    }
    

})
app.route('/api/v1/user',userRoute);
app.route('/api/v1/blog',blogRoute)

export default app
