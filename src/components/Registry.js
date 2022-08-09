import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './First.css'
import {useFormik} from 'formik'
import coat from '../imges/logo.png'
import * as Yup from 'yup'
import { createUserWithEmailAndPassword,setPersistence,browserLocalPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db , locationmodel, usermodel} from '../config'
import { addDoc, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { async } from '@firebase/util'




const Registry = () => {
    
   
    const [viewregister, setViewregister] = useState('');
   
  return (
    <div className='App'>
        <h2 className='Registryheader'>UGVillage Register</h2>
        <h4 className='Registrysubheader'>
            your friendly Registry
        </h4>
        <img  src={coat} alt='coat of arms' style={{position: 'absolute',width: '244px', height: '260px',left: '344px', top: '361px'}}/>
        <button className='helpbutton'><span className='text-center text-white'>help</span></button>
        <button className='safemode'><span className='text-center text-white'>safe mode</span></button>
         <Registrys/>
        
        
    </div>
  )
}
let arr1 

const Registrys = () => {
    const navigate = useNavigate()
    
    
    const formik = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            password:'',
            nationality:'',
            gender:'',
            telephone:'',
            date:'',
            nin:'',
            email:''            
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(25, "First name cannot be longer than 25 characters").required("required"),
            password: Yup.string().required("password required").min(8, "Password must be atleast 8 characters"),
            lastName: Yup.string().max(25, "last name cannot be longer than 25 characters").required("required"),
            
            nationality: Yup.string().required("Enter your nationality"),
            gender: Yup.string().required("required"),
            telephone: Yup.number("Phone number must be a number").required("Phone number is equired"),
            date: Yup.date().required("required"),
            nin: Yup.string().required("required").max(14, "NIN must be 14 characters").min(14, "NIN must be exactly 14 characters long"),
            email: Yup.string().required("email required")



        }),
        onSubmit:(values, resetForm)=>{
            console.log(values)
            if(window.navigator.onLine){
                createUserWithEmailAndPassword(auth, values.email, values.password)
                .then(usercredential =>{
                    const user = usercredential.user
               
 
              try { 
                 const users = {
                      email:values.email,firstName:values.firstName,lastName:values.lastName,nin: values.nin,
                      district:'',county:'',subcounty:'',parish:'',village:'', zone:''
                    
                 }                
                    axios.post('http://localhost:5000/api/post', users)
                    .then((res)=>{ 
                     let p = {data:res.data.nin}
                     console.log(p.data)
                     localStorage.setItem("nin", res.data.nin)
                     
                     navigate('/registers')
                     
                 })
                    .catch(err=>{console.log(err)   
                    })    
                              
                 }catch(e){
                     alert('Error adding document', e)
                 }
                 resetForm();
                
                   
                }).catch((error)=>{
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorCode, errorMessage)
                });
                
            }
            else{
                alert('No internet connection')
            }   
        }
     });
     console.log(formik.values)
  return( 
    <div>
        <div className='regdiv'>
            <Link to='/login'>
             <button  className='regdivheader1btn text-center mt-1'>Connect</button>

            </Link>
            
            <label className='regdivheader1'>Register new Account</label>
            <label className='regdivheader2'>Fill all the fields</label>
            <form onSubmit={formik.handleSubmit}>
           
            <>
                <label className='inputfieldlabel' style={{left:'64px', top:'155px'}}>First Name</label>
                <input name='firstName' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName} type='text' 
                className='inputfield pl-2' style={{left:'64px', top:'180.16px' , outline:'none'}} placeholder='name'/>
                {formik.touched.firstName && formik.errors.firstName?<p  className='inputfieldlabel text-green-400' style={{left:'64px', top:'220px', color:'red'}}>{formik.errors.firstName}</p>:''}
            </>
            <>
                <label className='inputfieldlabel' style={{left:'282.43px', top:'155px'}}>Last Name</label>
                <input name='lastName' type='text' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName}
                 className='inputfield pl-2' style={{left:'282.43px', top:'180.16px' , outline:'none'}} placeholder='Lastname'/>
                 {formik.touched.lastName && formik.errors.lastName?<p  className='inputfieldlabel text-green-400' style={{left:'282.16px', top:'220px', color:'red'}}>{formik.errors.lastName}</p>:''}

            </>
            <>
                <label className='inputfieldlabel' style={{left:'64px', top:'230px'}}>Email</label>
                <input name='email' type='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} 
                className='inputfield pl-2' style={{left:'64px', top:'259px' , outline:'none'}} placeholder='email'/>
                {formik.touched.email && formik.errors.email?<p  className='inputfieldlabel text-green-400' style={{left:'64px', top:'295px', color:'red'}}>{formik.errors.email}</p>:''}
            </>
            <>
                <label className='inputfieldlabel' style={{left:'282.43px', top:'230px'}}>Password</label>
                <input name='password' type='password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} 
                className='inputfield pl-2' style={{left:'282.43px', top:'259px' , outline:'none'}} placeholder='password'/>
                {formik.touched.password && formik.errors.password?<p  className='inputfieldlabel text-green-400' style={{left:'282.43px', top:'295px', color:'red'}}>{formik.errors.password}</p>:''}
            </>
            <>
                <label className='inputfieldlabel' style={{left:'63px', top:'313px '}}>Nationality</label>
                <input name='nationality' type='text' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nationality} 
                className='inputfield pl-2' style={{left:'64px', top:'336.59px', width:'123.71px' , outline:'none'}} placeholder='name'/>
                {formik.touched.nationality && formik.errors.nationality?<p  className='inputfieldlabel text-green-400' style={{left:'64px', top:'378px', color:'red'}}>{formik.errors.nationality}</p>:''}
            </>
            <>
                <label className='inputfieldlabel' style={{left:'201.71px', top:'313px'}}>Gender</label>
                <input name='gender' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.gender} className='inputfield pl-2' 
                style={{left:'201.71px', top:'336.59px' ,width:'123.71px', outline:'none'}} placeholder='name'/>
                {formik.touched.gender && formik.errors.gender?<p  className='inputfieldlabel text-green-400' style={{left:'201.71px', top:'378px', color:'red'}}>{formik.errors.gender}</p>:''}
            </>
            <>
                <label className='inputfieldlabel' style={{left:'340.42px', top:'313px'}}>Date of birth</label>
                <input name='date'type='date' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.date} 
                className='inputfield pl-2' style={{left:'340.42px', top:'336.59px' , width:'155.59px', outline:'none'}} placeholder='name'/>
                {formik.touched.date && formik.errors.date?<p  className='inputfieldlabel text-green-400' style={{left:'340.42px', top:'378px', color:'red'}}>{formik.errors.date}</p>:''}
            </>
            <>
                <label className='inputfieldlabel' style={{left:'64px', top:'401px'}}>Contact</label>
                <input name='telephone'type='tel'onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.telephone}
                 className='inputfield pl-2' style={{left:'64px', top:'428.16px' , outline:'none'}} placeholder='Enter contact'/>
                 {formik.touched.telephone && formik.errors.telephone?<p  className='inputfieldlabel text-green-400' style={{left:'64px', top:'477px', color:'red'}}>{formik.errors.telephone}</p>:''}
            </>
            <>
                <label className='inputfieldlabel' style={{left:'282.43px', top:'403px'}}>NIN</label>
                <input name='nin'type='text' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nin} 
                className='inputfield pl-2' style={{left:'282.43px', top:'428.16px' , outline:'none'}} placeholder='enter NIN'/>
                {formik.touched.nin && formik.errors.nin?<p  className='inputfieldlabel text-green-400' style={{left:'283.43px', top:'477px', color:'red'}}>{formik.errors.nin}</p>:''}
            </>

            <button type='submit' className='inputnxtbtn text-center text-white pt-2' style={{left:'127px', top:'511px'}}>next</button>           </form>
                   
            
        </div>

    </div>
  )
}



const Registry2 = () => {
    const navigate = useNavigate()
    console.log(localStorage.getItem('useremail'))
    const formik = useFormik({
        initialValues:{
            district:'',
            county:'',
            subcounty:'',
            parish:'',
            village:'',
            zone:''
        },
        onSubmit: (values, resetForm)=>{
            const user = {
                district: values.district,
                county: values.county,
                subcounty: values.subcounty,
                parish: values.parish,
                village:values.village,
                zone: values.zone
            }
            if(window.navigator.onLine){

            axios.put(`http://localhost:5000/api/postlocation/${arr1}`, user)
            .then((user)=>{console.log(user)
             navigate('/login')})
            .catch(err=>console.log(err))
            .finally(arr1='')
            resetForm()}
            else{
                alert('No internet connection')
            }

        },
        validationSchema: Yup.object({
            district: Yup.string('District must be a word').required("Enter a district name"),
            county:Yup.string().required('enter your county name'),
            subcounty: Yup.string("District must be a word").required("Enter subcounty"),
            parish: Yup.string('Enter your parish'),
            village:Yup.string("village must be a word").required("village required"),
            zone: Yup.string("enter valid zone").required("Enter a zone")
        })
        

    })
  return (
    <div >
        <Registry />
        <div className='regdiv'>
            <label className='regdivheader1'>Register new Account</label>
            <label className='regdivheader2'>Fill all the fields</label>
            <form onSubmit={formik.handleSubmit}>            
            <>
                <label className='inputfieldlabel' style={{left:'64px', top:'155px'}}>District</label>
                <input type='text' name='district' value={formik.values.district} className='inputfield pl-2'onChange={formik.handleChange} onBlur={formik.handleBlur}
                 style={{left:'64px', top:'180.16px' , outline:'none'}} placeholder='enter district'/>
                 {formik.touched.district && formik.errors.district?<label className='inputfieldlabel' style={{left:'64px', top:'220px', color:'red'}}>{formik.errors.district}</label>:''}
            </>
            <>
                <label className='inputfieldlabel' style={{left:'282.43px', top:'155px'}}>County</label>
                <input type='text' name='county' className='inputfield pl-2' onBlur={formik.handleBlur} value={formik.values.county}
                onChange={formik.handleChange} style={{left:'282.43px', top:'180.16px' , outline:'none'}} placeholder='enter county'/>
                {formik.touched.county && formik.errors.county?<label className='inputfieldlabel' style={{left:'282.43px', top:'220px', color:'red'}}>{formik.errors.county}</label>:''}
            </>
            <>
                <label className='inputfieldlabel' style={{left:'64px', top:'230px'}}>Parish</label>
                <input type='text' name='parish' className='inputfield pl-2' onBlur={formik.handleBlur} value={formik.values.parish}
                onChange={formik.handleChange} style={{left:'64px', top:'259px' , outline:'none'}} placeholder='enter parish'/>
                {formik.touched.parish && formik.errors.parish?<label className='inputfieldlabel' style={{left:'64px', top:'295px', color:'red'}}>{formik.errors.parish}</label>:''}
            </>
            <>
                <label className='inputfieldlabel' style={{left:'282.43px', top:'230px '}}>S.County</label>
                <input className='inputfield pl-2' name='subcounty' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.subcounty}
                 style={{left:'282.43px', top:'259px', outline:'none'}} placeholder='enter s.county'/>
                 {formik.touched.subcounty && formik.errors.subcounty?<label className='inputfieldlabel' style={{left:'282.43px', top:'295px', color:'red'}}>{formik.errors.subcounty}</label>:''}
            </>
           
            <>
                <label className='inputfieldlabel' style={{left:'64px', top:'308px'}}>Village</label>
                <input type='text' name='village' onChange={formik.handleChange} className='inputfield pl-2' onBlur={formik.handleBlur}
                value={formik.values.village} style={{left:'64px', top:'332.16px' , outline:'none'}} placeholder='Enter Village'/>
                {formik.touched.village && formik.errors.village?<label className='inputfieldlabel' style={{left:'64px', top:'373px', color:'red'}}>{formik.errors.village}</label>:''}
            </>
            <>
                <label className='inputfieldlabel' style={{left:'282.43px', top:'308px'}}>Zone</label>
                <input type='text' name='zone' onChange={formik.handleChange} className='inputfield pl-2' onBlur={formik.handleBlur} value={formik.values.zone}
                 style={{left:'282.43px', top:'332.16px' , outline:'none'}} placeholder='enter Zone'/>
              {formik.touched.zone && formik.errors.zone?<label className='inputfieldlabel' style={{left:'282.43px', top:'373px', color:'red'}}>{formik.errors.zone}</label>:''}
            </>
          
          
            <button type='submit'  className='inputnxtbtn text-center text-white pt-2' style={{left:'127px', top:'416px'}}>Register</button>
        </form>
            <button className='regdivheader1btn text-center pt-2' style={{left:'211px', top:'518px'}}>Login</button>
            
        </div>

    </div>
  )
}


const Login = () => {
    const [authe, setAuthe] = useState('false')
    const[token,setToken]=useState('')
    let p;
    if(token){
        localStorage.setItem('ids', token)
        localStorage.setItem('useremail', auth.currentUser.email)
    }
    console.log(localStorage.getItem('useremail'))
    useEffect(()=>{
        auth.onAuthStateChanged((usercred)=>{
            if(usercred){
                setAuthe(true);
                window.localStorage.setItem('authe', 'true')
                usercred.getIdToken().then(result=>{
                        setToken(result)
                    })
            }
        })
    },[])
    console.log(token)
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues:{
            email:'', password:'', rememberMe:''

        },
        onSubmit:(values)=>{
            const persistLogin=async()=>{
               
    
             await signInWithEmailAndPassword(auth, values.email, values.password)
            .then((response)=>{console.log(response.user.getIdToken().then(result=>result))
           navigate('/firstpage')})
            .catch(err=>console.log(err)) 

             
        }
        if(!window.navigator.onLine){
            alert('No internet connection')
        
        }else{
            persistLogin()
        }
      
    }
    })

  return (
    <div >
      <Registry/>
        <div className='regdiv'>
            <label className='regdivheader1'>Connect to your Account</label>
            <p className='loginheader2' style={{left:'63px', top:'98px'}}>Always disconnect when you are done</p>
            
            <form onSubmit={formik.handleSubmit}>
            <>
            <label className='inputfieldlabel' style={{left:'95px', top:'155.12px'}}>Email</label>
            <input type='email' name='email' {...formik.getFieldProps('email')} className='inputfield pl-2' style={{left:'95px', top:'185.87px', width:'371.71px'}}/>
            </>
            <>
            <label className='inputfieldlabel' style={{left:'95px', top:'258.48px'}}>Password</label>
            <input name='password' {...formik.getFieldProps('password')}type='password' className='inputfield pl-2' style={{left:'95px', top:'289.24px', width:'371.71px'}}/>
            </> 
            <p className='forgotpassword'>forgot password</p>
            <label className='remember' style={{left: '168.06px',top: '414.43px'}}>Remember me on this computer</label>
            <input type='checkbox' name='rememberMe' onChange={formik.handleChange} className='check' style={{left: '149.75px',top: '417.98px'}} value='true'/>
            <button type='submit' className='inputnxtbtn text-white' style={{left:'118px', top:'454.65px'}}>connect</button>
            </form>
            <Link to='/register'>
            <button  className='regdivheader1btn text-center pt-2' style={{left:'210px', top:'548.82px'}}>Register</button>

            </Link>
            
        </div>
    </div>

  )
}



export {Registry, Registry2, Login}