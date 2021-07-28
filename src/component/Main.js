import React, { useState } from "react";
import './style.css';


function Main({ data, setPosts }) {

    const [tag, newTag] = useState("new ");

    return data && data.length > 0 && data.map(({ id, pic, firstName, lastName, email, grades, company, skill, tags }) => {

        let sum = 0;
        for (let i = 0; i <= grades.length - 1; i++) {
            sum += parseInt(grades[i]);
        }
        sum = sum / grades.length;

        return (
            <div key={id}>
                <div className="container">
                    <div className="row">


                        <div class="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <div className="quote-fullwidth">
                                        <img src={pic} className="quote-fullwidth-avatar" alt="avater" />
                                        <div className="quote-fullwidth-body">
                                            <div className="quote-fullwidth-header">
                                                <h3>{firstName} {lastName}</h3>
                                            </div>
                                            <p className="quote-fullwidth-text"> Email: {email} </p>
                                            <p className="quote-fullwidth-text"> Company: {company} </p>
                                            <p className="quote-fullwidth-text"> Skill: {skill} </p>
                                            <p className="quote-fullwidth-text"> Average: {parseFloat(sum || 0).toFixed(2)}% </p> 

                                            <div>
                                                {tags.map((item) => <div class="btn btn-light" style={{ display : "block" , margin : "5px "}}> <p> {item}  </p></div>)}
                                            </div>

                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Add a tag"
                                                value={tag || ""}
                                                onChange={(e) => newTag(e.target.value)}
                                                onKeyPress={(event) => {
                                                    if (event.key === "Enter") {
                                                        setPosts(prevState => (
                                                            prevState.map(item => item.id === id ? ({ ...item, tags: [...item.tags, tag] }) : item)
                                                        ));
                                                        newTag();
                                                        }
                                                }} />

                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <div style={{ width: "300px", margin: "auto" }}>
                                        {grades.map((item, index) => <div>
                                            <span>
                                                <span> test{index + 1} </span>
                                                <span style={{ marginLeft: "30px" }}> {item} </span>
                                            </span>
                                        </div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    })
}





export default Main;



