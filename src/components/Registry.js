import React from 'react'
import { Link } from 'react-router-dom'
import './First.css'
import coat from '../imges/logo.png'

const Registry = () => {
  return (
    <div className='App'>
        <h2 className='Registryheader'>UGVillage Register</h2>
        <h4 className='Registrysubheader'>
            your friendly Registry
        </h4>
        <img  src={coat} alt='coat of arms' style={{position: 'absolute',width: '244px', height: '260px',left: '344px', top: '361px'}}/>
        <button className='helpbutton'><span className='text-center text-white'>help</span></button>
        <button className='safemode'><span className='text-center text-white'>safe mode</span></button>
        <div className='regdiv'>
            <label className='regdivheader1'>Register new Account</label>
            <label className='regdivheader2'>Fill all the fields</label>
            <Link to='/login' className='regdivheader1btn '>Login</Link>
            <>
                <label className='inputfieldlabel' style={{left:'64px', top:'155px'}}>Name<span>name</span></label>
                <input type='text' className='inputfield pl-2' style={{left:'64px', top:'180.16px' , outline:'none'}} placeholder='name'/>
            </>
            <>
                <label className='inputfieldlabel' style={{left:'282.43px', top:'155px'}}>Last Name</label>
                <input type='text' className='inputfield pl-2' style={{left:'282.43px', top:'180.16px' , outline:'none'}} placeholder='Lastname'/>
            </>
            <>
                <label className='inputfieldlabel' style={{left:'64px', top:'230px'}}>Password</label>
                <input type='password' className='inputfield pl-2' style={{left:'64px', top:'259px' ,width:'433px', outline:'none'}} placeholder='password'/>
            </>
            <>
                <label className='inputfieldlabel' style={{left:'63px', top:'313px '}}>Nationality</label>
                <input type='text' className='inputfield pl-2' style={{left:'64px', top:'336.59px', width:'123.71px' , outline:'none'}} placeholder='name'/>
            </>
            <>
                <label className='inputfieldlabel' style={{left:'201.71px', top:'313px'}}>Gender</label>
                <input className='inputfield pl-2' style={{left:'201.71px', top:'336.59px' ,width:'123.71px', outline:'none'}} placeholder='name'/>
            </>
            <>
                <label className='inputfieldlabel' style={{left:'340.42px', top:'313px'}}>Date of birth</label>
                <input type='date' className='inputfield pl-2' style={{left:'340.42px', top:'336.59px' , width:'155.59px', outline:'none'}} placeholder='name'/>
            </>
            <>
                <label className='inputfieldlabel' style={{left:'64px', top:'401px'}}>Contact</label>
                <input type='tel' className='inputfield pl-2' style={{left:'64px', top:'428.16px' , outline:'none'}} placeholder='Enter contact'/>
            </>
            <>
                <label className='inputfieldlabel' style={{left:'282.43px', top:'403px'}}>NIN</label>
                <input type='text' className='inputfield pl-2' style={{left:'282.43px', top:'428.16px' , outline:'none'}} placeholder='enter NIN'/>
            </>

            <Link to='/register2' className='inputnxtbtn text-center text-white pt-2' style={{left:'127px', top:'511px'}}>next</Link>
            
        </div>
    </div>
  )
}

const Registry2 = () => {
  return (
    <div className='App'>
        <h2 className='Registryheader'>UGVillage Register</h2>
        <h4 className='Registrysubheader'>
            your friendly Registry
        </h4>
        <img  src={coat} alt='coat of arms' style={{position: 'absolute',width: '244px', height: '260px',left: '344px', top: '361px'}}/>
        <button className='helpbutton'><span className='text-center text-white'>help</span></button>
        <button className='safemode'><span className='text-center text-white'>safe mode</span></button>
        <div className='regdiv'>
            <label className='regdivheader1'>Register new Account</label>
            <label className='regdivheader2'>Fill all the fields</label>
            <>
                <label className='inputfieldlabel' style={{left:'64px', top:'155px'}}>District</label>
                <input type='text' className='inputfield pl-2' style={{left:'64px', top:'180.16px' , outline:'none'}} placeholder='enter district'/>
            </>
            <>
                <label className='inputfieldlabel' style={{left:'282.43px', top:'155px'}}>County</label>
                <input type='text' className='inputfield pl-2' style={{left:'282.43px', top:'180.16px' , outline:'none'}} placeholder='enter county'/>
            </>
            <>
                <label className='inputfieldlabel' style={{left:'64px', top:'230px'}}>Parish</label>
                <input type='text' className='inputfield pl-2' style={{left:'64px', top:'259px' , outline:'none'}} placeholder='enter parish'/>
            </>
            <>
                <label className='inputfieldlabel' style={{left:'282.43px', top:'230px '}}>S.County</label>
                <input className='inputfield pl-2' style={{left:'282.43px', top:'259px', outline:'none'}} placeholder='enter s.county'/>
            </>
           
            <>
                <label className='inputfieldlabel' style={{left:'64px', top:'308px'}}>Village</label>
                <input type='text' className='inputfield pl-2' style={{left:'64px', top:'332.16px' , outline:'none'}} placeholder='Enter Village'/>
            </>
            <>
                <label className='inputfieldlabel' style={{left:'282.43px', top:'308px'}}>Zone</label>
                <input type='text' className='inputfield pl-2' style={{left:'282.43px', top:'332.16px' , outline:'none'}} placeholder='enter Zone'/>
            </>

            <Link to='/login' className='inputnxtbtn text-center text-white pt-2' style={{left:'127px', top:'416px'}}>Register</Link>
            <Link to='/login' className='regdivheader1btn text-center pt-2' style={{left:'211px', top:'518px'}}>Register</Link>
            
        </div>

    </div>
  )
}


const Login = () => {
  return (
    <div className='App'>
      <h2 className='Registryheader'>UGVillage Register</h2>
        <h4 className='Registrysubheader'>
            your friendly Registry
        </h4>
        <img  src={coat} alt='coat of arms' style={{position: 'absolute',width: '244px', height: '260px',left: '344px', top: '361px'}}/>
        <button className='helpbutton'><span className='text-center text-white'>help</span></button>
        <button className='safemode'><span className='text-center text-white'>safe mode</span></button>

        <div className='regdiv'>
            <label className='regdivheader1'>Connect to your Account</label>
            <p className='loginheader2' style={{left:'63px', top:'98px'}}>Always disconnect when you are done</p>
            <>
            <label className='inputfieldlabel' style={{left:'95px', top:'155.12px'}}>Email</label>
            <input type='email' className='inputfield pl-2' style={{left:'95px', top:'185.87px', width:'371.71px'}}/>
            </>
            <>
            <label className='inputfieldlabel' style={{left:'95px', top:'258.48px'}}>Password</label>
            <input type='password' className='inputfield pl-2' style={{left:'95px', top:'289.24px', width:'371.71px'}}/>
            </>
            <p className='forgotpassword'>forgot password</p>
            <label className='remember'>Remember me on this computer</label>
            <input type='checkbox' className='check' checked/>
            <button className='inputnxtbtn text-white' style={{left:'118px', top:'454.65px'}}>connect</button>
            <Link to='/register' className='regdivheader1btn text-center pt-2' style={{left:'210px', top:'548.82px'}}>Register</Link>

        </div>
    </div>

  )
}



export {Registry, Registry2, Login}