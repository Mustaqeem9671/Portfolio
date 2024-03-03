import React from "react";
import Footer from "./Footer";

const Education = () => {
  return (
    <div className="education--container">
      <h1 style={{ color: "gray" }}>Education</h1>
      <div className="education--card">
        <h2>Presidency College Bangalore</h2>
        <p>BCA with specialization in Computer Science</p>
        <p>CGPA 8.18</p>
        <p>Duration: 2020 - 2023</p>
      </div>

      <div className="education--card">
        <h2>Seventh Day Adventist College Bangalore</h2>
        <p>CEBA in Computer Science</p>
        <p>PER 66</p>
        <p>Duration: 2019 - 2020</p>
      </div>
      <div className="education--card">
        <h2>Al Ameen Residential School</h2>
        <p>High School</p>
        <p>PER 76</p>
        <p>Duration: 2017 - 2018</p>
      </div>

      {/* achievments */}

      <h1 style={{ marginTop: "5%" }}>Certificates</h1>
      <div className="achiev--cards">
        <div className="education--section--container">
          <div className="education--section--card">
            <div className="education--section--img">
              <img src="/image/ui ux .png" alt="placeholder" />
            </div>
            <div className="education--section--card--content">
              <div>
                <h3 className="education--section--title">UI UX certificate</h3>
                <p className="text-md">
                  In this certificate, I learned how to use ChatGPT for
                  designing user interfaces. It is very important to understand
                  that the user interface should be responsive for a better user
                  experience of the website. During this course, I also learned
                  about prompting.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="education--section--container">
          <div className="education--section--card">
            <div className="education--section--img">
              <img src="/image/js certificate.png" alt="placeholder" />
            </div>
            <div className="education--section--card--content">
              <div>
                <h3 className="education--section--title">
                  JavaScript certificate
                </h3>
                <p className="text-md">
                  This certificate acknowledges my achievement in clearing a
                  JavaScript quiz test with a good score. It demonstrates my
                  proficiency in JavaScript and validates my understanding of
                  the language.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="education--section--container">
          <div className="education--section--card">
            <div className="education--section--img">
              <img
                src="/image/masterClass for React js.png"
                alt="placeholder"
              />
            </div>
            <div className="education--section--card--content">
              <div>
                <h3 className="education--section--title">
                  Ecommerce website - using React js
                </h3>
                <p className="text-md">
                  I attended a Scaler master class where I developed an
                  ecommerce website and learned many new things. I gained
                  insights into implementing CSS shorthand and enhancing
                  functionality, among other valuable skills
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="education--section--container">
          <div className="education--section--card">
            <div className="education--section--img">
              <img src="/image/sql.png" alt="placeholder" />
            </div>
            <div className="education--section--card--content">
              <div>
                <h3 className="education--section--title">SQL - Database</h3>
                <p className="text-md">
                  This certificate course taught me all about databases and how
                  to use them for development and data storage. I gained
                  knowledge about queries and other essential concepts related
                  to databases.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="education--section--container">
          <div className="education--section--card">
            <div className="education--section--img">
              <img src="/image/certificate ui.png" alt="placeholder" />
            </div>
            <div className="education--section--card--content">
              <div>
                <h3 className="education--section--title">UI UX </h3>
                <p className="text-md">
                  Another certificate course taught me all about user interfcae
                  and how design from basic to advance . I gained knowledge
                  about responsiveness and other essential concepts related to
                  development of UI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Education;
