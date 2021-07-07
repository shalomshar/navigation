import React from "react";
import './welcome.css'
import {useHistory} from "react-router-dom";

const Welcome = () => {
    const history = useHistory();
    const goToNextPage = () => {
        history.push("/subscribe")
    }
    return (
        <div className="container">
            <h1 style={{paddingTop: "7%"}}>
                Welcome to Deposit official website
            </h1>
            <h2 style={{paddingTop: "4%"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release
                of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
            </h2>
            <div>
                <button
                    type="button" className="nextPage" onClick={() => goToNextPage()}>next page
                </button>
            </div>
        </div>
    )

}


export default Welcome





