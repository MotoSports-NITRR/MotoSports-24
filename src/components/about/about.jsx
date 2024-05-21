
import React from "react";

const About = () => {
  return (
    <div
      className="desktop-1"
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#C1ABA6",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        lineHeight: "normal",
        letterSpacing: "normal",
        fontFamily: "sans-serif", 
        color: "#ffffff", 
        fontWeight: "bold", 
      }}
    >
      {/* FrameComponent1 */}
      <section
        className="frame-section"
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          rowGap: "30px",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "20px",
          backgroundColor: "#967969",
          padding: "50px",
        }}
      >
        <div
          className="rectangle-parent3"
          style={{
            width: "auto",
            backgroundColor: "var(--color-rosybrown-200)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding:
              "var(--padding-29xl) var(--padding-11xl) var(--padding-5xl) var(--padding-28xl)",
            boxSizing: "border-box",
            gap: "var(--gap-4xl)",
            minWidth: "500px",
          }}
        >
          <div
            className="frame-child4"
            style={{
              width: "500px",
              height: "auto",
              position: "relative",
              backgroundColor: "#5C4033",
              maxWidth: "100%",
            }}
          />
          <div
            className="about-us1"
            style={{
              width: "470px",
              position: "relative",
              fontWeight: 900,
              display: "inline-block",
              zIndex: 1,
              backgroundColor: "#8A737A", 
              padding: "30px", 
            }}
          >
            ABOUT US
          </div>
          <div
            className="nit-raipur-banner"
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0 0 0 var(--padding-7xs)",
              boxSizing: "border-box",
              maxWidth: "100%",
              fontSize: "var(--font-size-5xl)",
              fontFamily: "var(--font-abhaya-libre)",
              backgroundColor: "#6F4E37",
              paddingBottom: "30px",
              paddingTop: "30px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <div
              className="nit-raipur-a-container"
              style={{
                height: "266px",
                flex: 1,
                position: "relative",
                display: "inline-block",
                maxWidth: "100%",
                zIndex: 1,
              }}
            >
              <span>
                NIT Raipur, a leading institution among India's top
                universities, currently holds the
              </span>
              <span
                className="th-position-in"
                style={{ color: "var(--color-darkblue)" }}
              >
                {" "}
                65th position in the NIRF ranking{" "}
              </span>
              <span>
                among 256 engineering colleges. It emphasizes providing students
                with the freedom to pursue their passions and aspirations.
                Additionally, the university serves as a platform for showcasing
                diverse talents on a broader scale. Notably, NIT Raipur’s
                Motorsports Club stands out within the institution, excelling in
                various competitions and pioneering cutting-edge technologies in
                the Indian automotive sector.
              </span>
            </div>
          </div>
        </div>
        <div
          className="frame-child5"
          style={{
            height: "200px",
            width: "500px",
            position: "relative",
            backgroundColor: "var(--color-gainsboro)",
            minWidth: "874px",
            maxWidth: "100%",
            backgroundColor: "#967969",
            paddingBottom: "30px",
          }}
        />
      </section>

      {/* ChildContainer */}
      <section
        className="child-container"
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          rowGap: "20px",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "var(--font-size-13xl)",
          color: "var(--color-white)",
          fontFamily: "var(--font-archivo-black)",
          backgroundColor: "#8A737A",
          padding: "10px",
        }}
      >
        <div
          className="child-container-child"
          style={{
            height: "300px",
            width: "438px",
            position: "relative",
            flexShrink: 0,
            debugCommit: "1de1738",
            maxWidth: "100%",
            backgroundColor: "#8A737A",
            padding: "10px",
          }}
        />
        <div
          className="rectangle-parent4"
          style={{
            height: "200px",
            width: "500px",
            position: "relative",
            flexShrink: 0,
            debugCommit: "1de1738",
            maxWidth: "100%",

            backgroundColor: "	#6F4E37", 
            padding: "20px",
          }}
        >
          <div
            className="frame-child6"
            style={{
              position: "absolute",
              height: "100%",
              top: 0,
              bottom: 0,
              left: "50px",
              width: "163px",

              //  backgroundColor: "#81523F", Add background color
              padding: "10px",
            }}
          />
          <div
            className="rectangle-parent5"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "var(--color-dimgray-400)",
              width: "500px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding:
                "var(--padding-4xl) var(--padding-xl) var(--padding-18xl) var(--padding-10xl)",
              boxSizing: "border-box",
              gap: "var(--gap-sm)",
              maxWidth: "100%",
              zIndex: 1,
            }}
          >
            <div
              className="frame-child7"
              style={{
                width: "833px",
                height: "300px",
                position: "relative",
                backgroundColor: "var(--color-dimgray-400)",
                display: "none",
                maxWidth: "100%",

                backgroundColor: "#81523",
                padding: "30px",
              }}
            />
            <div
              className="our-goals"
              style={{
                width: "520px",
                position: "relative",
                display: "inline-block",
                zIndex: 1,
                fontSize: "26px",
                fontWeight: 900,
                backgroundColor: "#8A737A",
                padding: "30px", 
              }}
            >
              Our Goals
            </div>
            <div
              className="create-lightweight-designs-container"
              style={{
                width: "500px",
                height: "170px",
                position: "relative",
                fontSize: "20px",
                fontWeight: 700,
                fontSize: "var(--font-size-9xl)",
                fontFamily: "sans-serif",
                display: "inline-block",
                flexShrink: 0,
                paddingBottom: "30px",
                paddingTop: "10px",
                paddingLeft: "20px",
                paddingRight: "20px",
                maxWidth: "100%",
                zIndex: 1,
              }}
            >
              <p className="create-lightweight-designs">{`> Create Lightweight Designs`}</p>
              <p className="optimum-vehicles">{`> Optimum Vehicles`}</p>
              <p className="complying-with-the">{`> Complying with the rules of respective competetion for the designing of automobiles!`}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FrameComponent */}
      <section
        className="rectangle-parent6"
        style={{
          alignSelf: "stretch",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          maxWidth: "100%",
          backgroundColor: "#967969",
          padding: "30px",
        }}
      >
        <div
          className="frame-child8"
          style={{
            height: "421px",
            position: "relative",
            maxWidth: "100%",
            width: "855px",
            backgroundColor: "var(--color-gainsboro)",
            minWidth: "855px",
            zIndex: 1,
          }}
        />
        <div
          className="rectangle-parent7"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
            backgroundColor: "var(--color-rosybrown-200)",
            padding:
              "var(--padding-2xl) var(--padding-16xl) var(--padding-16xl) var(--padding-73xl)",
            boxSizing: "border-box",
            gap: "var(--gap-4xs)",
            minWidth: "568px",
            marginLeft: "-14px",
            flex: 1,
          }}
        >
          <div
            className="frame-child9"
            style={{
              width: "874px",
              height: "421px",
              position: "relative",
              backgroundColor: "#C4A484",
              display: "none",
              maxWidth: "100%",
            }}
          />
          <b
            className="formula-bharat-an-container"
            style={{ alignSelf: "stretch", position: "relative", zIndex: 1 }}
          >
            <p className="blank-line" style={{ margin: 0 }}>
              &nbsp;
            </p>
            <p
              className="formula-bharat"
              style={{
                margin: 0,
                fontSize: "26px",
                fontWeight: 900,
                backgroundColor: "#6F4E37", 
                padding: "30px",
              }}
            >
              FORMULA BHARAT
            </p>
            <p
              className="an-engineering-design"
              style={{ margin: 0, backgroundColor: "#8A737A", padding: "30px" }}
            >
              An engineering design competition called Formula Bharat Pits
              students from college and institutions around the nation against
              one another in a life-size formula-style car in categories such
              engineering design, overall cost, marketibility and dynamic
              performance.
            </p>
            <p
              className="sae-baja"
              style={{
                margin: 0,
                backgroundColor: "#6F4E37",
                padding: "30px",
                fontSize: "26px",
                fontWeight: 900,
              }}
            >
              SAE-BAJA{" "}
            </p>
            <p
              className="the-society-of"
              style={{ margin: 0, backgroundColor: "#8A737A", padding: "30px" }}
            >
              The Society of Automotive Engineers International hosts the
              Collegiate Design Series Competition known as Baja SAE. Small
              off-road vehicles are desined and constructed by groups of
              students from universities all over the world.
            </p>
          </b>
          <div
            className="frame-wrapper3"
            style={{
              alignSelf: "stretch",
              justifyContent: "flex-end",
              color: "var(--color-gray-400)",
              fontFamily: "var(--font-archivo-black)",
            }}
          >
            <div
              className="rectangle-parent8"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                borderRadius: "var(--br-3xs)",
                backgroundColor: "#C4A484",
                justifyContent: "flex-start",
                padding:
                  "var(--padding-2xs) var(--padding-lgi) var(--padding-8xs) var(--padding-xl)",
                whiteSpace: "nowrap",
                zIndex: 1,
              }}
            >
              <div
                className="frame-child10"
                style={{
                  height: "48px",
                  width: "183px",
                  position: "relative",
                  borderRadius: "var(--br-3xs)",
                  backgroundColor: "var(--color-gainsboro)",
                  display: "none",
                }}
              />
              <div
                className="explore-us"
                style={{
                  position: "relative",
                  zIndex: 2,
                  backgroundColor: "#C4A484",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import '../globalStyles.css'
import aboutDesign from './about.jpg'

function About() {

    return (
        <>
            <img src={aboutDesign} alt="" />
        </>
    )
}
  
export default About

