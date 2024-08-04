import React from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import "./MainPage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { meta } from "../../content_option";
import { Link } from "react-router-dom";
import ProblemStatement from "../../components/MainPageContent/ProblemStatement/ProblemStatement";
import SolutionConcept from "../../components/MainPageContent/SolutionConcept/SolutionConcept";
import ImplementationAndCustomization from "../../components/MainPageContent/ImplementationAndCustomization/ImplementationAndCustomization";

// Import the background images
import bg1 from '../../assets/images/bg1.jpg';
import bg2 from '../../assets/images/bg2.jpg';
import bg3 from '../../assets/images/bg3.jpg';
import moon from '../../assets/images/moon.jpg';

export const MainPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <div className="parallax-container">
        <Parallax pages={10}>
          {/* Intro Section */}
          <ParallaxLayer
            offset={0}
            speed={1}
            className="parallax-section"
            style={{
              backgroundImage: `url(${moon})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
            }}
          >
            <div className="intro_sec d-block d-lg-flex align-items-center">
              <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
                <div className="align-self-center">
                  <div className="intro mx-auto">
                    <h2 className="mb-1x">Welcome to StitchHera</h2>
                    <h1 className="fluidz-48 mb-1x">
                      <Typewriter
                        options={{
                          strings: [
                            "Design Your Own Dresses",
                            "Upload Fabric Photos",
                            "Customize with Real-Time Previews",
                          ],
                          autoStart: true,
                          loop: true,
                          deleteSpeed: 10,
                        }}
                      />
                    </h1>
                    <p className="mb-1x">
                      StitchHera offers a unique platform for designing custom dresses with ease. 
                      Upload a photo of your fabric, choose your design preferences, and see how your 
                      dress will look in real-time. Perfect for fashion enthusiasts and designers!
                    </p>
                    <div className="intro_btn-action pb-5">
                      <Link to="/upload" className="text_2">
                        <div id="button_p" className="ac_btn btn">
                          Upload Your Fabric
                          <div className="ring one"></div>
                          <div className="ring two"></div>
                          <div className="ring three"></div>
                        </div>
                      </Link>
                      <Link to="/contact">
                        <div id="button_h" className="ac_btn btn">
                          Contact Us
                          <div className="ring one"></div>
                          <div className="ring two"></div>
                          <div className="ring three"></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxLayer>

          {/* Problem Statement Section */}
          <ParallaxLayer
            offset={1}
            speed={1}
            className="parallax-section"
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
            }}
          >
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ProblemStatement />
            </div>
          </ParallaxLayer>

          {/* Solution Concept Section */}
          <ParallaxLayer
            offset={2}
            speed={1}
            className="parallax-section"
            style={{
              backgroundImage: `url(${bg2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
            }}
          >
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SolutionConcept />
            </div>
          </ParallaxLayer>

          {/* Implementation and Customization Section */}
          <ParallaxLayer
            offset={3}
            speed={1}
            className="parallax-section"
            style={{
              backgroundImage: `url(${bg3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
            }}
          >
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ImplementationAndCustomization />
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </HelmetProvider>
  );
};
