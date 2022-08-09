 import admin from './firebaseconfig.mjs'
 
 class MiddleWare{
    async decodeToken (req,res,next){
        
    
        const token = req.headers.authorizaion.split('')[1];
        console.log(token)
        try {
            const decodeValue = admin.auth().verifyIdToken(token);
            if(decodeValue){
               return next()
            }
            return res.json({message:'Un aithorize'})

        }
        catch(e){
            return res.json({Message:'Internal server error'})
        }
    
    }

 }

export default new MiddleWare()