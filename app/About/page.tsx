'use client'
import Image from "next/image";
import "../styles/about.css";
import two from "../images/two.jpg";

export default function About() {
  return (
    <>
      <h1>We‘re Creating Solutions for <br />business challenges</h1>

      <div className="about_section">
        <div className="about">
          <Image src={two} alt="Phone" className="about_img"/>
        </div>

        <div className="about_text">
          <h2>We‘re Creating Solutions for <br />business challenges</h2>
        </div>
      </div>
    </>
  )
}
