import React from "react";
import './style.css';


function Main({ data }) {
    return data && data.length > 0 && data.map(({ id, pic, firstName, lastName, email, grades, company, skill }) => {
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


                                            {/* <button type="button" class="btn btn-light">new tag</button> */}
                                            <input type="text" className="form-control" placeholder="Add a tag" />
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                 <div className="accordion-body">{grades}% </div>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        )
    })
}





export default Main;



