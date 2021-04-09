import React from 'react';
import axios from 'axios'

function Account(props) {
    axios
        .get(`http://localhost:8000/account`)
        .then(res => {
            console.log(res)
        })



    return (
        <div>
            
        </div>
    );
}

export default Account;