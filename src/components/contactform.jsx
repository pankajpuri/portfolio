import React from "react";
import Fade from "react-reveal";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import config from "../config/default.json";
import Form from "./common/form";
import http from "./services/httpService";

class ContactFrom extends Form {
  state = {
    datas: { name: "", email: "", subject: "", message: "" },
    errors: {},
  };

  schema = {
    name: Joi.string().required(),
    email: Joi.string().required(),
    subject: Joi.string().required(),
    message: Joi.string().required(),
  };
  async doSubmit() {
    //call the server;
    const datas = { ...this.state.datas };
    try {
      await http.post(config.apiUrl, datas);
      toast("Message sent. Thank you!");
      this.setState({
        datas: { name: "", email: "", subject: "", message: "" },
      });
    } catch (ex) {
      console.log("specific excpected error:", ex);
    }
  }
  render() {
    return (
      <section id="contact" className="container-fluid py-5">
        <div className="container py-4">
          <h1 className="div-heading">Hire Me</h1>

          <div className="row mt-5">
            <div className=" m-auto p-5 shadow-lg" style={{ padding: "48px" }}>
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <div className="col-sm-6 pe-3 mb-3">
                    <Fade bottom>{this.renderInput("name", "Name")}</Fade>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <Fade bottom>{this.renderInput("email", "Email")}</Fade>
                  </div>
                </div>
                <div className="col-sm-12 mb-3">
                  <Fade bottom>{this.renderInput("subject", "Subject")}</Fade>
                </div>
                <div className="col-sm-12 mb-3">
                  <Fade bottom>{this.renderInput("message", "Message")}</Fade>
                </div>
                <div className="submit-btn-div">
                  <Fade bottom>{this.renderButton("Submit", "submit")}</Fade>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactFrom;
