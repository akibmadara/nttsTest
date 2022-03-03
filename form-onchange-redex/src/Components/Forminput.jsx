 import React,{useState} from "react";
import {validEmail,validPassword} from './RegEx.js';

const FormInput =()=>{
    
    const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [emailErr, setEmailErr] = useState(false);
   const [pwdError, setPwdError] = useState(false);


   const styles = {
    width: "100px",
    fontSize: "20px",
    border: "1px solid black",
    padding: "10px" ,
    color: "white",
    background: "#c83f49",
  };

   function chbgcolor(e){
       e.target.style.background='red';

   }
   function chbgcolor1(e){
    e.target.style.background='#c83f49';

}
   const validate = () => {
      if (!validEmail.test(email)) {
         setEmailErr(true);
      }
      if (!validPassword.test(password)) {
         setPwdError(true);
      }
      else{
          alert("Successfully Validate");
      }
   };
   return (
      <div>
         <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
         <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />
         <div>
            <button className="valButon" style={styles  } 
            onClick={validate} 
            onMouseEnter={chbgcolor}
            onMouseLeave={chbgcolor1}
            >Validate</button>
         </div>
         {emailErr && <p>Your email is invalid</p>}
         {pwdError && <p>Your password is invalid</p>}
      </div>
   );
};
export default FormInput;