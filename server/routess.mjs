import { Router } from "express"

import { usermodel,newforeigner, newModel} from "./model.mjs"
const router = Router() 

const poste = router.post('/post', async(req,res)=>{
    const user = new usermodel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        nin: req.body.nin

    });
    await user.save()
        .then(userr=>res.send(userr))
        .catch(err=>res.send({error:'Unable to create',eror:err }))
   
})

router.put('/postlocation/:id', async(req,res)=>{
    const id = req.params.id
    const options ={new:true}
    const user = {
        district: req.body.district,
        county: req.body.county,
        parish: req.body.parish,
        subcounty: req.body.subcounty,
        village:req.body.village,
        zone: req.body.zone
    }
    await usermodel.findByIdAndUpdate(id, user, options)
    .then((user)=>res.send({Message:'Updated', data: user}))
    .catch((err)=>res.send({error:'Error occured', error:err}))
})

router.post('/addTenant', async(req,res)=>{
    
    const newperson = new newforeigner({
        firstName:req.body.firstName,  lastName: req.body.lastName,    email:req.body.email,   Nationality:req.body.Nationality,
        Gender: req.body.Gender,   DOB:req.body.DOB, Contact:req.body.Contact, Occupation:req.body.Occupation, PassportNumber: req.body.PassportNumber,
        SpousefirstName:req.body.SpousefirstName, SpouselastName: req.body.SpouselastName, Spouseoccuption:req.body.Spouseoccupation, NIN: req.body.NIN,
        spouseContact: req.body.spouseContact,Photo:req.body.Photo, Signature:req.body.Signature,Landlordname:req.body.Landlordname,Category:req.body.Category,
         Landlordnin:req.body.Landlordnin, Relatives: req.body.Relatives, Landlordcontact: req.body.Landlordcontact
         ,admin: req.body.adminemail, headerss: req.headers
            })
            await newperson.save()
            .then((ress)=>res.send(ress))
            .catch(err=>res.send({error:err}))

})

router.post('/addlandlord', async(req,res)=>{
    const newperson = new newforeigner({
        
        firstName:req.body.firstName,  lastName: req.body.lastName,    email:req.body.email,   Nationality:req.body.Nationality,
        Gender: req.body.Gender,   DOB:req.body.DOB, Contact:req.body.Contact, Occupation:req.body.Occupation, PassportNumber: req.body.PassportNumber,
        SpousefirstName:req.body.SpousefirstName, SpouselastName: req.body.SpouselastName, Spouseoccuption:req.body.Spouseoccupation, NIN: req.body.NIN,
        spouseContact: req.body.spouseContact,Photo:req.body.Photo, Signature:req.body.Signature,Landlordname:req.body.Landlordname,admin:req.body.adminemail,
         Landlordnin:req.body.Landlordnin, Relatives: req.body.Relatives, Landlordcontact: req.body.Landlordcontact, Category: req.body.Category
    
            })
            await newperson.save()
            .then(ress=>res.send({ress}))
            .catch(err=>res.send({erroe:err}))

})
//foregner API

router.post('/addforeigner', async(req,res)=>{
    const newperson = new newforeigner({
        
        admin:req.body.adminemail, firstName:req.body.firstName,  lastName: req.body.lastName,    email:req.body.email,   Nationality:req.body.Nationality,
        Gender: req.body.Gender,   DOB:req.body.DOB, Contact:req.body.Contact, Occupation:req.body.Occupation, PassportNumber: req.body.PassportNumber,
        SpousefirstName:req.body.SpousefirstName, SpouselastName: req.body.SpouselastName, Spouseoccuption:req.body.Spouseoccupation, NIN: req.body.NIN,
        spouseContact: req.body.spouseContact,Photo:req.body.Photo,Category:req.body.Category, Signature:req.body.Signature,Landlordname:req.body.Landlordname,
         Landlordnin:req.body.Landlordnin, Relatives: req.body.Relatives, Landlordcontact: req.body.Landlordcontact
    
            })
            await newperson.save()
            .then(result=>res.send({data:result}))
            .catch(err=>res.send({error:err}))

})

router.get('/getforeigner', async(req,res)=>{
    try{
        res.send(await newforeigner.find())
    }catch(err){
        res.send({Error: err.message})
    }
})
//Dependants api

router.post('/adddependant', async(req,res)=>{
    const newperson = new newforeigner({
        
        admin:req.body.adminemail,firstName:req.body.firstName,  lastName: req.body.lastName,    email:req.body.email,   Nationality:req.body.Nationality,
        Gender: req.body.Gender,   DOB:req.body.DOB, Contact:req.body.Contact, Occupation:req.body.Occupation, PassportNumber: req.body.PassportNumber,
        SpousefirstName:req.body.SpousefirstName, SpouselastName: req.body.SpouselastName, Spouseoccuption:req.body.Spouseoccupation, NIN: req.body.NIN,
        spouseContact: req.body.spouseContact,Photo:req.body.Photo, Signature:req.body.Signature,Landlordname:req.body.Landlordname,
         Landlordnin:req.body.Landlordnin, Relatives: req.body.Relatives, Landlordcontact: req.body.Landlordcontact, Category: req.body.Category,
    
            })
            await newperson.save()
            .then((ress)=>res.send({ress}))
            .catch(err=>res.send({error:err}))

})

router.get('/adddependant', async(req, res)=>{
    try{
    const getperson =await newforeigner.find()
    res.json(getperson)
}
    catch(err){
        res.send({Message: err.message})
    }
})


router.put('/userlocation/:id', async(req,res)=>{
    const id = req.params.id
    const options ={new:true}
    const user = {
        district: req.body.district,
        county: req.body.county,
        parish: req.body.parish,
        subcounty: req.body.subcounty,
        village:req.body.village,
        zone: req.body.zone,
        prevdistrict: req.body.prevdistrict,
        prevcounty: req.body.prevcounty,
        prevparish: req.body.prevparish,
        prevsubcounty: req.body.prevsubcounty,
        prevvillage:req.body.prevvillage,
        prevzone: req.body.prevzone
    }
    await newforeigner.findByIdAndUpdate(id, user, options)
    .then((user)=>res.send(user))
    .catch((err)=>res.send({error:'Error occured', error:err}))

})


router.post('/addworker', async(req,res)=>{
    const newperson = new newforeigner({
        firstName:req.body.firstName,  lastName: req.body.lastName,    email:req.body.email,   Nationality:req.body.Nationality,
        Gender: req.body.Gender,   DOB:req.body.DOB, Contact:req.body.Contact, Occupation:req.body.Occupation, PassportNumber: req.body.PassportNumber,
        SpousefirstName:req.body.SpousefirstName, SpouselastName: req.body.SpouselastName, Spouseoccuption:req.body.Spouseoccupation, NIN: req.body.NIN,
        spouseContact: req.body.spouseContact,Photo:req.body.photo, Signature:req.body.signature,Landlordname:req.body.Landlordname,
         Landlordnin:req.body.Landlordnin, Relatives: req.body.Relatives, Landlordcontact: req.body.Landlordcontact
    
            })
            await newperson.save()
            .then((ress)=>res.send(ress.data))
            .catch(err=>res.send({erroe:err}))

})




const getAll= router.get('/post', async(req,res)=>{
   
    try{
        const datas = await usermodel.find(); 
        res.send(datas);
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

const getone =  router.get('/getOne/:id', async(req,res)=>{
    try{
       const data = await usermodel.findById(req.params.id)
       res.json(data)
    }catch(err){
        res.status(500).json({"message": err.message})

    }

})

const update1 = router.patch('/update/:id', async(req,res)=>{
    try{
        const id = req.params.id;
        const updateddata = req.body;
        const options = {new:true}

        const result = await newModel.findByIdAndUpdate(id, updateddata, options)
        res.json(result) 

    }catch(err){
        res.status(400).json({
            message: err.message
        })

    }
})

const delet = router.delete('/delete/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const data = await newforeigner.findByIdAndDelete(id)
        res.json(`Document with name has been deleted`)

    }
    catch(err){
      res.send({
        message: err.message
      })
    }
    
})
 

export {delet, update1, getone, poste, getAll, router}