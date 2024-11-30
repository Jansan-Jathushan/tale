import React from "react"
import'../components/assets/css/animate.css';
import'../components/assets/css/flex-slider.css';
import'../components/assets/css/fontawesome.css';
import'../components/assets/css/owl.css';
import'../components/assets/css/templatemo-tale-seo-agency.css';
import faq from './assets/images/faqs-image.jpg'
import serviceImage1 from './assets/images/services-01.jpg';
import serviceImage2 from './assets/images/services-02.jpg';
import serviceImage3 from './assets/images/services-03.jpg';
import serviceImage4 from './assets/images/services-04.jpg';

const images = [serviceImage1, serviceImage2, serviceImage3, serviceImage4];


const FAQPage = () => {
  return (
    <div>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 align-self-center">
              <div className="caption header-text">
                <h6>SEO DIGITAL AGENCY</h6>
                <div className="line-dec"></div>
                <h4>Most Frequently Asked <em>Questions</em> Here <em>?</em></h4>
              </div>
            </div>
            <div className="col-lg-5">
              <img src={faq} alt="FAQs" />
            </div>
          </div>
        </div>
      </div>

      <div className="happy-steps">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Our 4 Steps To Success &amp; Happy Clients</h2>
            </div>
            <div className="col-lg-12">
              <div className="steps">
                <div className="row">
                  {['Project Introduction', 'Work Development', 'Data Analysis', 'Project Finishing'].map((step, index) => (
                    <div className="col-lg-3" key={index}>
                      <div className="item">
                      <img
    src={images[index]}
    alt={`Service ${index + 1}`}
    style={{ maxWidth: "66px", borderRadius: "50%", margin: "0 auto" }}
  />                        <h4>{step}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="most-asked section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Most <em>Frequently</em> Asked <span>Questions</span> ?</h2>
                <div className="line-dec"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="accordions is-first-expanded">
                {['Sartorial Butcher Humblebrag', 'Jean Shorts Microdosing', 'Waistcoat Aesthetic Polaroid', 'Dolores Accordion HTML5'].map((question, index) => (
                  <article className="accordion" key={index}>
                    <div className="accordion-head">
                      <span>{question}</span>
                      <span className="icon">
                        <i className="icon fa fa-chevron-right"></i>
                      </span>
                    </div>
                    <div className="accordion-body">
                      <div className="content">
                        <p>
                          {/* Sample content for each FAQ. You can replace this with actual content */}
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="get-free-quote">
                <form id="free-quote" method="submit" role="search" action="#">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-heading">
                        <h2>Get a <em>Free Quote</em> Now</h2>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail" required />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <input type="url" name="website" id="website" placeholder="Website URL" autoComplete="on" required />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <input type="tel" name="phone-number" id="phone-number" placeholder="Phone Number" autoComplete="on" required />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <input type="text" name="full-name" id="full-name" placeholder="Full Name" autoComplete="on" />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="orange-button">Get Your Free Quote</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="cta section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h4>Are You Ready To Work &amp; Develop With Us ?<br />Don't Hesitate &amp; Contact Us !</h4>
            </div>
            <div className="col-lg-4">
              <div className="main-button">
                <a href="#">Contact Us Now!</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FAQPage;
