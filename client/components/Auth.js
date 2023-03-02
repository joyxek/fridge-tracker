
// import { useState } from 'react';
// import React from 'react';

// const Auth = () => {
//   // declaring state for whether user is logged in 
//   const [ isLogIn, setIsLogin ] = useState(true)
//   isLogIn = false;
//   const [ error, setError ] = useState(null);

//   const viewLogin = (status) => {
//     setError(null)
//     setIsLogin(status)
//   }

//   return (
//     <div className="auth-container">
//       <div className="auth-container-box">
//         {/* ask user to login if they have an account otherwise giving them a page to sign up */}
//         <form>
//           <h2>{isLogIn ? 'Please log in' : 'Please sign up'}</h2>
//           <input type="email" placeholder="email" />
//           <input type="password" placeholder="password"/>
//           {!isLogIn && <input type="password" placeholder="confirm password"/>}
//           <input type="submit" className="create" />
//           {error && <p>{error}</p>}
//         </form>
//         <div className="auth-options">
//           <button 
//           onClick={() => viewLogin(false)}
//           style={{backgroundColor : !isLogIn ? 'rgb(255,255,255)' : 'rgb(188,188,188)'}}
//           >Sign up</button>
//           <button onClick={() => viewLogin(true)}
//           style={{backgroundColor : !isLogIn ? 'rgb(188,188,188)' : 'rgb(255,255,255)'}}
//           >Login</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export { Auth };