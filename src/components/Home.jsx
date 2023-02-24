import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const Home = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/login')
    }

    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "-80px" }} >
            <Card style={{ maxWidth: "max-content", marginTop: "30px", background: "#c4da4a" }}>
                <CardContent>
                    <h1>Home</h1>
                    <Button variant="contained" color="error" onClick={() => handleLogin()} >
                        Go to  Login Page
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default Home