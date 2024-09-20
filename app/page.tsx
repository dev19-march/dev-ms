
'use client'
import Image from "next/image";
import right from "./images/phone.png";
import circle from "./images/pay_circle.svg";
import coders from "./images/coders.jpg";
import code from "./images/code.jpg";
import payment from "./images/payment.jpg";
import Footer from "../app/footer/page"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';




import "./styles/app.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  

return(
    <>
      <div className="hero_section">
      <div className="left_section" >
          <h1 className="animate-item">
            The Simplest <br /> Method to <span>Pay</span> Your <br /> Client’s
            Credit Card{" "}
          </h1>
          <p className="animate-item">
            Method enables programmers to execute bank transactions, transfer{" "}
            <br /> funds, and settle liabilities for their users via a unified
            API
          </p>
          <button className="get_started animate-item">Get Started</button>

          <div className="image_container animate-item">
            <Image src={circle} alt="Phone" />
          </div>
        </div>
        <div className="phone_section">
          <Image src={right} alt="Phone" width={600} height={300} />
        </div>
      </div>
      <div className="key_points" data-aos="fade-up">
        <h3>
          Create Today Deploy <br /> Tomorrow
        </h3>

        <div className="points" data-aos="fade-up">
          <div className="point" data-aos="fade-up">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <p className="user">Create a User</p>
            <p className="onboard">Onboard Your Users Using Our API</p>
            <p className="confirm">
              Confirm their identity using our <br /> automated KYC & AML
              checks.
            </p>
          </div>
          <div className="point" data-aos="fade-up">
            <svg
              viewBox="0 0 17 17"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="si-glyph si-glyph-connect-2"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>812</title> <defs> </defs>{" "}
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <path
                    d="M14.5,13.043 C14.242,13.043 14.002,13.112 13.79,13.225 L10.531,9.954 C10.738,9.664 10.885,9.331 10.953,8.968 L12.086,8.968 C12.287,9.544 12.84,9.96 13.5,9.96 C14.329,9.96 15,9.308 15,8.502 C15,7.696 14.329,7.044 13.5,7.044 C12.826,7.044 12.264,7.479 12.074,8.073 L10.955,8.073 C10.893,7.725 10.764,7.401 10.573,7.119 L13.863,3.817 C14.057,3.906 14.271,3.96 14.5,3.96 C15.329,3.96 16,3.308 16,2.502 C16,1.696 15.329,1.044 14.5,1.044 C13.672,1.044 13.002,1.696 13.002,2.502 C13.002,2.763 13.077,3.005 13.201,3.217 L9.945,6.486 C9.652,6.279 9.316,6.133 8.949,6.067 L8.949,4.886 C9.556,4.7 10,4.155 10,3.502 C10,2.696 9.329,2.044 8.5,2.044 C7.672,2.044 7.002,2.696 7.002,3.502 C7.002,4.157 7.447,4.705 8.06,4.889 L8.06,6.066 C7.696,6.13 7.36,6.271 7.069,6.474 L3.809,3.203 C3.927,2.994 4,2.758 4,2.503 C4,1.697 3.329,1.045 2.5,1.045 C1.672,1.045 1.002,1.697 1.002,2.503 C1.002,3.309 1.672,3.961 2.5,3.961 C2.734,3.961 2.955,3.904 3.152,3.811 L6.437,7.108 C6.241,7.393 6.107,7.721 6.044,8.075 L4.926,8.075 C4.737,7.48 4.173,7.046 3.499,7.046 C2.671,7.046 2.001,7.698 2.001,8.504 C2.001,9.31 2.671,9.962 3.499,9.962 C4.159,9.962 4.714,9.546 4.913,8.97 L6.046,8.97 C6.114,9.339 6.267,9.677 6.48,9.97 L3.226,13.236 C3.01,13.119 2.765,13.047 2.499,13.047 C1.671,13.047 1.001,13.699 1.001,14.505 C1.001,15.311 1.671,15.963 2.499,15.963 C3.328,15.963 3.999,15.311 3.999,14.505 C3.999,14.279 3.942,14.068 3.849,13.879 L7.124,10.59 C7.401,10.774 7.718,10.899 8.059,10.959 L8.059,12.118 C7.447,12.302 7.001,12.849 7.001,13.505 C7.001,14.311 7.671,14.963 8.499,14.963 C9.328,14.963 9.999,14.311 9.999,13.505 C9.999,12.853 9.556,12.307 8.948,12.121 L8.948,10.958 C9.292,10.896 9.611,10.768 9.89,10.581 L13.159,13.862 C13.06,14.056 13.001,14.273 13.001,14.505 C13.001,15.311 13.671,15.963 14.499,15.963 C15.328,15.963 15.999,15.311 15.999,14.505 C15.999,13.699 15.329,13.043 14.5,13.043 L14.5,13.043 Z"
                    fill="#434343"
                    className="si-glyph-fill"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>
            </svg>
            <p className="user">Connect Accounts</p>
            <p className="onboard">Link User's Financial Accounts</p>
            <p className="confirm">
              Examining accounts, education <br /> financing, and property loans
              are <br /> all includable.
            </p>
          </div>
          <div className="point" data-aos="fade-up">
            <svg
              fill="#000000"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              transform="rotate(270)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M119.899,27.465L0,185.228h73.625v293.978h92.548V185.228h73.625L119.899,27.465z M149.841,168.896v293.978H89.957 V168.896H32.925l86.974-114.439l86.974,114.439H149.841z"></path>{" "}
                  </g>{" "}
                </g>{" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <rect
                      x="69.81"
                      y="111.727"
                      transform="matrix(0.6139 -0.7894 0.7894 0.6139 -55.7058 125.8875)"
                      width="62.069"
                      height="16.331"
                    ></rect>{" "}
                  </g>{" "}
                </g>{" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M438.375,326.772V32.795h-92.549v293.978h-73.625l119.899,157.763L512,326.772H438.375z M305.127,343.104h57.032V49.127 h59.884v293.978h57.032l-86.974,114.439L305.127,343.104z"></path>{" "}
                  </g>{" "}
                </g>{" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <rect
                      x="380.115"
                      y="383.9"
                      transform="matrix(0.6139 -0.7894 0.7894 0.6139 -150.7498 475.902)"
                      width="62.069"
                      height="16.331"
                    ></rect>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>{" "}
            <p></p>
            <p className="user">Move Money</p>
            <p className="onboard">Send Money on Behalf of Your Users</p>
            <p className="confirm">
              Through a sole API, you're able to <br /> send funds to your
              user's savings <br /> or settle their debts.
            </p>
          </div>
        </div>
      </div>
      <div className="crafted" data-aos="fade-up">
        <div className="crafted_image" data-aos="fade-up">
          <Image src={coders} alt="Phone" width={600} height={300} />
          <div className="crafted_code" data-aos="fade-up">
            <Image src={code} alt="Phone" width={600} height={300} />
          </div>
        </div>
        <div className="crafted_points" data-aos="fade-up">
          <h4>Crafted for Coders </h4>

          <p>
            {" "}
            <span>It's truly effortless.</span>With merely several lines of
            code, <br /> you can initiate transferring funds for your users.{" "}
            <br />
          </p>
          <li>Construct rapidly. No financial associate needed.</li>
          <li>No extended or costly commitments.</li>
          <li>Get operational within an evening.</li>
        </div>
      </div>
      <div className="what_build" data-aos="fade-up">
        <h2>
          What Will You <span> Build?</span>
        </h2>
        <p>
          Method manages regulatory obligations, verifying identities, <br />{" "}
          and collaborates with banks, allowing you to concentrate on <br />{" "}
          development.
        </p>

        <button className="get_started" data-aos="fade-up">Get Started</button>
      </div>

      <div className="simplified">
        <div className="simplified_info" data-aos="fade-up">
          <h4>
            Adherence <br /> Simplified Easy
          </h4>

          <p>
            {" "}
            <span>Method manages </span> regulatory obligations, ID
            authentication, <br /> and banking collaborations, enabling you to
            concentrate on <br />
            development.
          </p>

          <li>Real-time risk assessment for every payment</li>
          <li>Automatic KYC & AML verifications.</li>
          <li>Lowest risk of fraud, failure payments.</li>
        </div>
        <div data-aos="fade-up">
          <Image src={payment} alt="Phone" width={600} height={300} />
        </div>
      </div>
      <Footer/>
    </>
)
}
