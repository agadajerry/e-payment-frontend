import React, { useRef } from "react";
import "../assets/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typed from "typed.js";
import { useEffect, useState } from "react";

library.add(fas);

function LandingPage() {
  

  const [toggle, setToggle] = useState(false);



  const el: any = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Send Money Anytime", " Anywhere For Free..."],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // style menu toggle.

  return (
    <div>
      <div className="overlay"></div>
      <header>
        <nav className="nav-menu">
          <label className="logo">E-Pay</label>
          <span className= "toggle-btn" onClick={()=>setToggle(!toggle)}>
            {toggle ? (
              <FontAwesomeIcon icon={["fas", "times"]} size="3x" />
            ) : (
              <FontAwesomeIcon icon={["fas", "bars"]} size="3x" />
            )}
          
          </span>

          <ul className= "menu-item">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Send Money</a>
            </li>
            <li>
              <a href="#">Recieve Money</a>
            </li>
            <li>
              <a href="#">Transaction History</a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={["fas", "user"]} />
              </a>
              <a href="#">Logout</a>
            </li>
          </ul>
        </nav>

        {/* showcase page */}

        <div className="showcase">
          <div className="table-cell">
            <div className="showcase-info">
              <div className="showcase-message">
                <span className="typed about-message" ref={el}></span>
                <p className="message-body">
                  Send money to another user of the account and you won't pay
                  any transfer fees. Use the app and find out how much you could
                  save.
                </p>
                <input type="button" value="Learn More" />
              </div>
              <div className="input-form">
                <form>
                  <h2 className="send-money">Send Money</h2>
                  <label className="acc-label">Send Amount</label>
                  <input type="number" />

                  <label className="acc-label">Acccount Number</label>
                  <input type="number" />

                  <label className="acc-label">Description</label>
                  <input type="text" />
                  <input type="submit" value="Send" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* section for why send money with our platform. */}
      <div className="container content">
        <div className="flex-row">
          <div className="col">
            <h2 className="title">Why Send Money with Our Payment Service</h2>
            <p className="lead">
              Send money with the click of a mouse or a tap on your screen.
            </p>
            <ul className="work-we-do">
              <li>
                <div className="list-of-work">
                  <span>
                    <FontAwesomeIcon icon={["fas", "check"]} />
                  </span>
                  <p className="lead">
                    As long as you have an email address for your recipient,
                    they can receive online payments from your Account
                  </p>
                </div>
              </li>
              <li>
                <div className="list-of-work">
                  <span>
                    <FontAwesomeIcon icon={["fas", "check"]} />
                  </span>
                  <p className="lead">
                    When you send money through our Money Transfer service,
                    you’re protecting yourself with industry-leading.
                  </p>
                </div>
              </li>
              <li>
                <div className="list-of-work">
                  <span>
                    <FontAwesomeIcon icon={["fas", "check"]} />
                  </span>
                  <p className="lead">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Impedit, quisquam.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col">
            <div className="graph-image">
              <img
                src="https://cdn.pixabay.com/photo/2021/09/03/11/04/success-6595539_960_720.png"
                className="graph-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* how to does our payment system work. */}

      <div className="container">
        <div className="flex-row">
          <div className="col">
            <h2 className="title">How Does Our Payment System Works?</h2>
            <p className="lead">
              Schedule payments, make free transfers, manage multiple accounts
              and free up time for the rest of your life with smarter business
              banking from us.
            </p>
            <p className="lead">
              Create and manage multiple business accounts.
            </p>
            <button type="submit" className="learn-more">
              {" "}
              <span></span>Learn More
            </button>
          </div>
          <div className="col">
            <div className="graph-image">
              <img
                src="https://pulsehrm.com/wp-content/uploads/2021/09/gif-for-EPM.gif"
                className="graph-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Frequently asked questions. */}

      <div className="container FAQ">
        <h2 className="title text-center"> Frequently Asked Questions</h2>
        <p className="lead text-center">
          as been helping to make it, send it and spend it for millions of
          customers since 2021. So wherever you are and whatever you want to do
          with your money..
        </p>
        <div className="flex-row">
          <a href="#" className="col3 active">
            <FontAwesomeIcon icon={["fas", "question"]} size="6x" />
            <p className="faq-title">General Questions</p>
          </a>
          <a href="#" className="col3">
            <FontAwesomeIcon icon={["fas", "credit-card"]} size="6x" />
            <p className="faq-title">Money Transfer</p>
          </a>
          <a href="#" className="col3">
            <FontAwesomeIcon icon={["fas", "link"]} size="6x" />
            <p className="faq-title">Mobile Banking</p>
          </a>
          <a href="#" className="col3">
            <FontAwesomeIcon icon={["fas", "cog"]} size="6x" />
            <p className="faq-title">Fees And Charges</p>
          </a>
        </div>

        {/* accordion section for questions. */}

        <div className="accordion">
          <input type="checkbox" name="accordion" id="accordion1" />
          <label htmlFor="accordion1"> About our fees</label>
          <div className="accordion-content">
            We’re serious about free banking, and we will never, ever charge you
            for anything without your consent.!
          </div>
        </div>
        <div className="accordion">
          <input type="checkbox" name="accordion" id="accordion2" />
          <label htmlFor="accordion2"> What would you do for us?</label>
          <div className="accordion-content">
            With so many options for transferring money in and out of your e-pay
            Account, it’s easy to transfer money online and receive money online
            too. Wherever you are in the world: get paid in seconds Wherever you
            are in the world: get paid in seconds Wherever you are in the world:
            get paid in seconds
          </div>
        </div>
      </div>

      <div className="footer">
        <h2 className="title text-center" style={{ color: "#fff" }}>
          Contact Us
        </h2>

        <div className="flex-row footer-row">
          <div className="col">
            <ul className="work-we-do contact">
              <li>Address: Sangotedo, Eti-Osa, Ajah Lagos Nigeria</li>
              <li>email:epaymoment@info.com</li>
              <li>Phone: +23481800085</li>
            </ul>
          </div>
          <div className="col">
            <form>
              <h2 className="send-us-message">Send Us Message Today</h2>
              <input type="text" placeholder="Name" />

              <input type="text" placeholder="Subject" />
              <input type="email" placeholder="Email" />

              <textarea placeholder="Message"></textarea>
              <button type="button" value="Send" className="learn-more">
                Submit <span></span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer>
        Designed By Idoko Jerry. &copy; 2021. All right reserved.
        <a href="https://www.findjerry.tech">JerrySofttechy</a>
      </footer>
    </div>
  );
}

export default LandingPage;
