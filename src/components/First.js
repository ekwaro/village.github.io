import React from 'react'
import logo from '../imges/logo.png'
import './First.css'
const First = () => {
  return (
    <div className='Firstcontainer'>
      {/* dashboard*/}
      <div className='Firstdashboard'>
        <h1 className='Firsthdashboard'>UGVillige Regiter</h1>
        <h2 className='Firsth2dashboard'>Version 1.0 , Uganda Kampala 2022</h2>
        <p style={{position: 'absolute',width: '396px',height: '0px',left: '0px',top: '122.5px',border: '1px solid rgba(255, 255, 255, 0.7)'}}></p>

        {/*Dashbord links*/}

        <div>
        
          <svg width="27" height="23" viewBox="0 0 27 23" style={{top: '239px', left: '65px' , position:'absolute'}} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.9393 7.866C25.2616 6.33566 24.2792 4.94531 23.0464 3.772C21.8166 2.59586 20.3594 1.65854 18.7554 1.012C17.089 0.33925 15.3231 0 13.5 0C11.6769 0 9.91105 0.33925 8.24464 1.012C6.64064 1.65854 5.18336 2.59586 3.95357 3.772C2.72082 4.94531 1.73838 6.33566 1.06071 7.866C0.35558 9.45588 0 11.1406 0 12.88C0 16.6951 1.75681 20.2889 4.81842 22.7441L4.86964 22.7844C5.04442 22.9224 5.2644 23 5.4904 23H21.5126C21.7386 23 21.9586 22.9224 22.1334 22.7844L22.1846 22.7441C25.2432 20.2889 27 16.6951 27 12.88C27 11.1406 26.6414 9.45588 25.9393 7.866ZM21.0154 20.815H5.9846C4.82021 19.8133 3.88959 18.5893 3.25313 17.2223C2.61667 15.8552 2.28859 14.3758 2.29018 12.88C2.29018 10.0223 3.45636 7.337 5.57478 5.31875C7.69319 3.29763 10.5077 2.185 13.5 2.185C16.4953 2.185 19.3098 3.29763 21.4252 5.31875C23.5436 7.33988 24.7098 10.0251 24.7098 12.88C24.7098 15.916 23.3689 18.7881 21.0154 20.815ZM16.8599 8.89812C16.8146 8.85532 16.7534 8.83131 16.6897 8.83131C16.6259 8.83131 16.5647 8.85532 16.5194 8.89812L13.9731 11.3275C13.4096 11.1838 12.7858 11.3218 12.3429 11.7444C12.186 11.8938 12.0615 12.0712 11.9766 12.2666C11.8916 12.462 11.8479 12.6714 11.8479 12.8829C11.8479 13.0944 11.8916 13.3038 11.9766 13.4991C12.0615 13.6945 12.186 13.872 12.3429 14.0214C12.4995 14.1711 12.6855 14.2898 12.8902 14.3709C13.095 14.4519 13.3145 14.4936 13.5362 14.4936C13.7578 14.4936 13.9773 14.4519 14.1821 14.3709C14.3869 14.2898 14.5729 14.1711 14.7295 14.0214C14.9393 13.8217 15.0903 13.5728 15.167 13.2997C15.2437 13.0266 15.2435 12.739 15.1664 12.466L17.7127 10.0366C17.8061 9.9475 17.8061 9.80087 17.7127 9.71175L16.8599 8.89812ZM12.8371 5.98H14.1629C14.2955 5.98 14.404 5.8765 14.404 5.75V3.45C14.404 3.3235 14.2955 3.22 14.1629 3.22H12.8371C12.7045 3.22 12.596 3.3235 12.596 3.45V5.75C12.596 5.8765 12.7045 5.98 12.8371 5.98ZM20.6719 12.2475V13.5125C20.6719 13.639 20.7804 13.7425 20.9129 13.7425H23.3237C23.4563 13.7425 23.5647 13.639 23.5647 13.5125V12.2475C23.5647 12.121 23.4563 12.0175 23.3237 12.0175H20.9129C20.7804 12.0175 20.6719 12.121 20.6719 12.2475ZM21.0546 6.578L20.1174 5.68388C20.0721 5.64107 20.0109 5.61706 19.9472 5.61706C19.8834 5.61706 19.8222 5.64107 19.7769 5.68388L18.0713 7.31112C18.0265 7.35435 18.0013 7.41273 18.0013 7.47356C18.0013 7.5344 18.0265 7.59277 18.0713 7.636L19.0085 8.53013C19.1019 8.61925 19.2556 8.61925 19.349 8.53013L21.0546 6.90288C21.148 6.81375 21.148 6.66712 21.0546 6.578ZM7.23516 5.68388C7.18985 5.64107 7.12866 5.61706 7.0649 5.61706C7.00114 5.61706 6.93995 5.64107 6.89464 5.68388L5.95748 6.578C5.91261 6.62123 5.88745 6.6796 5.88745 6.74044C5.88745 6.80127 5.91261 6.85965 5.95748 6.90288L7.66306 8.53013C7.75647 8.61925 7.91016 8.61925 8.00357 8.53013L8.94074 7.636C9.03415 7.54688 9.03415 7.40025 8.94074 7.31112L7.23516 5.68388ZM5.96652 12.0175H3.5558C3.42321 12.0175 3.31473 12.121 3.31473 12.2475V13.5125C3.31473 13.639 3.42321 13.7425 3.5558 13.7425H5.96652C6.09911 13.7425 6.20759 13.639 6.20759 13.5125V12.2475C6.20759 12.121 6.09911 12.0175 5.96652 12.0175Z" fill="white"
            />
          </svg>          
          <button className='Firstdashboardlink' style={{width: '142px',height: '33px',left: '129px',top:'239px'}}> Dashboard</button> 
         
          <svg width="28" height="28" viewBox="0 0 28 28" style={{top: '296px', left: '65px' , position:'absolute'}} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6667 3.5H4.66667C4.35725 3.5 4.0605 3.62292 3.84171 3.84171C3.62292 4.0605 3.5 4.35725 3.5 4.66667V11.6667C3.5 11.9761 3.62292 12.2728 3.84171 12.4916C4.0605 12.7104 4.35725 12.8333 4.66667 12.8333H11.6667C11.9761 12.8333 12.2728 12.7104 12.4916 12.4916C12.7104 12.2728 12.8333 11.9761 12.8333 11.6667V4.66667C12.8333 4.35725 12.7104 4.0605 12.4916 3.84171C12.2728 3.62292 11.9761 3.5 11.6667 3.5ZM10.5 10.5H5.83333V5.83333H10.5V10.5ZM23.3333 3.5H16.3333C16.0239 3.5 15.7272 3.62292 15.5084 3.84171C15.2896 4.0605 15.1667 4.35725 15.1667 4.66667V11.6667C15.1667 11.9761 15.2896 12.2728 15.5084 12.4916C15.7272 12.7104 16.0239 12.8333 16.3333 12.8333H23.3333C23.6428 12.8333 23.9395 12.7104 24.1583 12.4916C24.3771 12.2728 24.5 11.9761 24.5 11.6667V4.66667C24.5 4.35725 24.3771 4.0605 24.1583 3.84171C23.9395 3.62292 23.6428 3.5 23.3333 3.5ZM22.1667 10.5H17.5V5.83333H22.1667V10.5ZM11.6667 15.1667H4.66667C4.35725 15.1667 4.0605 15.2896 3.84171 15.5084C3.62292 15.7272 3.5 16.0239 3.5 16.3333V23.3333C3.5 23.6428 3.62292 23.9395 3.84171 24.1583C4.0605 24.3771 4.35725 24.5 4.66667 24.5H11.6667C11.9761 24.5 12.2728 24.3771 12.4916 24.1583C12.7104 23.9395 12.8333 23.6428 12.8333 23.3333V16.3333C12.8333 16.0239 12.7104 15.7272 12.4916 15.5084C12.2728 15.2896 11.9761 15.1667 11.6667 15.1667ZM10.5 22.1667H5.83333V17.5H10.5V22.1667ZM19.8333 15.1667C17.2597 15.1667 15.1667 17.2597 15.1667 19.8333C15.1667 22.407 17.2597 24.5 19.8333 24.5C22.407 24.5 24.5 22.407 24.5 19.8333C24.5 17.2597 22.407 15.1667 19.8333 15.1667ZM19.8333 22.1667C18.5465 22.1667 17.5 21.1202 17.5 19.8333C17.5 18.5465 18.5465 17.5 19.8333 17.5C21.1202 17.5 22.1667 18.5465 22.1667 19.8333C22.1667 21.1202 21.1202 22.1667 19.8333 22.1667Z" fill="white"/>
          </svg>
          <button className='Firstdashboardlink' style={{width: '120px',height: '33px',left: '129px',top: '296px'}}>Category</button>
         
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" style={{top: '357px', left: '65px' , position:'absolute'}}  xmlns="http://www.w3.org/2000/svg">
            <path d="M18.0933 20.7V16.8667C19.1667 16.7133 19.9333 15.7933 19.9333 14.5667C19.9333 13.34 18.86 12.2667 17.6333 12.2667C16.4067 12.2667 15.3333 13.34 15.3333 14.5667C15.3333 15.64 16.1 16.7133 17.1733 16.8667V20.7H10.7333V3.06667H3.06666V20.7H1.53333V21.4667H21.4667V20.7H18.0933ZM9.19999 16.8667H4.59999V15.3333H9.19999V16.8667ZM9.19999 13.8H4.59999V12.2667H9.19999V13.8ZM9.19999 10.7333H4.59999V9.2H9.19999V10.7333ZM9.19999 7.66667H4.59999V6.13333H9.19999V7.66667Z" fill="white"/>
          </svg>
          <button className='Firstdashboardlink' style={{width: '130px',height: '33px',left: '129px',top: '357px'}}>Residents</button>

          <svg width="19" height="19" viewBox="0 0 19 19" style={{top: '418px', left: '65px' , position:'absolute'}} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4.75C0 4.12011 0.250223 3.51602 0.695621 3.07062C1.14102 2.62522 1.74511 2.375 2.375 2.375H16.625C17.2549 2.375 17.859 2.62522 18.3044 3.07062C18.7498 3.51602 19 4.12011 19 4.75V14.25C19 14.8799 18.7498 15.484 18.3044 15.9294C17.859 16.3748 17.2549 16.625 16.625 16.625H2.375C1.74511 16.625 1.14102 16.3748 0.695621 15.9294C0.250223 15.484 0 14.8799 0 14.25V4.75ZM2.375 3.5625C2.06006 3.5625 1.75801 3.68761 1.53531 3.91031C1.31261 4.13301 1.1875 4.43506 1.1875 4.75V5.9375H17.8125V4.75C17.8125 4.43506 17.6874 4.13301 17.4647 3.91031C17.242 3.68761 16.9399 3.5625 16.625 3.5625H2.375ZM17.8125 8.3125H1.1875V14.25C1.1875 14.5649 1.31261 14.867 1.53531 15.0897C1.75801 15.3124 2.06006 15.4375 2.375 15.4375H16.625C16.9399 15.4375 17.242 15.3124 17.4647 15.0897C17.6874 14.867 17.8125 14.5649 17.8125 14.25V8.3125Z" fill="white"/>
            <path d="M2.375 11.875C2.375 11.5601 2.50011 11.258 2.72281 11.0353C2.94551 10.8126 3.24756 10.6875 3.5625 10.6875H4.75C5.06494 10.6875 5.36699 10.8126 5.58969 11.0353C5.81239 11.258 5.9375 11.5601 5.9375 11.875V13.0625C5.9375 13.3774 5.81239 13.6795 5.58969 13.9022C5.36699 14.1249 5.06494 14.25 4.75 14.25H3.5625C3.24756 14.25 2.94551 14.1249 2.72281 13.9022C2.50011 13.6795 2.375 13.3774 2.375 13.0625V11.875Z" fill="white"/>
          </svg>
          <button className='Firstdashboardlink' style={{width: '165px',height: '33px',left: '129px',top: '418px'}}>Identity Card</button>

          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{top: '479px', left: '65px' , position:'absolute'}}  xmlns="http://www.w3.org/2000/svg">
           <path d="M17.5 14L23.3333 9.33333L17.5 4.66667V8.1655H2.33331V10.4988H17.5V14ZM25.6666 17.5H10.5V14L4.66665 18.6667L10.5 23.3333V19.8333H25.6666V17.5Z" fill="white"/>
          </svg>
          <button className='Firstdashboardlink' style={{width: '108px',height: '33px',left: '129px',top: '479px'}}>Transfer</button>

          <svg width="28" height="23" viewBox="0 0 28 23" style={{top: '540px', left: '65px' , position:'absolute'}} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.5489 4.10094C24.6299 4.15513 24.6963 4.22844 24.7423 4.31439C24.7883 4.40033 24.8124 4.49628 24.8125 4.59375V13.5C24.8125 13.6186 24.7769 13.7344 24.7105 13.8326C24.644 13.9308 24.5497 14.0069 24.4396 14.051L24.2188 13.5L24.4396 14.051L24.4361 14.0522L24.4289 14.0558L24.4016 14.0664C24.2455 14.1285 24.0883 14.1879 23.9302 14.2446C23.6167 14.3574 23.1809 14.5094 22.6869 14.6602C21.7179 14.9594 20.4556 15.2812 19.4688 15.2812C18.4629 15.2812 17.6305 14.9488 16.9061 14.6578L16.8729 14.6459C16.12 14.3431 15.4787 14.0938 14.7188 14.0938C13.8875 14.0938 12.7736 14.3669 11.8248 14.6602C11.4 14.7926 10.979 14.9371 10.5625 15.0936V22.4062C10.5625 22.5637 10.4999 22.7147 10.3886 22.8261C10.2772 22.9374 10.1262 23 9.96875 23C9.81128 23 9.66026 22.9374 9.54891 22.8261C9.43756 22.7147 9.375 22.5637 9.375 22.4062V4.59375C9.375 4.43628 9.43756 4.28526 9.54891 4.17391C9.66026 4.06256 9.81128 4 9.96875 4C10.1262 4 10.2772 4.06256 10.3886 4.17391C10.4999 4.28526 10.5625 4.43628 10.5625 4.59375V4.92862C10.8309 4.83481 11.1515 4.72675 11.5006 4.61988C12.4696 4.323 13.7331 4 14.7188 4C15.7162 4 16.5285 4.32894 17.2374 4.61631L17.2885 4.63769C18.0271 4.93575 18.6707 5.1875 19.4688 5.1875C20.3 5.1875 21.4139 4.91438 22.3627 4.62106C22.9034 4.45221 23.4377 4.26367 23.9646 4.05581L23.9872 4.0475L23.9919 4.04513H23.9931L24.5489 4.10094ZM23.625 5.44994C23.3638 5.54256 23.055 5.64825 22.7154 5.75275C21.7535 6.052 20.4924 6.37381 19.4688 6.37381C18.4166 6.37381 17.5782 6.03419 16.8527 5.73969L16.8432 5.73612C16.0986 5.43687 15.4776 5.1875 14.7188 5.1875C13.9243 5.1875 12.8116 5.45944 11.8509 5.75513C11.4176 5.88882 10.988 6.03414 10.5625 6.19094V13.8301C10.8238 13.7375 11.1325 13.6318 11.4721 13.5273C12.434 13.2269 13.6951 12.9062 14.7188 12.9062C15.7246 12.9062 16.557 13.2387 17.2814 13.5297L17.3146 13.5416C18.0675 13.8444 18.7087 14.0938 19.4688 14.0938C20.262 14.0938 21.3759 13.8218 22.3366 13.5261C22.7699 13.3924 23.1995 13.2471 23.625 13.0903V5.45113V5.44994Z" fill="#F9F0DE"/>
          </svg>
          <button className='Firstdashboardlink' style={{width: '106px',height: '33px',left: '129px',top: '540px'}}>Red Flag</button>
          
          <svg width="23" height="23" viewBox="0 0 23 23" style={{top: '610px', left: '65px' , position:'absolute'}} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.74998 1.91667H14.375C14.8833 1.91667 15.3708 2.11861 15.7303 2.47805C16.0897 2.8375 16.2916 3.32501 16.2916 3.83334V4.79167C16.2916 5.04584 16.1907 5.28959 16.011 5.46932C15.8312 5.64904 15.5875 5.75001 15.3333 5.75001C15.0791 5.75001 14.8354 5.64904 14.6557 5.46932C14.4759 5.28959 14.375 5.04584 14.375 4.79167V3.83334H5.74998V19.1667H14.375V18.2083C14.375 17.9542 14.4759 17.7104 14.6557 17.5307C14.8354 17.351 15.0791 17.25 15.3333 17.25C15.5875 17.25 15.8312 17.351 16.011 17.5307C16.1907 17.7104 16.2916 17.9542 16.2916 18.2083V19.1667C16.2916 19.675 16.0897 20.1625 15.7303 20.522C15.3708 20.8814 14.8833 21.0833 14.375 21.0833H5.74998C5.24165 21.0833 4.75414 20.8814 4.39469 20.522C4.03525 20.1625 3.83331 19.675 3.83331 19.1667V3.83334C3.83331 3.32501 4.03525 2.8375 4.39469 2.47805C4.75414 2.11861 5.24165 1.91667 5.74998 1.91667Z" fill="#F9F0DE"/>
          <path d="M16.0952 15.616C16.469 15.9898 17.0727 15.9898 17.4465 15.616L20.885 12.1775C21.0646 11.9978 21.1655 11.7541 21.1655 11.5C21.1655 11.2459 21.0646 11.0022 20.885 10.8225L17.4465 7.38396C17.2643 7.21931 17.0258 7.13095 16.7804 7.13715C16.5349 7.14334 16.3012 7.24362 16.1275 7.41725C15.9539 7.59088 15.8536 7.82459 15.8474 8.07006C15.8412 8.31553 15.9296 8.554 16.0943 8.73616L17.8921 10.5417H9.58333C9.32917 10.5417 9.08541 10.6426 8.90569 10.8224C8.72597 11.0021 8.625 11.2458 8.625 11.5C8.625 11.7542 8.72597 11.9979 8.90569 12.1776C9.08541 12.3574 9.32917 12.4583 9.58333 12.4583H17.8921L16.0943 14.2638C15.9154 14.4434 15.815 14.6866 15.8152 14.9401C15.8154 15.1936 15.9161 15.4367 16.0952 15.616Z" fill="#F9F0DE"/>
          </svg>
          <button className='Firstdashboardlink' style={{width: '133px',height: '33px',left: '129px',top: '601px'}}>Disconnect</button>


        </div>
        <div>
          <img src={logo} alt='coat' style={{position: 'absolute',width: '281px',height: '311px',left: '46px',top: '661px'}}/>
          <button className='Firstbutton' style={{width: '137px',height: '52px',left: '39px',top: '780px'}}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{position:'absolute', left:'16px', top:'17px'}} xmlns="http://www.w3.org/2000/svg">
              <path d="M11 11H7M11 7V11V7ZM11 11V15V11ZM11 11H15H11Z" stroke="#316C85" stroke-width="2" stroke-linecap="round"/>
              <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#316C85" stroke-width="2"/>
            </svg>

            Resident
          </button>
          <button className='Firstbutton' style={{width: '137px',height: '52px',left: '211px',top: '780px'}}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{position:'absolute', left:'16px', top:'17px'}} xmlns="http://www.w3.org/2000/svg">
              <path d="M11 11H7M11 7V11V7ZM11 11V15V11ZM11 11H15H11Z" stroke="#316C85" stroke-width="2" stroke-linecap="round"/>
              <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#316C85" stroke-width="2"/>
            </svg>
            Category
            
          </button>
          <p style={{position: 'absolute',width: '396px',height: '0px',left: '0px',top: '869px',border: '1px solid rgba(255, 255, 255, 0.7)'}}></p>

          <p className='Firstpara'>
           Disctrict Kampala, country: Nakawa, Parish: Ntinda, Village: Kigowa
          </p>


        </div>
        <div className='Dashboardinput'>
        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" style={{top:'31px', left:'30px', position:'absolute'}}xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_215)">
          <path d="M20.7786 18.6455C22.4921 16.2638 23.2596 13.3109 22.9274 10.3775C22.5953 7.44417 21.1881 4.74671 18.9874 2.82481C16.7866 0.902921 13.9546 -0.10167 11.0579 0.0120221C8.16125 0.125714 5.41353 1.34931 3.36448 3.438C1.31543 5.5267 0.116177 8.32646 0.00663558 11.2771C-0.102906 14.2278 0.885348 17.1119 2.77368 19.3522C4.66202 21.5926 7.31117 23.0241 10.1911 23.3603C13.0711 23.6965 15.9695 22.9126 18.3065 21.1655H18.3047C18.3578 21.2376 18.4144 21.3061 18.4781 21.3728L25.2911 28.3126C25.6229 28.6508 26.073 28.841 26.5425 28.8411C27.0119 28.8413 27.4621 28.6515 27.7942 28.3135C28.1262 27.9755 28.3129 27.517 28.313 27.0388C28.3132 26.5607 28.1269 26.102 27.7951 25.7638L20.9821 18.824C20.9188 18.7588 20.8508 18.6985 20.7786 18.6437V18.6455ZM21.2352 11.7166C21.2352 13.0185 20.9834 14.3077 20.4943 15.5105C20.0052 16.7133 19.2883 17.8062 18.3845 18.7268C17.4807 19.6474 16.4078 20.3777 15.227 20.8759C14.0461 21.3741 12.7805 21.6306 11.5024 21.6306C10.2243 21.6306 8.95864 21.3741 7.77781 20.8759C6.59697 20.3777 5.52404 19.6474 4.62027 18.7268C3.71649 17.8062 2.99958 16.7133 2.51046 15.5105C2.02135 14.3077 1.7696 13.0185 1.7696 11.7166C1.7696 9.08719 2.79502 6.56552 4.62027 4.70628C6.44552 2.84704 8.92109 1.80254 11.5024 1.80254C14.0837 1.80254 16.5593 2.84704 18.3845 4.70628C20.2098 6.56552 21.2352 9.08719 21.2352 11.7166V11.7166Z" fill="#316C85"/>
          </g>
          <defs>
          <clipPath id="clip0_1_215">
          <rect width="28.3136" height="28.8408" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          <input type='search' className='bg-slate-100 rounded pl-4 py-2' placeholder='search...' style={{outline: 'none',position: 'absolute',  width: '200px',height: '30px',left: '73px',top: '30px'}}/>
          <svg width="42" height="41" viewBox="0 0 42 41" fill="none" style={{position: 'absolute', left: '667.5px',top: '20.83px'}} xmlns="http://www.w3.org/2000/svg">
          <path d="M14 34.1667H28M3.5 10.25C3.5 9.34385 3.86875 8.47481 4.52513 7.83406C5.1815 7.19331 6.07174 6.83334 7 6.83334H35C35.9283 6.83334 36.8185 7.19331 37.4749 7.83406C38.1313 8.47481 38.5 9.34385 38.5 10.25V25.625C38.5 26.5312 38.1313 27.4002 37.4749 28.041C36.8185 28.6817 35.9283 29.0417 35 29.0417H7C6.07174 29.0417 5.1815 28.6817 4.52513 28.041C3.86875 27.4002 3.5 26.5312 3.5 25.625V10.25Z" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className='Dasboardsettings' style={{left:'654px'}}>Devices</p>

          <svg width="39" height="37" viewBox="0 0 39 37" style={{position: 'absolute', left: '767px',top: '20.83px'}} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.8518 18.4687H27.7978C27.8229 19.4271 27.6371 20.3803 27.2513 21.2728C26.8655 22.1653 26.2876 22.9791 25.5511 23.6667C24.8147 24.3543 23.9346 24.9019 22.9621 25.2775C21.9897 25.6531 20.9445 25.8492 19.8876 25.8544C18.6423 25.8517 17.4142 25.5901 16.2978 25.0895C15.1814 24.5889 14.2065 23.8628 13.448 22.9669C12.6895 22.071 12.1677 21.0293 11.9227 19.9219C11.6776 18.8144 11.716 17.6708 12.0346 16.5788C12.3533 15.4869 12.9439 14.4759 13.7609 13.6234C14.5779 12.7709 15.5997 12.0998 16.7475 11.6616C17.8953 11.2234 19.1387 11.0298 20.3819 11.0957C21.6252 11.1617 22.8352 11.4853 23.9189 12.0419M15.8743 1C15.6469 1.00252 15.4276 1.07695 15.2542 1.21045C15.0809 1.34395 14.9643 1.52814 14.9247 1.73125L14.2081 6.3625C13.0402 6.80031 11.9433 7.37976 10.9472 8.085L6.15451 6.33C5.94185 6.25557 5.7069 6.2523 5.49183 6.3208C5.27676 6.3893 5.09564 6.52507 4.98097 6.70375L1.12889 12.7812C1.01478 12.9622 0.974676 13.1738 1.01564 13.3789C1.05661 13.584 1.17601 13.7694 1.35285 13.9025L5.40201 16.7625C5.3276 17.3288 5.28871 17.8985 5.28556 18.4687C5.28808 19.0391 5.32697 19.6088 5.40201 20.175L1.35285 23.0594C1.18251 23.1912 1.0673 23.3721 1.02653 23.5718C0.985756 23.7715 1.02189 23.9778 1.12889 24.1562L4.98097 30.2094C5.0943 30.3893 5.27533 30.5261 5.49088 30.5948C5.70644 30.6634 5.94205 30.6593 6.15451 30.5831L10.9472 28.8281C11.9473 29.5279 13.0435 30.107 14.2081 30.5506L14.9247 35.1819C14.9643 35.385 15.0809 35.5692 15.2542 35.7027C15.4276 35.8362 15.6469 35.9106 15.8743 35.9131H23.5874C23.8148 35.9106 24.0341 35.8362 24.2075 35.7027C24.3808 35.5692 24.4974 35.385 24.537 35.1819L25.2537 30.5506C26.4225 30.1146 27.5197 29.535 28.5145 28.8281L33.3072 30.5831C33.5197 30.6593 33.7553 30.6634 33.9708 30.5948C34.1864 30.5261 34.3674 30.3893 34.4808 30.2094L38.3328 24.1562C38.447 23.9753 38.4871 23.7637 38.4461 23.5586C38.4051 23.3535 38.2857 23.1681 38.1089 23.035L34.0687 20.175C34.2479 19.0433 34.2479 17.8942 34.0687 16.7625L38.1447 13.8781C38.3107 13.7432 38.4207 13.5607 38.4566 13.3612C38.4924 13.1617 38.4519 12.957 38.3418 12.7812L34.4987 6.70375C34.3824 6.52443 34.1997 6.38842 33.9831 6.31996C33.7665 6.2515 33.5301 6.25506 33.3162 6.33L28.5235 8.085C27.5253 7.38691 26.4324 6.80801 25.2716 6.3625L24.546 1.73125C24.5029 1.52816 24.3841 1.34467 24.2096 1.21154C24.0351 1.07841 23.8154 1.00372 23.5874 1H15.8743Z" stroke="#222222" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className='Dasboardsettings' style={{left:'760px'}}>Settings</p>

          <svg width="43" height="45" viewBox="0 0 43 45" fill="none" style={{position: 'absolute', left: '866px',top: '20.83px'}} xmlns="http://www.w3.org/2000/svg">
          <path d="M38.8314 34.7875C37.6796 33.7129 36.6712 32.481 35.8334 31.125C34.9187 29.2532 34.3704 27.209 34.2208 25.1125V18.9375C34.2288 15.6445 33.0873 12.4618 31.0111 9.98746C28.9348 7.51309 26.0666 5.91733 22.9453 5.5V3.8875C22.9453 3.44492 22.7773 3.02047 22.4782 2.70752C22.1792 2.39456 21.7736 2.21875 21.3507 2.21875C20.9278 2.21875 20.5222 2.39456 20.2232 2.70752C19.9241 3.02047 19.7561 3.44492 19.7561 3.8875V5.525C16.6628 5.97241 13.8293 7.57782 11.7803 10.0439C9.73125 12.5099 8.60566 15.6696 8.61196 18.9375V25.1125C8.46236 27.209 7.91413 29.2532 6.99946 31.125C6.17634 32.4779 5.18413 33.7097 4.04918 34.7875C3.92177 34.9046 3.81965 35.0488 3.74963 35.2105C3.67961 35.3721 3.64328 35.5475 3.64307 35.725V37.425C3.64307 37.7565 3.76891 38.0745 3.99291 38.3089C4.21691 38.5433 4.52072 38.675 4.83751 38.675H38.0431C38.3599 38.675 38.6637 38.5433 38.8877 38.3089C39.1117 38.0745 39.2375 37.7565 39.2375 37.425V35.725C39.2373 35.5475 39.201 35.3721 39.131 35.2105C39.0609 35.0488 38.9588 34.9046 38.8314 34.7875ZM6.12751 36.175C7.23883 35.0515 8.21731 33.7925 9.04196 32.425C10.1941 30.1643 10.8664 27.67 11.0128 25.1125V18.9375C10.9654 17.4725 11.2002 16.0126 11.7032 14.6446C12.2062 13.2766 12.9672 12.0285 13.9407 10.9746C14.9142 9.92077 16.0804 9.08271 17.3698 8.51034C18.6593 7.93797 20.0456 7.64301 21.4463 7.64301C22.8469 7.64301 24.2332 7.93797 25.5227 8.51034C26.8121 9.08271 27.9783 9.92077 28.9519 10.9746C29.9254 12.0285 30.6863 13.2766 31.1893 14.6446C31.6923 16.0126 31.9271 17.4725 31.8797 18.9375V25.1125C32.0261 27.67 32.6984 30.1643 33.8506 32.425C34.6752 33.7925 35.6537 35.0515 36.765 36.175H6.12751Z" fill="#316C85"/>
          <ellipse cx="27.9043" cy="13" rx="12.3511" ry="13" fill="#E31919"/>
          <path d="M25.1303 14.6618V13.7925L28.9655 7.72433H29.5962V9.07092H29.1701L26.2723 13.6561V13.7243H31.4371V14.6618H25.1303ZM29.2383 16.4516V14.3976V13.9928V7.72433H30.2439V16.4516H29.2383Z" fill="white"/>
          <path d="M21.4999 42.85C22.2524 42.8319 22.9744 42.5358 23.5384 42.0143C24.1023 41.4927 24.4719 40.7792 24.5816 40H18.2988C18.4117 40.8004 18.7985 41.5306 19.3873 42.0549C19.9762 42.5791 20.7269 42.8617 21.4999 42.85Z" fill="#316C85"/>
          </svg>  

          <img src={logo} className='profilepic' alt='profile pic'/>       

        </div>
        <h1 className='Dashboardoverview' style={{top: '152px'}}>Overview</h1>
        <p className='Dashboardoverviewdesc'>General data view of the system</p>
        <div>
         
          <div className='Dashboardcontent' style={{left: '494.01px',top: '250px'}}>
            <svg width="31" height="30" viewBox="0 0 31 30" style={{left: '33.76px',top: '29.5px', position:'absolute'}} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.9506 21.0169H16.9334V18.9652H26.6376V12.8102H16.9334V10.7585H22.3247V4.60338H16.9334V0.5H14.777V4.60338H9.38573V10.7585H14.777V12.8102H5.07275V18.9652H14.777V21.0169H0.759766V27.172H14.777V29.2237H16.9334V27.172H30.9506V21.0169ZM20.1682 6.65508V8.70677H16.9334V6.65508H20.1682ZM11.5422 8.70677V6.65508H14.777V8.70677H11.5422ZM24.4812 14.8618V16.9135H16.9334V14.8618H24.4812ZM7.22924 16.9135V14.8618H14.777V16.9135H7.22924ZM2.91626 25.1203V23.0686H14.777V25.1203H2.91626ZM28.7941 25.1203H16.9334V23.0686H28.7941V25.1203Z" fill="black"/>
            </svg>
            <p className='linetext'>900</p>
            <p className='line' ></p>
            <p className='linetxtabove'>General population</p>
            <p className='linetxtbelow'>Kigowa village</p>
          </div>
          <div className='Dashboardcontent' style={{left: '807.48px',top: '251.55px'}}>
            <svg width="26" height="26" viewBox="0 0 26 26" style={{left: '33.76px',top: '29.5px', position:'absolute'}} fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.8333 13.7222C23.7383 13.7228 23.644 13.7046 23.556 13.6686C23.4681 13.6327 23.388 13.5797 23.3205 13.5128L13 3.185L2.67942 13.5128C2.54126 13.6311 2.36354 13.6929 2.18177 13.6859C2.00001 13.6789 1.82759 13.6035 1.69896 13.4749C1.57034 13.3463 1.49499 13.1739 1.48797 12.9921C1.48094 12.8103 1.54277 12.6326 1.66109 12.4944L12.4944 1.66111C12.6297 1.5266 12.8128 1.4511 13.0036 1.4511C13.1944 1.4511 13.3774 1.5266 13.5128 1.66111L24.3461 12.4944C24.4455 12.5958 24.5128 12.7243 24.5396 12.8637C24.5664 13.0031 24.5515 13.1473 24.4968 13.2783C24.442 13.4093 24.3499 13.5213 24.2319 13.6003C24.1139 13.6792 23.9753 13.7216 23.8333 13.7222Z" fill="black"/>
              <path d="M13 5.62611L4.33337 14.3217V23.1111C4.33337 23.4942 4.48556 23.8616 4.75644 24.1325C5.02733 24.4034 5.39473 24.5556 5.77782 24.5556H10.8334V17.3333H15.1667V24.5556H20.2223C20.6053 24.5556 20.9727 24.4034 21.2436 24.1325C21.5145 23.8616 21.6667 23.4942 21.6667 23.1111V14.2711L13 5.62611Z" fill="black"/>
            </svg>
            <p className='linetext'>900</p>
            <p className='line' ></p>
            <p className='linetxtabove'>Number of Tenants</p>
            <p className='linetxtbelow'>Kigowa village</p>
          </div>
          <div className='Dashboardcontent' style={{left: '1120.95px',top: '250px'}}>
            <svg width="24" height="21" viewBox="0 0 24 21" style={{left: '33.76px',top: '29.5px', position:'absolute'}} fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.7788 9.69076L21.3333 7.56492V1.96875C21.3333 1.7947 21.2631 1.62778 21.1381 1.50471C21.013 1.38164 20.8435 1.3125 20.6667 1.3125H18C17.8232 1.3125 17.6536 1.38164 17.5286 1.50471C17.4036 1.62778 17.3333 1.7947 17.3333 1.96875V4.08803L13.1158 0.422461C12.8542 0.189082 12.3554 0 12 0C11.6446 0 11.1475 0.189082 10.8858 0.422461L0.219167 9.69199C0.0877425 9.8227 0.00973671 9.99642 0 10.1801C0.00851538 10.3405 0.068142 10.4942 0.170417 10.6194L1.0625 11.5951C1.20153 11.7179 1.37663 11.7941 1.5625 11.8125C1.72364 11.7966 1.87749 11.7384 2.00792 11.6439L2.67042 11.0697V19.6875C2.67042 20.0356 2.81089 20.3694 3.06094 20.6156C3.31099 20.8617 3.65013 21 4.00375 21H20C20.3536 21 20.6928 20.8617 20.9428 20.6156C21.1929 20.3694 21.3333 20.0356 21.3333 19.6875V11.0693L21.9963 11.6435C22.1273 11.7379 22.2814 11.7962 22.4429 11.8125C22.6271 11.7935 22.8004 11.7173 22.9375 11.5947L23.8296 10.6181C23.9253 10.4897 23.9842 10.3382 24 10.1797C23.9809 9.99771 23.9034 9.82647 23.7788 9.69076ZM12 7.21875C12.5274 7.21875 13.043 7.3727 13.4815 7.66114C13.9201 7.94958 14.2618 8.35955 14.4637 8.83921C14.6655 9.31886 14.7183 9.84666 14.6154 10.3559C14.5125 10.8651 14.2586 11.3328 13.8856 11.6999C13.5127 12.067 13.0375 12.317 12.5202 12.4183C12.003 12.5196 11.4668 12.4676 10.9795 12.2689C10.4922 12.0703 10.0758 11.7338 9.78275 11.3021C9.48973 10.8704 9.33333 10.3629 9.33333 9.84375C9.33333 9.14756 9.61429 8.47988 10.1144 7.98759C10.6145 7.49531 11.2928 7.21875 12 7.21875ZM16.6667 18.375H7.33333C7.15652 18.375 6.98695 18.3059 6.86193 18.1828C6.73691 18.0597 6.66667 17.8928 6.66667 17.7188C6.66667 16.6745 7.08809 15.6729 7.83824 14.9345C8.58839 14.1961 9.6058 13.7812 10.6667 13.7812H13.3333C14.3942 13.7812 15.4116 14.1961 16.1618 14.9345C16.9119 15.6729 17.3333 16.6745 17.3333 17.7188C17.3333 17.8928 17.2631 18.0597 17.1381 18.1828C17.013 18.3059 16.8435 18.375 16.6667 18.375Z" fill="black"/>
            </svg>
            <p className='linetext'>900</p>
            <p className='line' ></p>
            <p className='linetxtabove'>Number of landlords</p>
            <p className='linetxtbelow'>Kigowa village</p>
          </div>

          <div className='Dashboardcontent' style={{left: '494.01px',top: '411.47px'}}>
            <svg width="21" height="29" viewBox="0 0 21 29" style={{left: '33.76px',top: '29.5px', position:'absolute'}} fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 16.8727C0 17.3121 0.153126 17.6856 0.459375 17.9932C0.765625 18.3008 1.1375 18.4545 1.575 18.4545C2.13281 18.4545 2.57031 18.2184 2.8875 17.746L6.61172 12.1273H7.35V14.3023L3.29766 21.0744C3.19922 21.2392 3.15 21.4205 3.15 21.6182C3.15 21.9038 3.25391 22.1509 3.46172 22.3597C3.66953 22.5684 3.91563 22.6727 4.2 22.6727H7.35V27.1545C7.35 27.6598 7.53047 28.0937 7.89141 28.4562C8.25234 28.8187 8.68438 29 9.1875 29H11.8125C12.3156 29 12.7477 28.8187 13.1086 28.4562C13.4695 28.0937 13.65 27.6598 13.65 27.1545V22.6727H16.8C17.0844 22.6727 17.3305 22.5684 17.5383 22.3597C17.7461 22.1509 17.85 21.9038 17.85 21.6182C17.85 21.4205 17.8008 21.2392 17.7023 21.0744L13.65 14.3023V12.1273H14.3883L18.1125 17.746C18.4297 18.2184 18.8672 18.4545 19.425 18.4545C19.8625 18.4545 20.2344 18.3008 20.5406 17.9932C20.8469 17.6856 21 17.3121 21 16.8727C21 16.5542 20.9125 16.2631 20.7375 15.9994L16.5375 9.67216C15.7391 8.49678 14.7766 7.90909 13.65 7.90909H7.35C6.22344 7.90909 5.26094 8.49678 4.4625 9.67216L0.262501 15.9994C0.0875015 16.2631 0 16.5542 0 16.8727ZM6.825 3.69091C6.825 4.7125 7.1832 5.58305 7.89961 6.30256C8.61602 7.02206 9.48281 7.38182 10.5 7.38182C11.5172 7.38182 12.384 7.02206 13.1004 6.30256C13.8168 5.58305 14.175 4.7125 14.175 3.69091C14.175 2.66932 13.8168 1.79877 13.1004 1.07926C12.384 0.359754 11.5172 0 10.5 0C9.48281 0 8.61602 0.359754 7.89961 1.07926C7.1832 1.79877 6.825 2.66932 6.825 3.69091Z" fill="black"/>
            </svg>
            <p className='linetext'>900</p>
            <p className='line'></p>
            <p className='linetxtabove'>Number of female</p>
            <p className='linetxtbelow'>Kigowa village</p>
          </div>
          <div className='Dashboardcontent' style={{left: '807.48px',top: '413.03px'}}>
            <svg width="32" height="30" viewBox="0 0 32 30" style={{left: '33.76px',top: '29.5px', position:'absolute'}} fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 7.5C17.4728 7.5 18.6667 6.38071 18.6667 5C18.6667 3.61929 17.4728 2.5 16 2.5C14.5273 2.5 13.3334 3.61929 13.3334 5C13.3334 6.38071 14.5273 7.5 16 7.5Z" fill="black"/>
              <path d="M20 8.75H12C11.6463 8.75 11.3072 8.8817 11.0572 9.11612C10.8071 9.35054 10.6666 9.66848 10.6666 10V18.75H13.3333V27.5H18.6666V18.75H21.3333V10C21.3333 9.66848 21.1928 9.35054 20.9428 9.11612C20.6927 8.8817 20.3536 8.75 20 8.75Z" fill="black"/>
            </svg>

            <p className='linetext'>900</p>
            <p className='line'></p>
            <p className='linetxtabove'>Number of male</p>
            <p className='linetxtbelow'>Kigowa village</p>
          </div>
          <div className='Dashboardcontent' style={{left: '1120.95px',top: '411.47px'}}>
            <svg width="29" height="25" viewBox="0 0 29 25" style={{left: '33.76px',top: '29.5px', position:'absolute'}} fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9571 6.24937C22.8361 6.24937 23.6791 5.92017 24.3007 5.33418C24.9222 4.74818 25.2714 3.95341 25.2714 3.12469C25.2714 2.29597 24.9222 1.50119 24.3007 0.9152C23.6791 0.329207 22.8361 0 21.9571 0C21.0781 0 20.2351 0.329207 19.6136 0.9152C18.992 1.50119 18.6429 2.29597 18.6429 3.12469C18.6429 3.95341 18.992 4.74818 19.6136 5.33418C20.2351 5.92017 21.0781 6.24937 21.9571 6.24937ZM26.3544 16.6155C26.8349 18.0919 27.4381 19.641 27.8143 20.5761C27.8578 20.6827 27.876 20.797 27.8675 20.9109C27.859 21.0249 27.8241 21.1357 27.7652 21.2355C27.7064 21.3353 27.625 21.4218 27.5268 21.4887C27.4286 21.5556 27.316 21.6014 27.197 21.6228C23.437 22.2751 20.8477 22.2579 16.762 21.6127C16.6395 21.5922 16.5235 21.5462 16.4222 21.4781C16.321 21.41 16.2371 21.3215 16.1767 21.219C16.1163 21.1165 16.0809 21.0026 16.0731 20.8855C16.0653 20.7685 16.0852 20.6513 16.1315 20.5425C16.5217 19.6129 17.1324 18.0951 17.6063 16.621C16.1016 16.4804 14.9143 14.829 14.9143 12.812C14.9143 10.7028 16.2127 8.99207 17.8143 8.99207H17.8251C17.8032 8.84507 17.8151 8.69537 17.86 8.55308C17.9048 8.41079 17.9814 8.27922 18.0848 8.16726C18.1882 8.0553 18.3158 7.96555 18.4591 7.90408C18.6024 7.84261 18.758 7.81085 18.9155 7.81094H24.9997C25.1571 7.81094 25.3127 7.84281 25.456 7.90437C25.5992 7.96594 25.7268 8.05577 25.8301 8.16781C25.9334 8.27985 26.01 8.41148 26.0547 8.55381C26.0994 8.69614 26.1112 8.84586 26.0892 8.99285H26.1C27.7016 8.99285 29 10.7028 29 12.812C29 14.8079 27.8367 16.4468 26.3544 16.6163V16.6155ZM19.4399 12.1152C19.7755 11.4106 19.8857 10.3497 19.8857 8.98348H21.5429C21.5429 10.3505 21.4459 11.716 20.9529 12.7542C20.6961 13.2924 20.3207 13.7728 19.7722 14.1134C19.222 14.4556 18.5633 14.6157 17.8143 14.6157V13.0534C18.3081 13.0534 18.6329 12.9503 18.8599 12.8089C19.0886 12.6675 19.2825 12.448 19.4399 12.1152ZM24.0286 8.98348C24.0286 10.3505 24.1388 11.4106 24.4743 12.1152C24.6318 12.448 24.8257 12.6675 25.0543 12.8089C25.2814 12.9495 25.6062 13.0542 26.1 13.0542V14.6165C25.351 14.6165 24.6914 14.4548 24.1421 14.1134C23.5936 13.7728 23.2182 13.2924 22.9614 12.7542C22.4684 11.7152 22.3714 10.3513 22.3714 8.98348H24.0286ZM18.2286 22.7719V23.8257C18.2289 24.1097 18.3385 24.3839 18.5372 24.5973C18.7358 24.8108 19.0099 24.9489 19.3084 24.9862C19.607 25.0234 19.9098 24.9572 20.1604 24.7998C20.4111 24.6424 20.5926 24.4045 20.6712 24.1304L20.9985 22.9868C20.0722 22.9555 19.1479 22.8838 18.2286 22.7719ZM23.7311 22.9422L24.0708 24.1312C24.1488 24.406 24.3303 24.6447 24.5813 24.8027C24.8322 24.9607 25.1356 25.0272 25.4348 24.9898C25.734 24.9524 26.0085 24.8137 26.2071 24.5995C26.4057 24.3853 26.5149 24.1103 26.5143 23.8257V22.654C25.591 22.7853 24.6626 22.8817 23.7311 22.943V22.9422ZM6.583 6.24937C7.462 6.24937 8.30501 5.92017 8.92655 5.33418C9.5481 4.74818 9.89729 3.95341 9.89729 3.12469C9.89729 2.29597 9.5481 1.50119 8.92655 0.9152C8.30501 0.329207 7.462 0 6.583 0C5.704 0 4.861 0.329207 4.23945 0.9152C3.6179 1.50119 3.26871 2.29597 3.26871 3.12469C3.26871 3.95341 3.6179 4.74818 4.23945 5.33418C4.861 5.92017 5.704 6.24937 6.583 6.24937ZM9.63214 24.9944C10.0529 24.9695 10.4478 24.7945 10.7364 24.5048C11.025 24.2151 11.1857 23.8326 11.1857 23.4352V16.6382C12.8213 16.4038 14.0865 14.7962 14.0865 12.8479C14.0865 10.8403 12.7443 9.19517 11.0366 9.0405C11.1234 8.9234 11.1745 8.78607 11.1843 8.64348C11.1942 8.50089 11.1623 8.3585 11.0922 8.23179C11.0222 8.10508 10.9166 7.99892 10.787 7.92485C10.6574 7.85078 10.5087 7.81166 10.3571 7.81172H3.72857C3.57701 7.81166 3.42833 7.85078 3.29872 7.92485C3.16911 7.99892 3.06353 8.10508 2.99347 8.23179C2.92341 8.3585 2.89156 8.50089 2.90137 8.64348C2.91119 8.78607 2.9623 8.9234 3.04914 9.0405C1.34229 9.19674 0 10.8411 0 12.8479C0 14.7954 1.26523 16.4023 2.9 16.6374V23.4352C2.90088 23.8316 3.06158 24.2129 3.34955 24.5018C3.63752 24.7907 4.03121 24.9656 4.45085 24.991C4.87049 25.0164 5.28469 24.8905 5.60951 24.6388C5.93434 24.387 6.1455 24.0282 6.2002 23.6351L6.86969 18.7481H7.23757L7.88386 23.6289C7.93618 24.0235 8.14617 24.3845 8.47102 24.6382C8.79587 24.892 9.21113 25.0193 9.63214 24.9944ZM4.16523 12.241C4.50743 11.5754 4.64414 10.5216 4.64414 9.02878H6.30129C6.30129 10.5286 6.17949 11.9051 5.65749 12.9221C5.38489 13.4518 4.99463 13.9056 4.4428 14.2197C3.89511 14.5321 3.25131 14.6712 2.53129 14.6712V13.1088C3.02429 13.1088 3.35406 13.0151 3.58523 12.8823C3.81309 12.7534 4.00614 12.5527 4.16523 12.241ZM9.25763 9.02878C9.25763 10.5208 9.39434 11.5754 9.73654 12.241C9.89646 12.5527 10.0895 12.7526 10.3165 12.8831C10.5485 13.0143 10.8775 13.1096 11.3705 13.1096V14.672C10.6513 14.672 10.0067 14.5314 9.45897 14.2197C8.90797 13.9056 8.51689 13.4518 8.24511 12.9221C7.72311 11.9051 7.60049 10.5279 7.60049 9.02878H9.25763Z" fill="black"/>
            </svg>
            <p className='linetext'>900</p>
            <p className='line'></p>
            <p className='linetxtabove'>General population</p>
            <p className='linetxtbelow'>Below 35 yrs</p>
          </div>
        </div>
        <h1 className='Dashboardoverview' style={{top: '579px'}}>Residents</h1>
        <div className='Residentstable'>
          <label className='Residentfields' style={{left:'24px'}}>ID</label>
          <label className='Residentfields' style={{left:'113px'}}>Name</label>
          <label className='Residentfields' style={{left:'334px'}}>Gender</label>
          <label className='Residentfields' style={{left:'442px'}}>Telephone</label>
          <label className='Residentfields' style={{left:'661px'}}>Occupation</label>
          <label className='Residentfields' style={{left:'795px'}}>Action</label>
        </div>
        
      </div>
    </div>
  )
}

export default First