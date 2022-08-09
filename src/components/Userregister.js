import React, { useRef } from 'react'
import './First.css'
import { useFormik} from 'formik'
import * as Yup from 'yup'
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

import { auth, storage, db } from '../config';
import {Link, Navigate, useNavigate} from 'react-router-dom'
import logo from '../imges/logo.png'
import { Fragment, useState , useEffect} from 'react'
import { Listbox ,Transition , Dialog} from '@headlessui/react'
import { Dashboard } from './Dashboard';
import { toast } from 'react-toastify';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import {v4} from 'uuid'
import {ref, getDownloadURL,  uploadBytes } from "firebase/storage";
import axios from 'axios';
import { async } from '@firebase/util';

let ids = '', arr=[]

const Mainregisters = ()=>{
     
    return (
      <div className=''>
              
      
      </div>      
      
    )
    
  }

const Tenant=()=>{
const navigate = useNavigate()
  const categories = [
    { name: 'Tenant' },
    { name: 'Landlord' },
    { name: 'Dependant' },
    { name: 'Worker' },
    {name:'Foreigner'}
  ] 


  const [selected, setSelected] = useState(categories[0])


  const [photo, setPhoto] = useState('')
  const [sign, setSign] = useState('')
  
const handleSubmit =(e)=>{
  e.preventDefault();
}


const formik =useFormik( {
  initialValues:{
    firstName: '', lastName:'',email:'', nationality:'', gender:'',
    dateofbirth:'', contact:'', nin:'', occupation:'', relative:'', spousefirstName:'', 
    spouselastName:'',spouseContact:'', spouseOccupation:'',

  },
  validationSchema: Yup.object({
    
    firstName:Yup.string('Name must be a word').required('required field'),
    lastName:Yup.string('Name must be a word').required('required field'),
    email:Yup.string('Enter valid emil').required('Email required').email('Enter a valid email'),
    nationality:Yup.string('Country must be a word').required('required field'),
    gender:Yup.string('Gender must be a word').required('required field'),
    dateofbirth:Yup.date('Enter a valid date of birth'),
    contact:Yup.number('phone number must be a number').required('required filed'),
    nin:Yup.mixed('enter a valid NIN number').required('Required field'),
    occupation:Yup.string('Occupation must be a word').required('required field'),
    relative:Yup.string('').required('required ffield'),
    spousefirstName:Yup.string('Name must be a word').required('required field'),
    spouselastName:Yup.string('Name must be a word').required('required field'),
    spouseContact:Yup.number('phone number must be a number').required('required filed'),
    spouseOccupation:Yup.string('Occupation must be a word').required('required field'),
  
  }),
  onSubmit:(values)=>{
    console.log(values)
    try{
      const addTennant=()=>{
      const addTenant ={
      
          adminemail: localStorage.getItem('useremail'),firstName: values.firstName,  lastName:values.lastName,    email:values.email,   Nationality: values.nationality,
          Gender: values.gender,   DOB:values.dateofbirth, Contact:values.contact, Occupation:values.occupation, PassportNumber: values.passportNumber,
          SpousefirstName:values.spousefirstName, SpouselastName: values.spouselastName,NIN: values.nin, Spouseoccuption: values.spouseOccupation,
          spouseContact: values.spouseContact,Photo: photo, Signature:sign,Category: 'Tenant',Relatives: inputs,
          Landloardnin: filteredlandlord[0].NIN, Landlordname:filteredlandlord[0].firstName, Landlordcontact:filteredlandlord[0].Contact,
            
      }
      if(localStorage.getItem('useremail')){
      axios.post(`http://localhost:5000/api/addTenant`,addTenant, {headers:{
        Authorization: 'Bearer ' + localStorage.getItem('ids')
      }}) 
      .then((result)=>{
        console.log(result)
        ids='' 
        ids = result.data._id
        navigate('/identitycard')
      }
        )
      .catch(err=>console.log(err))
    }}
    
    console.log(ids)
     //upload a profile pic to the database
      const uploadData=()=>{
        const signatureRef  = ref(storage, `images/${signaturedatabase + v4()}`)
      uploadBytes(signatureRef, signaturedatabase).then((image)=>getDownloadURL(image.ref).then(url=>setSign(url)))
      
       const imageRef = ref(storage, `images/${profile + v4()}`)
       uploadBytes(imageRef, profiledatabase).then((image)=>getDownloadURL(image.ref).then((url)=>{setPhoto(url)}))

       if(sign && photo){
        addTennant()
       }
      }
      //upload a foreigner signature to the database
     uploadData()
      
     

    }catch(e){
      alert('Error adding document', e)
    }

    }



})
/**Implement search for the landlord */

const [landlords, setLandlords] = useState([]);
const [search, setSearch] = useState("");
const [filteredlandlord, setFilteredlandlord] = useState([]);
const [mylandlord, setMylandlord] = useState([])
useEffect(()=>{
  axios.get('http://localhost:5000/api/getforeigner', {headers:{
    Authorization:'Bearer ' + localStorage.getItem('ids')
  }})
  .then(result=>setLandlords(result.data.filter(resp=>resp.admin === localStorage.getItem('useremail'))))
  .catch(err=>console.log(err)) 
},[])
console.log(landlords)
console.log(mylandlord)
useEffect(()=>{
 
  setFilteredlandlord(mylandlord.filter((landlord)=> 
  String(landlord.firstName).toLowerCase().includes(String(search).toLowerCase()) ||
   String(landlord.NIN).toLowerCase().includes(String(search).toLowerCase())))
 
},[search, mylandlord]);

useEffect(()=>{
  setMylandlord(landlords.filter((landlord)=> 
  String(landlord.Category).toLowerCase() === 'landlord'
)) 
},[landlords])
const [profile, setProfile] = useState(null)
const [profiledatabase, setProfiledatabase] = useState(null)
const handleChange=(event)=>{
   setProfile(URL.createObjectURL( event.target.files[0]))
   setProfiledatabase(event.target.files[0])
    }

const [signature, setSignature] = useState(null)
const [signaturedatabase, setSignturedatabase] = useState(null)
const handleSignChange=(event)=>{
  setSignature(URL.createObjectURL(event.target.files[0]))
  setSignturedatabase(event.target.files[0])
}

 let[isopen, setIsopen] = useState(true)
function closeModal(){
  setIsopen(false)
}
function openModal(){
  setIsopen(true)
}
//Inputs to the dependent input fields are captured and processed here
const [inputs, setInputs] = useState({})
const handleInputChange=(event)=>{
  const name = event.target.name;
  const value = event.target.value;
  setInputs(values=>({...values, [name]:value}))

}
const handleSubmits=(event)=>{
 event.preventDefault();
 console.log(inputs)
}
return(
  <div className=''>
    <Dashboard/>
    
    
    <h1 className='Dashboardoverview' style={{top: '152px'}}>Resident</h1>
      <p className='Dashboardoverviewdesc'>Fill all the required fields</p>
      <p className='Dashboardoverviewdesc' style={{left:'814px', top:'202px', position:'absolute'}}>category</p>
     
    <div className='regformframe'>
    <div className=" top-16 w-72 " style={{top:'-55px', left:'452px', position:'absolute'}}>
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-red-200 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                
                <Link to='/tenant' className='bg-blue-200'>

                  
                <Listbox.Option  className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900' }` } value={categories[0].name}>                   
                          {categories[0].name} 
                    
                </Listbox.Option>
                </Link>
                <Link to='/landlord'>
                <Listbox.Option  className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900' }` } value={categories[1].name}>                   
                          {categories[1].name} 
                          {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {selected.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                    
                </Listbox.Option>
                </Link>
                <Link to='/dependant'>
                <Listbox.Option  className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900' }` } value={categories[2].name}>                   
                          {categories[2].name} 
                    
                </Listbox.Option>
                </Link>
                <Link to='/worker'>
                <Listbox.Option  className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900' }` } value={categories[3].name}>                   
                          {categories[3].name} 
                    
                </Listbox.Option>
                </Link>
                <Link to='/foreigner'>
                <Listbox.Option  className={({ active }) => `relative bg-red-200 cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900' }` } value={categories[4].name}>                   
                          {categories[4].name} 
                    
                </Listbox.Option>
                </Link>
                 
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
       
      </div>
   
      
      
    <form onSubmit={formik.handleSubmit}>
     
     <label className='inputfieldlabel' style={{left:'23.02px', top:'35px'}}>First Name</label>
       <input type='text' className='inputfield pl-2' style={{left:'23.02px', top:'60.16px' , outline:'none'}} 
       name='firstName' {...formik.getFieldProps('firstName')} placeholder='first name'/>
        {formik.touched.firstName && formik.errors.firstName?<p  className='inputfieldlabel text-green-400' 
        style={{left:'23.03px', top:'100px', color:'red'}}>{formik.errors.firstName}</p>:''}
   
   
       <label className='inputfieldlabel' style={{left:'245.18px', top:'35px'}}>Last Name</label>
       <input type='text' className='inputfield pl-2' style={{left:'245.18px', top:'60.16px' , outline:'none'}}
       name='lastName' value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Lastname'/>
         {formik.touched.firstName && formik.errors.lastName?<p  className='inputfieldlabel text-green-400' 
        style={{left:'245.18px', top:'100px', color:'red'}}>{formik.errors.lastName}</p>:''}
   
       
       <label className='inputfieldlabel' style={{left:'23.02px', top:'110px'}}>Email</label>
       <input type='email'  className='inputfield pl-2' style={{left:'23.02px', top:'139px' ,width:'433px', 
       outline:'none'}} value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name='email' placeholder='emal'/>
         {formik.touched.email && formik.errors.email?<p  className='inputfieldlabel text-green-400' 
        style={{left:'23.18px', top:'179px', color:'red'}}>{formik.errors.email}</p>:''}
   
           
       <label className='inputfieldlabel' style={{left:'22px', top:'198px '}}>Nationality</label>
       <input type='text' className='inputfield pl-2' style={{left:'23px', top:'221.59px', width:'123.71px' , 
        outline:'none'}} value={formik.values.nationality} onChange={formik.handleChange} onBlur={formik.handleBlur} name='nationality' placeholder='nationality'/>
         {formik.touched.nationality && formik.errors.nationality?<p  className='inputfieldlabel text-green-400' 
        style={{left:'23.18px', top:'261.59px', color:'red'}}>{formik.errors.nationality}</p>:''}
   

       <label className='inputfieldlabel' style={{left:'201.71px', top:'198px'}}>Gender</label>
       <input className='inputfield pl-2' name='gender' style={{left:'163.08px', top:'221.59px' ,width:'123.71px', outline:'none'}}
       onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.gender} placeholder='gender'/>
         {formik.touched.gender && formik.errors.gender?<p  className='inputfieldlabel text-green-400' 
        style={{left:'163.08px', top:'261.59px', color:'red'}}>{formik.errors.gender}</p>:''}
       
   
       <label className='inputfieldlabel' style={{left:'340.42px', top:'198px'}}>Date of birth</label>
       <input type='date' className='inputfield pl-2' style={{left:'304.16px', top:'221.59px' , width:'155.59px', outline:'none'}} 
       onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.dateofbirth} name='dateofbirth' placeholder='Datee of birth'/>
          {formik.touched.dateofbirth && formik.errors.dateofbirth?<p  className='inputfieldlabel text-green-400' 
        style={{left:'304.18px', top:'261.59px', color:'red'}}>{formik.errors.dateofbirth}</p>:''}
   

   <label className='inputfieldlabel' style={{left:'23.02px', top:'277px'}}>Contact</label>
       <input type='text' className='inputfield pl-2' style={{left:'23.02px', top:'302.16px' , outline:'none'}}
       onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.contact} name='contact' placeholder='contact'/>
         {formik.touched.contact && formik.errors.contact?<p  className='inputfieldlabel text-green-400' 
        style={{left:'23.08px', top:'342.16px', color:'red'}}>{formik.errors.contact}</p>:''}
   
   
       <label className='inputfieldlabel' style={{left:'245.18px', top:'277px'}}>NIN</label>
       <input type='text' className='inputfield pl-2' style={{left:'245.18px', top:'302.16px' , outline:'none'}}
       onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nin} name='nin' placeholder='NIN'/>
         {formik.touched.nin && formik.errors.nin?<p  className='inputfieldlabel text-green-400' 
        style={{left:'245.18px', top:'342.16px', color:'red'}}>{formik.errors.nin}</p>:''}
   

       <label className='inputfieldlabel' style={{left:'23.02px', top:'361px'}}>Occupation</label>
       <input type='text' className='inputfield pl-2' style={{left:'23.02px', top:'390px' ,width:'440px', outline:'none'}}
       onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.occupation} name='occupation' placeholder='occupation'/>
         {formik.touched.occupation && formik.errors.occupation?<p  className='inputfieldlabel text-green-400' 
        style={{left:'23.18px', top:'430px', color:'red'}}>{formik.errors.occupation}</p>:''}
   

      <label className='remember' style={{left:'53.27px', top:'447px'}}>Spouse  (Husband or wife)</label>
      <input type='radio' name='relative' className='check' style={{left:'24.76px', top:'447px'}} 
      onChange={(formik.handleChange)} onBlur={formik.handleBlur} value='spouse'/>

      
      <label className='remember' style={{left:'275px', top:'447px'}}>Next Of Kin</label>
       <input type='radio' name='relative' className='check' style={{left:'248.82px', top:'447px'}}
       onChange={formik.handleChange} onBlur={formik.handleBlur} value='next of kin'/>


       <label className='inputfieldlabel' style={{left:'23.02px', top:'488px'}}>First Name</label>
       <input type='text' className='inputfield pl-2' style={{left:'23.02px', top:'513.16px' , outline:'none'}} 
       onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.spousefirstName} name='spousefirstName' placeholder='first name'/>
         {formik.touched.spousefirstName && formik.errors.spousefirstName?<p  className='inputfieldlabel text-green-400' 
        style={{left:'23.18px', top:'553.16px', color:'red'}}>{formik.errors.spousefirstName}</p>:''}
      
   
       <label className='inputfieldlabel' style={{left:'245.18px', top:'488px'}}>Last Name</label>
       <input type='text' className='inputfield pl-2' style={{left:'245.18px', top:'513.16px' , outline:'none'}} 
       onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.spouselastName} name='spouselastName' placeholder='Lastname'/>
         {formik.touched.spouselastName && formik.errors.spouselastName?<p  className='inputfieldlabel text-green-400' 
        style={{left:'245.18px', top:'553.16px', color:'red'}}>{formik.errors.spouselastName}</p>:''}
   

       <label className='inputfieldlabel' style={{left:'23.02px', top:'580px'}}>Contact</label>
       <input type='text' className='inputfield pl-2' style={{left:'23.02px', top:'605.16px' , outline:'none'}}
       onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.spouseContact} name='spouseContact' placeholder='contact'/>
          {formik.touched.spouseContact && formik.errors.spouseContact?<p  className='inputfieldlabel text-green-400' 
        style={{left:'23.18px', top:'645px', color:'red'}}>{formik.errors.spouseContact}</p>:''}

       
       <label className='inputfieldlabel' style={{left:'245.18px', top:'580px'}}>Occupation</label>
       <input type='text' value={formik.values.spouseOccupation} onChange={formik.handleChange}
        onBlur={formik.handleBlur} className='inputfield pl-2' name='spouseOccupation'
        style={{left:'245.18px', top:'605.16px' , outline:'none'}} placeholder='occupation'/>
          {formik.touched.spouseOccupation && formik.errors.spouseOccupation?<p  className='inputfieldlabel text-green-400' 
        style={{left:'245.18px', top:'645px', color:'red'}}>{formik.errors.spouseOccupation}</p>:''}
   
   
       <label className='inputfieldlabel' style={{left:'530px', top:'43px'}}>Add photo</label>
       <input type='file' className='  text-white'  style={{left:'530px', top:'223px',position:'absolute'}}
       onChange={handleChange}  value=''/>
         {formik.touched.firstName && formik.errors.lastName?<p  className='inputfieldlabel text-green-400' 
        style={{left:'245.18px', top:'100px', color:'red'}}>{formik.errors.lastName}</p>:''}
   
     
       <img src={profile} className='photo' style={{left:'522px'}} alt='profile pic'/> 


       <label className='inputfieldlabel' style={{left:'847px', top:'43px'}}>Add Signature</label>
       <input type='file' className='  text-white'  style={{left:'838px', top:'223px',position:'absolute'}}
       onChange={handleSignChange} onBlur={formik.handleBlur} value=''/>
       <img className='photo' src={signature} style={{left:'840px', position:'absolute'}} alt='signature'/>
   
       
       <label className='inputfieldlabel' style={{left:'520px', top:'278px'}}>Dependants</label>
       

       <button type='button' onClick={openModal} className='inputfield pl-2 font-serif' style={{left:'520px', top:'303px' ,width:'433px', outline:'none'}}
        >Click To Add Dependants</button>

        
       <label className='text-2xl font-serif' style={{left:'542.27px', top:'356px', position:'absolute'}}>Landlord</label>
       
       <input type='checkbox' className='check' style={{left:'764px', top:'356px'}} placeholder='search landlord'/>

       {filteredlandlord.length >0 && search !==null?<div className='' style={{position:'absolute'}}>
       <label className='inputfieldlabel' style={{left:'523px', top:'406px'}}>First Name</label>,
         <input type='text' value={filteredlandlord[0].firstName} className='inputfield pl-2' name=''
         style={{left:'523.18px', top:'431.16px' , outline:'none'}} placeholder='Lastname'/>,
     
             
               
         <label className='inputfieldlabel' style={{left:'743.18px', top:'406px'}}>Last Name</label>,
         <input type='text' value={filteredlandlord[0].lastName} className='inputfield pl-2' 
         style={{left:'743.18px', top:'431.16px' , outline:'none'}} placeholder='Lastname'/>,
     
             
           <label className='inputfieldlabel' style={{left:'523.02px', top:'485px'}}>Occupation</label>,
           <input type='text' value={filteredlandlord[0].Occupation} className='inputfield pl-2'
            style={{left:'523.02px', top:'510px' , outline:'none'}} placeholder='occupation'/>,
                   
         <label className='inputfieldlabel' style={{left:'743.18px', top:'485px'}}>Contact</label>,
         <input type='text'  value={filteredlandlord[0].Contact} className='inputfield pl-2' 
         style={{left:'745.18px', top:'510.16px' , outline:'none'}} placeholder='contat'/> </div>:
         <label className='inputfieldlabel' style={{top:'406px', left:'743.13px', position:'absolute' }}>Landlord doesnot exist</label>
     
         
       }
        
        
       <button className='submitbtn  text-white' type='submit' style={{left:'530px', top:'610px'}}>next</button>      
      </form>
      <form onSubmit={handleSubmit}>
      <input type='text' className='inputfield pl-2' style={{left:'743.18px', top:'356px'}}
       onChange={(e) => setSearch(e.target.value)} placeholder='search landlord by NIN'/>


      </form>
      <button  className='regdivheader1btn text-center pt-2' style={{left:'810px', top:'610px'}}>canel</button>   
   
    
      <Transition appear show={isopen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add dependants
                  </Dialog.Title>
                  <form onSubmit={handleSubmits}>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">First Name</p>  
                    <input placeholder='First Name' className='py-1 rounded w-full bg-slate-200 pl-3' style={{outline:'none'}}
                    name='firstName' value={inputs.firstName || ''}  onChange={handleInputChange}/>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Last Name</p>  
                    <input placeholder='Last Name' className='py-1 rounded w-full bg-slate-200 pl-3' style={{outline:'none'}} 
                    type='text' name='lastName' value={inputs.lastName || ''} onChange={handleInputChange} />
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Age</p>  
                    <input placeholder='Age' className='py-1 rounded w-full bg-slate-200 pl-3' style={{outline:'none'}} 
                    type='number' value={inputs.age || ''} name='age' onChange={handleInputChange} />
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Gender</p>  
                    <input placeholder='Gender' className='py-1 rounded w-full bg-slate-200 pl-3' style={{outline:'none'}}
                    type='text' value={inputs.gender || ''} name='gender' onChange={handleInputChange} />
                  </div>
                  <div className='mt-2'>
                    <button type='submit' onClick={closeModal} className='p-2 bg-green-600 text-slate-400 rounded font-serif' >Submit</button>

                  </div>
                  </form>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                    Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

    </div>
   
    </div>
)

}

const Foreigner=()=>{
  const categories = [
    { name: 'Tenant' },
    { name: 'Landlord' },
    { name: 'Dependant' },
    { name: 'Worker' },
    {name:'Foreigner'}
  ] 


  const [selected, setSelected] = useState(categories[4])

  const navigate = useNavigate()
    const [photo, setPhoto] = useState('')
    const [sign, setSign] = useState('')
    console.log(photo)
  const handleSubmit =(e)=>{
    e.preventDefault();
  }

 
  const useformik =useFormik( {
    initialValues:{
      firstName:'',  lastName:'', email:'',      nationality:'', gender:'',dateofbirth:'',contact:'', passportNumber:'', occupation:'', photo:'',
      signature:'',   relative:'',  spousefirstName:'', spouselastName:'',spouseContact:'',spouseOccupation:'',landlordname: '',
      Landlordnin:'', landlordlastName:'', landlordoccupation:'', Landlordcontact:'',  Photo:''
    },
    onSubmit:(values)=>{
      console.log(values)
      console.log(filteredlandlord[0])
        const addForeigner =() =>{
          const person={
            adminemail:localStorage.getItem('useremail'), firstName: values.firstName,  lastName:values.lastName,    email:values.email,   Nationality: values.nationality,
            Gender: values.gender,   DOB:values.dateofbirth, Contact:values.contact, Occupation:values.occupation, PassportNumber: values.passportNumber,
            Spousename:values.spousefirstName, SpouselastName: values.spouselastName, Spouseoccuption: values.spouseOccupation,
            spouseContact: values.spouseContact,Photo: photo, Signature:sign,Relatives:relatives,Category:'foreigner',
            Landloardnin: filteredlandlord[0].NIN, Landlordname:filteredlandlord[0].firstName, Landlordcontact:filteredlandlord[0].Contact
  
          }
          axios.post(`http://localhost:5000/api/addforeigner`,person, {
            headers:{Authorization: "Bearer " + localStorage.getItem('ids')}
          })
          .then((result)=>{console.log(result.data)
            ids=result.data._id 
            navigate('/identitycard')  
            console.log(ids)       
          })
          .catch(err=>console.log(err))
        }
    
        
       //upload a profile pic to the database
        const uploadData=()=>{
         const imageRef = ref(storage, `images/${profile + v4()}`)
         uploadBytes(imageRef, profiledatabase).then((image)=>getDownloadURL(image.ref)
         .then((url)=>{setPhoto(url)
        console.log(url)}))
         const signatureRef  = ref(storage, `images/${signaturedatabase + v4()}`)
         uploadBytes(signatureRef, signaturedatabase).then((image)=>getDownloadURL(image.ref)
         .then(url=>{setSign(url)
           console.log(url)}))
         
         if(sign && photo ){
        addForeigner()
        }else{
          alert('Add Images first' )
        } 
        }
        
        if(window.navigator.onLine){
          uploadData()
        
        }
        else{
          alert('No internet connection')
        }
            
      },


    validationSchema: Yup.object({
      
      firstName:Yup.string('Name must be a word').required('required field'),
      lastName:Yup.string('Name must be a word').required('required field'),
      email:Yup.string('Enter valid emil').required('Email required').email('Enter a valid email'),
      nationality:Yup.string('Country must be a word').required('required field'),
      gender:Yup.string('Gender must be a word').required('required field'),
      dateofbirth:Yup.date('Enter a valid date of birth'),
      contact:Yup.number('phone number must be a number').required('required filed'),
      passportNumber:Yup.string('enter a valid NIN number').required('Required field'),
      occupation:Yup.string('Occupation must be a word').required('required field'),
      spousefirstName:Yup.string('Name must be a word').required('required field'),
      spouselastName:Yup.string('Name must be a word').required('required field'),
      spouseContact:Yup.number('phone number must be a number').required('required filed'),
      spouseOccupation:Yup.string('Occupation must be a word').required('required field'),
      
    })
  })
  /**Implement search for the landlord */

  const [landlords, setLandlords] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredlandlord, setFilteredlandlord] = useState([]);
  useEffect(()=>{
    const fetchData = async()=>{
      axios.get('http://localhost:5000/api/getforeigner')
      .then((result)=>{setLandlords(result.data.filter(resp=>resp.admin === localStorage.getItem('useremail')))
      console.log(result.data)}
      )
      .catch(err=>console.log(err))

     setLandlords()
   }
    fetchData()
    return ()=>{
      setLandlords([])
    };

  }, []);
 
  useEffect(()=>{
    if(landlords){
      setFilteredlandlord(landlords.filter((landlord)=> 
      String(landlord.firstName).toLowerCase().includes(String(search).toLowerCase()) ||
       String(landlord.NIN).toLowerCase().includes(String(search).toLowerCase())))
     
    }
   
  },[search,landlords]);
  const [profile, setProfile] = useState(null)
  const [profiledatabase, setProfiledatabase] = useState(null)
  const handleChange=(event)=>{
     setProfile(URL.createObjectURL( event.target.files[0]))
     setProfiledatabase(event.target.files[0])
      }

  const [signature, setSignature] = useState(null)
  const [signaturedatabase, setSignturedatabase] = useState(null)
  const handleSignChange=(event)=>{
    setSignature(URL.createObjectURL(event.target.files[0]))
    setSignturedatabase(event.target.files[0])
  }

   let[isopen, setIsopen] = useState(true)
  function closeModal(){
    setIsopen(false)
  }
  function openModal(){
    setIsopen(true)
  }
  //Inputs to the dependent input fields are captured and processed here
  const [inputs, setInputs] = useState({})
  const handleInputChange=(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values=>({...values, [name]:value}))

  }
  let relatives= []

  
  const handleSubmits=(event)=>{
   event.preventDefault();
   alert(inputs)
   relatives.push(inputs) 
   console.log(relatives)
  }


  return(
    <div className=''>
      <Dashboard/>
      
      <h1 className='Dashboardoverview' style={{top: '152px'}}>Resident</h1>
        <p className='Dashboardoverviewdesc'>Fill all the required fields</p>
        <p className='Dashboardoverviewdesc' style={{left:'814px', top:'202px', position:'absolute'}}>category</p>
       
      <div className='regformframe'>
      <div className=" top-16 w-72 " style={{top:'-55px', left:'452px', position:'absolute'}}>
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-red-200 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                
                <Link to='/tenant' className='bg-blue-200'>

                  
                <Listbox.Option  className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900' }` } value={categories[0].name}>                   
                          {categories[0].name} 
                    
                </Listbox.Option>
                </Link>
                <Link to='/landlord'>
                <Listbox.Option  className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900' }` } value={categories[1].name}>                   
                          {categories[1].name} 
                          {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {selected.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                    
                </Listbox.Option>
                </Link>
                <Link to='/dependant'>
                <Listbox.Option  className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900' }` } value={categories[2].name}>                   
                          {categories[2].name} 
                    
                </Listbox.Option>
                </Link>
                <Link to='/worker'>
                <Listbox.Option  className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900' }` } value={categories[3].name}>                   
                          {categories[3].name} 
                    
                </Listbox.Option>
                </Link>
                <Link to='/foreigner'>
                <Listbox.Option  className={({ active }) => `relative bg-red-200 cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900' }` } value={categories[4].name}>                   
                          {categories[4].name} 
                    
                </Listbox.Option>
                </Link>
                 
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
       
      </div>
      <form onSubmit={useformik.handleSubmit}>       
       <label className='inputfieldlabel' style={{left:'23.02px', top:'35px'}}>First Name</label>
         <input type='text' className='inputfield pl-2' style={{left:'23.02px', top:'60.16px' , outline:'none'}} 
         name='firstName' value={useformik.values.firstName} onChange={useformik.handleChange} onBlur={useformik.handleBlur} placeholder='first name'/>
          {useformik.touched.firstName && useformik.errors.firstName?<p  className='inputfieldlabel text-green-400' 
          style={{left:'23.03px', top:'100px', color:'red'}}>{useformik.errors.firstName}</p>:''}
     
     
         <label className='inputfieldlabel' style={{left:'245.18px', top:'35px'}}>Last Name</label>
         <input type='text' className='inputfield pl-2' style={{left:'245.18px', top:'60.16px' , outline:'none'}}
         name='lastName' value={useformik.values.lastName} onChange={useformik.handleChange} onBlur={useformik.handleBlur} placeholder='Lastname'/>
           {useformik.touched.firstName && useformik.errors.lastName?<p  className='inputfieldlabel text-green-400' 
          style={{left:'245.18px', top:'100px', color:'red'}}>{useformik.errors.lastName}</p>:''}
     
         
         <label className='inputfieldlabel' style={{left:'23.02px', top:'110px'}}>Email</label>
         <input type='email'  className='inputfield pl-2' style={{left:'23.02px', top:'139px' ,width:'433px', 
         outline:'none'}} value={useformik.values.email} onChange={useformik.handleChange} onBlur={useformik.handleBlur} name='email' placeholder='emal'/>
           {useformik.touched.email && useformik.errors.email?<p  className='inputfieldlabel text-green-400' 
          style={{left:'23.18px', top:'179px', color:'red'}}>{useformik.errors.email}</p>:''}
     
             
         <label className='inputfieldlabel' style={{left:'22px', top:'198px '}}>Nationality</label>
         <input type='text' className='inputfield pl-2' style={{left:'23px', top:'221.59px', width:'123.71px' , 
          outline:'none'}} value={useformik.values.nationality} onChange={useformik.handleChange} onBlur={useformik.handleBlur} name='nationality' placeholder='nationality'/>
           {useformik.touched.nationality && useformik.errors.nationality?<p  className='inputfieldlabel text-green-400' 
          style={{left:'23.18px', top:'261.59px', color:'red'}}>{useformik.errors.nationality}</p>:''}
     
 
         <label className='inputfieldlabel' style={{left:'201.71px', top:'198px'}}>Gender</label>
         <input className='inputfield pl-2' name='gender' style={{left:'163.08px', top:'221.59px' ,width:'123.71px', outline:'none'}}
         onChange={useformik.handleChange} onBlur={useformik.handleBlur} value={useformik.values.gender} placeholder='gender'/>
           {useformik.touched.gender && useformik.errors.gender?<p  className='inputfieldlabel text-green-400' 
          style={{left:'163.08px', top:'261.59px', color:'red'}}>{useformik.errors.gender}</p>:''}
         
     
         <label className='inputfieldlabel' style={{left:'340.42px', top:'198px'}}>Date of birth</label>
         <input type='date' className='inputfield pl-2' style={{left:'304.16px', top:'221.59px' , width:'155.59px', outline:'none'}} 
         onChange={useformik.handleChange} onBlur={useformik.handleBlur} value={useformik.values.dateofbirth} name='dateofbirth' placeholder='Datee of birth'/>
            {useformik.touched.dateofbirth && useformik.errors.dateofbirth?<p  className='inputfieldlabel text-green-400' 
          style={{left:'304.18px', top:'261.59px', color:'red'}}>{useformik.errors.dateofbirth}</p>:''}
     
 
     <label className='inputfieldlabel' style={{left:'23.02px', top:'277px'}}>Contact</label>
         <input type='text' className='inputfield pl-2' style={{left:'23.02px', top:'302.16px' , outline:'none'}}
         onChange={useformik.handleChange} onBlur={useformik.handleBlur} value={useformik.values.contact} name='contact' placeholder='contact'/>
           {useformik.touched.contact && useformik.errors.contact?<p  className='inputfieldlabel text-green-400' 
          style={{left:'23.08px', top:'342.16px', color:'red'}}>{useformik.errors.contact}</p>:''}
     
     
         <label className='inputfieldlabel' style={{left:'245.18px', top:'277px', width:'100px'}}>Passport Number</label>
         <input type='text' className='inputfield pl-2' style={{left:'245.18px', top:'302.16px' , outline:'none'}}
         onChange={useformik.handleChange} onBlur={useformik.handleBlur} value={useformik.values.passportNumber} name='passportNumber' placeholder='Passport number'/>
           {useformik.touched.passportNumber && useformik.errors.passportNumber?<p  className='inputfieldlabel text-green-400' 
          style={{left:'245.18px', top:'342.16px', color:'red'}}>{useformik.errors.passportNumber}</p>:''}
     
 
         <label className='inputfieldlabel' style={{left:'23.02px', top:'361px'}}>Occupation</label>
         <input type='text' className='inputfield pl-2' style={{left:'23.02px', top:'390px' ,width:'440px', outline:'none'}}
         onChange={useformik.handleChange} onBlur={useformik.handleBlur} value={useformik.values.occupation} name='occupation' placeholder='occupation'/>
           {useformik.touched.occupation && useformik.errors.occupation?<p  className='inputfieldlabel text-green-400' 
          style={{left:'23.18px', top:'430px', color:'red'}}>{useformik.errors.occupation}</p>:''}
     
 
        <label className='remember' style={{left:'53.27px', top:'447px'}}>Spouse  (Husband or wife)</label>
        <input type='radio' name='relative' className='check' style={{left:'24.76px', top:'447px'}} 
        onChange={(useformik.handleChange)} onBlur={useformik.handleBlur} value='spouse'/>
 
        
        <label className='remember' style={{left:'275px', top:'447px'}}>Next Of Kin</label>
         <input type='radio' name='relative' className='check' style={{left:'248.82px', top:'447px'}}
         onChange={useformik.handleChange} onBlur={useformik.handleBlur} value='next of kin'/>
 
 
         <label className='inputfieldlabel' style={{left:'23.02px', top:'488px'}}>First Name</label>
         <input type='text' className='inputfield pl-2' style={{left:'23.02px', top:'513.16px' , outline:'none'}} 
         onChange={useformik.handleChange} onBlur={useformik.handleBlur} value={useformik.values.spousefirstName} name='spousefirstName' placeholder='first name'/>
           {useformik.touched.spousefirstName && useformik.errors.spousefirstName?<p  className='inputfieldlabel text-green-400' 
          style={{left:'23.18px', top:'553.16px', color:'red'}}>{useformik.errors.spousefirstName}</p>:''}
        
     
         <label className='inputfieldlabel' style={{left:'245.18px', top:'488px'}}>Last Name</label>
         <input type='text' className='inputfield pl-2' style={{left:'245.18px', top:'513.16px' , outline:'none'}} 
         onChange={useformik.handleChange} onBlur={useformik.handleBlur} value={useformik.values.spouselastName} name='spouselastName' placeholder='Lastname'/>
           {useformik.touched.spouselastName && useformik.errors.spouselastName?<p  className='inputfieldlabel text-green-400' 
          style={{left:'245.18px', top:'553.16px', color:'red'}}>{useformik.errors.spouselastName}</p>:''}
     
 
         <label className='inputfieldlabel' style={{left:'23.02px', top:'580px'}}>Contact</label>
         <input type='text' className='inputfield pl-2' style={{left:'23.02px', top:'605.16px' , outline:'none'}}
         onChange={useformik.handleChange} onBlur={useformik.handleBlur} value={useformik.values.spouseContact} name='spouseContact' placeholder='contact'/>
            {useformik.touched.spouseContact && useformik.errors.spouseContact?<p  className='inputfieldlabel text-green-400' 
          style={{left:'23.18px', top:'645px', color:'red'}}>{useformik.errors.spouseContact}</p>:''}
 
         
         <label className='inputfieldlabel' style={{left:'245.18px', top:'580px'}}>Occupation</label>
         <input type='text' value={useformik.values.spouseOccupation} onChange={useformik.handleChange}
          onBlur={useformik.handleBlur} className='inputfield pl-2' name='spouseOccupation'
          style={{left:'245.18px', top:'605.16px' , outline:'none'}} placeholder='occupation'/>
            {useformik.touched.spouseOccupation && useformik.errors.spouseOccupation?<p  className='inputfieldlabel text-green-400' 
          style={{left:'245.18px', top:'645px', color:'red'}}>{useformik.errors.spouseOccupation}</p>:''}
     
     
         <label className='inputfieldlabel' style={{left:'530px', top:'43px'}}>Add photo</label>
         <input type='file' className='  text-white'  style={{left:'530px', top:'223px',position:'absolute'}}
         onChange={handleChange}  value=''/>
           {useformik.touched.firstName && useformik.errors.lastName?<p  className='inputfieldlabel text-green-400' 
          style={{left:'245.18px', top:'100px', color:'red'}}>{useformik.errors.lastName}</p>:''}
     
       
         <img src={profile} className='photo' style={{left:'522px'}} alt='profile pic'/> 
 
 
         <label className='inputfieldlabel' style={{left:'847px', top:'43px'}}>Add Signature</label>
         <input type='file' className='  text-white'  style={{left:'838px', top:'223px',position:'absolute'}}
         onChange={handleSignChange} onBlur={useformik.handleBlur} value=''/>
         <img className='photo' src={signature} style={{left:'840px', position:'absolute'}} alt='signature'/>
     
         
         <label className='inputfieldlabel' style={{left:'520px', top:'278px'}}>Dependants</label>
         
 
         <button type='button' onClick={openModal} className='inputfield pl-2 font-serif' style={{left:'520px', top:'303px' ,width:'433px', outline:'none'}}
          placeholder='dependants'>Click To Add Dependants</button>
 
         <label className='text-2xl font-serif' style={{left:'542.27px', top:'356px', position:'absolute'}}>Landlord</label>
         
         <input type='checkbox' className='check' style={{left:'764px', top:'356px'}} placeholder='search landlord'/>
 
         {filteredlandlord.length >0 && search !==null?<div className='' style={{position:'absolute'}}>
         <label className='inputfieldlabel' style={{left:'523px', top:'406px'}}>First Name</label>,
           <input type='text' value={filteredlandlord[0].firstName} className='inputfield pl-2' name=''
           style={{left:'523.18px', top:'431.16px' , outline:'none'}} placeholder='Lastname'/>,
       
               
                 
           <label className='inputfieldlabel' style={{left:'743.18px', top:'406px'}}>Last Name</label>,
           <input type='text' value={filteredlandlord[0].lastName} className='inputfield pl-2' 
           style={{left:'743.18px', top:'431.16px' , outline:'none'}} placeholder='Lastname'/>,
       
               
             <label className='inputfieldlabel' style={{left:'523.02px', top:'485px'}}>Occupation</label>,
             <input type='text' value={filteredlandlord[0].Occupation} className='inputfield pl-2'
              style={{left:'523.02px', top:'510px' , outline:'none'}} placeholder='occupation'/>,
                     
           <label className='inputfieldlabel' style={{left:'743.18px', top:'485px'}}>Contact</label>,
           <input type='text'  value={filteredlandlord[0].Contact} className='inputfield pl-2' 
           style={{left:'745.18px', top:'510.16px' , outline:'none'}} placeholder='contat'/> </div>:
           <label className='inputfieldlabel' style={{top:'406px', left:'743.13px', position:'absolute' }}>Landlord doesnot exist</label>
       
           
         }
          
         
         <button className='submitbtn  text-white' type='submit' style={{left:'530px', top:'610px'}}>next</button>      
        </form>
        <form onSubmit={handleSubmit}>
        <input type='text' className='inputfield pl-2' style={{left:'743.18px', top:'356px'}}
         onChange={(e) => setSearch(e.target.value)} placeholder='search landlord by NIN'/>
 
 
        </form>
        <button  className='regdivheader1btn text-center pt-2' style={{left:'810px', top:'610px'}}>canel</button>   
      

      
         <Transition appear show={isopen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add A Dependant
                  </Dialog.Title>
                  <form onSubmit={handleSubmits}>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">First Name</p>  
                    <input placeholder='First Name' className='py-1 rounded w-full bg-slate-200 pl-3' style={{outline:'none'}}
                    name='firstName' value={inputs.firstName || ''}  onChange={handleInputChange}/>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Last Name</p>  
                    <input placeholder='Last Name' className='py-1 rounded w-full bg-slate-200 pl-3' style={{outline:'none'}} 
                    type='text' name='lastName' value={inputs.lastName || ''} onChange={handleInputChange} />
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Age</p>  
                    <input placeholder='Age' className='py-1 rounded w-full bg-slate-200 pl-3' style={{outline:'none'}} 
                    type='number' value={inputs.age || ''} name='age' onChange={handleInputChange} />
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Gender</p>  
                    <input placeholder='Gender' className='py-1 rounded w-full bg-slate-200 pl-3' style={{outline:'none'}}
                    type='text' value={inputs.gender || ''} name='gender' onChange={handleInputChange} />
                  </div>
                  <div className='mt-2'>
                    <button type='submit' onClick={closeModal} className='p-2 bg-green-600 text-slate-400 rounded font-serif' >Submit</button>

                  </div>
                  </form>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    

      </div>
     
      </div>
  )
  
}

const Landlord=()=>{
  const categories = [
    { name: 'Tenant' },
    { name: 'Landlord' },
    { name: 'Dependant' },
    { name: 'Worker' },
    {name:'Foreigner'}
  ] 
  const [photo, setPhoto] = useState('')
    const [sign, setSign] = useState('')


  const [selected, setSelected] = useState(categories[1])
  const navigate = useNavigate()
  const [imgs, setimges] = useState('')
  const [signatureurl, setSignatureurl] = useState('')
  
  const useformik =useFormik( {
  
    initialValues:{
      firstName:'', lastName:'', email:'', nationality:'', gender:'',  dateofbirth:'', contact:'', nin:'', occupation:'',  photo:'',
      signature:'',relative:'',spousefirstName:'', spouselastName:'',spouseContact:'',spouseOccupation:'', landlordtype: '',
    },
    
    onSubmit:(values, {resetForm})=>{
      
      console.log(values)
    
      try{
         const imageupload=async()=>{
        if (profile == null || sign == null ){
          return;
        }
        else{              
          
            const imageRef = ref(storage, `images/${profile + v4()}`)
            uploadBytes(imageRef, profiledatabase).then((image)=>getDownloadURL(image.ref)
            .then((url)=>{setPhoto(url)
           console.log(url)}))
            const signatureRef  = ref(storage, `images/${signaturedatabase + v4()}`)
            uploadBytes(signatureRef, signaturedatabase).then((image)=>getDownloadURL(image.ref)
            .then(url=>{setSign(url)
              }))
            
            if(sign && photo ){
           addLandlord()
           }
           
          
        } 
      }
  
      
      //trigering upload of Landlord information to the database
        
        const addLandlord =() =>{
        const landlord = {
            adminemail : localStorage.getItem('useremail'),
            firstName: values.firstName,
            lastName:values.lastName,
            email:values.email,
            Nationality: values.nationality,
            Gender: values.gender,
            DOB:values.dateofbirth,
            Contact:values.contact,
            Occupation:values.occupation,
            spouse: values.relative,
            Category: 'Landlord',
            NIN: values.nin,
            Photo:photo, 
            Signature:sign,
            Dependant: [inputs],
            spousefirstName:values.spousefirstName,
            spouselastName: values.spouselastName,
            spouseoccuption: values.spouseOccupation,
            spouseContact: values.spouseContact,
            Landlordtype: values.landlordtype
  
          };
          axios.post(`http://localhost:5000/api/addlandlord`,landlord, {
            headers:{
              Authorization:"Bearer " + localStorage.getItem('ids')
            }
          })
          .then((result)=>{console.log(result.data.ress._id) 
           ids = ''
           ids = result.data.ress._id
           console.log(result.data) 
           navigate('/identitycard')})
          .catch(err=>console.log(err))
        }
        
         
        if(window.navigator.onLine){
          imageupload()
        }
        else{
          alert(`You are offline`)
        }

      }catch(e){
        alert('Error adding document', e)
      }
      

      },
       validationSchema: Yup.object({
      firstName:Yup.string('Name must be a word').required('required field'),
      lastName:Yup.string('Name must be a word').required('required field'),
      email:Yup.string('Enter valid emil').required('Email required').email('Enter a valid email'),
      nationality:Yup.string('Country must be a word').required('required field'),
      gender:Yup.string('Gender must be a word').required('required field'),
      dateofbirth:Yup.date('Enter a valid date of birth'),
      contact:Yup.number('phone number must be a number').required('required filed'),
      nin:Yup.mixed('enter a valid NIN number').required('Required field'),
      occupation:Yup.string('Occupation must be a word').required('required field'),
      relative:Yup.string('').required('required ffield'),
      spousefirstName:Yup.string('Name must be a word').required('required field'),
      spouselastName:Yup.string('Name must be a word').required('required field'),
      spouseContact:Yup.number('phone number must be a number').required('required filed'),
      spouseOccupation:Yup.string('Occupation must be a word').required('required field'),
      
    
    })
    
  });
  const [profile, setProfile] = useState(null)
  

  const [profiledatabase, setProfiledatabase] = useState(null)
  const handleChange=(event)=>{
     setProfile(URL.createObjectURL( event.target.files[0]))
     setProfiledatabase(event.target.files[0])
      }

  const [signature, setSignature] = useState(null)
  const [signaturedatabase, setSignturedatabase] = useState(null)
  const handleSignChange=(event)=>{
    setSignature(URL.createObjectURL(event.target.files[0]))
    setSignturedatabase(event.target.files[0])
  }

  let[isopen, setIsopen] = useState(true)
  function closeModal(){
    setIsopen(false)
  }
  function openModal(){
    setIsopen(true)
  }
  //Inputs to the dependent input fields are captured and processed here
  const [inputs, setInputs] = useState({})
  const handleInputChange=(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values=>({...values, [name]:value}))

  }
  const handleSubmits=(event)=>{
   event.preventDefault();
   alert(inputs)
  }

  
  return(
    <div className=''>
      <Dashboard/>
      <h1 className='Dashboardoverview' style={{top: '152px'}}>Resident</h1>
        <p className='Dashboardoverviewdesc'>Fill all the required fields</p>
        <p className='Dashboardoverviewdesc' style={{left:'814px', top:'202px', position:'absolute'}}>category</p>
       
      <div className='regformframe'>
      <div className=" top-16 w-72 " style={{top:'-55px', left:'452px', position:'absolute'}}>
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-red-200 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                
                <Link to='/tenant' className='bg-blue-200'>

                  
                <Listbox.Option  className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900' }` } value={categories[0].name}>                   
                          {categories[0].name} 
                    
                </Listbox.Option>
                </Link>
                <Link to='/landlord'>
                <Listbox.Option  className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900' }` } value={categories[1].name}>                   
                          {categories[1].name} 
                          {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {selected.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                    
                </Listbox.Option>
                </Link>
                <Link to='/dependant'>
                <Listbox.Option  className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900' }` } value={categories[2].name}>                   
                          {categories[2].name} 
                    
                </Listbox.Option>
                </Link>
                <Link to='/worker'>
                <Listbox.Option  className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900' }` } value={categories[3].name}>                   
                          {categories[3].name} 
                    
                </Listbox.Option>
                </Link>
                <Link to='/foreigner'>
                <Listbox.Option  className={({ active }) => `relative bg-red-200 cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900' }` } value={categories[4].name}>                   
                          {categories[4].name} 
                    
                </Listbox.Option>
                </Link>
                 
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
       
      </div>
        
      <form onSubmit={useformik.handleSubmit} encType="multipart/form-data">
        
        <label className='inputfieldlabel' style={{left:'23.02px', top:'35px'}}>First Name</label>
          <input type='text' className='inputfield pl-2' style={{left:'23.02px', top:'60.16px' , outline:'none'}}{...useformik.getFieldProps('firstName')} 
          name='firstName' placeholder='first name'/>
           {useformik.touched.firstName && useformik.errors.firstName?<p  className='inputfieldlabel text-green-400' 
           style={{left:'23.03px', top:'100px', color:'red'}}>{useformik.errors.firstName}</p>:''}
      
      
          <label className='inputfieldlabel' style={{left:'245.18px', top:'35px'}}>Last Name</label>
          <input type='text' className='inputfield pl-2' style={{left:'245.18px', top:'60.16px' , outline:'none'}}
          name='lastName'{...useformik.getFieldProps('lastName')} placeholder='Lastname'/>
            {useformik.touched.firstName && useformik.errors.lastName?<p  className='inputfieldlabel text-green-400' 
           style={{left:'245.18px', top:'100px', color:'red'}}>{useformik.errors.lastName}</p>:''}
      
          
          <label className='inputfieldlabel' style={{left:'23.02px', top:'110px'}}>Email</label>
          <input type='email'  className='inputfield pl-2' style={{left:'23.02px', top:'139px' ,width:'433px', 
          outline:'none'}} {...useformik.getFieldProps('email')} name='email' placeholder='emal'/>
            {useformik.touched.email && useformik.errors.email?<p  className='inputfieldlabel text-green-400' 
           style={{left:'23.18px', top:'179px', color:'red'}}>{useformik.errors.email}</p>:''}
      
              
          <label className='inputfieldlabel' style={{left:'22px', top:'198px '}}>Nationality</label>
          <input type='text' className='inputfield pl-2' style={{left:'23px', top:'221.59px', width:'123.71px' , 
           outline:'none'}} {...useformik.getFieldProps('nationality')}  name='nationality' placeholder='nationality'/>
            {useformik.touched.nationality && useformik.errors.nationality?<p  className='inputfieldlabel text-green-400' 
           style={{left:'23.18px', top:'261.59px', color:'red'}}>{useformik.errors.nationality}</p>:''}
      
  
          <label className='inputfieldlabel' style={{left:'201.71px', top:'198px'}}>Gender</label>
          <input className='inputfield pl-2' name='gender' style={{left:'163.08px', top:'221.59px' ,width:'123.71px', outline:'none'}}
         {...useformik.getFieldProps('gender')} placeholder='gender'/>
            {useformik.touched.gender && useformik.errors.gender?<p  className='inputfieldlabel text-green-400' 
           style={{left:'163.08px', top:'261.59px', color:'red'}}>{useformik.errors.gender}</p>:''}
          
      
          <label className='inputfieldlabel' style={{left:'340.42px', top:'198px'}}>Date of birth</label>
          <input type='date' className='inputfield pl-2' style={{left:'304.16px', top:'221.59px' , width:'155.59px', outline:'none'}} 
           {...useformik.getFieldProps('dateofbirth')} name='dateofbirth' placeholder='Datee of birth'/>
             {useformik.touched.dateofbirth && useformik.errors.dateofbirth?<p  className='inputfieldlabel text-green-400' 
           style={{left:'304.18px', top:'261.59px', color:'red'}}>{useformik.errors.dateofbirth}</p>:''}
      
  
          <label className='inputfieldlabel' style={{left:'23.02px', top:'277px'}}>Contact</label>
          <input type='text' className='inputfield pl-2' style={{left:'23.02px', top:'302.16px' , outline:'none'}}
           {...useformik.getFieldProps('contacts')} name='contact' placeholder='contact'/>
            {useformik.touched.contact && useformik.errors.contact?<p  className='inputfieldlabel text-green-400' 
           style={{left:'23.08px', top:'342.16px', color:'red'}}>{useformik.errors.contact}</p>:''}
      
      
          <label className='inputfieldlabel' style={{left:'245.18px', top:'277px'}}>NIN</label>
          <input type='text' className='inputfield pl-2' style={{left:'245.18px', top:'302.16px' , outline:'none'}}
            {...useformik.getFieldProps('nin')} name='nin' placeholder='NIN'/>
            {useformik.touched.nin && useformik.errors.nin?<p  className='inputfieldlabel text-green-400' 
           style={{left:'245.18px', top:'342.16px', color:'red'}}>{useformik.errors.nin}</p>:''}
      
  
          <label className='inputfieldlabel' style={{left:'23.02px', top:'361px'}}>Occupation</label>
          <input type='text' className='inputfield pl-2' style={{left:'23.02px', top:'390px' ,width:'433px', outline:'none'}}
          {...useformik.getFieldProps('occupation')} name='occupation' placeholder='occupation'/>
            {useformik.touched.occupation && useformik.errors.occupation?<p  className='inputfieldlabel text-green-400' 
           style={{left:'23.18px', top:'430px', color:'red'}}>{useformik.errors.occupation}</p>:''}
  
          <label id='relative' className='text-2xl font-serif' style={{left:'23.06px', top:'430px', position:'absolute'}}></label>
  
          <label className='remember' style={{left:'53.27px', top:'447px'}}>Spouse  (Husband or wife)</label>
         <input type='radio' name='relative' className='check' style={{left:'24.76px', top:'447px'}} 
         onChange={(useformik.handleChange)} onBlur={useformik.handleBlur} value='spouse'/>
  
         
         <label className='remember' style={{left:'275px', top:'447px'}}>Next Of Kin</label>
          <input type='radio' name='relative' className='check' style={{left:'248.82px', top:'447px'}}
          onChange={useformik.handleChange} onBlur={useformik.handleBlur} value='next of kin'/>
        
          <label className='inputfieldlabel' style={{left:'23.02px', top:'488px'}}>First Name</label>
          <input type='text'   {...useformik.getFieldProps('spousefirstName')} className='inputfield pl-2' style={{left:'23.02px', top:'513.16px' , outline:'none'}} 
            name='spousefirstName' placeholder='first name'/>
            {useformik.touched.spousefirstName && useformik.errors.spousefirstName?<p  className='inputfieldlabel text-green-400' 
           style={{left:'23.18px', top:'553.16px', color:'red'}}>{useformik.errors.spousefirstName}</p>:''}
         
      
          <label className='inputfieldlabel' style={{left:'245.18px', top:'488px'}}>Last Name</label>
          <input type='text' className='inputfield pl-2' style={{left:'245.18px', top:'513.16px' , outline:'none'}} 
          {...useformik.getFieldProps('spouselastName')} name='spouselastName' placeholder='Lastname'/>
            {useformik.touched.spouselastName && useformik.errors.spouselastName?<p  className='inputfieldlabel text-green-400' 
           style={{left:'245.18px', top:'553.16px', color:'red'}}>{useformik.errors.spouselastName}</p>:''}
      
  
          <label className='inputfieldlabel' style={{left:'23.02px', top:'580px'}}>Contact</label>
          <input type='text' className='inputfield pl-2' style={{left:'23.02px', top:'605.16px' , outline:'none'}}
           {...useformik.getFieldProps('spouseContact')} name='spouseContact' placeholder='contact'/>
             {useformik.touched.spouseContact && useformik.errors.spouseContact?<p  className='inputfieldlabel text-green-400' 
           style={{left:'23.18px', top:'645px', color:'red'}}>{useformik.errors.spouseContact}</p>:''}
      
  
          <label className='inputfieldlabel' style={{left:'530px', top:'43px'}}>Add photo</label>
          <input type='file' style={{left:'530px', top:'223px',position:'absolute'}} id='file' onBlur={useformik.handleBlur}
            onChange={handleChange}  />
            {useformik.touched.firstName && useformik.errors.lastName?<p  className='inputfieldlabel text-green-400' 
           style={{left:'245.18px', top:'100px', color:'red'}}>{useformik.errors.lastName}</p>:''}
      
        
          <img src={profile} className='photo' style={{left:'522px'}} alt='profile pic'/>  

          <img src={signature} className='photo' style={{left:'840px'}} alt='profile pic'/>  

  
          <label className='inputfieldlabel' style={{left:'847px', top:'43px'}}>Add Signature</label>
          <input type='file' onChange={handleSignChange} className='' id='file' style={{left:'838px', top:'223px',position:'absolute'}}
            />
      
          <label className='inputfieldlabel' style={{left:'245.18px', top:'580px'}}>Occupation</label>
          <input type='text' {...useformik.getFieldProps('spouseOccupation')} className='inputfield pl-2' name='spouseOccupation'
           style={{left:'245.18px', top:'605.16px' , outline:'none'}} placeholder='occupation'/>
             {useformik.touched.spouseOccupation && useformik.errors.spouseOccupation?<p  className='inputfieldlabel text-green-400' 
           style={{left:'245.18px', top:'645px', color:'red'}}>{useformik.errors.spouseOccupation}</p>:''}
      
          
          <label className='inputfieldlabel' style={{left:'520px', top:'278px'}}>Dependants</label>
          
  
          <button type='button' onClick={openModal} className="inputfield " style={{left:'520px', top:'303px' ,width:'433px', outline:'none', position:'absolute'}}>
            Click to add Dependant
          </button> 

          <label id='landlord' className='text-2xl font-serif' style={{left:'542.27px', top:'356px', position:'absolute'}}>Landlord</label>
          
          {/** <label className='remember' style={{left:'780px', top:'356px'}}>AS My info</label>
          <input type='checkbox' className='check' style={{left:'764px', top:'356px'}} /> */}
  
          <div className='bg-red justify-items-center flex flex-row space-x-4 font-serif justify-between' style={{left:'523px',heigh:'100px' ,top:'400px',position:'absolute'}} role='group' aria-labelledby='landlord'>
          <label className='remember' style={{left:'53.27px', top:''}}>Owns Rentals</label>
         <input type='radio' name='landlordtype' className='check' style={{left:'24.76px', top:''}} 
         onChange={(useformik.handleChange)} onBlur={useformik.handleBlur} value='Owns Rentals'/>
  
         
         <label className='remember' style={{left:'275px', top:''}}>Permanent Resident</label>
          <input type='radio' name='landlordtype' className='check' style={{left:'248.82px', top:''}}
          onChange={useformik.handleChange} onBlur={useformik.handleBlur} value='Permanent Resident'/>
  
          </div>
  
          <button className='submitbtn  text-white' type='submit' style={{left:'530px', top:'610px'}}>next</button>
         
         </form>
         <Link to='/tenant'>
         <button  className='regdivheader1btn text-center pt-2' style={{left:'810px', top:'610px'}}>canel</button>    
 
          
         </Link>
          
         <Transition appear show={isopen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add A Dependant
                  </Dialog.Title>
                  <form onSubmit={handleSubmits}>
                   <div className="mt-2">
                    <p className="text-sm text-gray-500">First Name</p>  
                    <input placeholder='First Name' className='py-1 rounded w-full bg-slate-200 pl-3' style={{outline:'none'}}
                    name='firstName' value={inputs.firstName || ''}  onChange={handleInputChange}/>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Last Name</p>  
                    <input placeholder='Last Name' className='py-1 rounded w-full bg-slate-200 pl-3' style={{outline:'none'}} 
                    type='text' name='lastName' value={inputs.lastName || ''} onChange={handleInputChange} />
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Age</p>  
                    <input placeholder='Age' className='py-1 rounded w-full bg-slate-200 pl-3' style={{outline:'none'}} 
                    type='number' value={inputs.age || ''} name='age' onChange={handleInputChange} />
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Gender</p>  
                    <input placeholder='Gender' className='py-1 rounded w-full bg-slate-200 pl-3' style={{outline:'none'}}
                    type='text' value={inputs.gender || ''} name='gender' onChange={handleInputChange} />
                  </div>
                  <div className='mt-2'>
                    <button type='submit' onClick={closeModal} className='p-2 bg-green-600 text-slate-400 rounded font-sans' >Submit</button>

                  </div>
                  </form>
                  <div className="mt-4">
                    <button type="button" className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal} > Close</button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    
      </div>


      </div>    
  )
}

const Dependant = () => {
  const categories = [
    { name: 'Tenant' },
    { name: 'Landlord' },
    { name: 'Dependant' },
    { name: 'Worker' },
    {name:'Foreigner'}
  ] 


  const [selected, setSelected] = useState(categories[2])

  const navigate = useNavigate()

  
  const [imgs, setimges] = useState('');
  const [signatureurl, setSignatureurl] = useState('');


  const useformik =useFormik( {
    initialValues:{firstName:'',lastName:'',email:'', nationality:'', gender:'',dateofbirth:'', contact:'',  nin:'', occupation:'',   spouse:'',
      spousefirstName:'',
      spouselastName:'',
      spouseContact:'',
      spouseOccupation:''

    },
    validationSchema: Yup.object({
      firstName:Yup.string('Name must be a word').required('required field'),
      lastName:Yup.string('Name must be a word').required('required field'),
      email:Yup.string('Enter valid emil').required('Email required').email('Enter a valid email'),
      nationality:Yup.string('Country must be a word').required('required field'),
      gender:Yup.string('Gender must be a word').required('required field'),
      dateofbirth:Yup.date('Enter a valid date of birth'),
      contact:Yup.number('phone number must be a number').required('required filed'),
      nin:Yup.mixed('enter a valid NIN number').required('Required field'),
      occupation:Yup.string('Occupation must be a word').required('required field'),
      relative:Yup.string('').required('required ffield'),
      spousefirstName:Yup.string('Name must be a word').required('required field'),
      spouselastName:Yup.string('Name must be a word').required('required field'),
      spouseContact:Yup.number('phone number must be a number').required('required filed'),
      spouseOccupation:Yup.string('Occupation must be a word').required('required field'),
  
    }),
    onSubmit:(values)=>{
      const dependant = {
        adminemail: localStorage.getItem('useremail'),
        firstName: values.firstName,
        lastName:values.lastName,
        email:values.email,
        Nationality: values.nationality,
        Gender: values.gender,
        DOB:values.dateofbirth,
        Contact:values.contact,
        Occupation:values.occupation,
        relative: values.relative,
        Category:'Dependant',
        NIN: values.nin,
        Photo:imgs, 
        Signature:signatureurl,
        SpousefirstName:values.spousefirstName,
        SpouselastName: values.spouselastName,
        Spouseoccuption: values.spouseOccupation,
        spouseContact: values.spouseContact,
      

      };
      
        const imageupload=async()=>{
       if (profile == null || signatureImge == null ){
         return;
       }
       else{
         const imgref  = ref(storage,`profileimages/${profile + v4()}` )
         const uploadinfo = await uploadBytes(imgref, profile) //upload profile picture
         
          getDownloadURL(uploadinfo.ref).then((url)=>{
         
           setimges(url)
          })

          //upload signature to the storage bucket
         const imgref2  = ref(storage,`signatureimages/${signatureImge + v4()}` )
         const uploadsignature = await uploadBytes(imgref2, signatureImge)
      
          getDownloadURL(uploadsignature.ref).then((url)=>{
           setSignatureurl(url) 
          })
        
         if(imgs && signatureurl){
         adddependant()
        }
       }
     }
     if(navigator.onLine){
      imageupload() //trigering upload of Landlord information to the database
       
     }
     else{
      alert('You are offline')
     }
     

const adddependant=()=>{
  
  axios.post(`http://localhost:5000/api/adddependant`,dependant, {
    headers:{
      Authorization: "Bearer " + localStorage.getItem('ids')
    }
  })
  .then((result)=>{console.log(result)
     ids = result.data.ress._id      
  navigate('/identitycard')})
  .catch(err=>console.log(err))

  }
    }
  })
  const [profile, setProfile] = useState(null)
  const [profilepreview, setProfilepreview] = useState(null)

  const [signatureImge, setSignatureImge] = useState(null)
  const [imgpreviewe, setPreview2] = useState(null)


  const handleChanges=(event)=>{
    setProfile(event.target.files[0]);
    setProfilepreview(URL.createObjectURL(event.target.files[0]))
    
    console.log(profile)
  }
  const handleChange=(event)=>{
    setSignatureImge(event.target.files[0]);
    setPreview2(URL.createObjectURL(event.target.files[0])) 
    
 }
 
 
  return (
    <div className=''> 
        <Dashboard/>
        <h1 className='Dashboardoverview' style={{top: '152px'}}>Resident</h1>
        <p className='Dashboardoverviewdesc'>Fill all the required fields</p>
        <p className='Dashboardoverviewdesc' style={{left:'814px', top:'202px', position:'absolute'}}>category</p>
       
        <div className='regformframe'>
          <Mainregisters/>
          <div className=" top-16 w-72 " style={{top:'-55px', left:'452px', position:'absolute'}}>
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-red-200 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                
                <Link to='/tenant' className='bg-blue-200'>

                  
                <Listbox.Option  className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900' }` } value={categories[0].name}>                   
                          {categories[0].name} 
                    
                </Listbox.Option>
                </Link>
                <Link to='/landlord'>
                <Listbox.Option  className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900' }` } value={categories[1].name}>                   
                          {categories[1].name} 
                          {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {selected.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                    
                </Listbox.Option>
                </Link>
                <Link to='/dependant'>
                <Listbox.Option  className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900' }` } value={categories[2].name}>                   
                          {categories[2].name} 
                    
                </Listbox.Option>
                </Link>
                <Link to='/worker'>
                <Listbox.Option  className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900' }` } value={categories[3].name}>                   
                          {categories[3].name} 
                    
                </Listbox.Option>
                </Link>
                <Link to='/foreigner'>
                <Listbox.Option  className={({ active }) => `relative bg-red-200 cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900' }` } value={categories[4].name}>                   
                          {categories[4].name} 
                    
                </Listbox.Option>
                </Link>
                 
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
       
      </div>
          <form onSubmit={useformik.handleSubmit} encType="multipart/form-data">
        
        <label className='inputfieldlabel' style={{left:'23.02px', top:'35px'}}>First Name</label>
          <input type='text' className='inputfield pl-2' style={{left:'23.02px', top:'60.16px' , outline:'none'}}{...useformik.getFieldProps('firstName')} 
          name='firstName' placeholder='first name'/>
           {useformik.touched.firstName && useformik.errors.firstName?<p  className='inputfieldlabel text-green-400' 
           style={{left:'23.03px', top:'100px', color:'red'}}>{useformik.errors.firstName}</p>:''}
      
      
          <label className='inputfieldlabel' style={{left:'245.18px', top:'35px'}}>Last Name</label>
          <input type='text' className='inputfield pl-2' style={{left:'245.18px', top:'60.16px' , outline:'none'}}
          name='lastName'{...useformik.getFieldProps('lastName')} placeholder='Lastname'/>
            {useformik.touched.firstName && useformik.errors.lastName?<p  className='inputfieldlabel text-green-400' 
           style={{left:'245.18px', top:'100px', color:'red'}}>{useformik.errors.lastName}</p>:''}
      
          
          <label className='inputfieldlabel' style={{left:'23.02px', top:'110px'}}>Email</label>
          <input type='email'  className='inputfield pl-2' style={{left:'23.02px', top:'139px' ,width:'433px', 
          outline:'none'}} {...useformik.getFieldProps('email')} name='email' placeholder='emal'/>
            {useformik.touched.email && useformik.errors.email?<p  className='inputfieldlabel text-green-400' 
           style={{left:'23.18px', top:'179px', color:'red'}}>{useformik.errors.email}</p>:''}
      
              
          <label className='inputfieldlabel' style={{left:'22px', top:'198px '}}>Nationality</label>
          <input type='text' className='inputfield pl-2' style={{left:'23px', top:'221.59px', width:'123.71px' , 
           outline:'none'}} {...useformik.getFieldProps('nationality')}  name='nationality' placeholder='nationality'/>
            {useformik.touched.nationality && useformik.errors.nationality?<p  className='inputfieldlabel text-green-400' 
           style={{left:'23.18px', top:'261.59px', color:'red'}}>{useformik.errors.nationality}</p>:''}
      
  
          <label className='inputfieldlabel' style={{left:'201.71px', top:'198px'}}>Gender</label>
          <input className='inputfield pl-2' name='gender' style={{left:'163.08px', top:'221.59px' ,width:'123.71px', outline:'none'}}
         {...useformik.getFieldProps('gender')} placeholder='gender'/>
            {useformik.touched.gender && useformik.errors.gender?<p  className='inputfieldlabel text-green-400' 
           style={{left:'163.08px', top:'261.59px', color:'red'}}>{useformik.errors.gender}</p>:''}
          
      
          <label className='inputfieldlabel' style={{left:'340.42px', top:'198px'}}>Date of birth</label>
          <input type='date' className='inputfield pl-2' style={{left:'304.16px', top:'221.59px' , width:'155.59px', outline:'none'}} 
           {...useformik.getFieldProps('dateofbirth')} name='dateofbirth' placeholder='Datee of birth'/>
             {useformik.touched.dateofbirth && useformik.errors.dateofbirth?<p  className='inputfieldlabel text-green-400' 
           style={{left:'304.18px', top:'261.59px', color:'red'}}>{useformik.errors.dateofbirth}</p>:''}
      
  
          <label className='inputfieldlabel' style={{left:'23.02px', top:'277px'}}>Contact</label>
          <input type='text' className='inputfield pl-2' style={{left:'23.02px', top:'302.16px' , outline:'none'}}
           {...useformik.getFieldProps('contacts')} name='contact' placeholder='contact'/>
            {useformik.touched.contact && useformik.errors.contact?<p  className='inputfieldlabel text-green-400' 
           style={{left:'23.08px', top:'342.16px', color:'red'}}>{useformik.errors.contact}</p>:''}
      
      
          <label className='inputfieldlabel' style={{left:'245.18px', top:'277px'}}>NIN</label>
          <input type='text' className='inputfield pl-2' style={{left:'245.18px', top:'302.16px' , outline:'none'}}
            {...useformik.getFieldProps('nin')} name='nin' placeholder='NIN'/>
            {useformik.touched.nin && useformik.errors.nin?<p  className='inputfieldlabel text-green-400' 
           style={{left:'245.18px', top:'342.16px', color:'red'}}>{useformik.errors.nin}</p>:''}
      
  
          <label className='inputfieldlabel' style={{left:'23.02px', top:'361px'}}>Occupation</label>
          <input type='text' className='inputfield pl-2' style={{left:'23.02px', top:'390px' ,width:'433px', outline:'none'}}
          {...useformik.getFieldProps('occupation')} name='occupation' placeholder='occupation'/>
            {useformik.touched.occupation && useformik.errors.occupation?<p  className='inputfieldlabel text-green-400' 
           style={{left:'23.18px', top:'430px', color:'red'}}>{useformik.errors.occupation}</p>:''}
  
          <label id='relative' className='text-2xl font-serif' style={{left:'23.06px', top:'430px', position:'absolute'}}></label>
  
          <label className='remember' style={{left:'53.27px', top:'447px'}}>Mother</label>
         <input type='radio' name='relative' className='check' style={{left:'24.76px', top:'447px'}} 
         onChange={(useformik.handleChange)} onBlur={useformik.handleBlur} value='Mother'/>
  
         
         <label className='remember' style={{left:'275px', top:'447px'}}>Father</label>
          <input type='radio' name='relative' className='check' style={{left:'248.82px', top:'447px'}}
          onChange={useformik.handleChange} onBlur={useformik.handleBlur} value='Father'/>
        
          <label className='inputfieldlabel' style={{left:'23.02px', top:'488px'}}>First Name</label>
          <input type='text'   {...useformik.getFieldProps('spousefirstName')} className='inputfield pl-2' style={{left:'23.02px', top:'513.16px' , outline:'none'}} 
            name='spousefirstName' placeholder='first name'/>
            {useformik.touched.spousefirstName && useformik.errors.spousefirstName?<p  className='inputfieldlabel text-green-400' 
           style={{left:'23.18px', top:'553.16px', color:'red'}}>{useformik.errors.spousefirstName}</p>:''}
         
      
          <label className='inputfieldlabel' style={{left:'245.18px', top:'488px'}}>Last Name</label>
          <input type='text' className='inputfield pl-2' style={{left:'245.18px', top:'513.16px' , outline:'none'}} 
          {...useformik.getFieldProps('spouselastName')} name='spouselastName' placeholder='Lastname'/>
            {useformik.touched.spouselastName && useformik.errors.spouselastName?<p  className='inputfieldlabel text-green-400' 
           style={{left:'245.18px', top:'553.16px', color:'red'}}>{useformik.errors.spouselastName}</p>:''}
      
  
          <label className='inputfieldlabel' style={{left:'23.02px', top:'580px'}}>Contact</label>
          <input type='text' className='inputfield pl-2' style={{left:'23.02px', top:'605.16px' , outline:'none'}}
           {...useformik.getFieldProps('spouseContact')} name='spouseContact' placeholder='contact'/>
             {useformik.touched.spouseContact && useformik.errors.spouseContact?<p  className='inputfieldlabel text-green-400' 
           style={{left:'23.18px', top:'645px', color:'red'}}>{useformik.errors.spouseContact}</p>:''}
      
  
          <label className='inputfieldlabel' style={{left:'530px', top:'43px'}}>Add photo</label>
          <input type='file' style={{left:'530px', top:'223px',position:'absolute'}} id='file' onBlur={useformik.handleBlur}
            onChange={handleChanges}  />
            {useformik.touched.firstName && useformik.errors.lastName?<p  className='inputfieldlabel text-green-400' 
           style={{left:'245.18px', top:'100px', color:'red'}}>{useformik.errors.lastName}</p>:''}
      
        
          <img src={profilepreview} className='photo' style={{left:'522px'}} alt='profile pic'/>  

          <img src={imgpreviewe} className='photo' style={{left:'840px'}} alt='profile pic'/>  

  
          <label className='inputfieldlabel' style={{left:'847px', top:'43px'}}>Add Signature</label>
          <input type='file' onChange={handleChange} className='' id='file' style={{left:'838px', top:'223px',position:'absolute'}}
            />
      
          <label className='inputfieldlabel' style={{left:'245.18px', top:'580px'}}>Occupation</label>
          <input type='text' {...useformik.getFieldProps('spouseOccupation')} className='inputfield pl-2' name='spouseOccupation'
           style={{left:'245.18px', top:'605.16px' , outline:'none'}} placeholder='occupation'/>
             {useformik.touched.spouseOccupation && useformik.errors.spouseOccupation?<p  className='inputfieldlabel text-green-400' 
           style={{left:'245.18px', top:'645px', color:'red'}}>{useformik.errors.spouseOccupation}</p>:''}
     
          <button className='submitbtn  text-white' type='submit' style={{left:'530px', top:'610px'}}>next</button>
         
         </form>
         <Link to='/tenant'>
            <button className='regdivheader1btn text-center pt-2' style={{left:'810px', top:'610px'}}>canel</button>    
       
         </Link>
         
        </div>   
      
      
    </div>   

  )
}

const NewUser = ()=>{
  return(
    <div>
      <Dashboard/>
      <h1 className='Dashboardoverview' style={{top: '152px'}}>USERS</h1>
      <p className='Dashboardoverviewdesc'>Add and Manage users</p>

      <div className='regformframe'>
        <p className='adduserparagraph' style={{top:'44px',left:'249px'}}>Add a new user</p>
       <form>
       <label className='adduserparagraph' style={{top:'111px', left:'35px'}}>First Name</label>
        <input style={{left:'249px', top:'100px'}} className='adduserinput'/>

        <label className='adduserparagraph' style={{top:'188px', left:'35px'}}>Last Name</label>
        <input style={{left:'249px', top:'188px'}} className='adduserinput'/>

        <label className='adduserparagraph' style={{top:'275px', left:'35px'}}>Email</label>
        <input style={{left:'249px', top:'275px'}} className='adduserinput'/>

        <label className='adduserparagraph' style={{top:'362px', left:'35px'}}>Password</label>
        <input style={{left:'249px', top:'362px'}} className='adduserinput'/>

        <label className='adduserparagraph' style={{top:'449px', left:'35px'}}>Confirm Password</label>
        <input style={{left:'249px', top:'449px'}} className='adduserinput'/>

        <label className='adduserparagraph' style={{top:'544px', left:'35px'}}>Role</label>
        <input style={{left:'249px', top:'544px'}} className='adduserinput'/>

        <button className='adduserbtn text-slate-200'>Add new user</button>

       </form>
      </div>

    </div>
  )
}

const Identitycards = () => {
  
  const navigate = useNavigate()
  const [villageaddresses, setadresses] = useState([])
  const[villageaddress, setaddress] = useState([[]])
  useEffect(()=>{
   axios.get(`http://localhost:5000/api/post`,{
    headers:{
      Authorization: "Bearer " + localStorage.getItem('ids')
    }
   }).then(response=>{
    console.log(response.data)
    setadresses(response.data)
   })
  },[])
  useEffect(()=>{
  setaddress( villageaddresses.filter(e=>
      e.NIN === localStorage.getItem('nin')
    ))
  },[villageaddresses])
  console.log(villageaddress)
  console.log(localStorage.getItem('nin'))
  const [foundresident, setfoundresident] = useState([])
  
  const useformk = useFormik({
    initialValues:{
      district:'', county:'', parish:'', subcounty:'', village:'', zone:'',
      pdistrict:'',pcounty:'', pparish:'',psubcounty:'', pvillage:'',pzone:''

    },
    validationSchema: Yup.object({
  
      zone: Yup.string('zone must be astring').required('required zone'),
      pdistrict: Yup.string('previous district must be astring').required('required district'),
      pcounty: Yup.string('previous county must be astring').required('required county'),
      pparish:Yup.string().required('required parish'),
      psubcounty: Yup.string('previous subcounty must be astring').required('required'),
      pvillage: Yup.string('previous village must be astring').required('required'),
     
    }),
    onSubmit:(values, resetForm)=>{
      
      
        const addmeta = {
          district:villageaddress.at(0).district,county:villageaddress.at(0).county, parish:villageaddress.at(0).parish, subcounty:villageaddress.at(0).subcounty
          ,village:villageaddress.at(0).village, zone:values.zone
          ,prevdistrict: values.pdistrict, prevcounty:values.pcounty, prevparish: values.pparish, prevsubcounty:values.psubcounty
          ,prevvillage: values.pvillage, prevzone:values.pzone
        }
      const addtenantlocation = ()=>{
        axios.put(`http://localhost:5000/api/userlocation/${ids}`, addmeta, {
          headers:{
            Authorization: "Bearer " + localStorage.getItem('ids')
          }
        })
        .then((result)=>{
          console.log(result.data)
          setfoundresident(result.data)
          ids = ''
          alert('Success, User created successfully')
        
        
        }).catch(err=>{alert(`Message: Connetion was lost or ${err}`)
        navigate(-1)})
       
    }
    
    
    if(ids!==''){
      addtenantlocation()
    }else{
      alert('User not found or user already updated')
      navigate('/tenant')
    }
   
  }})
  const navprev=()=>{
    navigate(-1)
  } 
  foundresident?console.log(foundresident):console.log(foundresident)
   
const printRef = React.useRef()
const handleDownloadPdf  = async ()=>{
  const element = printRef.current;
  const canvas = await html2canvas(element)
  const data = canvas.toDataURL('image/png')

  const pdf = new jsPDF();
  const imgProperties = pdf.getImageProperties(data)
  const pdfWidth = pdf.internal.pageSize.getWidth()
  const pdfHeight = (imgProperties.height * pdfWidth) /imgProperties.width
  pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('print.pdf');
}
const printRefs = React.useRef()
const handleDownloadPdfs=async()=>{

  const element = printRefs.current;
  const canvas = await html2canvas(element)
  const data = canvas.toDataURL('image/png')
  const pdf = new jsPDF();
  const imgProperties = pdf.getImageProperties(data)
  const pdfWidth = pdf.internal.pageSize.getWidth()
  const pdfHeight = (imgProperties.height * pdfWidth) /imgProperties.width
  pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('prints.pdf');

}

  return (
    <div>
      <Dashboard/>
    <h1 className='Dashboardoverview' style={{top: '152px'}}>Identity Card</h1>
    <p className='Dashboardoverviewdesc'>General View of the system</p>
    <div className='regformframe flex '>
    <form onSubmit={useformk.handleSubmit}>
      {
        villageaddress?villageaddress.map((addr)=>{
          
          return(
            <>
             <label className='inputfieldlabel' style={{left:'45px', top:'43px'}}>District</label>
            <input type='text' className='inputfield pl-2' style={{left:'45px', top:'70.16px' , outline:'none'}} 
            name='district' value={addr.district} placeholder='enter district'/>

            
    <label className='inputfieldlabel' style={{left:'266.43px', top:'43px'}}>County</label>
    <input type='text' value={addr.county} className='inputfield pl-2' style={{left:'266.43px', top:'70.16px' , outline:'none'}} name='county'
 placeholder='enter county'/>
     


    <label className='inputfieldlabel' style={{left:'45px', top:'120px'}}>Parish</label>
    <input type='text' value={addr.parish} className='inputfield pl-2' style={{left:'45px', top:'145.16px' , outline:'none'}}
    name='parish'  placeholder='enter parish'/>
    

    <label className='inputfieldlabel' style={{left:'266.43px', top:'120px '}}>S.County</label>
    <input className='inputfield pl-2' style={{left:'266.43px', top:'145.16px', outline:'none'}} 
    name='subcounty' value={addr.subcounty} placeholder='enter s.county'/>
      

    <label className='inputfieldlabel' style={{left:'45px', top:'200px'}}>Village</label>
    <input type='text' value={addr.village} className='inputfield pl-2' style={{left:'45px', top:'225.16px' , outline:'none'}}
    name='village' placeholder='Enter Village'/>
   
    
    <label className='inputfieldlabel' style={{left:'282.43px', top:'200px'}}>Zone</label>
    <input type='text' className='inputfield pl-2' style={{left:'266.43px', top:'225.16px' , outline:'none'}}
     name='zone'  {...useformk.getFieldProps('zone')} placeholder='enter Zone'/>
     {useformk.touched.zone && useformk.errors.zone?<p  className='inputfieldlabel text-green-400' 
           style={{left:'266.18px', top:'265.16px', color:'red'}}>{useformk.errors.zone}</p>:''}
      
      
           
            </>
          )
        }
           
        ):<p></p>
      }
    
   
     

    <p className='paragraph2'>Previous address</p>

    <label className='inputfieldlabel' style={{left:'48px', top:'356px'}}>District</label>
    <input type='text' className='inputfield pl-2' style={{left:'45px', top:'381.16px' , outline:'none'}}
    name='pdistrict' {...useformk.getFieldProps('pdistrict')} placeholder='enter district'/>
     {useformk.touched.pdistrict && useformk.errors.pdistrict?<p  className='inputfieldlabel text-green-400' 
           style={{left:'45.18px', top:'418px', color:'red'}}>{useformk.errors.pdistrict}</p>:''}
      
    <label className='inputfieldlabel' style={{left:'266.43px', top:'356px'}}>County</label>
    <input type='text' className='inputfield pl-2' style={{left:'266.43px', top:'381.16px' , outline:'none'}} 
    name='pcounty' {...useformk.getFieldProps('pcounty')} placeholder='enter county'/>
     {useformk.touched.pcounty && useformk.errors.pcounty?<p  className='inputfieldlabel text-green-400' 
           style={{left:'266.18px', top:'418px', color:'red'}}>{useformk.errors.pcounty}</p>:''}

    <label className='inputfieldlabel' style={{left:'48px', top:'431px'}}>Parish</label>
    <input type='text' className='inputfield pl-2' style={{left:'45px', top:'456.16px' , outline:'none'}}
    name='pparish'{...useformk.getFieldProps('pparish')} placeholder='enter parish'/>
     {useformk.touched.pparish && useformk.errors.pparish?<p  className='inputfieldlabel text-green-400' 
           style={{left:'45.18px', top:'493px', color:'red'}}>{useformk.errors.pparish}</p>:''}
   
       <label className='inputfieldlabel' style={{left:'266.43px', top:'431px '}}>S.County</label>
    <input className='inputfield pl-2' style={{left:'266.43px', top:'456.16px', outline:'none'}} 
    name='psubcounty' {...useformk.getFieldProps('psubcounty')}placeholder='enter s.county'/>
     {useformk.touched.psubcounty && useformk.errors.psubcounty?<p  className='inputfieldlabel text-green-400' 
           style={{left:'266.18px', top:'493px', color:'red'}}>{useformk.errors.psubcounty}</p>:''}
      

    <label className='inputfieldlabel' style={{left:'45px', top:'511px'}}>Village</label>
    <input type='text' className='inputfield pl-2' style={{left:'45px', top:'536.16px' , outline:'none'}}
    name='pvillage' {...useformk.getFieldProps('pvillage')} placeholder='Enter Village'/>
     {useformk.touched.pvillage && useformk.errors.pvillage?<p  className='inputfieldlabel text-green-400' 
           style={{left:'45.18px', top:'574px', color:'red'}}>{useformk.errors.pvillage}</p>:''}
      
    
    <label className='inputfieldlabel' style={{left:'266.43px', top:'511px'}}>Zone</label>
    <input type='text' className='inputfield pl-2' style={{left:'266.43px', top:'536.16px' , outline:'none'}} 
    name='pzone' {...useformk.getFieldProps('pzone')}placeholder='enter Zone'/>
    
       <button type='submit' className='regdivheader1btn' style={{top:'650px',background: '#316C85', color:'white', left:'588px', position:'absolute'}}>Save </button>
     
    </form>

    <p className='idheader'>Identity card</p>
        
        {foundresident?(
          
          
          <>
          <div className='idframe' style={{left:'586px', top:'66px', width:'366.7px'}} ref={printRef}>
        <img src={logo} style={{left:'13.61px' , top:'19.1px'}}  className='profilepic' alt='idcard'/>
        <p className='idcardframeh1' style={{left:'61.89px',top:'16.09px'}}>REPUBLIC OF UGANDA</p>
        <p className='idcardframeh1' style={{left:'217px',top:'16.09px'}}>{foundresident.village}</p>
        <p className='idcardframeh1' style={{left:'61.89px',top:'16.09px'}}>REPUBLIC OF UGANDA</p>
        <p className='idmoto' style={{left:'44.56px', top:'39.61px'}}>FOR GOD AND MY COUNTRY</p>
        <p className='idmoto' style={{left:'190px', top:'39.61px'}}>RESIDENT IDENTITY CARD</p>

        <img src={foundresident.Photo} className='photo round-6' style={{left:'33.61px', right:'200.02px',  top:'70.55px'}} alt='profile pic'/> 
            <label className='idlabel' style={{left:'127.49px', top:'63.12px'}}>Name</label>
            
            <p className='idvalue' style={{left:'127.49px', top:'75.5px'}}>{foundresident.firstName } {foundresident.lastName}</p>
            <label className='idlabel' style={{left:'127.49px', top:'92.83px'}}>SEX</label>
            <p className='idvalue' style={{left:'127.49px', top:'105.21px'}}>{foundresident.Gender}</p>
            <label className='idlabel' style={{left:'127.49px', top:'122.51px'}}>COUNTRY</label>
            <p className='idvalue' style={{left:'127.49px', top:'134.91px'}}>UGANDA</p>
            <label className='idlabel' style={{left:'127.49px', top:'143.12px'}}>DATE OF BIRTH</label>
            <p className='idvalue' style={{left:'127.49px', top:'164.64px'}}>{foundresident.DOB}</p>
            <label className='idlabel' style={{left:'127.49px', top:'186.9px'}}>SIGNATURE</label>
            <label className='idlabel' style={{left:'258.68px', top:'99.02px'}}>CATEGORY</label>
            <p className='idvalue' style={{left:'258.68px', top:'114.4px'}}>{foundresident.Category}</p>
            <label className='idlabel' style={{left:'258.68px', top:'131.2px'}}>DATE OF ISSUE</label>
            <p className='idvalue' style={{left:'258.68px', top:'147.8px'}}>{new Date(Date.now()).toDateString()}</p>
            <p className='idvalue' style={{left:'-19.62px', top:'115.7px', transform:'rotate(-89.11deg)'}}>{foundresident.NIN}</p>
            </div>

            <svg width="7" height="6" viewBox="0 0 7 6" fill="none"style={{left:'718px', top:'293px'}} xmlns="http://www.w3.org/2000/svg">
            <path d="M5.65236 0.335327H6.19386V0.876832H5.65236V0.335327ZM0.914186 1.41834H0.237305V1.95984H0.914186V5.34425H5.51698V1.95984H6.19386V1.41834H0.914186ZM4.97547 4.80274H1.45569V1.95984H4.97547V4.80274Z" fill="white"/>
        </svg>
          <button onClick={handleDownloadPdf} className='bg-blue-400 text-white rounded-md px-2' style={{left:'718px', top:'295px', position:'absolute'}}>Download front</button>
      <div className='idframe' style={{left:'586px', top:'328.69px',width: '366.37px'}} ref={printRefs}>
        {
          villageaddress?villageaddress.map(addr=>{
            return(<>
            <label className='idlabel' style={{left:'37.61px', top:'10.5px'}}>DISTRICT</label>
        <p className='idvalue' style={{left:'86.64px', top:'10.5px'}}>{addr.district}</p>

        <label className='idlabel' style={{left:'37.61px', top:'26.59px'}}>COUNTY</label>
        <p className='idvalue' style={{left:'86.64px', top:'26.59px'}}>{addr.county}</p>

        <label className='idlabel' style={{left:'37.61px', top:'43.91px'}}>S.COUNTY</label>
        <p className='idvalue' style={{left:'88.64px', top:'43.91px'}}>{addr.subcounty}</p>

        <label className='idlabel' style={{left:'37.61px', top:'61.24px'}}>PARISH</label>
        <p className='idvalue' style={{left:'86.64px', top:'61.24px'}}>{addr.parish}</p>

        <label className='idlabel' style={{left:'37.61px', top:'77.33px'}}>ZONE</label>
        <p className='idvalue' style={{left:'86.64px', top:'77.33px'}}>{addr.zone}</p>

        <label className='idlabel' style={{left:'37.61px', top:'93.5px'}}>VILLAGE</label>
        <p className='idvalue' style={{left:'86.64px', top:'93.5px'}}>{addr.village}</p>
            </>)
          }):<p></p>
        }
        
        <p className='idvalue' style={{left:'-19.62px', top:'115.7px', transform:'rotate(-89.11deg)'}}>{foundresident.NIN}</p>

        <img src={foundresident.Photo} style={{left:'163.68px' , top:'114.47px'}}  className='profilepic' alt='idcard'/>

        <svg width="12" height="15" viewBox="0 0 12 15" fill="none" style={{left:'45.03px',position:'absolute', top:'177.59px'}}xmlns="http://www.w3.org/2000/svg">
          <path d="M4.29241 6.40367L5.45904 5.3868C5.77804 5.10822 6.00225 4.7453 6.10289 4.34463C6.20354 3.94396 6.17603 3.52381 6.0239 3.13812L5.52639 1.87427C5.34052 1.40244 4.97256 1.01577 4.49746 0.793046C4.02236 0.57032 3.47588 0.528293 2.96935 0.675525C1.10533 1.21806 -0.32744 2.86634 0.11358 4.8236C0.40361 6.11122 0.958687 7.72746 2.01018 9.44703C3.06385 11.1707 4.26742 12.4439 5.29936 13.3388C6.85706 14.6874 9.08388 14.3505 10.5167 13.0794C10.9007 12.7388 11.1338 12.2716 11.1683 11.7731C11.2028 11.2746 11.0362 10.7824 10.7024 10.3967L9.78995 9.34266C9.51475 9.02391 9.14559 8.79079 8.72996 8.67329C8.31434 8.55579 7.87127 8.5593 7.45775 8.68335L5.95003 9.13495C5.56066 8.75267 5.21945 8.32853 4.9333 7.8711C4.6571 7.4085 4.44185 6.9153 4.29241 6.40264V6.40367Z" fill="#699BF7"/>
        </svg> 

        <p className='idvalue' style={{top:'177.69px', left:'58.77px'}}>{foundresident.Contact}</p>

        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{position:'absolute', left:'179.47px', top:'180.06px'}} xmlns="http://www.w3.org/2000/svg">
          <path d="M11.8467 6.25316C11.8467 3.38757 9.52378 1.0647 6.65819 1.0647C3.7926 1.0647 1.46973 3.38757 1.46973 6.25316C1.46973 9.11875 3.7926 11.4416 6.65819 11.4416" stroke="#699BF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1.7959 4.43713H11.5191M7.17633 1.09058C7.17633 1.09058 8.73287 3.14002 8.73287 6.2531L7.17633 1.09058ZM6.13864 11.4156C6.13864 11.4156 4.5821 9.36617 4.5821 6.2531C4.5821 3.14002 6.13864 1.09058 6.13864 1.09058V11.4156ZM1.7959 8.06906H6.65749H1.7959Z" stroke="#699BF7" strokeWidth="1.5" strokeLinecap="round" strokelinejoin="round"/>
          <path d="M11.7837 9.32313C12.04 9.48086 12.0239 9.86429 11.7604 9.89438L10.4285 10.0454L9.8313 11.2449C9.713 11.4831 9.34722 11.3663 9.28651 11.0716L8.63536 7.89838C8.58399 7.64933 8.80814 7.49264 9.02449 7.62599L11.7837 9.32313V9.32313Z" stroke="#699BF7" strokeWidth="1.5"/>
        </svg>
        <p className='idvalue' style={{left:'195.03px', top:'176.35px'}}>{foundresident.email}</p>
      
      </div>
    
                  
      </>
            
          
  ):<p>No data</p>}
   <button onClick={handleDownloadPdfs} className='bg-blue-400 text-white rounded-md px-2' style={{left:'718px', top:'560px', position:'absolute'}}>Download back</button>
     
    <Link to='/tenant'>
     <button   className='regdivheader1btn' style={{top:'650px', color:'#316C85', left:'809px', position:'absolute'}}>Cancel </button>
    </Link>
    
     </div>
     
      </div>
  
  )
}


const ID= () => {
  const[ users, setUser] = useState([])
  const [usea, setusea] = useState([])
  useEffect(()=>{
  
      try{
        axios.get(`http://localhost:5000/api/post`)
        .then((res)=>{setUser(res.data)
        console.log(res)})
      }catch(err){
        console.log(err)
      }  },[]);

  useEffect(()=>{
    
      try{
      axios.get(`http://localhost:5000/api/adddependant`, {headers:{
        Authorization:"Bearer " + localStorage.getItem('ids')
      }})
      .then((result)=>{ console.log(result.data.at(-1))
              setusea(result.data.at(-1))
      })
      .catch(err=>console.log(err))
      }
      catch(err){
        console.log(err)
      }

  },[])

  const [founduser, setfounduser] = useState([])
  auth.onAuthStateChanged((user)=>{
    if(user){
      setfounduser(users.find((person)=>person.email===user.email))
      
      
    }
    else{
      console.log('logging out the user')
    }
  })
 
  
  return (
    <div>
      
    <p className='idheader'>Identity card</p>
    <div className='idframe' style={{left:'586px', top:'66px', width:'366.7px'}}>
        <img src={logo} style={{left:'13.61px' , top:'19.1px'}}  className='profilepic' alt='idcard'/>
        <p className='idcardframeh1' style={{left:'61.89px',top:'16.09px'}}>REPUBLIC OF UGANDA</p>
        <p className='idcardframeh1' style={{left:'217px',top:'16.09px'}}>BUNGA TRADING CENTER</p>
        <p className='idcardframeh1' style={{left:'61.89px',top:'16.09px'}}>REPUBLIC OF UGANDA</p>
        <p className='idmoto' style={{left:'44.56px', top:'39.61px'}}>FOR GOD AND MY COUNTRY</p>
        <p className='idmoto' style={{left:'190px', top:'39.61px'}}>RESIDENT IDENTITY CARD</p>

        <img src={logo} className='photo round-6' style={{left:'13.61px', right:'250.02px',  top:'70.55px'}} alt='profile pic'/> 
        <label className='idlabel' style={{left:'127.49px', top:'63.12px'}}>Name</label>
        <p className='idvalue' style={{left:'127.49px', top:'75.5px'}}>{usea.firstName}</p>
        <label className='idlabel' style={{left:'127.49px', top:'92.83px'}}>SEX</label>
        <p className='idvalue' style={{left:'127.49px', top:'105.21px'}}>{usea.Gender}</p>
        <label className='idlabel' style={{left:'127.49px', top:'122.51px'}}>COUNTRY</label>
        <p className='idvalue' style={{left:'127.49px', top:'134.91px'}}>UGANDA</p>
        <label className='idlabel' style={{left:'127.49px', top:'143.12px'}}>DATE OF BIRTH</label>
        <p className='idvalue' style={{left:'127.49px', top:'164.64px'}}>{usea.DOB}</p>
        <label className='idlabel' style={{left:'127.49px', top:'186.9px'}}>SIGNATURE</label>
        <label className='idlabel' style={{left:'258.68px', top:'99.02px'}}>CATEGORY</label>
        <p className='idvalue' style={{left:'258.68px', top:'114.4px'}}>TENANT</p>
        <label className='idlabel' style={{left:'258.68px', top:'131.2px'}}>DATE OF ISSUE</label>
        <p className='idvalue' style={{left:'258.68px', top:'147.8px'}}>{Date.now()}</p>
        <p className='idvalue' style={{left:'-19.62px', top:'115.7px', transform:'rotate(-89.11deg)'}}>{founduser.NIN}</p>
    </div>
    <svg width="7" height="6" viewBox="0 0 7 6" fill="none"style={{left:'718px', top:'293px'}} xmlns="http://www.w3.org/2000/svg">
            <path d="M5.65236 0.335327H6.19386V0.876832H5.65236V0.335327ZM0.914186 1.41834H0.237305V1.95984H0.914186V5.34425H5.51698V1.95984H6.19386V1.41834H0.914186ZM4.97547 4.80274H1.45569V1.95984H4.97547V4.80274Z" fill="white"/>
        </svg>

      <div className='idframe' style={{left:'586px', top:'328.69px',width: '366.37px'}}>
        <label className='idlabel' style={{left:'37.61px', top:'10.5px'}}>DISTRICT</label>
        <p className='idvalue' style={{left:'86.64px', top:'10.5px'}}>{founduser.district}</p>

        <label className='idlabel' style={{left:'37.61px', top:'26.59px'}}>COUNTY</label>
        <p className='idvalue' style={{left:'86.64px', top:'26.59px'}}>{founduser.county}</p>

        <label className='idlabel' style={{left:'37.61px', top:'43.91px'}}>S.COUNTY</label>
        <p className='idvalue' style={{left:'88.64px', top:'43.91px'}}>{founduser.subcounty}</p>

        <label className='idlabel' style={{left:'37.61px', top:'61.24px'}}>PARISH</label>
        <p className='idvalue' style={{left:'86.64px', top:'61.24px'}}>{founduser.parish}</p>

        <label className='idlabel' style={{left:'37.61px', top:'77.33px'}}>ZONE</label>
        <p className='idvalue' style={{left:'86.64px', top:'77.33px'}}>{founduser.zone}</p>

        <label className='idlabel' style={{left:'37.61px', top:'93.5px'}}>VILLAGE</label>
        <p className='idvalue' style={{left:'86.64px', top:'93.5px'}}>{founduser.village}</p>
        <p className='idvalue' style={{left:'-19.62px', top:'115.7px', transform:'rotate(-89.11deg)'}}>{founduser.NIN}</p>

        <img src={logo} style={{left:'163.68px' , top:'114.47px'}}  className='profilepic' alt='idcard'/>

        <svg width="12" height="15" viewBox="0 0 12 15" fill="none" style={{left:'45.03px',position:'absolute', top:'177.59px'}}xmlns="http://www.w3.org/2000/svg">
          <path d="M4.29241 6.40367L5.45904 5.3868C5.77804 5.10822 6.00225 4.7453 6.10289 4.34463C6.20354 3.94396 6.17603 3.52381 6.0239 3.13812L5.52639 1.87427C5.34052 1.40244 4.97256 1.01577 4.49746 0.793046C4.02236 0.57032 3.47588 0.528293 2.96935 0.675525C1.10533 1.21806 -0.32744 2.86634 0.11358 4.8236C0.40361 6.11122 0.958687 7.72746 2.01018 9.44703C3.06385 11.1707 4.26742 12.4439 5.29936 13.3388C6.85706 14.6874 9.08388 14.3505 10.5167 13.0794C10.9007 12.7388 11.1338 12.2716 11.1683 11.7731C11.2028 11.2746 11.0362 10.7824 10.7024 10.3967L9.78995 9.34266C9.51475 9.02391 9.14559 8.79079 8.72996 8.67329C8.31434 8.55579 7.87127 8.5593 7.45775 8.68335L5.95003 9.13495C5.56066 8.75267 5.21945 8.32853 4.9333 7.8711C4.6571 7.4085 4.44185 6.9153 4.29241 6.40264V6.40367Z" fill="#699BF7"/>
        </svg>

        <p className='idvalue' style={{top:'177.69px', left:'58.77px'}}>{usea.contact}</p>

        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{position:'absolute', left:'179.47px', top:'180.06px'}} xmlns="http://www.w3.org/2000/svg">
          <path d="M11.8467 6.25316C11.8467 3.38757 9.52378 1.0647 6.65819 1.0647C3.7926 1.0647 1.46973 3.38757 1.46973 6.25316C1.46973 9.11875 3.7926 11.4416 6.65819 11.4416" stroke="#699BF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1.7959 4.43713H11.5191M7.17633 1.09058C7.17633 1.09058 8.73287 3.14002 8.73287 6.2531L7.17633 1.09058ZM6.13864 11.4156C6.13864 11.4156 4.5821 9.36617 4.5821 6.2531C4.5821 3.14002 6.13864 1.09058 6.13864 1.09058V11.4156ZM1.7959 8.06906H6.65749H1.7959Z" stroke="#699BF7" strokeWidth="1.5" strokeLinecap="round" strokelinejoin="round"/>
          <path d="M11.7837 9.32313C12.04 9.48086 12.0239 9.86429 11.7604 9.89438L10.4285 10.0454L9.8313 11.2449C9.713 11.4831 9.34722 11.3663 9.28651 11.0716L8.63536 7.89838C8.58399 7.64933 8.80814 7.49264 9.02449 7.62599L11.7837 9.32313V9.32313Z" stroke="#699BF7" strokeWidth="1.5"/>
        </svg>
        <p className='idvalue' style={{left:'195.03px', top:'176.35px'}}>{usea.email}</p>
       
       </div>
   
    </div>
  )
}




export{  Dependant, Tenant, NewUser ,Foreigner, Landlord, Identitycards}
