import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Question from '../components/question'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>DPBH JISCE 2023</title>
        <meta property="og:title" content="DPBH JISCE 2023" />
      </Helmet>
      <div className="home-header">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <Link to="/" className="home-logo">
            DPBH JISCE 2023
          </Link>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <Link to="/" className="home-nav1">
                Home
              </Link>
              <a
                href="https://chiragnahata-my.sharepoint.com/:p:/g/personal/chiragnahata_chiragnahata_ml/ETjOt1gcUZxFgYmEWkT3THUBWvwHJxaVSeF05JClcmkzdw?e=eWHYYE"
                target="_blank"
                rel="noreferrer noopener"
                className="home-nav2"
              >
                About
              </a>
              <a
                href="https://drive.google.com/file/d/1Np90NVh2x8mf9wvxhgsFWpeX2dbQV-4Z/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="home-nav3"
              >
                Event Details
              </a>
              <a
                href="https://forms.gle/3Wq1KL1zE76YDVBy5"
                target="_blank"
                rel="noreferrer noopener"
                className="home-nav4"
              >
                Registration
              </a>
              <a
                href="mailto:sitanath.biswas@jiscollege.ac.in?subject="
                className="home-nav5"
              >
                Contact Us
              </a>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <Link to="/" className="home-logo1">
                  DPBH JISCE HACKTHON 2023
                </Link>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-container01">
                <nav className="home-links1">
                  <Link to="/" className="home-nav11">
                    Home
                  </Link>
                  <a
                    href="https://chiragnahata-my.sharepoint.com/:p:/g/personal/chiragnahata_chiragnahata_ml/ETjOt1gcUZxFgYmEWkT3THUBWvwHJxaVSeF05JClcmkzdw?e=eWHYYE"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-nav21"
                  >
                    About
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1Np90NVh2x8mf9wvxhgsFWpeX2dbQV-4Z/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-nav31"
                  >
                    Event Details
                  </a>
                  <a
                    href="https://forms.gle/3Wq1KL1zE76YDVBy5"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-nav41"
                  >
                    Registration
                  </a>
                </nav>
              </div>
              <div className="home-buttons"></div>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-hero1">
          <div className="home-container02">
            <h1 className="home-hero-heading heading1">
              The Dark Patterns Buster JISCE Internal Hackthon 2023
            </h1>
            <span className="home-hero-sub-heading">
              Join our college hackathon and showcase your skills
            </span>
            <div className="home-btn-group">
              <button type="submit" className="home-hero-button1 button">
                Apply with Devfolio
              </button>
              <a
                href="https://drive.google.com/file/d/1Np90NVh2x8mf9wvxhgsFWpeX2dbQV-4Z/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="home-hero-button2 button"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/external/Logos/jis%20logo-200h.png"
          className="home-image"
        />
      </div>
      <div className="home-details"></div>
      <div className="home-features">
        <div className="home-features-container"></div>
      </div>
      <div className="home-pricing"></div>
      <div className="home-gallery"></div>
      <div className="home-banner"></div>
      <div className="home-faq">
        <div className="home-faq-container"></div>
      </div>
      <div className="home-container03">
        <div className="home-container04">
          <div className="home-container05">
            <div className="home-container06">
              <div className="home-container07">
                <div className="home-container08">
                  <div className="home-container09">
                    <div className="home-container10">
                      <div className="home-container11"></div>
                      <div className="home-container12">
                        <div className="home-container13">
                          <div className="home-container14">
                            <div className="home-container15"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    alt="DOCA"
                    src="/external/Logos/dca%20logo-200h.png"
                    className="home-image01"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-faq1">
        <div className="home-container16">
          <span className="home-text sectionTitle">
            <span>FAQ</span>
            <br></br>
          </span>
          <h2 className="home-text03 heading2">Common questions</h2>
          <span className="home-text04">
            <span>Here are some of the most common questions that we get.</span>
            <br></br>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
        </div>
        <div className="home-container17">
          <Question
            answer="The hackathon aims to provide a platform for students to showcase their innovative ideas and skills in website development."
            question="What is the purpose of the hackathon?"
          ></Question>
          <Question
            answer="The hackathon is open to all college students who have an interest in website development."
            question="Who can participate in the hackathon?"
          ></Question>
          <Question
            answer="To register for the hackathon, you need to fill out the registration form available on our website."
            question="How can I register for the hackathon?"
          ></Question>
          <Question
            answer="No, the hackathon registration is completely free of charge."
            question="Is there any registration fee for the hackathon?"
          ></Question>
        </div>
      </div>
      <div className="home-footer"></div>
      <img
        alt="REPLIT LOGO"
        src="/external/Logos/replit-light-background-200h.png"
        className="home-image02"
      />
      <img
        alt="DPBH Logo"
        src="/external/Logos/dpbh-200h.png"
        className="home-image03"
      />
      <img
        alt="JISCE Logo"
        src="/external/Logos/jis%20logo-200h.png"
        className="home-image04"
      />
      <footer className="home-footer1">
        <div className="home-container18">
          <div className="home-logo2"></div>
          <div className="home-links-container">
            <div className="home-container19"></div>
          </div>
        </div>
        <div className="home-banner1"></div>
        <div className="home-separator"></div>
        <footer className="home-footer2">
          <span className="home-text21">
            © 2023 DPBH JISCE, All Rights Reserved.
          </span>
          <div className="home-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </footer>
      </footer>
      <img
        alt="IITBHU Logo"
        src="/external/Logos/iitbhu%20logo-200w.png"
        className="home-image05"
      />
      <img
        alt="Jago Grahak Jago"
        src="/external/Logos/jagograhakjago-200h.png"
        className="home-image06"
      />
      <img
        alt="G20 Logo"
        src="/external/Logos/g20%20logo-200h.png"
        className="home-image07"
      />
      <img
        alt="DEVFOLIO LOGO"
        src="/external/Logos/devfolio_logo-colored-200h.png"
        className="home-image08"
      />
      <img
        alt="POLYGON LOGO"
        src="/external/Logos/polygon_logo-colored1-200h.png"
        className="home-image09"
      />
    </div>
  )
}

export default Home
