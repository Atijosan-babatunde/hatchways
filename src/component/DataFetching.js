import React, { useState, useEffect } from "react";
import './style.css';
import Main from './Main.js';



function DataFetching() {
    const [posts, setPosts] = useState([])
    const [searchKey, setSearchKey] = useState(null)
    const [tagKey, seTtagKey] = useState(null)

    useEffect(() => {
        fetch('https://api.hatchways.io/assessment/students')
            .then(res => res.json())//response type
            .then(data => setPosts(data.students.map(item => ({ ...item, tags: [] })))) //log the data;
            .catch(err => console.log("Error while fecthing data", err));
    }, [])
    return (

        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="input">
                        <input onChange={(ev) => setSearchKey(ev.target.value)} placeholder="Search by name" />
                        <input onChange={(ev) => seTtagKey(ev.target.value)} placeholder="Search by tag" />
                    </div>
                    <hr />
                    <Main
                        setPosts={setPosts}
                        data={(searchKey || tagKey) ? posts.filter((v) => {
                            let condition1  =  (v.firstName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1);
                            let condition2 = v.tags.find(tag => tag.toLowerCase().includes(tagKey.toLowerCase()));
                            let conditions = [];

                            if ( (tagKey || "").length > 0 ) {
                                conditions.push(condition2 !== undefined);
                            }
                            
                            if ( (searchKey || "").length > 0 ) {
                                conditions.push(condition1);
                            }

                            return conditions.includes(true);
                            
                        }) : posts}
                    />
                </div>
            </div>
        </div>
    )
}

export default DataFetching;