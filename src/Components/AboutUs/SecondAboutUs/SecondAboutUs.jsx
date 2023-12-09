import React from "react";
import "./SecondAboutUs.css";

const SecondAboutUs = () => {
    return(
        <div className="SecondAboutUs">
            <div className="SecondAboutUsFlex">
                <div className="SecondAboutUsFlexContent">
                    <h2 className="SecondAboutUsFlexContentHead">DEDICATED AND</h2>
                    <h2 className="SecondAboutUsFlexContentHead">DRIVEN TO DELIVER</h2>
                    <br />
                    <p className="SecondAboutUsFlexContentPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi itaque quos quaerat facilis amet iusto eos numquam magni dicta dolorum ullam perspiciatis voluptates dignissimos cumque atque illo vitae, deserunt libero nulla nisi similique? Alias, iusto neque eum sit labore quas!</p>
                </div>
                <div className="SecondAboutUsFlexMap">
                    <img className="SecondAboutUsFlexMapImg" src="https://www.leprosymission.in/wp-content/themes/leprosymission/assets/img/map.png"/>
                </div>
            </div>
        </div>
    )
}

export default SecondAboutUs;