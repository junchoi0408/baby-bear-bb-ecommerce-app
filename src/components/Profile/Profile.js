import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";

const Profile = () => {
    const history = useHistory();
    const onLogOutClick = async () => {
        const auth = getAuth();
        signOut(auth).then((res)=>{
            console.log(res)
        }).catch((error)=>{
            console.error(error)
        });
        history.push("/")
    }
    return (
        <>
            <button className="home__container" onClick={onLogOutClick}>Log Out</button>
        </>
    )
}

export default Profile;
