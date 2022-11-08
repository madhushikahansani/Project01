import React from "react";
import tech from './tech.jpg';
const Card = (props) => {
    return(
        <div>
            <div className="container">
            <div className="row" key={props.id}>
                <div className="col">
                {/* <div className="col" key={props.id}>
                <div className="card"> */}
                    <img src={tech} alt="Jane" className="about-team" />
                        <div className="">
                            <h2>{props.name}</h2>
                            <p class="title">{props.jobTitle}</p>
                            <p>{props.description}</p>
                            <p>{props.email}</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Card;