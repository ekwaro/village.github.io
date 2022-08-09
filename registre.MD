27/05/2021
for the notificatin bell, I used react-notification-badge
to installl: run npm install --save react-notification-badge

you can share state between a child and parent components as illustrated in Registry.js 

For the forms, I used Formik library and Yup for the validation of the form fields

react-pdf which is a library for converting react data from its online form to a pdf format

Concept of react subforms
      Conditional render in react
      const [view, setView] = useState('')
      You can then set an onClick event on a button or any other jsx element .
      eg, <button onclick={()=>setView('reg')}></button>. You can now apply the ternary operator to conditionally render the component.

        {
            ((viewregister === '')?<Registrys nexr={setNex} setNext={setViewregister}/>:((viewregister === 'reg')?<Registry2 setNexts={setViewregister}/>:((viewregister ==='login')?<Login setNex={setViewregister}/>:<Registrys/>)))
        }
    
    onClick={()=>setNext('login')}


    Challenges Overcommed:
    1) I built the form to a full format but in submitting the search I needed to include the (e.preventDefault()) method to mitigate the problem of the form submitting automatically on an event click eg key press. This error made me to overhaul the entire design of my application and yet the problem still persisted. so i just had to include that one line and thereby i rose again to move on with my appliction development.

    2) For those who want to learn about conditional rendering of components with react router, I can be of help, it was my problem and yet i still overcommed it.{[Link, BrowserRouter, Routes, Route]}

    Tools(packages) used:
    -Yup library used for validation of input fields
    -Formik, useFormik too used for the forms
    -React-router-dom for the in app routing 

    For the backend, I used the firebase cli - A client side library  used to remotely connect to the firebase 
    and firebase-setuptools which is used for the application tools


   ReACT IMAGES UPLOAD.
   if you are designing an application where a user needs to upload an Image and he wants to preview the image before submitting to the database or any other storage services do the following.
   1)create an input element of type file.
   <input type='file' onchange={handleChange}/>
   2) create a react state thst will be used to store the url of the image file that you will upload to the server, name this state any thing as shown bellow
    const [profilephotopreview, setProfilephoto] = useState(null), this state is used for preview

   
   3) create another state variable to hold the file that will be submitted to the server
    const [profilephoto , setprofilephoto] = useState(null).
   
   4) You can then create a method to handle the onchange event of the file input event as shown. This method also sets the profilephotopreview state as illustrated below.

   const handleChange =(event)=>{
    setProfilephoto(URL.createobjecturl.event.target.files[0])
   }

    You can then display the image to the user as shown above
    <img src={profilephotopreview}/>
    with those steps, the user will be in position to preview the imag before uploads

5)