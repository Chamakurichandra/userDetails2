import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Card';
import '../App.css';
export default function UserDetails() {
    const [userDetails, setUserDetails] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getUserDetails();
    }, [])
    const getUserDetails = async () => {
        setLoading(true);
        try {
            let url = 'https://jsonplaceholder.typicode.com/users';
            const res = await axios.get(url);
            setUserDetails(res.data);
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    }
    return (
        <div>
            {loading ? <div className="spinner">
                       <div className="bounce1"></div>
                       <div className="bounce2"></div>
                       <div className="bounce3"></div>
         </div> : <Cards userDetails={userDetails} setUserDetails={setUserDetails}/>}
        </div>
    )
}
