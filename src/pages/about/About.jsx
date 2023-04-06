import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Loren ispum In publishing and graphic design, Lorem ipsum is a
        placeholder text commonly used to demonstrate
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Loren ispum In publishing and graphic design, Lorem ipsum is a
              placeholder text commonly used to demonstrate Loren ispum In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate Loren ispum In publishing
            </p>
            <p>
              Loren ispum In publishing and graphic design, Lorem ipsum is a
              placeholder text commonly used to demonstrate Loren ispum In
              publishing and graphic design, Lorem ipsum is a placeholder text
            </p>
            <p>
              Loren ispum In publishing and graphic design, Lorem ipsum is a
              placeholder text commonly
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Loren ispum In publishing and graphic design, Lorem ipsum is a
              placeholder text commonly used to demonstrate Loren ispum In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate Loren ispum In publishing
            </p>
            <p>
              Loren ispum In publishing and graphic design, Lorem ipsum is a
              placeholder text commonly used to demonstrate Loren ispum In
              publishing and graphic design, Lorem ipsum is a placeholder text
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Vision Image" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Loren ispum In publishing and graphic design, Lorem ipsum is a
              placeholder text commonly used to demonstrate Loren ispum In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate Loren ispum In publishing
            </p>
            <p>
              Loren ispum In publishing and graphic design, Lorem ipsum is a
              placeholder text commonly used to demonstrate Loren ispum In
              publishing and graphic design, Lorem ipsum is a placeholder text
            </p>
            <p>
              Loren ispum In publishing and graphic design, Lorem ipsum is a
              placeholder text commonly
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
