import React from "react";
import "../styles/Login.css";
const Livebg = () => {
  return (
    <section>
      {Array.from({ length: 150 }).map((_, index) => (
        <span key={index}></span>
      ))}
    </section>
  );
};

export default Livebg;
