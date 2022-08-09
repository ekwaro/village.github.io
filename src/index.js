import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserAccount} from './components/Identitycard';
import {First,ID, Residentsf} from './components/First';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import {Registry, Registry2, Login} from './components/Registry';
import { NewUser } from './components/Userregister';
import {Residents, Category,ResidentList,Componentlists, RedFlag, GeneralSetting} from './components/Componentlist'
import { ToastContainer } from 'react-toastify';
import {SMS, SmsHistory,SmsEmail, Email} from './components/Componentlist'
import { Tenant, Landlord, Dependant, Worker, Foreigner, Identitycards } from './components/Userregister';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/*Here is where all the navigation routes for the app is put */}
    <BrowserRouter>
      <ToastContainer position='top center'/>
      <Routes>

        <Route path='/individual' element={<Residentsf/>}></Route>
        <Route path="/" element={<App/>}></Route>
        <Route path="/id" element={<ID/>}></Route>
        <Route path='/residentlist' element={<ResidentList/>}></Route>
        <Route path='/firstpage' element={<First />}></Route>
        <Route path='/category' element={<Category/>}></Route>
        <Route path='/identitycard' element={<Identitycards/>}></Route>
        <Route path='/generalsetting' element={<GeneralSetting/>}></Route>
        <Route path='/email' element={<Email/>}></Route>
        <Route path='/dependant' element={<Dependant/>}></Route>
        <Route path='/landlord' element={<Landlord/>}></Route>
        <Route path='/tenant' element={<Tenant/>}></Route>
        <Route path='/foreigner' element={<Foreigner/>}></Route>
        <Route path='/sms' element={<SMS/>}></Route>
        <Route path='/newuser' element={<NewUser/>}></Route> 
        <Route path='/smsemail' element={<SmsEmail/>}></Route>
        <Route path='/smshistory' element={<SmsHistory/>}></Route>
        <Route path='/register' element={<Registry/>}>First</Route>
        <Route path='/registers' element={<Registry2/>}>First</Route>
        <Route path='/login' element={<Login/>}>First</Route>
        <Route path='/dependant' element={<Dependant/>}>Admin page for registering2</Route>
        <Route path='/useraccount' element={<UserAccount/>}>Link to the User Account</Route>
        <Route path='/redflag' element={<RedFlag/>}></Route>
        <Route path='/resident' element={<Residents/>}>Link to the Resident Account</Route>
        <Route path='/dashboard' element={<Dashboard/>}>Link to the Resident Account</Route>
        
    
        
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

