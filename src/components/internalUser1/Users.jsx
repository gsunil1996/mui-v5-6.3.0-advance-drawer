import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const Users = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    //   console.log(id, "checkkkkkklk");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://reqres.in/api/users").then((res) => {
            // console.log(res.data.data);
            setUsers(res.data.data);
        });
    }, []);
    return (
        <div>
            This is users Page
            <div>
                <div>
                    <button onClick={() => navigate("/products")}>Go to Products page</button>
                </div>
                <ul>
                    {users.map((e) => (
                        <li key={e.id}>
                            <Link to={`/products/${id}/users/${e.id}`}>
                                {e.first_name} - {e.last_name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Users;
