import React from 'react';
import './Popup.css';

const Popup = () => {
    return (<
        div id="popup"
        style={
            { display: "none" }} >
        <
        div id="popup-article"
            class="popup buttonX" >
            <
        div class="popup__block buttonX" >
                <
        h1 class="popup__title buttonX" >
                    My skills <
        /h1> <
        p class="buttonX" >
                        I am a data analytics professional with over 20 years of experience building data warehouses and data science environments: front end(reporting and visualizations), back end(ETL) and deep learning(predictive systems based on thousands of independent variables,
            using top - end GPUs, classification and risk scoring). <
        /p> <
        p class="buttonX" >
                            Almost every organization I worked
                            for became number one in its market.I am driven, transparent and always strive
        for excellence.I am a team player and a problem solver. <
        /p> <
        a href="#"
                                class="popup__close buttonX" > close < /a> <
        /div> <
        /div> <
        /div>
    );
};

export default Popup;