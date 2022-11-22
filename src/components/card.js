import React, { useEffect } from "react";
import "./card.css";
import image555 from "../assets/image555.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function Card1() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
    return (
      <div data-aos="fade-up"  data-aos-anchor-placement="top-bottom" className="card">
        
        <a href="#">
        <img src={image555} alt=""></img> 
        </a>
        <div className="card-body">
            <h4 className="card-title">Lorem, ipsum dolor.</h4>
            <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dicta! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, at.</p>
            <p className="card-text2 text-secondary">June 25, 2022 | TRAVEL</p>
        </div>
      </div>
    );
    }

export default Card1;