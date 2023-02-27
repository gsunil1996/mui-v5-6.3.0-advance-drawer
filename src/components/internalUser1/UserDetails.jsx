import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then((res) => {
      console.log(res.data.data);
      setUser(res.data.data);
    });
  }, [id]);
  return (
    <div>
      This is user details
      <div>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
      <div
        style={{
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        {/* {`User is ${id}`} */}

        <img width="50px" src={user.avatar} alt="/" />
        <br />
        <h3>{`${user.first_name} - ${user.last_name}`}</h3>
        <h2>{user.email}</h2>
      </div>
    </div>
  );
};

export default UserDetails;
