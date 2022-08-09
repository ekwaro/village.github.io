import React, { useEffect, useState } from 'react'
import logo from '../imges/logo.png'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import {db} from '../config'
import { Dashboard } from './Dashboard'
import { addDoc, collection, getDocs, query } from 'firebase/firestore'
import { useFormik } from 'formik'



const UserAccount = () => {
  return (
    
      <div>
        <Dashboard/>
        <h1 className='Dashboardoverview' style={{top: '152px'}}>Settings</h1>
        <p className='Dashboardoverviewdesc'>Manage your Account</p>
        <div className='regformframe flex '>
          <img src={logo} className='imgaccount' alt='profilepic'        
          />

          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" style={{ left:'509px', position:'absolute'}} xmlns="http://www.w3.org/2000/svg">
          <path d="M30.375 9.14062H25.5938L24.4547 5.94844C24.376 5.73 24.2318 5.54119 24.0418 5.4078C23.8517 5.2744 23.6251 5.20292 23.393 5.20313H12.607C12.1324 5.20313 11.707 5.50195 11.5488 5.94844L10.4062 9.14062H5.625C4.07109 9.14062 2.8125 10.3992 2.8125 11.9531V27.9844C2.8125 29.5383 4.07109 30.7969 5.625 30.7969H30.375C31.9289 30.7969 33.1875 29.5383 33.1875 27.9844V11.9531C33.1875 10.3992 31.9289 9.14062 30.375 9.14062ZM18 25.1719C14.8922 25.1719 12.375 22.6547 12.375 19.5469C12.375 16.4391 14.8922 13.9219 18 13.9219C21.1078 13.9219 23.625 16.4391 23.625 19.5469C23.625 22.6547 21.1078 25.1719 18 25.1719ZM14.625 19.5469C14.625 20.442 14.9806 21.3004 15.6135 21.9334C16.2464 22.5663 17.1049 22.9219 18 22.9219C18.8951 22.9219 19.7536 22.5663 20.3865 21.9334C21.0194 21.3004 21.375 20.442 21.375 19.5469C21.375 18.6518 21.0194 17.7933 20.3865 17.1604C19.7536 16.5275 18.8951 16.1719 18 16.1719C17.1049 16.1719 16.2464 16.5275 15.6135 17.1604C14.9806 17.7933 14.625 18.6518 14.625 19.5469Z" fill="#699BF7"/>
          </svg>

          <p className='accounth1' style={{top:'78px', left:'395px'}}>Chairperson</p>

          <p className='accounth1' style={{left:'66px', top:'165px'}}>account informtion</p>
          <div className='idframe' style={{left:'54px', top:'213px', width:'357px', height:'234px'}}>
            
            <label className='idlabel2' style={{top:'12px', left:'16px'}}>Full Name</label>
            <p className='idvalue2' style={{left:'150px', top:'12px'}}>Mukasa Sanon</p>
            <div className='accountline' style={{top:'48.99px'}}></div>
            
            <label className='idlabel2' style={{top:'61px', left:'16px'}}>Email</label>
            <p className='idvalue2' style={{left:'150px', top:'61px'}}>dominic@gmail.com</p>
            <div className='accountline' style={{top:'93.99px'}}></div>

            <label className='idlabel2' style={{top:'110px', left:'16px'}}>Gender</label>
            <p className='idvalue2' style={{left:'150px', top:'110px'}}>Male</p>
            <div className='accountline' style={{top:'137.99px'}}></div>

            <label className='idlabel2' style={{top:'151px', left:'16px'}}>Full Name</label>
            <p className='idvalue2' style={{left:'150px', top:'151px'}}>Mukasa Sanon</p>
            <div className='accountline' style={{top:'181.99px'}}></div>

            <label className='idlabel2' style={{top:'195px', left:'16px'}}>ID</label>
            <p className='idvalue2' style={{left:'150px', top:'195px'}}>1234567765679</p>

            
          </div>
          <p className='accounth1' style={{left:'531px', top:'165px'}}>Change password</p>
          <label className='inputfieldlabel' style={{left:'532px', top:'212px', width:'126px'}}>Current Password</label>
          <input type='password' className='inputfield pl-2' style={{left:'532px', top:'242px' ,width:'433px', outline:'none'}} placeholder='password'/>
          
          <label className='inputfieldlabel ' style={{left:'532px', top:'296px'}}>New Password</label>
          <input type='password' className='inputfield pl-2' style={{left:'532px', top:'325px' ,width:'433px', outline:'none'}} placeholder='password'/>
          
          <label className='inputfieldlabel ' style={{left:'532px', top:'380px', width:'126px'}}>Confirm Password</label>
          <input type='password' className='inputfield pl-2' style={{left:'532px', top:'409px' ,width:'433px', outline:'none'}} placeholder='password'/>

          <button className='submitbtn text-white' style={{left:'346.14px', top:'503px'}}>save changes</button>

        
            
       </div>
        
     
    </div>

    
  )
}

export { UserAccount }

