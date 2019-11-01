import React, { useEffect } from 'react'
import NotFound from "./NotFound";
console.log('from profile  ' + sessionStorage.getItem('isLogged'));
const Profile = () =>  (
        sessionStorage.getItem('isLogged')=='true'?<h3>Welcome to your page!</h3>:<NotFound />
)
export default Profile;
