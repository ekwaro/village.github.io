import logo from '../imges/logo.png'
import { Dashboard } from './Dashboard'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
const Residents = () => {
    return (
      <div>
        <h1 className='Dashboardoverview' style={{top: '152px'}}>Resident</h1>
        <p className='Dashboardoverviewdesc'>View Individual Info</p>
        <div className='regformframe'>
        <p className='accounth1' style={{top:'78px', left:'395px'}}>Dominic Ekwaro</p>
        <p className='accounth1' style={{left:'66px', top:'156px'}}>Basic informtion</p>
        
         <img src={logo} className='imgaccount' alt='profilepic' />
         <svg width="36" height="36" viewBox="0 0 36 36" fill="none" style={{ left:'509px', position:'absolute'}} xmlns="http://www.w3.org/2000/svg">
            <path d="M30.375 9.14062H25.5938L24.4547 5.94844C24.376 5.73 24.2318 5.54119 24.0418 5.4078C23.8517 5.2744 23.6251 5.20292 23.393 5.20313H12.607C12.1324 5.20313 11.707 5.50195 11.5488 5.94844L10.4062 9.14062H5.625C4.07109 9.14062 2.8125 10.3992 2.8125 11.9531V27.9844C2.8125 29.5383 4.07109 30.7969 5.625 30.7969H30.375C31.9289 30.7969 33.1875 29.5383 33.1875 27.9844V11.9531C33.1875 10.3992 31.9289 9.14062 30.375 9.14062ZM18 25.1719C14.8922 25.1719 12.375 22.6547 12.375 19.5469C12.375 16.4391 14.8922 13.9219 18 13.9219C21.1078 13.9219 23.625 16.4391 23.625 19.5469C23.625 22.6547 21.1078 25.1719 18 25.1719ZM14.625 19.5469C14.625 20.442 14.9806 21.3004 15.6135 21.9334C16.2464 22.5663 17.1049 22.9219 18 22.9219C18.8951 22.9219 19.7536 22.5663 20.3865 21.9334C21.0194 21.3004 21.375 20.442 21.375 19.5469C21.375 18.6518 21.0194 17.7933 20.3865 17.1604C19.7536 16.5275 18.8951 16.1719 18 16.1719C17.1049 16.1719 16.2464 16.5275 15.6135 17.1604C14.9806 17.7933 14.625 18.6518 14.625 19.5469Z" fill="#699BF7"/>
            </svg>
            <div className='idforresident' style={{left:'54px', top:'189px'}}>
              <label className='idlabelresident' style={{top:'13px', left:'21px'}}>Full Name</label>
              <p className='idvalueresident' style={{left:'146px', top:'13px'}}>Mukasa Sanon</p>
              
              <label className='idlabelresident' style={{top:'47px', left:'21px'}}>Email</label>
              <p className='idvalueresident' style={{left:'146px', top:'47px'}}>dominic@gmail.com</p>
          
              <label className='idlabelresident' style={{top:'82px', left:'21px'}}>Gender</label>
              <p className='idvalueresident' style={{left:'146px', top:'82px'}}>Male</p>
       
              <label className='idlabelresident' style={{top:'116px', left:'21px'}}>Occupation</label>
              <p className='idvalueresident' style={{left:'146px', top:'116px'}}>Boda Ridder</p>
              
  
              <label className='idlabelresident' style={{top:'151px', left:'21px'}}>ID</label>
              <p className='idvalueresident' style={{left:'146px', top:'151px'}}>1234567765679</p>
              
            </div>

            <p className='accounth1' style={{left:'56px', top:'393px'}}>Related people</p>
            <img src={logo}className='imgrelatedframe' style={{left:'63px', top:'425px'}} alt='related people'/>
            <img src={logo}className='imgrelatedframe' style={{left:'136px', top:'425px'}} alt='related people'/>
  
           <p className='accounth1' style={{left:'531px', top:'156px'}}>Address</p>
            
           <div className='idforresident'>
              <label className='idlabelresident' style={{top:'13px', left:'21px'}}>District</label>
              <p className='idvalueresident' style={{left:'146px', top:'13px'}}>Kampala</p>
              
              <label className='idlabelresident' style={{top:'36px', left:'21px'}}>county</label>
              <p className='idvalueresident' style={{left:'146px', top:'36px'}}>Naakawa</p>
          
              <label className='idlabelresident' style={{top:'65px', left:'21px'}}>S.county</label>
              <p className='idvalueresident' style={{left:'146px', top:'65px'}}>Nakawa</p>
       
              <label className='idlabelresident' style={{top:'96px', left:'21px'}}>Parish</label>
              <p className='idvalueresident' style={{left:'146px', top:'96px'}}>Tunder</p>
              
  
              <label className='idlabelresident' style={{top:'123px', left:'21px'}}>Zone</label>
              <p className='idvalueresident' style={{left:'146px', top:'123px'}}>Kampa</p>
              <label className='idlabelresident' style={{top:'156px', left:'21px'}}>village</label>
              <p className='idvalueresident' style={{left:'146px', top:'156px'}}>Kitagobwa</p>
              
                          
           </div>
           <button className='idbtns' style={{left:'512px', top:'411px', background:'#F5A8A8'}}>Edit</button>
           <button className='idbtns' style={{left:'629px', top:'411px', background:'#59DF43'}}>Transfer</button>
           <button className='idbtns' style={{left:'747px', top:'411px', background:'#F24E1E'}}>Red flag</button>
           <button className='idbtns' style={{left:'547px', top:'479px', background:'#10AA85'}}>Deactivate</button>
           <button className='idbtns' style={{left:'696px', top:'479px', background:'#316C85'}}>Identity card</button>    
  
        </div>        
      </div>
    )
  }
  
  const  Category= () => {
    return (
      <div className=''>
        <Dashboard/>
        <h1 className='Dashboardoverview' style={{top: '152px'}}>Category</h1>
        <p className='Dashboardoverviewdesc'>Classify residents</p>
        <div className='classifyresidentstype '>

          <input style={{left:'14px' ,top:'14px', position:'absolute', outline:'none',}} className='bg-gray-200 rounded' placeholder='Type' type='text'/>
          <button className='classifysavebtn'>save</button>
        </div>
        <div className='classifyresframe'>
          <div className='iddivclassify'>
            <svg width="13" height="12" viewBox="0 0 13 12" styles={{position:'absolute',top:'1px',left:'1px'}} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_149_400)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.29005 0.939331C6.3907 0.939331 6.48723 0.975349 6.5584 1.03946C6.62958 1.10358 6.66956 1.19053 6.66956 1.2812V9.34455L9.05741 7.19282C9.12867 7.12863 9.22532 7.09257 9.3261 7.09257C9.42688 7.09257 9.52353 7.12863 9.59479 7.19282C9.66605 7.25702 9.70608 7.34408 9.70608 7.43487C9.70608 7.52565 9.66605 7.61272 9.59479 7.67691L6.55874 10.4119C6.52349 10.4437 6.48161 10.469 6.4355 10.4862C6.3894 10.5034 6.33997 10.5123 6.29005 10.5123C6.24013 10.5123 6.19071 10.5034 6.1446 10.4862C6.09849 10.469 6.05662 10.4437 6.02136 10.4119L2.98532 7.67691C2.91406 7.61272 2.87402 7.52565 2.87402 7.43487C2.87402 7.34408 2.91406 7.25702 2.98532 7.19282C3.05658 7.12863 3.15323 7.09257 3.25401 7.09257C3.35479 7.09257 3.45144 7.12863 3.5227 7.19282L5.91055 9.34455V1.2812C5.91055 1.19053 5.95053 1.10358 6.0217 1.03946C6.09287 0.975349 6.1894 0.939331 6.29005 0.939331Z" fill="#316C85"/>
            </g>
            <defs>
            <clipPath id="clip0_149_400">
            <rect width="12.1442" height="10.9398" fill="white" transform="translate(0.217773 0.255615)"/>
            </clipPath>
            </defs>
            </svg>

            <p className='idclassify' style={{top:'21.88px' ,left:'48.58px'}}>ID</p>


          </div>
          <div>
            <p className='idcategoryclassify' style={{top:'21.88px', left:'165.18px'}}>Category</p>
          </div>
          <p className='idcategoryclassify' style={{top:'21.88px', left:'550px'}}>ACTION</p>
        
        </div>

        

          
        
      </div>
    )
  }
  

  
  const RedFlag = () => {
    return (
      <div>
        <Dashboard/>
        <h1 className='Dashboardoverview' style={{top: '152px'}}>Red Flags</h1>
        <p className='Dashboardoverviewdesc'>Improve security</p>
       
        <div className='ten'>
          <img className='redflagimg' src={logo} alt='profilepic'/>
          <label className='redflaglabel' style={{left:'104.82px', top:'14.68px'}}>Name</label>
          <p className='redflagvalue' style={{left:'104.82px', top:'45.86px'}}>Snon Kibule</p>

          <label className='redflaglabel' style={{left:'291.63px', top:'14.68px'}}>ID</label>
          <p className='redflagvalue' style={{left:'291.82px', top:'45.86px'}}>#334567t43</p>

          <label className='redflaglabel' style={{left:'423.44px', top:'14.68px'}}>Gender</label>
          <p className='redflagvalue' style={{left:'423.44px', top:'45.86px'}}>Male</p>

          <label className='redflaglabel' style={{left:'601.82px', top:'14.68px'}}>Status</label>
          <p className='redflagvalue' style={{left:'601.82px', top:'45.86px', color:'red'}}>Red Flag</p>

          <label className='redflaglabel' style={{left:'811.82px', top:'14.68px'}}>Action</label>
          <p className='redflagvalue' style={{left:'811.82px', top:'45.86px'}}><button className='text-white bg-green-600 px-3 py-1 rounded'>view</button></p>
        </div>
        


      </div>
    )
  }
  

 
 const ResidentList = () => {
  let ids
  const navigate = useNavigate()
  
  const[residents, setresidents] = useState([]);

  const [Id, setId] = useState('')
  if(Id !==''){
    ids = ''
    ids = Id
    
    navigate('/individual')
    setId('')
  }
  
  
const[delid, setdelid] = useState('');

const deldata=()=>{

  if(delid){
    axios.delete(`http://localhost:5000/api/delete/${delid}`)
    .then((resp)=>console.log(resp))
    .catch(err=>alert(err)) 
   setdelid('')
  }else{
    alert('Data deletion cancelled')
  }
  
}
if(delid){
  deldata()
}


 
  useEffect(()=>{
    axios.get('http://localhost:5000/api/getforeigner', {headers:{
      Authorization: "Bearer " + localStorage.getItem('ids')
    }})
    .then(result=>setmanyitems(result.data))
    .catch(err=>console.log(err))
  },[])
  const [manyItems, setmanyitems] = useState('')
  useEffect(()=>{
    if(manyItems){
      setresidents( manyItems.filter(item=>item.admin === localStorage.getItem('useremail')))
    }
  },[manyItems]) 

  let itemsPerPage = 13
  
  const [currentItems, setCurrentitems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset]= useState(0)
  let counter = itemOffset + 1
 
  useEffect(()=>{
    const endOffset = itemOffset + itemsPerPage
    console.log(`loading items from ${itemOffset} to${endOffset}`)
    setCurrentitems(residents.slice(itemOffset,endOffset))
    setPageCount(Math.ceil(residents.length /itemsPerPage))
  }, [itemOffset,itemsPerPage, residents])
  const handlePageClick = (event)=>{
    const newOffset = (event.selected * itemsPerPage) % residents.length
    console.log(`user requested page number ${event.selected}, which is offset ${newOffset}`)
    setItemOffset(newOffset)
  }
   return (
     <div>
       <Dashboard/>
       <h1 className='Dashboardoverview' style={{top: '152px'}}>Resident</h1>
        <p className='Dashboardoverviewdesc'>Resident Lists</p>
       <div className='residentlist'>
         
         <table className='table-auto '>
          <thead className=''>
            <tr className='p-2' >
             <th className='px-6'>NO</th> 
            <th className=' px-6 '>ID</th>
            <th className=' px-6 '>Name</th>
            <th className=' px-6 ' >Gender</th>
            <th className=' px-6 ' >Telephone</th>
            <th className=' px-6 ' >Occupation</th>
            <th className=' px-6 ' >Action</th>
            </tr>
         
          </thead>
          <tbody className='mt-15'>
         
         {currentItems && currentItems.map((resident)=>{
          return(
            <>
            <tr className='' style={{top:'12.48px'}}>
            <td className='px-4 text-center font-sans'>{counter++} .</td>
            
            <td className='px-6 py-2 font-sans text-sm'>{resident._id}</td>
           
           <td className='px-6 font-sans text-sm' >{resident.firstName}  { resident.lastName}</td>
           
           <td className='font-sans text-sm text-center' >{resident.Gender}</td>
           
           <td className='font-sans text-sm text-center'>{resident.Contact}</td>
           
           <td className='px-6 font-sans text-sm'>{resident.Occupation}</td>

       
           <td className='flex flex-row justify-between space-x-2'>
           <button onClick={()=>setId(resident._id)} className='residentlistbtn mr-2 w-auto text-white text-xs font-sans px-2 bg-green-400 mb-2' style={{left:'795px'}}>view</button>
           <button onClick={()=>setdelid(resident._id) } className='residentlistbtn  w-auto text-white text-xs font-sans px-3  bg-red-400 mb-2' style={{left:'829.35px'}}>Delete</button>   
           </td>
           </tr>
           </>
          )
         })
         
         
         }
         </tbody>
         </table>
        </div> 
        <div className='residentlistpagination flex-col' style={{position:'absolute',width:'500px', top:'950px' , left:'495px'}}>
        <ReactPaginate 
        breakLabel='...'
         nextLabel ="next"
         onPageChange={handlePageClick} pageRangeDisplayed={5} 
         containerClassName={"flex flex-row justify-between items-center"} 
        pageCount={pageCount} previousLabel="previous" renderOnZeroPageCount={null}
        
        />

        </div>
       
        </div>
         )
 }

 const GeneralSetting = ({setNext}) => {
    return (
      <div>
        <Dashboard/>
        <h1 className='Dashboardoverview font-serif' style={{top: '152px'}}>General Settings</h1>
        <p className='Dashboardoverviewdesc font-serif'>Manage your settings</p>
        <button className='generalsettingsbtn'>Cancel</button>
        <div className='generalsettingsview'>
          
            
            <div  className='cursor-pointer'>
              <Link to='/useraccount'>
                <p className='generalsettingheader' style={{left:'157px', top:'153px'}} >Account</p>
                <p className='generalsettingsubheader' style={{top:'191px', left:'108px' }}>Manage your account</p>
                <svg width="66" height="66" viewBox="0 0 66 66" style={{left:'157px', top:'84px', position:'absolute'}} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M66 32.967C66 14.7675 51.216 0 33 0C14.784 0 0 14.7675 0 32.967C0 42.9908 4.554 52.0245 11.682 58.0882C11.748 58.1542 11.814 58.1543 11.814 58.2203C12.408 58.6823 13.002 59.1442 13.662 59.6062C13.992 59.8042 14.256 60.0641 14.586 60.3281C20.0395 64.0256 26.4772 66.0015 33.066 66C39.6548 66.0015 46.0925 64.0256 51.546 60.3281C51.876 60.1301 52.14 59.8703 52.47 59.6681C53.064 59.2103 53.724 58.7483 54.318 58.2863C54.384 58.2203 54.45 58.2202 54.45 58.1542C61.446 52.0204 66 42.9908 66 32.967V32.967ZM33 61.8461C26.796 61.8461 21.12 59.8661 16.434 56.5702C16.5 56.0422 16.632 55.5184 16.764 54.9904C17.1573 53.5594 17.7341 52.1854 18.48 50.9025C19.206 49.6485 20.064 48.5265 21.12 47.5365C22.11 46.5465 23.298 45.6266 24.486 44.9006C25.74 44.1746 27.06 43.6466 28.512 43.2506C29.9753 42.8562 31.4845 42.6578 33 42.6608C37.4989 42.6289 41.8326 44.3546 45.078 47.4705C46.596 48.9885 47.784 50.7705 48.642 52.8124C49.104 54.0004 49.434 55.2544 49.632 56.5702C44.7611 59.9947 38.9542 61.8367 33 61.8461ZM22.902 31.3211C22.3205 29.9897 22.028 28.55 22.044 27.0971C22.044 25.6492 22.308 24.1972 22.902 22.8773C23.496 21.5573 24.288 20.3734 25.278 19.3834C26.268 18.3934 27.456 17.6055 28.776 17.0115C30.096 16.4175 31.548 16.1535 33 16.1535C34.518 16.1535 35.904 16.4175 37.224 17.0115C38.544 17.6055 39.732 18.3975 40.722 19.3834C41.712 20.3734 42.504 21.5614 43.098 22.8773C43.692 24.1972 43.956 25.6492 43.956 27.0971C43.956 28.6151 43.692 30.0011 43.098 31.317C42.5247 32.6175 41.7196 33.8028 40.722 34.815C39.7094 35.8111 38.5242 36.6149 37.224 37.1869C34.4967 38.3077 31.4373 38.3077 28.71 37.1869C27.4098 36.6149 26.2246 35.8111 25.212 34.815C24.213 33.8175 23.4271 32.6274 22.902 31.317V31.3211ZM53.526 53.2084C53.526 53.0764 53.46 53.0104 53.46 52.8784C52.8109 50.8135 51.8541 48.8582 50.622 47.0786C49.3887 45.2858 47.8731 43.7047 46.134 42.3967C44.8058 41.3976 43.3662 40.556 41.844 39.8888C42.5365 39.4319 43.1782 38.9022 43.758 38.3089C44.742 37.3375 45.6061 36.2517 46.332 35.0749C47.7937 32.6733 48.5486 29.9083 48.51 27.0971C48.5304 25.0161 48.1262 22.9528 47.322 21.0334C46.528 19.1839 45.3852 17.5047 43.956 16.0875C42.5289 14.6851 40.8494 13.5654 39.006 12.7875C37.0834 11.9847 35.0174 11.5819 32.934 11.6036C30.8503 11.5832 28.7843 11.9875 26.862 12.7916C25.0027 13.5679 23.3191 14.7113 21.912 16.1535C20.5097 17.579 19.39 19.2572 18.612 21.0994C17.8078 23.0188 17.4036 25.0821 17.424 27.1631C17.424 28.6151 17.622 30.0011 18.018 31.317C18.414 32.703 18.942 33.957 19.668 35.1409C20.328 36.3289 21.252 37.3849 22.242 38.3749C22.836 38.9689 23.496 39.4927 24.222 39.9547C22.6951 40.6397 21.255 41.5038 19.932 42.5288C18.216 43.8488 16.698 45.4286 15.444 47.1446C14.1993 48.9169 13.2416 50.8741 12.606 52.9444C12.54 53.0764 12.54 53.2084 12.54 53.2744C7.326 47.9985 4.092 40.8788 4.092 32.967C4.092 17.0775 17.094 4.08787 33 4.08787C48.906 4.08787 61.908 17.0775 61.908 32.967C61.8994 40.5568 58.8857 47.8344 53.526 53.2084V53.2084Z" fill="#316C85"/>
                </svg>
              </Link>
              
             
            </div>
           
            <p className='generalsettingheader' style={{left:'468px', top:'153px'}} >Devices</p>
            <p className='generalsettingsubheader' style={{top:'187px', left:'423px', textAlign:'center' }}>Add and connect new devices</p>
            <svg width="66" height="66" viewBox="0 0 66 66" style={{left:'466px', top:'84px', position:'absolute'}} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M58.6668 23.8335H44.0002C43.0277 23.8335 42.0951 24.2198 41.4074 24.9074C40.7198 25.5951 40.3335 26.5277 40.3335 27.5002V55.0002C40.3335 55.9726 40.7198 56.9053 41.4074 57.5929C42.0951 58.2805 43.0277 58.6668 44.0002 58.6668H58.6668C59.6393 58.6668 60.5719 58.2805 61.2596 57.5929C61.9472 56.9053 62.3335 55.9726 62.3335 55.0002V27.5002C62.3335 26.5277 61.9472 25.5951 61.2596 24.9074C60.5719 24.2198 59.6393 23.8335 58.6668 23.8335ZM58.6668 27.5002V51.3335H44.0002V27.5002H58.6668Z" fill="#316C85"/>
                <path d="M51.3332 7.3335H7.33317C6.36071 7.3335 5.42808 7.7198 4.74045 8.40744C4.05281 9.09507 3.6665 10.0277 3.6665 11.0002V40.3335C3.6665 41.306 4.05281 42.2386 4.74045 42.9262C5.42808 43.6138 6.36071 44.0002 7.33317 44.0002H21.9998V47.6668H17.0865C16.5248 47.603 15.9602 47.7578 15.5096 48.0991C15.059 48.4405 14.7571 48.9422 14.6665 49.5002C14.7571 50.0581 15.059 50.5598 15.5096 50.9012C15.9602 51.2425 16.5248 51.3973 17.0865 51.3335H36.5198V50.6552H36.6665V40.3335H7.33317V11.0002H51.3332V20.1668H54.9998V11.0002C54.9998 10.0277 54.6135 9.09507 53.9259 8.40744C53.2383 7.7198 52.3056 7.3335 51.3332 7.3335Z" fill="#316C85"/>
              </svg>
          

            
              <Link to='/smsemail' className='cursor-pointer'>
              <p className='generalsettingheader' style={{left:'734px', top:'151px'}} >Email and SMS</p>
              <p className='generalsettingsubheader' style={{top:'187px', left:'734px', textAlign:'center' }}>Send bulk messages</p>
              <svg width="66" height="66" viewBox="0 0 66 66" style={{left:'804px', top:'84px', position:'absolute'}} fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.1875 49.5H8.25L8.24381 18.3686L31.8264 34.6954C32.1713 34.934 32.5807 35.0618 33 35.0618C33.4193 35.0618 33.8287 34.934 34.1736 34.6954L57.75 18.3769V37.125H61.875V16.5C61.8734 15.4065 61.4382 14.3582 60.665 13.585C59.8918 12.8118 58.8435 12.3766 57.75 12.375H8.25C7.15632 12.3761 6.10774 12.811 5.33439 13.5844C4.56104 14.3577 4.12609 15.4063 4.125 16.5V49.5C4.12664 50.5935 4.56176 51.6418 5.33499 52.415C6.10822 53.1882 7.15648 53.6234 8.25 53.625H39.1875V49.5ZM53.2104 16.5L33 30.492L12.7896 16.5H53.2104Z" fill="#316C85"/>
              <path d="M53.625 57.75C58.1813 57.75 61.875 54.0563 61.875 49.5C61.875 44.9437 58.1813 41.25 53.625 41.25C49.0687 41.25 45.375 44.9437 45.375 49.5C45.375 54.0563 49.0687 57.75 53.625 57.75Z" fill="#316C85"/>
              </svg>

              </Link>
              
            <Link to='/newuser'>
            <div className='cursor-pointer' >
              <p className='generalsettingheader' style={{left:'151px', top:'369px'}} >User</p>
              <p className='generalsettingsubheader' style={{top:'408px', left:'97px', textAlign:'center' }}>Add and manage new users</p>
              <svg width="66" height="66" viewBox="0 0 66 66" style={{left:'157px', top:'301px', position:'absolute'}} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.7187 41.4047C45.2785 40.5668 47.0638 40.0898 48.9652 40.0898H48.9716C49.165 40.0898 49.2552 39.8578 49.1134 39.7289C47.1361 37.9544 44.8773 36.5211 42.4296 35.4879C42.4039 35.475 42.3781 35.4686 42.3523 35.4557C46.3548 32.5488 48.9587 27.8244 48.9587 22.4941C48.9587 13.6641 41.8173 6.50977 33.0066 6.50977C24.1959 6.50977 17.0609 13.6641 17.0609 22.4941C17.0609 27.8244 19.6648 32.5488 23.6738 35.4557C23.648 35.4686 23.6222 35.475 23.5964 35.4879C20.7154 36.7061 18.1308 38.4527 15.9072 40.6828C13.6964 42.8896 11.9363 45.5056 10.7252 48.385C9.53351 51.2045 8.89038 54.2255 8.83024 57.2859C8.82852 57.3547 8.84058 57.4232 8.86573 57.4872C8.89087 57.5513 8.92858 57.6096 8.97663 57.6589C9.02468 57.7082 9.08211 57.7473 9.14552 57.774C9.20893 57.8007 9.27705 57.8145 9.34586 57.8145H13.2066C13.4838 57.8145 13.7158 57.5889 13.7222 57.3117C13.8511 52.3359 15.8427 47.676 19.3683 44.1439C23.0099 40.4895 27.8568 38.4785 33.0131 38.4785C36.6675 38.4785 40.1738 39.4904 43.1966 41.3853C43.2743 41.4341 43.3634 41.4616 43.4551 41.465C43.5467 41.4684 43.6377 41.4476 43.7187 41.4047ZM33.0131 33.5801C30.0611 33.5801 27.2832 32.4264 25.1884 30.3316C24.1578 29.3037 23.3407 28.0819 22.7843 26.7368C22.2279 25.3917 21.9432 23.9498 21.9464 22.4941C21.9464 19.5357 23.1002 16.7514 25.1884 14.6566C27.2767 12.5619 30.0547 11.4082 33.0131 11.4082C35.9714 11.4082 38.7429 12.5619 40.8377 14.6566C41.8683 15.6846 42.6854 16.9063 43.2418 18.2515C43.7982 19.5966 44.0829 21.0385 44.0797 22.4941C44.0797 25.4525 42.9259 28.2369 40.8377 30.3316C38.7429 32.4264 35.965 33.5801 33.0131 33.5801ZM56.7189 48.9199H51.3048V43.5059C51.3048 43.2223 51.0728 42.9902 50.7892 42.9902H47.1798C46.8963 42.9902 46.6642 43.2223 46.6642 43.5059V48.9199H41.2502C40.9666 48.9199 40.7345 49.152 40.7345 49.4355V53.0449C40.7345 53.3285 40.9666 53.5605 41.2502 53.5605H46.6642V58.9746C46.6642 59.2582 46.8963 59.4902 47.1798 59.4902H50.7892C51.0728 59.4902 51.3048 59.2582 51.3048 58.9746V53.5605H56.7189C57.0025 53.5605 57.2345 53.3285 57.2345 53.0449V49.4355C57.2345 49.152 57.0025 48.9199 56.7189 48.9199Z" fill="#316C85"/>
              </svg>

            </div>
            
            </Link>
  
            

            <div>
                <svg width="66" height="66" viewBox="0 0 66 66" style={{left:'492px', top:'301px', position:'absolute'}} fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.7163 33C29.8816 33 32.2163 30.6652 32.2163 27.5C32.2163 24.3347 29.8816 22 26.7163 22C23.5511 22 21.2163 24.3347 21.2163 27.5C21.2163 30.6652 23.5483 33 26.7163 33Z" fill="#316C85"/>
                  <path d="M55 11H11C7.96675 11 5.5 13.3127 5.5 16.1562V49.8438C5.5 52.6872 7.96675 55 11 55H55C58.0332 55 60.5 52.6872 60.5 49.8438V16.1562C60.5 13.3127 58.0332 11 55 11ZM55 49.5L11 49.4697V16.5L55 16.5303V49.5Z" fill="#316C85"/>
                  <path d="M38.5 24.75H49.5V30.25H38.5V24.75ZM41.25 35.75H49.5V41.25H41.25V35.75ZM36.9325 42.724C36.9325 38.9455 32.3235 35.0625 26.7163 35.0625C21.109 35.0625 16.5 38.9455 16.5 42.724V44H36.9325V42.724Z" fill="#316C85"/>
                </svg>
                  
                <p className='generalsettingheader' style={{left:'434px', top:'369px'}} >Identity Card</p>
                <p className='generalsettingsubheader' style={{top:'408px', left:'434px', textAlign:'center' }}>Change Template</p>
           </div>
           <div>
              <svg width="66" height="66" viewBox="0 0 66 66" style={{left:'810px', top:'301px', position:'absolute'}} fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M43.7187 41.4047C45.2785 40.5668 47.0638 40.0898 48.9652 40.0898H48.9716C49.165 40.0898 49.2552 39.8578 49.1134 39.7289C47.1361 37.9544 44.8773 36.5211 42.4296 35.4879C42.4039 35.475 42.3781 35.4686 42.3523 35.4557C46.3548 32.5488 48.9587 27.8244 48.9587 22.4941C48.9587 13.6641 41.8173 6.50977 33.0066 6.50977C24.1959 6.50977 17.0609 13.6641 17.0609 22.4941C17.0609 27.8244 19.6648 32.5488 23.6738 35.4557C23.648 35.4686 23.6222 35.475 23.5964 35.4879C20.7154 36.7061 18.1308 38.4527 15.9072 40.6828C13.6964 42.8896 11.9363 45.5056 10.7252 48.385C9.53351 51.2045 8.89038 54.2255 8.83024 57.2859C8.82852 57.3547 8.84058 57.4232 8.86573 57.4872C8.89087 57.5513 8.92858 57.6096 8.97663 57.6589C9.02468 57.7082 9.08211 57.7473 9.14552 57.774C9.20893 57.8007 9.27705 57.8145 9.34586 57.8145H13.2066C13.4838 57.8145 13.7158 57.5889 13.7222 57.3117C13.8511 52.3359 15.8427 47.676 19.3683 44.1439C23.0099 40.4895 27.8568 38.4785 33.0131 38.4785C36.6675 38.4785 40.1738 39.4904 43.1966 41.3853C43.2743 41.4341 43.3634 41.4616 43.4551 41.465C43.5467 41.4684 43.6377 41.4476 43.7187 41.4047ZM33.0131 33.5801C30.0611 33.5801 27.2832 32.4264 25.1884 30.3316C24.1578 29.3037 23.3407 28.0819 22.7843 26.7368C22.2279 25.3917 21.9432 23.9498 21.9464 22.4941C21.9464 19.5357 23.1002 16.7514 25.1884 14.6566C27.2767 12.5619 30.0547 11.4082 33.0131 11.4082C35.9714 11.4082 38.7429 12.5619 40.8377 14.6566C41.8683 15.6846 42.6854 16.9063 43.2418 18.2515C43.7982 19.5966 44.0829 21.0385 44.0797 22.4941C44.0797 25.4525 42.9259 28.2369 40.8377 30.3316C38.7429 32.4264 35.965 33.5801 33.0131 33.5801ZM56.7189 48.9199H51.3048V43.5059C51.3048 43.2223 51.0728 42.9902 50.7892 42.9902H47.1798C46.8963 42.9902 46.6642 43.2223 46.6642 43.5059V48.9199H41.2502C40.9666 48.9199 40.7345 49.152 40.7345 49.4355V53.0449C40.7345 53.3285 40.9666 53.5605 41.2502 53.5605H46.6642V58.9746C46.6642 59.2582 46.8963 59.4902 47.1798 59.4902H50.7892C51.0728 59.4902 51.3048 59.2582 51.3048 58.9746V53.5605H56.7189C57.0025 53.5605 57.2345 53.3285 57.2345 53.0449V49.4355C57.2345 49.152 57.0025 48.9199 56.7189 48.9199Z" fill="#316C85"/>
                </svg>
                <p className='generalsettinngheader' style={{left:'737px', top:'369px'}} >Personalisation</p>
                <p className='generalsettingsubheader' style={{top:'408px', left:'737px', textAlign:'center' }}>Color, themes</p>
        

           </div>
            
        </div>
        </div>
  
      
    )
  }


  const Email = () => {
    return (
      <div>
        <Dashboard/>
        
         
        
        <div className='generalsettingsview'>
          <p className='emailheader '>New email Campaign</p>
          <p className='emailfields1' style={{left:'125px', top:'63px'}}>Email from</p>
          <input className='emailinputfields pl-2' placeholder='Kits Trading Center' style={{left:'278px', top:'53px'}}/>
  
          <p className='emailfields1' style={{left:'125px', top:'147px'}}>Subject</p>
          <input className='emailinputfields pl-2' placeholder='Immumnization' style={{left:'278px', top:'137px'}}/>
  
          <p className='emailfields1' style={{left:'125px', top:'187px'}}>Email Text</p>
          <input className='emailinputfields pl-2' type='te' style={{left:'276px', top:'187px', height:'270px'}}/>
  
          <p className='emailfields1' style={{left:'125px', top:'496px'}}>Recipient</p>
          <input className='emailinputfields pl-2' placeholder='All Residents' style={{left:'278px', top:'496px'}}/>
  
          <p className='emailfields1' style={{left:'125px', top:'568px'}}>Send email</p>
          <label className='radioemailfields' style={{left:'300px', top:'558px'}}>Immediately</label>
          <input type='radio' name='email' value='email'  style={{left:'276px', top:'568px', position:'absolute'}} checked={"email"}/>
          <label className='radioemailfields'style={{left:'300px', top:'600px'}}>Later</label>
          <input type='radio' name='sms' value='sms'  style={{left:'278px', top:'608px', position:'absolute'}} />
          <button className='generalsettingsbtn' style={{top:'600px',left: '812px', background: '#316C85', color:'#FFFFFF'}}>Send</button>
  
  
        </div>
       
      </div>
    )
  }
  const Emailp =()=>{
    return(
      <div className='generalsettingsview'>
      <p className='emailheader '>New email Campaign</p>
      <p className='emailfields1' style={{left:'125px', top:'63px'}}>Email from</p>
      <input className='emailinputfields pl-2' placeholder='Kits Trading Center' style={{left:'278px', top:'53px'}}/>

      <p className='emailfields1' style={{left:'125px', top:'147px'}}>Subject</p>
      <input className='emailinputfields pl-2' placeholder='Immumnization' style={{left:'278px', top:'137px'}}/>

      <p className='emailfields1' style={{left:'125px', top:'187px'}}>Email Text</p>
      <input className='emailinputfields pl-2' type='te' style={{left:'276px', top:'187px', height:'270px'}}/>

      <p className='emailfields1' style={{left:'125px', top:'496px'}}>Recipient</p>
      <input className='emailinputfields pl-2' placeholder='All Residents' style={{left:'278px', top:'496px'}}/>

      <p className='emailfields1' style={{left:'125px', top:'568px'}}>Send email</p>
      <label className='radioemailfields' style={{left:'300px', top:'558px'}}>Immediately</label>
      <input type='radio' name='email' value='email'  style={{left:'276px', top:'568px', position:'absolute'}} checked={"email"}/>
      <label className='radioemailfields'style={{left:'300px', top:'600px'}}>Later</label>
      <input type='radio' name='sms' value='sms'  style={{left:'278px', top:'608px', position:'absolute'}} />
      <button className='generalsettingsbtn' style={{top:'600px',left: '812px', background: '#316C85', color:'#FFFFFF'}}>Send</button>


    </div>
    )

  }
  const SmsEmailHeader = ()=>{
    return (<div>
      <h1 className='Dashboardoverview' style={{top: '152px'}}>Email And SMS</h1>
      <p className='Dashboardoverviewdesc'>Send bulk emails and SMS</p>
      <Link to='/smshistory'>
      <button className='generalsettingsbtn' style={{top: '170px', left: '1306px'}}>History</button>
      </Link>
     
       <div className='cursor-pointer'>
         <Link to='/sms'>
         <label className='radioemailfields' style={{left:'827px', top:'187px'}}>SMS</label>
           <input type='radio'name='sms'  style={{left:'807px', top:'195px', position:'absolute'}}/>

         </Link>
           
        </div>
        <Link to='/smsemail'> 
          <label className='radioemailfields'style={{left:'1055px', top:'187px'}}>Email</label>
          <input type='radio'  name='email'  style={{left:'1035px', top:'195px', position:'absolute'}} />
        </Link>
       
    </div>)

  }

  const SmsEmail =()=>{
  
    return (<div>
      <Dashboard/>
      <SmsEmailHeader/>
       <Emailp/>
       
       
       
    </div>
    )
  }


  const SMS = () => {
    return (
  <div>
    <Dashboard/>
    <SmsEmailHeader/>
        
       
        <div className='generalsettingsview'>
          <p className='emailheader '>New sms Campaign</p>
          <p className='emailfields1' style={{left:'125px', top:'63px'}}>SMS from</p>
          <input className='emailinputfields pl-2' placeholder='Kits Trading Center' style={{left:'278px', top:'53px'}}/>
  
          <p className='emailfields1' style={{left:'125px', top:'147px'}}>Subject</p>
          <input className='emailinputfields pl-2' placeholder='Immumnization' style={{left:'278px', top:'137px'}}/>
  
          <p className='emailfields1' style={{left:'125px', top:'187px'}}>SMS Text</p>
          <input className='emailinputfields pl-2' type='te' style={{left:'276px', top:'187px', height:'270px'}}/>
  
          <p className='emailfields1' style={{left:'125px', top:'496px'}}>Recipient</p>
          <input className='emailinputfields pl-2' placeholder='All Residents' style={{left:'278px', top:'496px'}}/>
  
          <p className='emailfields1' style={{left:'125px', top:'568px'}}>Send sms</p>
          <label className='radioemailfields' style={{left:'300px', top:'558px'}}>Immediately</label>
          <input type='radio' name='email' value='email'  style={{left:'276px', top:'568px', position:'absolute'}} checked={"email"}/>
          <label className='radioemailfields'style={{left:'300px', top:'600px'}}>Later</label>
          <input type='radio' name='sms' value='sms'  style={{left:'278px', top:'608px', position:'absolute'}} />
          <button className='generalsettingsbtn' style={{top:'600px',left: '812px', background: '#316C85', color:'#FFFFFF'}}>Send</button>
  
  
        </div>
       
      </div>
    )
  }

  const SmsHistory= () => {
    return (
      <div>
        <Dashboard/>
        <h1 className='Dashboardoverview' style={{top: '152px'}}>Email And SMS</h1>
        <p className='Dashboardoverviewdesc'>Send bulk emails and SMS</p>
        <div className='smshistorydiv'>
          <div className='smshistoryitem' style={{top: '233px'}}>
          <svg width="44" height="45" className='smshistorymsgicon' viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.2371 33.75H5.93023L5.92617 12.5241L21.4054 23.6559C21.6317 23.8186 21.9005 23.9058 22.1757 23.9058C22.451 23.9058 22.7197 23.8186 22.946 23.6559L38.4212 12.5297V25.3125H41.1287V11.25C41.1277 10.5044 40.8421 9.7897 40.3345 9.26249C39.827 8.73529 39.1389 8.43862 38.4212 8.4375H5.93023C5.21236 8.43824 4.52409 8.7348 4.01648 9.26208C3.50887 9.78937 3.22337 10.5043 3.22266 11.25V33.75C3.22373 34.4956 3.50934 35.2103 4.01687 35.7375C4.52441 36.2647 5.21247 36.5614 5.93023 36.5625H26.2371V33.75ZM35.4415 11.25L22.1757 20.79L8.90992 11.25H35.4415Z" fill="#316C85"/>
          <path d="M35.7137 39.375C38.7044 39.375 41.1289 36.8566 41.1289 33.75C41.1289 30.6434 38.7044 28.125 35.7137 28.125C32.723 28.125 30.2986 30.6434 30.2986 33.75C30.2986 36.8566 32.723 39.375 35.7137 39.375Z" fill="#316C85"/>
          </svg>
          <p className='smshistoryheader' style={{top:'9px', left:'84.17px'}}>Subject</p>
          <p className='historysubheader' style={{top:'47px', left:'84.17px'}}>Immumnization</p>
          <p className='historymsgtime' style={{left:'80.17px',top:'75px'}}>Time: 9:00am</p>
          <p className='smshistoryheader' style={{left:'227.05px', top:'9px'}}>Message</p>
          <p className='historysubheader' style={{left:'227.05px', top:'47px' , height:'32px'}}>Immunization is tommorrow and you attend ...</p>
          <p className='smshistoryheader' style={{left:'512.89px', top:'9px'}}>Status</p>
          <p className='historysubheader' style={{left:'512.89px', top:'47px'}}>Pending</p>
          <p className='smshistoryheader' style={{top:'9px', left:'660.80px'}}>Date</p>
          <p className='smshistoryheader' style={{top:'47px', left:'660.83px'}}>10/20/2020</p>
          <p className='smshistoryheader' style={{top:'9px', left:'833.69px'}}>ACTION</p>
          <button className='historydelbtn  rounded px-2 py-1 text-white'>Delete</button>
  
          </div>
  
          <div className='smshistoryitem' style={{top:'347px'}}>
          <svg width="44" height="45" className='smshistorymsgicon' viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.1077 22.5C20.1077 23.0594 20.3216 23.596 20.7024 23.9916C21.0833 24.3871 21.5998 24.6094 22.1383 24.6094C22.6769 24.6094 23.1934 24.3871 23.5743 23.9916C23.9551 23.596 24.169 23.0594 24.169 22.5C24.169 21.9406 23.9551 21.404 23.5743 21.0084C23.1934 20.6129 22.6769 20.3906 22.1383 20.3906C21.5998 20.3906 21.0833 20.6129 20.7024 21.0084C20.3216 21.404 20.1077 21.9406 20.1077 22.5V22.5ZM28.5688 22.5C28.5688 23.0594 28.7828 23.596 29.1636 23.9916C29.5444 24.3871 30.061 24.6094 30.5995 24.6094C31.1381 24.6094 31.6546 24.3871 32.0354 23.9916C32.4163 23.596 32.6302 23.0594 32.6302 22.5C32.6302 21.9406 32.4163 21.404 32.0354 21.0084C31.6546 20.6129 31.1381 20.3906 30.5995 20.3906C30.061 20.3906 29.5444 20.6129 29.1636 21.0084C28.7828 21.404 28.5688 21.9406 28.5688 22.5ZM11.6465 22.5C11.6465 23.0594 11.8604 23.596 12.2413 23.9916C12.6221 24.3871 13.1386 24.6094 13.6772 24.6094C14.2157 24.6094 14.7322 24.3871 15.1131 23.9916C15.4939 23.596 15.7078 23.0594 15.7078 22.5C15.7078 21.9406 15.4939 21.404 15.1131 21.0084C14.7322 20.6129 14.2157 20.3906 13.6772 20.3906C13.1386 20.3906 12.6221 20.6129 12.2413 21.0084C11.8604 21.404 11.6465 21.9406 11.6465 22.5V22.5ZM39.6191 14.8711C38.663 12.5112 37.2923 10.3931 35.5451 8.57373C33.8101 6.76493 31.7504 5.32715 29.4826 4.3418C27.1558 3.32666 24.6852 2.8125 22.1383 2.8125H22.0537C19.49 2.82568 17.0066 3.35303 14.6714 4.39014C12.423 5.38559 10.3826 6.82593 8.66391 8.63086C6.9336 10.4458 5.57558 12.5552 4.63639 14.9063C3.66336 17.3408 3.17261 19.9292 3.1853 22.5923C3.19965 25.6442 3.89473 28.6511 5.21598 31.377V38.0566C5.21598 38.5928 5.42101 39.1069 5.78597 39.486C6.15093 39.8651 6.64592 40.0781 7.16205 40.0781H13.5968C16.221 41.4506 19.1157 42.1726 22.0537 42.1875H22.1426C24.6767 42.1875 27.1347 41.6777 29.4488 40.6802C31.7051 39.7066 33.7571 38.2856 35.4901 36.4966C37.2373 34.6992 38.6123 32.5986 39.5726 30.2563C40.571 27.8306 41.0787 25.251 41.0914 22.5879C41.1041 19.9116 40.6049 17.3145 39.6191 14.8711V14.8711ZM33.2267 34.1191C30.2611 37.1689 26.3266 38.8477 22.1383 38.8477H22.0664C19.5154 38.8345 16.9813 38.1753 14.7433 36.936L14.3879 36.7383H8.43123V30.5508L8.24085 30.1816C7.04783 27.8569 6.41324 25.2246 6.40055 22.5747C6.38363 18.1934 7.99548 14.0801 10.9527 10.9819C13.9056 7.88379 17.8528 6.16992 22.0707 6.15234H22.1426C24.2579 6.15234 26.3097 6.57861 28.2431 7.42236C30.1299 8.24414 31.8222 9.42627 33.2775 10.938C34.7286 12.4453 35.8708 14.2075 36.662 16.1675C37.4827 18.1978 37.8931 20.3511 37.8846 22.5747C37.8592 26.9517 36.2051 31.0518 33.2267 34.1191V34.1191Z" fill="#316C85"/>
          </svg>
  
          <p className='smshistoryheader' style={{top:'9px', left:'84.17px'}}>Subject</p>
          <p className='historysubheader' style={{top:'47px', left:'84.17px'}}>Immumnization</p>
          <p className='historymsgtime' style={{left:'80.17px',top:'75px'}}>Time: 9:00am</p>
          <p className='smshistoryheader' style={{left:'227.05px', top:'9px'}}>Message</p>
          <p className='historysubheader' style={{left:'227.05px', top:'47px' , height:'32px'}}>Immunization is tommorrow and you attend ...</p>
          <p className='smshistoryheader' style={{left:'512.89px', top:'9px'}}>Status</p>
          <p className='historysubheader' style={{left:'512.89px', top:'47px'}}>Pending</p>
          <p className='smshistoryheader' style={{top:'9px', left:'660.80px'}}>Date</p>
          <p className='smshistoryheader' style={{top:'47px', left:'660.83px'}}>10/20/2020</p>
          <p className='smshistoryheader' style={{top:'9px', left:'833.69px'}}>ACTION</p>
          <button className='historydelbtn  rounded px-2 py-1 text-white'>Delete</button>
  
          </div> 
          
  
        </div>
  
      </div>
    )
  }
  
  
 
  

  export{ Residents,Emailp, RedFlag, SmsEmail, GeneralSetting, SMS, Email,SmsHistory,ResidentList, Category}