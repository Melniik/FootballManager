import React, { useEffect, useState}  from 'react';
import ModalNotification from './ModalNotification';
export default function Contacts()
{
  
  const [modalActive, setModalActive] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const[firstName, setFirstName] = useState('')
  const[lastName, setLastName] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [firstNameDirty, setFirstNameDirty] = useState(false)
  const [lastNameDirty, setLastNameDirty] = useState(false)
  const [emailError, setEmailError] = useState("Email can't be empty")
  const [passwordError, setPasswordError] = useState("Password can't be empty")
  const [firstNameError, setfirstNameError] = useState("The 'First Name' field can't be empty")
  const [lastNameError, setlastNameError] = useState("The 'Last Name' field can't be empty")
  const [formValid, setFormValid] = useState(false)
 


  useEffect( () => {
    if(emailError || passwordError || firstNameError || lastNameError) {
       setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, passwordError, firstNameError, lastNameError])
  
  const emailHandler = (e) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
     setEmailError('Incorrectly entered mail')
    } 
    else {
      setEmailError()
    }
  }



  const firstNameHandler = (e) => {
     setFirstName(e.target.value)
     if(!e.target.value)
     {
      setfirstNameError("The 'First Name' field can't be empty")
     }
     else {
      setfirstNameError("")
     }
  }

  const lastNameHandler = (e) => {
    setLastName(e.target.value)
    if(!e.target.value)
    {
     setlastNameError("The 'Last Name' field can't be empty")
    }
    else {
     setlastNameError("")
    }
 }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if(e.target.value.length < 3) {
      setPasswordError('The password must be more than three characters long')
      if(!e.target.value) {
              setPasswordError("The 'Password' field cannot be empty")
      } 
    }
      else {
        setPasswordError("")
      }
    }
  

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
        case 'password':
          setPasswordDirty(true)
          break
          case 'first-name':
            setFirstNameDirty(true)
            break
            case 'last-name':
            setLastNameDirty(true)
            break
    }
  }

  return (
    <>
<div id = "Contacts" class = "information-contacts">

<div class = "left-section">
  <div class = "black-bar-faq"></div>
  <div class = "faq-information">
    <h2 class = "faq">
      FREQUENTLY ASKED QUESTIONS
    </h2>
    
    <h3>How to Get a Ticket</h3>
    
    <p class = "ticket-info">
      Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. 
      Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
    </p>
    
    <h3>How to Book a Ticket</h3>
    
    <p class = "ticket-info">
      Typesetting Industry. 
      Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, 
      When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. 
      It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged.
    </p>
  </div>
</div>
<div class = "right-section">
  <div class = "black-bar-faq"></div>
  <div class = "faq-information">
    
    <h2 class = "faq">
      CONTACT DETAILS
    </h2>
    
  <p class = "contacts-details">
    Email: info@gmail.com 
  
  </p>
  <p class = "contacts-details">
     Phone: +37529*******
  </p>
  <p class = "contacts-details">
    Address: Pinsk, St.Pushkina
  </p>
    

  <h2 class = "faq">
   GET IN TOUCH
  </h2>
<div class = "name">
    <input onChange={e => firstNameHandler(e)} onBlur = {e => blurHandler(e)} class = "person-info" name = "first-name" type = "text" placeholder="First Name" /> 
    <input onChange={e => lastNameHandler(e)} onBlur = {e => blurHandler(e)}  class = "person-info"name = "last-name" type="text" placeholder="Last Name" /> 
  </div>
<div class = "email-phone">
  
  <input onChange = {e => emailHandler(e)}  onBlur = {e => blurHandler(e)} class = "person-info" name = "email" type = "text" placeholder="Email" /> 
<input onChange = {e => passwordHandler(e)}  onBlur = {e => blurHandler(e)} class = "person-info" name = "password" type="text" placeholder="Password" />
</div>
<button onClick={() => setModalActive(true)} disabled = {!formValid}  type = "submit" class ="submit-button">
  Submit
</button>

<div class = "input-error-info">
{(emailDirty && emailError) && <div style = {{color:'red'}}>{emailError} </div> ||  (passwordError && passwordDirty) && <div style = {{color:'red'}}>{passwordError} </div> || (firstNameDirty && firstNameError) && <div style = {{color:'red'}}>{firstNameError} </div> || (lastNameError && lastNameDirty) && <div style = {{color:'red'}}>{lastNameError} </div>}
</div>

<ModalNotification active = {modalActive} setActive = {setModalActive}/>
  </div>
  </div>
</div>
<div class = "black-line-faq">
</div>

<div class = "footer"> 
<div class = "footer-contacts">
  <p class = "contacts-details">
    Email: info@gmail.com 
  
  </p>
  <p class = "contacts-details">
     Phone: +37529*******
  </p>
  <p class = "contacts-details">
    Address: Pinsk, St.Pushkina
  </p>
</div>

<div class = "footer-info">
  © 2023, CurrentFootball.com
</div>

</div>
<div class = "black-line-faq">
</div>
</>
);
}


