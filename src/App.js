import React, { useMemo } from 'react'
import coat from './imges/logo.png'
import './App.css'
import {Link} from 'react-router-dom'
const App = () => {
  return (
    <div className='App'>
      <div className='Appdiv1'>
        <h1 className='Apptitle'>
          THE REPUBLIC OF UGANDA
        </h1>
        
        <h2 className='Apptitle2'>UGVillage Register</h2>
        <h4 className='Apptitle1' style={{width: '276px', height: '28px', left: '633px', top: '344px',}}>
            your friendly Registry
        </h4>
      </div>
      
      <img src={coat} className='Appimg1' alt='coat of arms' />
      <Link to='/useraccount' className='Appbtn1 text-center text-slate-200 py-2'>
        <span className='pt-2'>Get Started</span>
      </Link>
      <Link to='/register'>
        <button className='Appbtn1 text-center text-slate-200 py-2'>
          <span className='pt-2'>Get Started</span>
        </button>
      </Link>
      
    </div>
  )
}


export default App