import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import axios from "axios";


const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const response = await axios.get("http://localhost:3000");
        if (response.status === 200) {
            setData(response.data);
        }
    };

    console.log("data=>", data)
    return (
        <div style={{marginTop: "150px"}}>
          <table className= "styled-table">
              <thead>
                  
              </thead>
          </table>

        </div>
    );
};

export default Home;