import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
const Form = (status) => {
  const [login = '', createLogin ] = useState();
  const [password = '', createPassword ] = useState();
       
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const createUser = field => ({target})=> {
    if (field == 'login') createLogin(target.value);
    if (field == 'password') createPassword(target.value);
   };
  return (
    <div className="form">
    <form onSubmit={onSubmit}>
    <p>
    <label>
    Login
    <input type="text" onChange={createUser('login')} />
              </label>
              </p>
              <p>
              <label>
                Password
                <input type="text" onChange={createUser('password')}/>
              </label>
              </p>
              <p>
              { status.status=='SignUp'?
              <button className="button" onClick={() => {Axios.post('/createUser', {'login':login, 'password':password})?
                 sessionStorage.setItem('isLogged', true):null
              }}>Save me!</button>:
              <button className="button" onClick={() => {Axios.post('/checkUser', {'login':login, 'password':password})?
                sessionStorage.setItem('isLogged', true):null
              }}>Sign In!</button>
              }
              </p>
            </form>
            {sessionStorage.getItem('isLogged')?
            <div>
            <h5>After registration you may go to your page</h5>
            <Link className="button" to="/Profile">Profile page</Link>
            </div>
            :null}
          </div>
        ); 
 }
export default Form;