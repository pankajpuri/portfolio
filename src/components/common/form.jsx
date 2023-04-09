import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
class Form extends Component {
  state = { datas: {}, errors: {} };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    errorMessage !== ""
      ? (errors[input.name] = errorMessage)
      : delete errors[input.name];

    const datas = { ...this.state.datas };
    datas[input.name] = input.value;
    this.setState({ datas, errors });
  };

  validate = () => {
    const res = Joi.validate(this.state.datas, this.schema, {
      abortEarly: false,
    });
    if (!res.error) return null;

    const errors = {};
    for (let item of res.error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });

    this.doSubmit();
  };

  renderInput(name, placeholder) {
    const { datas, errors } = this.state;
    return (
      <Input
        name={name}
        placeholder={placeholder}
        value={datas[name]}
        onChange={this.handleChange}
        errors={errors[name]}
      />
    );
  }

  renderButton(label, type, id = "submitBtn") {
    return (
      <button
        id={id}
        type={type}
        className="btn btn-success contactform-input submit-btn"
        disabled={this.validate()}
      >
        {label}
      </button>
    );
  }
}

export default Form;
