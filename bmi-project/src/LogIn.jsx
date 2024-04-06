
// import React, { useState } from 'react';
// import Option from './Option';
// import './Login.css';

// export default function Login() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // async function signup(e) {
//   //   e.preventDefault();
  
//   //   const data = {
//   //     username: name,
//   //     email: email,
//   //     password: password
//   //   };
  
//   //   try {
//   //     const response = await fetch('http://localhost:3000/auth/signup', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json'
//   //       },
//   //       body: JSON.stringify(data)
//   //     });
  
//   //     if (response.ok) {
//   //       setIsLoggedIn(true);
//   //     } else {
//   //       alert('Username or email already exists. Please choose a different one.');

//   //       const responseData = await response.json();
//   //       console.log(responseData); // Log the response data to the console
//   //       if (responseData.error === 'User already registered') {
//   //         alert('Username or email already exists. Please choose a different one.');
//   //       } else {
//   //         throw new Error('Failed to sign up');
//   //       }
//   //     }
//   //   } catch (error) {
//   //     console.error('Error signing up:', error);
//   //   }
//   // }


//   async function signup(e) {
//     e.preventDefault();
    
//     const data = {
//       username: name,
//       email: email,
//       password: password
//     };
  
//     try {
//       const response = await fetch('http://localhost:3000/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       });
  
//       if (response.ok) {
//         // Show success message without redirecting
//         alert('You have successfully registered');
//         // Clear form fields
//         setName('');
//         setEmail('');
//         setPassword('');
//       } else {
//         alert('Username or email already exists. Please choose a different one.');
  
//         const responseData = await response.json();
//         console.log(responseData); // Log the response data to the console
//         if (responseData.error === 'User already registered') {
//           alert('Username or email already exists. Please choose a different one.');
//         } else {
//           throw new Error('Failed to sign up');
//         }
//       }
//     } catch (error) {
//       console.error('Error signing up:', error);
//     }
//   }
  
  

//   async function login(e) {
//     e.preventDefault();

//     const data = {
//       username: name,
//       password: password
//     };

//     try {
//       const response = await fetch('http://localhost:3000/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       });

//       if (response.ok) {
//         setIsLoggedIn(true);
//       } else {
//         throw new Error('Failed to login');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   }

//   function handleUsernameChange(e) {
//     const value = e.target.value;
//     const containsOnlyDigits = /^\d+$/.test(value);

//     if (containsOnlyDigits) {
//       alert('Username cannot contain only digits.');
//     } else {
//       setName(value);
//     }
//   }

//   return (
//     <div className="login-container">
//       {!isLoggedIn && !isRegistering && (
//         <form onSubmit={login} className='form'>
//           <h2>Login </h2>
//           <input 
//             type="text" 
//             onChange={handleUsernameChange} 
//             placeholder='Username' 
//             className='input' 
//             required
//           /><br /><br />
//           <input 
//             type="password" 
//             onChange={(e) => setPassword(e.target.value)} 
//             placeholder='Enter Password' 
//             className='input' 
//             required 
//             minLength={6} 
//             maxLength={8}
//           /><br /><br />
//           <button type="submit" className='button'>Login</button>
//           <p>Don't have an account? <span onClick={() => setIsRegistering(true)}>Sign Up</span></p>
//         </form>

        
//       )}

//       {!isLoggedIn && isRegistering && (
//         <form onSubmit={signup} className='form'>
//           <h2>Register </h2>
//           <input 
//             type="text" 
//             onChange={handleUsernameChange} 
//             placeholder='Username' 
//             className='input' 
//             required
//           /><br /><br />
//           <input 
//             type="email" 
//             onChange={(e) => setEmail(e.target.value)} 
//             placeholder='Enter Email' 
//             className='input' 
//             required
//           /><br /><br />
//           <input 
//             type="password" 
//             onChange={(e) => setPassword(e.target.value)} 
//             placeholder='Enter Password' 
//             className='input' 
//             required 
//             minLength={6} 
//             maxLength={8}
//           /><br /><br />
//           <button type="submit" className='button'>Sign Up</button>
//           <p>Already have an account? <span onClick={() => setIsRegistering(false)}>Login</span></p>
//         </form>
//       )}

//       {isLoggedIn && <Option name={name} email={email} />}
//     </div>
//   );
// }



// import React, { useState } from 'react';
// import Option from './Option';
// import './Login.css';

// export default function Login() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [isForgotPassword, setIsForgotPassword] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   async function signup(e) {
//     e.preventDefault();
    
//     const data = {
//       username: name,
//       email: email,
//       password: password
//     };
  
//     try {
//       const response = await fetch('http://localhost:3000/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       });
  
//       if (response.ok) {
//         // Show success message without redirecting
//         alert('You have successfully registered');
//         // Clear form fields
//         setName('');
//         setEmail('');
//         setPassword('');
//       } else {
//         alert('Username or email already exists. Please choose a different one.');
  
//         const responseData = await response.json();
//         console.log(responseData); // Log the response data to the console
//         if (responseData.error === 'User already registered') {
//           alert('Username or email already exists. Please choose a different one.');
//         } else {
//           throw new Error('Failed to sign up');
//         }
//       }
//     } catch (error) {
//       console.error('Error signing up:', error);
//     }
//   }
  
  

//   async function login(e) {
//     e.preventDefault();

//     const data = {
//       username: name,
//       password: password
//     };

//     try {
//       const response = await fetch('http://localhost:3000/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       });

//       if (response.ok) {
//         setIsLoggedIn(true);
//       } else {
//         throw new Error('Failed to login');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   }

//   function handleUsernameChange(e) {
//     const value = e.target.value;
//     const containsOnlyDigits = /^\d+$/.test(value);

//     if (containsOnlyDigits) {
//       alert('Username cannot contain only digits.');
//     } else {
//       setName(value);
//     }
//   }

//   async function handleForgotPassword(e) {
//     e.preventDefault();
//     // Logic for handling forgot password
//   }

//   return (
//     <div className="login-container">
//       {!isLoggedIn && !isRegistering && !isForgotPassword && (
//         <form onSubmit={login} className='form'>
//           <h2>Login</h2>
//           <input 
//             type="text" 
//             onChange={handleUsernameChange} 
//             placeholder='Username' 
//             className='input' 
//             required
//           /><br /><br />
//           <input 
//             type="password" 
//             onChange={(e) => setPassword(e.target.value)} 
//             placeholder='Enter Password' 
//             className='input' 
//             required 
//             minLength={6} 
//             maxLength={8}
//           /><br /><br />
//           <button type="submit" className='button'>Login</button>
//           <p>Don't have an account? <span onClick={() => setIsRegistering(true)}>Sign Up</span></p>
//           <p><span onClick={() => setIsForgotPassword(true)}>Forgot Password?</span></p>
//         </form>
//       )}

//       {!isLoggedIn && isRegistering && (
//         <form onSubmit={signup} className='form'>
//           <h2>Register </h2>
//           <input 
//             type="text" 
//             onChange={handleUsernameChange} 
//             placeholder='Username' 
//             className='input' 
//             required
//           /><br /><br />
//           <input 
//             type="email" 
//             onChange={(e) => setEmail(e.target.value)} 
//             placeholder='Enter Email' 
//             className='input' 
//             required
//           /><br /><br />
//           <input 
//             type="password" 
//             onChange={(e) => setPassword(e.target.value)} 
//             placeholder='Enter Password' 
//             className='input' 
//             required 
//             minLength={6} 
//             maxLength={8}
//           /><br /><br />
//           <button type="submit" className='button'>Sign Up</button>
//           <p>Already have an account? <span onClick={() => setIsRegistering(false)}>Login</span></p>
//         </form>
//       )}

//       {isLoggedIn && <Option name={name} email={email} />}

//       {isForgotPassword && (
//         <div className="forgot-password-container">
//           <h2>Forgot Password</h2>
//           <input 
//             type="email" 
//             onChange={(e) => setEmail(e.target.value)} 
//             placeholder='Enter Email' 
//             className='input' 
//             required
//           /><br /><br />
//           <button type="submit" className='button' onClick={handleForgotPassword}>Submit</button>
//           <p>Remember your password? <span onClick={() => setIsForgotPassword(false)}>Back to Login</span></p>
//         </div>
//       )}
//     </div>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import Option from './Option';
// import './Login.css';

// export default function Login() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [isForgotPassword, setIsForgotPassword] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [otp, setOtp] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [timer, setTimer] = useState(60); // Initial timer value in seconds

//   useEffect(() => {
//     let countdown;
//     if (timer > 0 && isForgotPassword) {
//       countdown = setInterval(() => {
//         setTimer(prevTimer => prevTimer - 1);
//       }, 1000);
//     }
//     return () => clearInterval(countdown);
//   }, [timer, isForgotPassword]);

//   async function signup(e) {
//     e.preventDefault();
    
//     const data = {
//       username: name,
//       email: email,
//       password: password
//     };
  
//     try {
//       const response = await fetch('http://localhost:3000/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       });
  
//       if (response.ok) {
//         // Show success message without redirecting
//         alert('You have successfully registered');
//         // Clear form fields
//         setName('');
//         setEmail('');
//         setPassword('');
//       } else {
//         alert('Username or email already exists. Please choose a different one.');
  
//         const responseData = await response.json();
//         console.log(responseData); // Log the response data to the console
//         if (responseData.error === 'User already registered') {
//           alert('Username or email already exists. Please choose a different one.');
//         } else {
//           throw new Error('Failed to sign up');
//         }
//       }
//     } catch (error) {
//       console.error('Error signing up:', error);
//     }
//   }
  
  

//   async function login(e) {
//     e.preventDefault();

//     const data = {
//       username: name,
//       password: password
//     };

//     try {
//       const response = await fetch('http://localhost:3000/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       });

//       if (response.ok) {
//         setIsLoggedIn(true);
//       } else {
//         throw new Error('Failed to login');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   }

//   function handleUsernameChange(e) {
//     const value = e.target.value;
//     const containsOnlyDigits = /^\d+$/.test(value);

//     if (containsOnlyDigits) {
//       alert('Username cannot contain only digits.');
//     } else {
//       setName(value);
//     }
//   }

//   async function handleForgotPassword(e) {
//     e.preventDefault();
//     // Logic for handling forgot password
//     try {
//       const response = await fetch('http://localhost:3000/auth/forgotpassword', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email: email })
//       });

//       if (response.ok) {
//         setIsForgotPassword(true);
//         setTimer(60); // Reset timer to initial value
//         alert('OTP sent to your email. Please check and enter the OTP.');
//       } else {
//         throw new Error('Failed to send OTP');
//       }
//     } catch (error) {
//       console.error('Error sending OTP:', error);
//     }
//   }

//   async function handleVerifyOTP(e) {
//     e.preventDefault();
//     // Logic for verifying OTP
//     try {
//       const response = await fetch('http://localhost:3000/auth/verifyotp', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email: email, otp: otp })
//       });

//       if (response.ok) {
//         alert('OTP verified successfully. Please enter your new password.');
//       } else {
//         throw new Error('Failed to verify OTP');
//       }
//     } catch (error) {
//       console.error('Error verifying OTP:', error);
//     }
//   }

//   async function handleResetPassword(e) {
//     e.preventDefault();
//     // Logic for resetting password
//     if (newPassword !== confirmPassword) {
//       alert('Passwords do not match. Please re-enter.');
//       return;
//     }
//     try {
//       const response = await fetch('http://localhost:3000/auth/resetpassword', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email: email, newPassword: newPassword })
//       });

//       if (response.ok) {
//         alert('Password reset successful. You can now login with your new password.');
//         // Clear form fields
//         setEmail('');
//         setOtp('');
//         setNewPassword('');
//         setConfirmPassword('');
//         setIsForgotPassword(false);
//       } else {
//         throw new Error('Failed to reset password');
//       }
//     } catch (error) {
//       console.error('Error resetting password:', error);
//     }
//   }

//   return (
//     <div className="login-container">
//       {!isLoggedIn && !isRegistering && !isForgotPassword && (
//         <form onSubmit={login} className='form'>
//           <h2>Login</h2>
//           <input 
//             type="text" 
//             onChange={handleUsernameChange} 
//             placeholder='Username' 
//             className='input' 
//             required
//           /><br /><br />
//           <input 
//             type="password" 
//             onChange={(e) => setPassword(e.target.value)} 
//             placeholder='Enter Password' 
//             className='input' 
//             required 
//             minLength={6} 
//             maxLength={8}
//           /><br /><br />
//           <button type="submit" className='button'>Login</button>
//           <p>Don't have an account? <span onClick={() => setIsRegistering(true)}>Sign Up</span></p>
//           <p><span onClick={() => setIsForgotPassword(true)}>Forgot Password?</span></p>
//         </form>
//       )}

//       {!isLoggedIn && isRegistering && (
//         <form onSubmit={signup} className='form'>
//           <h2>Register </h2>
//           <input 
//             type="text" 
//             onChange={handleUsernameChange} 
//             placeholder='Username' 
//             className='input' 
//             required
//           /><br /><br />
//           <input 
//             type="email" 
//             onChange={(e) => setEmail(e.target.value)} 
//             placeholder='Enter Email' 
//             className='input' 
//             required
//           /><br /><br />
//           <input 
//             type="password" 
//             onChange={(e) => setPassword(e.target.value)} 
//             placeholder='Enter Password' 
//             className='input' 
//             required 
//             minLength={6} 
//             maxLength={8}
//           /><br /><br />
//           <button type="submit" className='button'>Sign Up</button>
//           <p>Already have an account? <span onClick={() => setIsRegistering(false)}>Login</span></p>
//         </form>
//       )}

//       {isLoggedIn && <Option name={name} email={email} />}

//       {isForgotPassword && (
//         <div className="forgot-password-container">
//           <h2>Forgot Password</h2>
//           <input 
//             type="email" 
//             onChange={(e) => setEmail(e.target.value)} 
//             placeholder='Enter Email' 
//             className='input' 
//             required
//           /><br /><br />
//           <button type="submit" className='button' onClick={handleForgotPassword}>Send OTP</button>
//           <p>Remember your password? <span onClick={() => setIsForgotPassword(false)}>Back to Login</span></p>
//         </div>
//       )}

//       {isForgotPassword && timer > 0 && (
//         <div className="otp-container">
//           <h2>Enter OTP</h2>
//           <input 
//             type="text" 
//             onChange={(e) => setOtp(e.target.value)} 
//             placeholder='Enter OTP' 
//             className='input' 
//             required
//           /><br /><br />
//           <button type="submit" className='button' onClick={handleVerifyOTP}>Verify OTP</button>
//           <p>Resend OTP in {timer} seconds</p>
//         </div>
//       )}

//       {isForgotPassword && timer === 0 && (
//         <div className="otp-container">
//           <p>Resend OTP</p>
//         </div>
//       )}

//       {isForgotPassword && timer === 0 && (
//         <div className="reset-password-container">
//           <h2>Reset Password</h2>
//           <input 
//             type="password" 
//             onChange={(e) => setNewPassword(e.target.value)} 
//             placeholder='Enter New Password' 
//             className='input' 
//             required 
//             minLength={6} 
//             maxLength={8}
//           /><br /><br />
//           <input 
//             type="password" 
//             onChange={(e) => setConfirmPassword(e.target.value)} 
//             placeholder='Confirm New Password' 
//             className='input' 
//             required 
//             minLength={6} 
//             maxLength={8}
//           /><br /><br />
//           <button type="submit" className='button' onClick={handleResetPassword}>Reset Password</button>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import Option from './Option';
import './Login.css';

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [timer, setTimer] = useState(60); // Initial timer value in seconds
  const [passwordType, setPasswordType] = useState('password');

  useEffect(() => {
    let countdown;
    if (timer > 0 && isForgotPassword) {
      countdown = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [timer, isForgotPassword]);

  async function signup(e) {
    e.preventDefault();
    
    const data = {
      username: name,
      email: email,
      password: password
    };
  
    try {
      const response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        // Show success message without redirecting
        alert('You have successfully registered');
        // Clear form fields
        setName('');
        setEmail('');
        setPassword('');
      } else {

        alert('Username or email already exists. Please choose a different one.');
  
        const responseData = await response.json();
        console.log(responseData); // Log the response data to the console
        if (responseData.error === 'User already registered') {
          alert('Username or email already exists. Please choose a different one.');
        } else {
          throw new Error('Failed to sign up');
        }
      }
    } catch (error) {
      alert(error);
    }
  }
  
  

  async function login(e) {
    e.preventDefault();

    const data = {
      username: name,
      password: password
    };

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setIsLoggedIn(true);
      } else {
        throw new Error('Failed to login');
      }
    } catch (error) {
      alert("Please enter correct email or password");
    }
  }

  function handleUsernameChange(e) {
    const value = e.target.value;
    const containsOnlyDigits = /^\d+$/.test(value);

    if (containsOnlyDigits) {
      alert('Username cannot contain only digits.');
    } else {
      setName(value);
    }
  }

  async function handleForgotPassword(e) {
    e.preventDefault();
    // Logic for handling forgot password
    try {
      const response = await fetch('http://localhost:3000/auth/forgotpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
      });

      if (response.ok) {
        setIsForgotPassword(true);
        setTimer(60); // Reset timer to initial value
        alert('OTP sent to your email. Please check and enter the OTP.');
      } else {
        throw new Error('Failed to send OTP');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  }

  async function handleVerifyOTP(e) {
    e.preventDefault();
    // Logic for verifying OTP
    try {
      const response = await fetch('http://localhost:3000/auth/verifyotp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, otp: otp })
      });
  
      if (response.ok) {
        alert('OTP verified successfully. Please enter your new password.');
        setIsForgotPassword(false); // Hide OTP fields
        setTimer(0); // Stop the timer
      } else {
        throw new Error('Failed to verify OTP');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  }
  
  async function handleResetPassword(e) {
    e.preventDefault();
    // Logic for resetting password
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match. Please re-enter.');
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/auth/forgotpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, newPassword: newPassword })
      });

      if (response.ok) {
        alert('Password reset successful. You can now login with your new password.');
        // Clear form fields
        setEmail('');
        setOtp('');
        setNewPassword('');
        setConfirmPassword('');
        setIsForgotPassword(false);
      } else {
        throw new Error('Failed to reset password');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
    }
  }

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,8}$/;
    return passwordRegex.test(password);
  }

  function togglePasswordVisibility() {
    setPasswordType(prevType => prevType === 'password' ? 'text' : 'password');
  }

  return (
    <div className="login-container">
      {!isLoggedIn && !isRegistering && !isForgotPassword && (
        <form onSubmit={login} className='form'>
          <h2>Login</h2>
          <input 
            type="text" 
            onChange={handleUsernameChange} 
            placeholder='Username' 
            className='input' 
            required
          /><br /><br />
          <input 
            type={passwordType} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='Enter Password' 
            className='input' 
            required 
            minLength={6} 
            maxLength={8}
          />
          <span onClick={togglePasswordVisibility} className='toggle-password'>{passwordType === 'password' ? 'Show' : 'Hide'}</span><br /><br />
          <button type="submit" className='button'>Login</button>
          <p>Don't have an account? <span onClick={() => setIsRegistering(true)}>Sign Up</span></p>
          <p><span id='fpbtn' onClick={() => setIsForgotPassword(true)}>Forgot Password?</span></p>
        </form> 
      )}

      {!isLoggedIn && isRegistering && (
        <form onSubmit={signup} className='form'>
          <h2>Register </h2>
          <input 
            type="text" 
            onChange={handleUsernameChange} 
            placeholder='Username' 
            className='input' 
            required
          /><br /><br />
          <input 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder='Enter Email' 
            className='input' 
            required
          /><br /><br />
          <input 
            type={passwordType} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='Enter Password' 
            className='input' 
            required 
            minLength={6} 
            maxLength={8}
          />
          <span onClick={togglePasswordVisibility} className='toggle-password'>{passwordType === 'password' ? 'Show' : 'Hide'}</span><br /><br />
          <button type="submit" className='button'>Sign Up</button>
          <p>Already have an account? <span onClick={() => setIsRegistering(false)}>Login</span></p>
        </form>
      )}

      {isLoggedIn && <Option name={name} email={email} />}

      {isForgotPassword && (
        <div className="forgot-password-container">
          <h2>Forgot Password</h2>
          <input  id='psinp'
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder='Enter Email' 
            className='input' 
            required
          /><br /><br />
          <button type="submit" className='button' onClick={handleForgotPassword}>Send OTP</button>
          <p>Remember your password? <span onClick={() => setIsForgotPassword(false)}>Back to Login</span></p>
        </div>
      )}

      {isForgotPassword && timer > 0 && (
        <div className="otp-container">
          <h2>Enter OTP</h2>
          <input 
          id='otinp'
            type="text" 
            onChange={(e) => setOtp(e.target.value)} 
            placeholder='Enter OTP' 
            className='input' 
            required
          /><br /><br />
          <button type="submit" className='button' onClick={handleVerifyOTP}>Verify OTP</button>
          <p>Resend OTP in {timer} seconds</p>
        </div>
      )}

      {isForgotPassword  && (
        <div className="otp-container">
          <p>Resend OTP</p>
        </div>
      )}

      {isForgotPassword && (
        <div className="reset-password-container">
          <h2>Reset Password</h2>
          <input 
            type={passwordType} 
            onChange={(e) => setNewPassword(e.target.value)} 
            placeholder='Enter New Password' 
            className='input' 
            required 
            minLength={6} 
            maxLength={8}
          /><br /><br />
          <input 
            type={passwordType} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            placeholder='Confirm New Password' 
            className='input' 
            required 
            minLength={6} 
            maxLength={8}
          /><br /><br />
          <button type="submit" className='button' onClick={handleResetPassword}>Reset Password</button>
        </div>
      )}
    </div>
  );
}
