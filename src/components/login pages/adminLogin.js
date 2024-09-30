// import React, { useState } from 'react';
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
// import classes from '../login pages/login.module.css';



// const Adminlogin = ({ onTokenReceived }) => {
//     const [admin_Id, setAdmin_Id] = useState(null);
//     const [password, setPassword] = useState(null);
//     const [message, setMessage] = useState(null);
//     const navigate = useNavigate();
//     /*   const { setToken } = useToken(""); */ // Access setToken from context

//     const handleSubmit = async (e) => {
//         console.log("Inside adminLogin handleSubmit");
//         e.preventDefault()
//         try {
//             const response = await axios.get(
//                 `http://localhost:5000/api/v1/Admin_Info/adminlogin?admin_Id=${admin_Id}&password=${password}`
//             );
//             console.log("response", response)

//             sessionStorage.setItem("role", response.data.data.role)
//             localStorage.setItem('token', token);
//             localStorage.setItem("Admin_Id", admin_Id)
//             localStorage.setItem("Admin_Firstname", response.data.data.admin_Firstname)
//             localStorage.setItem("Admin_Lastname", response.data.data.admin_Lastname)

//             if (!response.data.data.error) {
//                 console.log('Login successful');
//                 //sessionStorage.setItem('auth',token);
//                 navigate('/adminPage');
//                 onTokenReceived(token); // Store token in context
//                 window.location.reload()
//             } else {
//                 console.log('Login failed');
//                 setMessage('Login failed. Please check your credentials.');
//             }
//         } catch (error) {
//             console.error('Login error:', error);
//             //setMessage('An error occurred during login. Please try again.');
//             setMessage('Invalid Credentials. Please try again.');
//         }
//     };

//     return (
//         <div className={classes.loginblock}>
//             <form onSubmit={handleSubmit}>
//                 <div className={classes.logincontainer}>
//                     <h1>Login</h1>
//                     <input
//                         type="text" required
//                         className={classes.formcontrol}
//                         placeholder="Admin_Id"
//                         value={admin_Id}
//                         onChange={(e) => setAdmin_Id(e.target.value)}
//                     />
//                     <input
//                         type="password" required
//                         className={classes.formcontrol}
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <div className={classes.buttoncontainer}>
//                         <button className="btn btn-secondary" type='submit'>
//                             Login
//                         </button>
//                     </div>
//                     {message && <p className={classes.errormessage}>{message}</p>}
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Adminlogin;


