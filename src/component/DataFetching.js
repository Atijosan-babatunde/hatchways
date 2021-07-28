import React, { useState, useEffect } from "react";
import './style.css';
import Main from './Main.js';



function DataFetching() {
    const [posts, setPosts] = useState([])
    const [searchKey, setSearchKey] = useState(null)

    useEffect(() => {
        fetch('https://api.hatchways.io/assessment/students')
            .then(res => res.json())//response type
            .then(data => setPosts(data.students.map(item=> ({ ...item , tags : []})))) //log the data;
            .catch(err => console.log("Error while fecthing data", err));
    }, [])
    return (

        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="input">
                       <input onChange={(ev) => setSearchKey(ev.target.value)} placeholder="Search by name"/>
                    </div>
                    <hr/>
                    <Main setPosts={setPosts} data={searchKey ? posts.filter(v => v.firstName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1) : posts } />
                </div>
            </div>
        </div>
    )
}

export default DataFetching;