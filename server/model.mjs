
import mongoose from "mongoose";
const dataSchema = new mongoose.Schema({
    name: {type: String, required:true
},
age:{
    type: Number,
    required: true
}})


const userSchema = new mongoose.Schema({
    firstName:{type: String},
    lastName:{ type: String},
    photo:{type:String},
    signature:{type:String}, 
      nationality:{type: String},
      gender:{type: String},
      telephone:{type: Number},
      date:{type:Date},
      nin:{type: String},
      email:{type: String, } , 
      district:{type: String,},
      county:{type: String},
      subcounty:{type: String},
      parish:{type: String},
      village:{type: String},
      zone:{type: String},      

})



const newforeignerScheema = new mongoose.Schema({
    firstName:{type: String},  lastName:{type: String},    email:{type: String},   Nationality:{type: String},
    Gender: {type: String},   DOB:{type: String}, Contact:{type: Number}, Occupation:{type: String}, PassportNumber: {type: String},
    SpousefirstName:{type: String}, SpouselastName: {type: String}, Spouseoccuption:{type: String},
    spouseContact:{type: String},Photo:{type: String}, Signature:{type: String},Category:{type:String},NIN:{type:String},
    district:{type:String},county:{type:String},subcounty:{type:String},parish:{type:String},village:{type:String},
    zone:{type:String}, prevdistrict:{type:String},prevcounty:{type:String},prevsubcounty:{type:String},prevparish:{type:String},prevvillage:{type:String},
    prevzone:{type:String}, Landlordname:{type:String},Landlordcontact:{type: String}, Relatives:{type: []}, Landlordnin:{type:String}
    , admin:{type:String}
})

const usermodel = mongoose.model('userss', userSchema)

const newforeigner = mongoose.model('Foreigner', newforeignerScheema)
const newModel = mongoose.model('demo', dataSchema)

export { newModel, usermodel, newforeigner}