import React from "react";
import { Link } from "react-router-dom";
import style from "../Styles/Landing.module.css";
import video from "../img/trailer.mp4";

export default function Landing() {
  return (
    <div>
      <video src={video} autoPlay muted loop className={style.video}></video>
      <div className={style.div}>
        <h1 className={style.title}>¡ 🥣Bienvenidos 🥣 !</h1>
        <h1 className={style.subTitle}>🍳 Galeria 🥗 Alameda 🥗 Digital 🍳</h1>
        <Link to="/home">
          <button className={style.botonLanding}>Ingresar</button>
        </Link>
      </div>
    </div>
  );
}
