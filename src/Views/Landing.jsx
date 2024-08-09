import React from "react";
import { Link } from "react-router-dom";
import style from "../Styles/Landing.module.css";
//import Footer from "../components/Footer";
//import video from "../img/trailer.mp4"

export default function Landing() {
  return (
    <div>     
      <div className={style.div}  >
        <h1 className={style.title}>¡ 🥣Welcome🥣 !</h1>
        <h1 className={style.subTitle}>🍳 Grupal 🥗 Proyect 🥗 Food 🍳</h1>
        <Link to="/home">
          <button className={style.botonLanding}>Enter</button>
        </Link>
        
        </div>
    </div>
  );
}