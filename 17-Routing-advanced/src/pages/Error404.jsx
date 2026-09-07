//Code Of 404 Error: Is Taken From Codepen And Then Converted into jsx using GPT
//installed:- npm install animejs@3.2.2
import React, { useEffect } from "react";
import anime from "animejs";

const Error404 = () => {

  useEffect(() => {

    // Move complete SVG slightly up/down
    anime({
      targets: "#error-svg",
      translateY: 10,
      duration: 1300,
      loop: true,
      easing: "easeInOutSine",
      direction: "alternate",
    });

    // Animate the middle "0"
    anime({
      targets: "#zero",
      translateX: 10,

      scale: [
        { value: 1 },
        { value: 1.4 },
        { value: 1, delay: 250 },
      ],

      rotateY: {
        value: "+=180",
        delay: 200,
      },

      duration: 1300,
      loop: true,
      easing: "easeInOutSine",
      direction: "alternate",
    });

  }, []);


  return (
    <div
      className="
        min-h-screen
        w-full
        bg-white
        flex
        flex-col
        items-center
        justify-center
        overflow-hidden
      "
    >

      {/* 404 SVG */}
      <div className="w-full max-w-4xl px-6">

        <svg
          id="error-svg"
          className="w-full h-auto"
          viewBox="0 0 636 324"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          {/* ================================================= */}
          {/* YOUR ORIGINAL SVG STARTS HERE                     */}
          {/* ================================================= */}

          <g id="OBJECTS">

            {/* Example background */}
            <g id="Group">

              <path
                id="Vector"
                d="M101.3 255.2C101.3 255.2 111.1 272.6 181.8 280.5C252.5 288.4 288.2 314.9 333.1 322.8C378 330.7 433.6 278.5 481.8 286.5C530 294.4 588.2 264.2 592.8 255.2H101.3Z"
                fill="#2F1829"
              />

              {/* Keep all remaining paths from your SVG here */}

            </g>


            {/* ===================== */}
            {/* NUMBER 4              */}
            {/* ===================== */}

            <g id="Group_7">

              <path
                id="Vector_24"
                d="M237.3 191.1V97.5H201.8V97.8L159 166.6L140.3 196.7L142.4 218.4H201.8V251H237.3V218.4H253V191H237.3V191.1ZM201.8 191.1H174.2L199.6 147.4L201.8 143.8V191.1Z"
                fill="url(#paint6_linear)"
              />

              {/* RIGHT 4 */}
              <path
                id="Vector_26"
                d="M487.5 191.1V97.5H452V97.8L390.5 196.7L392.6 218.4H452V251H487.5V218.4H503.1V191H487.5V191.1ZM452 191.1H424.4L449.8 147.4L452 143.8V191.1V191.1Z"
                fill="url(#paint8_linear)"
              />

            </g>


            {/* ============================= */}
            {/* ANIMATED ZERO                 */}
            {/* IMPORTANT: DON'T REMOVE ID   */}
            {/* ============================= */}

            <g
              id="zero"
              style={{
                transformOrigin: "bottom",
                transformBox: "fill-box",
              }}
            >

              <path
                id="Vector_25"
                d="M361.2 110.3C351.9 99 338.7 93.3 321.6 93.3C304.6 93.3 291.4 98.9 282.1 110.2C272.8 121.5 268.1 137.4 268.1 158.2V186.3C268.1 206.9 272.8 222.9 282.1 234.2C291.5 245.5 304.7 251.2 321.8 251.2C338.7 251.2 351.9 245.6 361.2 234.3C370.5 223 375.2 207.1 375.2 186.3V158.3C375.2 137.6 370.5 121.6 361.2 110.3ZM303.8 151.3C304 141 305.5 133.4 308.3 128.3C311.1 123.2 315.5 120.7 321.6 120.7C327.9 120.7 332.4 123.4 335.3 128.9C338.2 134.4 339.6 142.6 339.6 153.6V191.6C339.5 202.6 338.1 210.7 335.2 215.9C332.3 221.1 327.8 223.7 321.8 223.7C315.5 223.7 311 221 308.1 215.7C305.4 210.7 303.9 202.9 303.8 192.5C303.8 191.9 303.8 191.2 303.8 190.6V151.3Z"
                fill="url(#paint7_linear)"
              />

            </g>


            {/* ============================= */}
            {/* BOY HAND                      */}
            {/* ============================= */}

            <g
              id="handboy"
              className="
                animate-[swing_1.3s_ease-in-out_infinite_alternate]
              "
              style={{
                transformOrigin: "98% 98%",
                transformBox: "fill-box",
              }}
            >

              {/* Keep original boy hand paths here */}

            </g>


            {/* ============================= */}
            {/* GIRL ARM                      */}
            {/* ============================= */}

            <g
              id="girllight"
              className="
                animate-[swing_1.3s_ease-in-out_infinite_alternate]
              "
              style={{
                transformOrigin: "0% 97%",
                transformBox: "fill-box",
              }}
            >

              {/* Keep original girl arm paths here */}

            </g>


            {/* ============================= */}
            {/* GIRL HAIR                     */}
            {/* ============================= */}

            <g
              id="hairgirl"
              className="
                animate-[swingHair_1.3s_ease-in-out_infinite_alternate]
              "
              style={{
                transformOrigin: "60% 0%",
                transformBox: "fill-box",
              }}
            >

              {/* Keep original girl hair path here */}

            </g>

          </g>


          {/* ===================================== */}
          {/* IMPORTANT                             */}
          {/* Paste the <defs> section from your   */}
          {/* original SVG here too.                */}
          {/* ===================================== */}

          <defs>

            {/* ALL YOUR ORIGINAL linearGradients */}

          </defs>

        </svg>

      </div>


      {/* Text under illustration */}

      <div className="mt-8 text-center px-5">

        <h1 className="text-5xl md:text-7xl font-black text-[#2F1829]">
          404
        </h1>

        <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 max-w-md text-gray-500">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <button
          onClick={() => window.history.back()}
          className="
            mt-7
            rounded-full
            bg-[#F3475C]
            px-8
            py-3
            font-semibold
            text-white
            shadow-lg
            transition
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
            active:scale-95
          "
        >
          Go Back
        </button>

      </div>

    </div>
  );
};

export default Error404;