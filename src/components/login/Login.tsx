import React from 'react';

// Need State here 

export default function Login() {
    
    const handleLogin = () => {
        console.log('hey')
    }

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
