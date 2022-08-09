import React,{useState, useEffect, Fragment, useLayoutEffect, useRef} from 'react'
import logo from '../imges/logo.png'
import './First.css'
import { Dashboard } from './Dashboard'
import axios from 'axios'
import{Transition, Dialog} from '@headlessui/react'
import ReactPaginate from 'react-paginate'
import { useNavigate } from 'react-router-dom'

let ids;
const First=()=>{
  const navigate = useNavigate()
  
const[residents, setresidents] = useState([])
const [manyresidents , setmanyresi] = useState('') 
const [years, setyear] = useState([])

console.log(residents)

 useEffect(()=>{
  if (residents){
    setyear(residents.filter(resident=>(2022 - Number(resident.DOB.split('-').at(0)))<35))
  }

},[residents])
  

  let itemsPerPage = 5
  const [currentItems, setCurrentitems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset]= useState(0)
  let counter = itemOffset+1
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
  const [Id, setId] = useState('')
  if(Id !==''){
    ids = ''
    ids = Id
    navigate('/individual')
    setId('')
  }
const[delid, setdelid] = useState('');
  let result = ''
  const deldata=()=>{

    if(delid !==''){
      axios.delete(`http://localhost:5000/api/delete/${delid}`)
      .then((resp)=>console.log(resp))
      .catch(err=>alert(err)) 
     

    }else{
      alert('Data deletion cancelled')
    }
    
  }
  if(delid !==''){
    deldata()
    setdelid('')
  }
  
 
 
  useEffect(()=>{ 
    axios.get('http://localhost:5000/api/getforeigner', {headers:{
      Authorization: 'Bearer '+ localStorage.getItem('ids')
    }})
    .then(result=>{setmanyresi(result.data)} 
    )
    .catch(err=>console.log(err))
  },[])

  useEffect(()=>{
    if(manyresidents){
       
    setresidents(manyresidents.filter(resident=>
      resident.adminemail===localStorage.getItem('useremail')))
    }
  }, [manyresidents])

console.log(manyresidents)
  return(<div>
        <Dashboard/>
        <h1 className='Dashboardoverview' style={{top: '152px'}}>Overview</h1>
        <p className='Dashboardoverviewdesc'>General data view of the system</p>
        <div>
         
          <div className='Dashboardcontent' style={{left: '494.01px',top: '250px'}}>
            <svg width="31" height="30" viewBox="0 0 31 30" style={{left: '33.76px',top: '29.5px', position:'absolute'}} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.9506 21.0169H16.9334V18.9652H26.6376V12.8102H16.9334V10.7585H22.3247V4.60338H16.9334V0.5H14.777V4.60338H9.38573V10.7585H14.777V12.8102H5.07275V18.9652H14.777V21.0169H0.759766V27.172H14.777V29.2237H16.9334V27.172H30.9506V21.0169ZM20.1682 6.65508V8.70677H16.9334V6.65508H20.1682ZM11.5422 8.70677V6.65508H14.777V8.70677H11.5422ZM24.4812 14.8618V16.9135H16.9334V14.8618H24.4812ZM7.22924 16.9135V14.8618H14.777V16.9135H7.22924ZM2.91626 25.1203V23.0686H14.777V25.1203H2.91626ZM28.7941 25.1203H16.9334V23.0686H28.7941V25.1203Z" fill="black"/>
            </svg>
            <p className='linetext'>{residents.length}</p>
            <p className='line' ></p>
            <p className='linetxtabove'>General population</p>
            <p className='linetxtbelow'>Kigowa village</p>
          </div>
          <div className='Dashboardcontent' style={{left: '807.48px',top: '251.55px'}}>
            <svg width="26" height="26" viewBox="0 0 26 26" style={{left: '33.76px',top: '29.5px', position:'absolute'}} fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.8333 13.7222C23.7383 13.7228 23.644 13.7046 23.556 13.6686C23.4681 13.6327 23.388 13.5797 23.3205 13.5128L13 3.185L2.67942 13.5128C2.54126 13.6311 2.36354 13.6929 2.18177 13.6859C2.00001 13.6789 1.82759 13.6035 1.69896 13.4749C1.57034 13.3463 1.49499 13.1739 1.48797 12.9921C1.48094 12.8103 1.54277 12.6326 1.66109 12.4944L12.4944 1.66111C12.6297 1.5266 12.8128 1.4511 13.0036 1.4511C13.1944 1.4511 13.3774 1.5266 13.5128 1.66111L24.3461 12.4944C24.4455 12.5958 24.5128 12.7243 24.5396 12.8637C24.5664 13.0031 24.5515 13.1473 24.4968 13.2783C24.442 13.4093 24.3499 13.5213 24.2319 13.6003C24.1139 13.6792 23.9753 13.7216 23.8333 13.7222Z" fill="black"/>
              <path d="M13 5.62611L4.33337 14.3217V23.1111C4.33337 23.4942 4.48556 23.8616 4.75644 24.1325C5.02733 24.4034 5.39473 24.5556 5.77782 24.5556H10.8334V17.3333H15.1667V24.5556H20.2223C20.6053 24.5556 20.9727 24.4034 21.2436 24.1325C21.5145 23.8616 21.6667 23.4942 21.6667 23.1111V14.2711L13 5.62611Z" fill="black"/>
            </svg>
            <p className='linetext'>{residents.filter((resident)=>String(resident.Category).toLowerCase()==='tenant').length}</p>
            <p className='line' ></p>
            <p className='linetxtabove'>Number of Tenants</p>
            <p className='linetxtbelow'>Kigowa village</p>
          </div>
          <div className='Dashboardcontent' style={{left: '1120.95px',top: '250px'}}>
            <svg width="24" height="21" viewBox="0 0 24 21" style={{left: '33.76px',top: '29.5px', position:'absolute'}} fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.7788 9.69076L21.3333 7.56492V1.96875C21.3333 1.7947 21.2631 1.62778 21.1381 1.50471C21.013 1.38164 20.8435 1.3125 20.6667 1.3125H18C17.8232 1.3125 17.6536 1.38164 17.5286 1.50471C17.4036 1.62778 17.3333 1.7947 17.3333 1.96875V4.08803L13.1158 0.422461C12.8542 0.189082 12.3554 0 12 0C11.6446 0 11.1475 0.189082 10.8858 0.422461L0.219167 9.69199C0.0877425 9.8227 0.00973671 9.99642 0 10.1801C0.00851538 10.3405 0.068142 10.4942 0.170417 10.6194L1.0625 11.5951C1.20153 11.7179 1.37663 11.7941 1.5625 11.8125C1.72364 11.7966 1.87749 11.7384 2.00792 11.6439L2.67042 11.0697V19.6875C2.67042 20.0356 2.81089 20.3694 3.06094 20.6156C3.31099 20.8617 3.65013 21 4.00375 21H20C20.3536 21 20.6928 20.8617 20.9428 20.6156C21.1929 20.3694 21.3333 20.0356 21.3333 19.6875V11.0693L21.9963 11.6435C22.1273 11.7379 22.2814 11.7962 22.4429 11.8125C22.6271 11.7935 22.8004 11.7173 22.9375 11.5947L23.8296 10.6181C23.9253 10.4897 23.9842 10.3382 24 10.1797C23.9809 9.99771 23.9034 9.82647 23.7788 9.69076ZM12 7.21875C12.5274 7.21875 13.043 7.3727 13.4815 7.66114C13.9201 7.94958 14.2618 8.35955 14.4637 8.83921C14.6655 9.31886 14.7183 9.84666 14.6154 10.3559C14.5125 10.8651 14.2586 11.3328 13.8856 11.6999C13.5127 12.067 13.0375 12.317 12.5202 12.4183C12.003 12.5196 11.4668 12.4676 10.9795 12.2689C10.4922 12.0703 10.0758 11.7338 9.78275 11.3021C9.48973 10.8704 9.33333 10.3629 9.33333 9.84375C9.33333 9.14756 9.61429 8.47988 10.1144 7.98759C10.6145 7.49531 11.2928 7.21875 12 7.21875ZM16.6667 18.375H7.33333C7.15652 18.375 6.98695 18.3059 6.86193 18.1828C6.73691 18.0597 6.66667 17.8928 6.66667 17.7188C6.66667 16.6745 7.08809 15.6729 7.83824 14.9345C8.58839 14.1961 9.6058 13.7812 10.6667 13.7812H13.3333C14.3942 13.7812 15.4116 14.1961 16.1618 14.9345C16.9119 15.6729 17.3333 16.6745 17.3333 17.7188C17.3333 17.8928 17.2631 18.0597 17.1381 18.1828C17.013 18.3059 16.8435 18.375 16.6667 18.375Z" fill="black"/>
            </svg>
            <p className='linetext'>{residents.filter((resident)=>String(resident.Category).toLowerCase()==='landlord').length}</p>
            <p className='line' ></p>
            <p className='linetxtabove'>Number of landlords</p>
            <p className='linetxtbelow'>Kigowa village</p>
          </div>

          <div className='Dashboardcontent' style={{left: '494.01px',top: '411.47px'}}>
            <svg width="21" height="29" viewBox="0 0 21 29" style={{left: '33.76px',top: '29.5px', position:'absolute'}} fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 16.8727C0 17.3121 0.153126 17.6856 0.459375 17.9932C0.765625 18.3008 1.1375 18.4545 1.575 18.4545C2.13281 18.4545 2.57031 18.2184 2.8875 17.746L6.61172 12.1273H7.35V14.3023L3.29766 21.0744C3.19922 21.2392 3.15 21.4205 3.15 21.6182C3.15 21.9038 3.25391 22.1509 3.46172 22.3597C3.66953 22.5684 3.91563 22.6727 4.2 22.6727H7.35V27.1545C7.35 27.6598 7.53047 28.0937 7.89141 28.4562C8.25234 28.8187 8.68438 29 9.1875 29H11.8125C12.3156 29 12.7477 28.8187 13.1086 28.4562C13.4695 28.0937 13.65 27.6598 13.65 27.1545V22.6727H16.8C17.0844 22.6727 17.3305 22.5684 17.5383 22.3597C17.7461 22.1509 17.85 21.9038 17.85 21.6182C17.85 21.4205 17.8008 21.2392 17.7023 21.0744L13.65 14.3023V12.1273H14.3883L18.1125 17.746C18.4297 18.2184 18.8672 18.4545 19.425 18.4545C19.8625 18.4545 20.2344 18.3008 20.5406 17.9932C20.8469 17.6856 21 17.3121 21 16.8727C21 16.5542 20.9125 16.2631 20.7375 15.9994L16.5375 9.67216C15.7391 8.49678 14.7766 7.90909 13.65 7.90909H7.35C6.22344 7.90909 5.26094 8.49678 4.4625 9.67216L0.262501 15.9994C0.0875015 16.2631 0 16.5542 0 16.8727ZM6.825 3.69091C6.825 4.7125 7.1832 5.58305 7.89961 6.30256C8.61602 7.02206 9.48281 7.38182 10.5 7.38182C11.5172 7.38182 12.384 7.02206 13.1004 6.30256C13.8168 5.58305 14.175 4.7125 14.175 3.69091C14.175 2.66932 13.8168 1.79877 13.1004 1.07926C12.384 0.359754 11.5172 0 10.5 0C9.48281 0 8.61602 0.359754 7.89961 1.07926C7.1832 1.79877 6.825 2.66932 6.825 3.69091Z" fill="black"/>
            </svg>
            <p className='linetext'>{residents.filter((resident)=>String(resident.Gender).toLowerCase()==='female').length}</p>
            <p className='line'></p>
            <p className='linetxtabove'>Number of female</p>
            <p className='linetxtbelow'>Kigowa village</p>
          </div>
          <div className='Dashboardcontent' style={{left: '807.48px',top: '413.03px'}}>
            <svg width="32" height="30" viewBox="0 0 32 30" style={{left: '33.76px',top: '29.5px', position:'absolute'}} fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 7.5C17.4728 7.5 18.6667 6.38071 18.6667 5C18.6667 3.61929 17.4728 2.5 16 2.5C14.5273 2.5 13.3334 3.61929 13.3334 5C13.3334 6.38071 14.5273 7.5 16 7.5Z" fill="black"/>
              <path d="M20 8.75H12C11.6463 8.75 11.3072 8.8817 11.0572 9.11612C10.8071 9.35054 10.6666 9.66848 10.6666 10V18.75H13.3333V27.5H18.6666V18.75H21.3333V10C21.3333 9.66848 21.1928 9.35054 20.9428 9.11612C20.6927 8.8817 20.3536 8.75 20 8.75Z" fill="black"/>
            </svg>

            <p className='linetext'>{residents.filter((resident)=>String(resident.Gender).toLowerCase()==='male').length}</p>
            <p className='line'></p>
            <p className='linetxtabove'>Number of male</p>
            <p className='linetxtbelow'>Kigowa village</p>
          </div>
          <div className='Dashboardcontent' style={{left: '1120.95px',top: '411.47px'}}>
            <svg width="29" height="25" viewBox="0 0 29 25" style={{left: '33.76px',top: '29.5px', position:'absolute'}} fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9571 6.24937C22.8361 6.24937 23.6791 5.92017 24.3007 5.33418C24.9222 4.74818 25.2714 3.95341 25.2714 3.12469C25.2714 2.29597 24.9222 1.50119 24.3007 0.9152C23.6791 0.329207 22.8361 0 21.9571 0C21.0781 0 20.2351 0.329207 19.6136 0.9152C18.992 1.50119 18.6429 2.29597 18.6429 3.12469C18.6429 3.95341 18.992 4.74818 19.6136 5.33418C20.2351 5.92017 21.0781 6.24937 21.9571 6.24937ZM26.3544 16.6155C26.8349 18.0919 27.4381 19.641 27.8143 20.5761C27.8578 20.6827 27.876 20.797 27.8675 20.9109C27.859 21.0249 27.8241 21.1357 27.7652 21.2355C27.7064 21.3353 27.625 21.4218 27.5268 21.4887C27.4286 21.5556 27.316 21.6014 27.197 21.6228C23.437 22.2751 20.8477 22.2579 16.762 21.6127C16.6395 21.5922 16.5235 21.5462 16.4222 21.4781C16.321 21.41 16.2371 21.3215 16.1767 21.219C16.1163 21.1165 16.0809 21.0026 16.0731 20.8855C16.0653 20.7685 16.0852 20.6513 16.1315 20.5425C16.5217 19.6129 17.1324 18.0951 17.6063 16.621C16.1016 16.4804 14.9143 14.829 14.9143 12.812C14.9143 10.7028 16.2127 8.99207 17.8143 8.99207H17.8251C17.8032 8.84507 17.8151 8.69537 17.86 8.55308C17.9048 8.41079 17.9814 8.27922 18.0848 8.16726C18.1882 8.0553 18.3158 7.96555 18.4591 7.90408C18.6024 7.84261 18.758 7.81085 18.9155 7.81094H24.9997C25.1571 7.81094 25.3127 7.84281 25.456 7.90437C25.5992 7.96594 25.7268 8.05577 25.8301 8.16781C25.9334 8.27985 26.01 8.41148 26.0547 8.55381C26.0994 8.69614 26.1112 8.84586 26.0892 8.99285H26.1C27.7016 8.99285 29 10.7028 29 12.812C29 14.8079 27.8367 16.4468 26.3544 16.6163V16.6155ZM19.4399 12.1152C19.7755 11.4106 19.8857 10.3497 19.8857 8.98348H21.5429C21.5429 10.3505 21.4459 11.716 20.9529 12.7542C20.6961 13.2924 20.3207 13.7728 19.7722 14.1134C19.222 14.4556 18.5633 14.6157 17.8143 14.6157V13.0534C18.3081 13.0534 18.6329 12.9503 18.8599 12.8089C19.0886 12.6675 19.2825 12.448 19.4399 12.1152ZM24.0286 8.98348C24.0286 10.3505 24.1388 11.4106 24.4743 12.1152C24.6318 12.448 24.8257 12.6675 25.0543 12.8089C25.2814 12.9495 25.6062 13.0542 26.1 13.0542V14.6165C25.351 14.6165 24.6914 14.4548 24.1421 14.1134C23.5936 13.7728 23.2182 13.2924 22.9614 12.7542C22.4684 11.7152 22.3714 10.3513 22.3714 8.98348H24.0286ZM18.2286 22.7719V23.8257C18.2289 24.1097 18.3385 24.3839 18.5372 24.5973C18.7358 24.8108 19.0099 24.9489 19.3084 24.9862C19.607 25.0234 19.9098 24.9572 20.1604 24.7998C20.4111 24.6424 20.5926 24.4045 20.6712 24.1304L20.9985 22.9868C20.0722 22.9555 19.1479 22.8838 18.2286 22.7719ZM23.7311 22.9422L24.0708 24.1312C24.1488 24.406 24.3303 24.6447 24.5813 24.8027C24.8322 24.9607 25.1356 25.0272 25.4348 24.9898C25.734 24.9524 26.0085 24.8137 26.2071 24.5995C26.4057 24.3853 26.5149 24.1103 26.5143 23.8257V22.654C25.591 22.7853 24.6626 22.8817 23.7311 22.943V22.9422ZM6.583 6.24937C7.462 6.24937 8.30501 5.92017 8.92655 5.33418C9.5481 4.74818 9.89729 3.95341 9.89729 3.12469C9.89729 2.29597 9.5481 1.50119 8.92655 0.9152C8.30501 0.329207 7.462 0 6.583 0C5.704 0 4.861 0.329207 4.23945 0.9152C3.6179 1.50119 3.26871 2.29597 3.26871 3.12469C3.26871 3.95341 3.6179 4.74818 4.23945 5.33418C4.861 5.92017 5.704 6.24937 6.583 6.24937ZM9.63214 24.9944C10.0529 24.9695 10.4478 24.7945 10.7364 24.5048C11.025 24.2151 11.1857 23.8326 11.1857 23.4352V16.6382C12.8213 16.4038 14.0865 14.7962 14.0865 12.8479C14.0865 10.8403 12.7443 9.19517 11.0366 9.0405C11.1234 8.9234 11.1745 8.78607 11.1843 8.64348C11.1942 8.50089 11.1623 8.3585 11.0922 8.23179C11.0222 8.10508 10.9166 7.99892 10.787 7.92485C10.6574 7.85078 10.5087 7.81166 10.3571 7.81172H3.72857C3.57701 7.81166 3.42833 7.85078 3.29872 7.92485C3.16911 7.99892 3.06353 8.10508 2.99347 8.23179C2.92341 8.3585 2.89156 8.50089 2.90137 8.64348C2.91119 8.78607 2.9623 8.9234 3.04914 9.0405C1.34229 9.19674 0 10.8411 0 12.8479C0 14.7954 1.26523 16.4023 2.9 16.6374V23.4352C2.90088 23.8316 3.06158 24.2129 3.34955 24.5018C3.63752 24.7907 4.03121 24.9656 4.45085 24.991C4.87049 25.0164 5.28469 24.8905 5.60951 24.6388C5.93434 24.387 6.1455 24.0282 6.2002 23.6351L6.86969 18.7481H7.23757L7.88386 23.6289C7.93618 24.0235 8.14617 24.3845 8.47102 24.6382C8.79587 24.892 9.21113 25.0193 9.63214 24.9944ZM4.16523 12.241C4.50743 11.5754 4.64414 10.5216 4.64414 9.02878H6.30129C6.30129 10.5286 6.17949 11.9051 5.65749 12.9221C5.38489 13.4518 4.99463 13.9056 4.4428 14.2197C3.89511 14.5321 3.25131 14.6712 2.53129 14.6712V13.1088C3.02429 13.1088 3.35406 13.0151 3.58523 12.8823C3.81309 12.7534 4.00614 12.5527 4.16523 12.241ZM9.25763 9.02878C9.25763 10.5208 9.39434 11.5754 9.73654 12.241C9.89646 12.5527 10.0895 12.7526 10.3165 12.8831C10.5485 13.0143 10.8775 13.1096 11.3705 13.1096V14.672C10.6513 14.672 10.0067 14.5314 9.45897 14.2197C8.90797 13.9056 8.51689 13.4518 8.24511 12.9221C7.72311 11.9051 7.60049 10.5279 7.60049 9.02878H9.25763Z" fill="black"/>
            </svg>
            <p className='linetext'>{years.length}</p>
            <p className='line'></p>
            <p className='linetxtabove'>General population</p>
            <p className='linetxtbelow'>Below 35 yrs</p>
          </div>
        </div>
        <h1 className='Dashboardoverview' style={{top: '579px'}}>Residents</h1>
        <div className='Residentstable'>
        <table className='table-auto   bg-white'>
          <thead className=''>
            <tr className='p-2 '>
             <th className='px-6 text-sm'>NO.</th> 
            <th className=' px-6 text-sm font-serif' >ID</th>
            <th className=' px-6 text-sm font-serif'>Name</th>
            <th className=' px-6 text-sm font-serif' >Gender</th>
            <th className=' px-6 text-sm font-serif' >Telephone</th>
            <th className=' px-6 text-sm font-serif' >Occupation</th>
            <th className=' px-6 text-sm font-serif' >Action</th>
            </tr>
         
          </thead>
          <tbody className='mt-15'>
         
         {currentItems && currentItems.map((resident, index)=>{
          return(
            <>
            <tr className='' style={{top:'12.48px'}} key={index}> 
            <td className='px-4 text-sm font-sans'>{counter++}</td>
            
            <td className='px-6 py-2 text-sm font-sans '>{resident._id}</td>
           
           <td className='px-6 font-serif text-sm' >{resident.firstName}  { resident.lastName}</td>
           
           <td className='font-sans  text-center text-sm' >{resident.Gender}</td>
           
           <td className='font-sans  text-center text-sm'>{resident.Contact}</td>
          
           <td className='px-6 font-sans text-sm'>{resident.Occupation}</td>

       
           <td className='flex flex-row justify-between space-x-2 mt-3'>
           <button onClick={()=>setId(resident._id) } className='residentlistbtn mr-2 px-2 w-auto text-white text-xs font-serif  bg-green-400 mb-2' 
            style={{left:'795px'}}>view</button>
                     
         
           <button onClick={()=>setdelid(resident._id) } className='residentlistbtn px-2 w-auto text-white text-xs font-serif  bg-red-400 mb-2' style={{left:'829.35px'}}>Delete</button>   
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
       
        
  </div>)
}
const ID= () => {
  const [residentd, setresidentd] = useState([])
  useEffect(()=>{
  axios.get('http://localhost:5000/api/getforeigner')
  .then(result=>{setresidentd(result.data)})
  .catch(err=>console.log(err))
  },[])

const[foundresident, setfoundresident] = useState([])
useEffect(()=>{
   setfoundresident(residentd.filter((residente)=>residente._id===ids))

},[residentd])
 const navigate = useNavigate()
 const navi=()=>{
  navigate(-1)
 }
 

  
  return (
    <div>  
        <p className='idheader'>Identity card</p>
        
            {foundresident?foundresident.map(resident=>{
              return(
              
              <>
              <div className='idframe' style={{left:'586px', top:'66px', width:'366.7px'}}>
            <img src={resident.Photo} style={{left:'13.61px' , top:'19.1px'}}  className='profilepic' alt='idcard'/>
            <p className='idcardframeh1' style={{left:'61.89px',top:'16.09px'}}>REPUBLIC OF UGANDA</p>
            <p className='idcardframeh1' style={{left:'217px',top:'16.09px'}}>BUNGA TRADING CENTER</p>
            <p className='idcardframeh1' style={{left:'61.89px',top:'16.09px'}}>REPUBLIC OF UGANDA</p>
            <p className='idmoto' style={{left:'44.56px', top:'39.61px'}}>FOR GOD AND MY COUNTRY</p>
            <p className='idmoto' style={{left:'190px', top:'39.61px'}}>RESIDENT IDENTITY CARD</p>

            <img src={logo} className='photo round-6' style={{left:'13.61px', right:'250.02px',  top:'70.55px'}} alt='profile pic'/> 
                <label className='idlabel' style={{left:'127.49px', top:'63.12px'}}>Name</label>
               
                <p className='idvalue' style={{left:'127.49px', top:'75.5px'}}>{resident.firstName } {resident.lastName}</p>
                <label className='idlabel' style={{left:'127.49px', top:'92.83px'}}>SEX</label>
                <p className='idvalue' style={{left:'127.49px', top:'105.21px'}}>{resident.Gender}</p>
                <label className='idlabel' style={{left:'127.49px', top:'122.51px'}}>COUNTRY</label>
                <p className='idvalue' style={{left:'127.49px', top:'134.91px'}}>UGANDA</p>
                <label className='idlabel' style={{left:'127.49px', top:'143.12px'}}>DATE OF BIRTH</label>
                <p className='idvalue' style={{left:'127.49px', top:'164.64px'}}>{resident.DOB}</p>
                <label className='idlabel' style={{left:'127.49px', top:'186.9px'}}>SIGNATURE</label>
                <label className='idlabel' style={{left:'258.68px', top:'99.02px'}}>CATEGORY</label>
                <p className='idvalue' style={{left:'258.68px', top:'114.4px'}}>{resident.Category}</p>
                <label className='idlabel' style={{left:'258.68px', top:'131.2px'}}>DATE OF ISSUE</label>
                <p className='idvalue' style={{left:'258.68px', top:'147.8px'}}>{new Date(Date.now()).toDateString()}</p>
                <p className='idvalue' style={{left:'-19.62px', top:'115.7px', transform:'rotate(-89.11deg)'}}>{resident._id}</p>
                </div>

                <svg width="7" height="6" viewBox="0 0 7 6" fill="none"style={{left:'718px', top:'293px'}} xmlns="http://www.w3.org/2000/svg">
                <path d="M5.65236 0.335327H6.19386V0.876832H5.65236V0.335327ZM0.914186 1.41834H0.237305V1.95984H0.914186V5.34425H5.51698V1.95984H6.19386V1.41834H0.914186ZM4.97547 4.80274H1.45569V1.95984H4.97547V4.80274Z" fill="white"/>
            </svg>

          <div className='idframe' style={{left:'586px', top:'328.69px',width: '366.37px'}}>
            <label className='idlabel' style={{left:'37.61px', top:'10.5px'}}>DISTRICT</label>
            <p className='idvalue' style={{left:'86.64px', top:'10.5px'}}>{resident.district}</p>

            <label className='idlabel' style={{left:'37.61px', top:'26.59px'}}>COUNTY</label>
            <p className='idvalue' style={{left:'86.64px', top:'26.59px'}}>{resident.county}</p>

            <label className='idlabel' style={{left:'37.61px', top:'43.91px'}}>S.COUNTY</label>
            <p className='idvalue' style={{left:'88.64px', top:'43.91px'}}>{resident.subcounty}</p>

            <label className='idlabel' style={{left:'37.61px', top:'61.24px'}}>PARISH</label>
            <p className='idvalue' style={{left:'86.64px', top:'61.24px'}}>{resident.parish}</p>

            <label className='idlabel' style={{left:'37.61px', top:'77.33px'}}>ZONE</label>
            <p className='idvalue' style={{left:'86.64px', top:'77.33px'}}>{resident.zone}</p>

            <label className='idlabel' style={{left:'37.61px', top:'93.5px'}}>VILLAGE</label>
            <p className='idvalue' style={{left:'86.64px', top:'93.5px'}}>{resident.zone}</p>
            <p className='idvalue' style={{left:'-19.62px', top:'115.7px', transform:'rotate(-89.11deg)'}}>{resident._id}</p>

            <img src={logo} style={{left:'163.68px' , top:'114.47px'}}  className='profilepic' alt='idcard'/>

            <svg width="12" height="15" viewBox="0 0 12 15" fill="none" style={{left:'45.03px',position:'absolute', top:'177.59px'}}xmlns="http://www.w3.org/2000/svg">
              <path d="M4.29241 6.40367L5.45904 5.3868C5.77804 5.10822 6.00225 4.7453 6.10289 4.34463C6.20354 3.94396 6.17603 3.52381 6.0239 3.13812L5.52639 1.87427C5.34052 1.40244 4.97256 1.01577 4.49746 0.793046C4.02236 0.57032 3.47588 0.528293 2.96935 0.675525C1.10533 1.21806 -0.32744 2.86634 0.11358 4.8236C0.40361 6.11122 0.958687 7.72746 2.01018 9.44703C3.06385 11.1707 4.26742 12.4439 5.29936 13.3388C6.85706 14.6874 9.08388 14.3505 10.5167 13.0794C10.9007 12.7388 11.1338 12.2716 11.1683 11.7731C11.2028 11.2746 11.0362 10.7824 10.7024 10.3967L9.78995 9.34266C9.51475 9.02391 9.14559 8.79079 8.72996 8.67329C8.31434 8.55579 7.87127 8.5593 7.45775 8.68335L5.95003 9.13495C5.56066 8.75267 5.21945 8.32853 4.9333 7.8711C4.6571 7.4085 4.44185 6.9153 4.29241 6.40264V6.40367Z" fill="#699BF7"/>
            </svg>

            <p className='idvalue' style={{top:'177.69px', left:'58.77px'}}>{resident.Contact}</p>

            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{position:'absolute', left:'179.47px', top:'180.06px'}} xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8467 6.25316C11.8467 3.38757 9.52378 1.0647 6.65819 1.0647C3.7926 1.0647 1.46973 3.38757 1.46973 6.25316C1.46973 9.11875 3.7926 11.4416 6.65819 11.4416" stroke="#699BF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.7959 4.43713H11.5191M7.17633 1.09058C7.17633 1.09058 8.73287 3.14002 8.73287 6.2531L7.17633 1.09058ZM6.13864 11.4156C6.13864 11.4156 4.5821 9.36617 4.5821 6.2531C4.5821 3.14002 6.13864 1.09058 6.13864 1.09058V11.4156ZM1.7959 8.06906H6.65749H1.7959Z" stroke="#699BF7" strokeWidth="1.5" strokeLinecap="round" strokelinejoin="round"/>
              <path d="M11.7837 9.32313C12.04 9.48086 12.0239 9.86429 11.7604 9.89438L10.4285 10.0454L9.8313 11.2449C9.713 11.4831 9.34722 11.3663 9.28651 11.0716L8.63536 7.89838C8.58399 7.64933 8.80814 7.49264 9.02449 7.62599L11.7837 9.32313V9.32313Z" stroke="#699BF7" strokeWidth="1.5"/>
            </svg>
            <p className='idvalue' style={{left:'195.03px', top:'176.35px'}}>{resident.email}</p>
          
          </div>
        
                      
              </>)
                
              
            }):<p>No data</p>}
            <button onClick={()=>navi()} className='bg-green-200 rounded p-2 font-serif absolute tet-white' style={{top:'200px', left:'200px'}}>Back To Dashboard</button>
           
              
    
                   </div>
   
  
  )
}
const Residentsf = () => {
  const [people, setpeople] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/api/getforeigner')
    .then(result=>{setpeople(result.data)})
    .catch(err=>console.log(err)) 
    },[])
  
  const[foundresident, setfoundresident] = useState([])
  useEffect(()=>{
     setfoundresident(people.filter((residente)=>residente._id===ids))
  
  },[people])
  console.log(people)
  console.log(foundresident)
  const navigate = useNavigate()
  return (
    <div>
      <Dashboard/>
      {foundresident?foundresident.map((resident)=>{
        return(
          <>
          <h1 className='Dashboardoverview' style={{top: '152px'}}>Resident</h1>
      <p className='Dashboardoverviewdesc'>View Individual Info</p>
      <div className='regformframe'>
      <p className='accounth1' style={{top:'78px', left:'395px'}}>{resident.firstName} { resident.lastName}</p>
      <p className='accounth1' style={{left:'66px', top:'156px'}}>Basic informtion</p>
      
       <img src={resident.photo} className='imgaccount' alt='profilepic' />
       <svg width="36" height="36" viewBox="0 0 36 36" fill="none" style={{ left:'509px', position:'absolute'}} xmlns="http://www.w3.org/2000/svg">
          <path d="M30.375 9.14062H25.5938L24.4547 5.94844C24.376 5.73 24.2318 5.54119 24.0418 5.4078C23.8517 5.2744 23.6251 5.20292 23.393 5.20313H12.607C12.1324 5.20313 11.707 5.50195 11.5488 5.94844L10.4062 9.14062H5.625C4.07109 9.14062 2.8125 10.3992 2.8125 11.9531V27.9844C2.8125 29.5383 4.07109 30.7969 5.625 30.7969H30.375C31.9289 30.7969 33.1875 29.5383 33.1875 27.9844V11.9531C33.1875 10.3992 31.9289 9.14062 30.375 9.14062ZM18 25.1719C14.8922 25.1719 12.375 22.6547 12.375 19.5469C12.375 16.4391 14.8922 13.9219 18 13.9219C21.1078 13.9219 23.625 16.4391 23.625 19.5469C23.625 22.6547 21.1078 25.1719 18 25.1719ZM14.625 19.5469C14.625 20.442 14.9806 21.3004 15.6135 21.9334C16.2464 22.5663 17.1049 22.9219 18 22.9219C18.8951 22.9219 19.7536 22.5663 20.3865 21.9334C21.0194 21.3004 21.375 20.442 21.375 19.5469C21.375 18.6518 21.0194 17.7933 20.3865 17.1604C19.7536 16.5275 18.8951 16.1719 18 16.1719C17.1049 16.1719 16.2464 16.5275 15.6135 17.1604C14.9806 17.7933 14.625 18.6518 14.625 19.5469Z" fill="#699BF7"/>
          </svg>
          <div className='idforresident' style={{left:'54px', top:'189px'}}>
            <label className='idlabelresident' style={{top:'13px', left:'21px'}}>Full Name</label>
            <p className='idvalueresident' style={{left:'146px', top:'13px'}}>{resident.firstName} {resident.lastName}</p>
            
            <label className='idlabelresident' style={{top:'47px', left:'21px'}}>Email</label>
            <p className='idvalueresident' style={{left:'146px', top:'47px'}}>{resident.email}</p>
        
            <label className='idlabelresident' style={{top:'82px', left:'21px'}}>Gender</label>
            <p className='idvalueresident' style={{left:'146px', top:'82px'}}>{resident.Gender}</p>
     
            <label className='idlabelresident' style={{top:'116px', left:'21px'}}>Occupation</label>
            <p className='idvalueresident' style={{left:'146px', top:'116px'}}>{resident.Occupation}</p>
            

            <label className='idlabelresident' style={{top:'151px', left:'21px'}}>ID</label>
            <p className='idvalueresident' style={{left:'146px', top:'151px'}}>{resident.NIN}</p>
            
          </div>

          <p className='accounth1' style={{left:'56px', top:'393px'}}>Related people</p>
          <img src={logo}className='imgrelatedframe' style={{left:'63px', top:'425px'}} alt='related people'/>
          <img src={logo}className='imgrelatedframe' style={{left:'136px', top:'425px'}} alt='related people'/>

         <p className='accounth1' style={{left:'531px', top:'156px'}}>Address</p>
          
         <div className='idforresident'>
            <label className='idlabelresident' style={{top:'13px', left:'21px'}}>District</label>
            <p className='idvalueresident' style={{left:'146px', top:'13px'}}>{resident.district}</p>
            
            <label className='idlabelresident' style={{top:'36px', left:'21px'}}>county</label>
            <p className='idvalueresident' style={{left:'146px', top:'36px'}}>{resident.county}</p>
        
            <label className='idlabelresident' style={{top:'65px', left:'21px'}}>S.county</label>
            <p className='idvalueresident' style={{left:'146px', top:'65px'}}>{resident.subcounty}</p>
     
            <label className='idlabelresident' style={{top:'96px', left:'21px'}}>Parish</label>
            <p className='idvalueresident' style={{left:'146px', top:'96px'}}>{resident.parish}</p>
            

            <label className='idlabelresident' style={{top:'123px', left:'21px'}}>Zone</label>
            <p className='idvalueresident' style={{left:'146px', top:'123px'}}>{resident.zone}</p>
            <label className='idlabelresident' style={{top:'156px', left:'21px'}}>village</label>
            <p className='idvalueresident' style={{left:'146px', top:'156px'}}>{resident.village}</p>
            
                        
         </div>
         <button className='idbtns' style={{left:'512px', top:'411px', background:'#F5A8A8'}}>Edit</button>
         <button className='idbtns' style={{left:'629px', top:'411px', background:'#59DF43'}}>Transfer</button>
         <button className='idbtns' style={{left:'747px', top:'411px', background:'#F24E1E'}}>Red flag</button>
         <button className='idbtns' style={{left:'547px', top:'479px', background:'#10AA85'}}>Deactivate</button>
         <button className='idbtns' style={{left:'696px', top:'479px', background:'#316C85'}}>Identity card</button>    

      </div>        
          </>
        )
      }):<p>No resident</p>}
      <button onClick={()=>navigate('/firstpage')} className='bg-green-200 font-serif p-3 rounded cursor-pointer' style={{top:'800px', left:'600px', position:'absolute'}}>Back to dashboard</button>
      
    </div>
  )
}

export { First, ID, Residentsf}