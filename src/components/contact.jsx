import React, { useState } from "react";
import Fade from "react-reveal";

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const formId = "1fQulnQr";
  const FORMSPARK_ACTION_URL = `https://submit-form.com/${formId}`;

  // const displayMessage = {
  //   class: "",
  //   text: "",
  // };
  const [clas, setClas] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, subject, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };

    try {
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          details,
        }),
      });
      setClas("my-4 text-black w-full p-4 alert alert-success");
      setText("Thank you! I will be in touch shortly.");
    } catch (error) {
      console.log(error);

      setClas("bg-red-500");
      setText("Sorry, there was a problem. Please try again later.");
    }

    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
    console.log(clas + "+++++" + text);
    setStatus("Submit");
    alert("Sent!");
  };

  return (
    <section id="contact" className="container-fluid py-5">
      <div className="container py-4">
        <h1 className="div-heading">Contact</h1>

        <div className="row mt-5">
          {/* {clas != null && (
          <div id="SubmitText" className={clas}>
            {text}
          </div>
        )} */}
          <div className=" m-auto p-5 shadow-lg" style={{ padding: "48px" }}>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="col-sm-6 pe-3 mb-3">
                  <Fade bottom>
                    <input
                      type="text"
                      className="form-control contactform-input"
                      id="name"
                      placeholder="Name"
                      required
                    />
                  </Fade>
                </div>
                <div className="col-sm-6 mb-3">
                  <Fade bottom>
                    <input
                      type="email"
                      className="form-control contactform-input pe-3"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </Fade>
                </div>
              </div>
              <div className="col-sm-12 mb-3">
                <Fade bottom>
                  <input
                    type="text"
                    className="form-control contactform-input"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </Fade>
              </div>
              <div className="col-sm-12 mb-3">
                <Fade bottom>
                  <input
                    type="text"
                    className="form-control contactform-input"
                    id="message"
                    placeholder="Message"
                    required
                  />
                </Fade>
              </div>
              <div className="submit-btn-div">
                <Fade bottom>
                  <button
                    id="submitBtn"
                    type="submit"
                    className="btn btn-success contactform-input submit-btn"
                  >
                    {status}
                  </button>
                </Fade>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
