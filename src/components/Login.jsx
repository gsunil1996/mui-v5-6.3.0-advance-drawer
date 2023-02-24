import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const Login = () => {
    const [loginState, setLoginState] = useState(false);
    const navigate = useNavigate()

    const handleInternalLogin1 = () => {
        localStorage.setItem("type", "internal1");
        setLoginState(!loginState);
        navigate('/products')
    }

    const handleInternalLogin2 = () => {
        localStorage.setItem("type", "internal2");
        setLoginState(!loginState);
        navigate('/sales')
    }

    const handleExternalLogin = () => {
        localStorage.setItem("type", "external");
        setLoginState(!loginState)
        navigate('/external-products')
    }

    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "-80px" }} >
            <div>
                <Card style={{ maxWidth: "max-content", marginTop: "30px", background: "#da814a" }}>
                    <CardContent>
                        <h1>Internal Users</h1>
                        <Button variant="contained" color="success" onClick={() => handleInternalLogin1()} >
                            Internal User 1
                        </Button>
                        <br />
                        <br />
                        <Button variant="contained" color="secondary" onClick={() => handleInternalLogin2()} >
                            Internal User 2
                        </Button>
                    </CardContent>
                </Card>

                <Card style={{ maxWidth: "max-content", marginTop: "30px", background: "#c4da4a" }}>
                    <CardContent>
                        <h1>External Users</h1>
                        <Button variant="contained" color="error" onClick={() => handleExternalLogin()} >
                            External User Login
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Login