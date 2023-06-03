import React from "react";
import "../styles/input.text.css";

class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
      isSubmitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ isSubmitted: true });
  }

  render() {
    return (
      <>
        <div id="contact-container" className="cards">
          <h4>Contact</h4>

          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            ></input>

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            ></input>

            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              name="phone"
              // add RegEx pattern
              value={this.state.phone}
              onChange={this.handleChange}
              required
            ></input>

            <button type="submit">Submit</button>
          </form>
        </div>

        {this.state.isSubmitted && (
          <section id="contact-text">
            <DisplayContact inputs={this.state} />
          </section>
        )}
      </>
    );
  }
}

const DisplayContact = props => {
  const { name, email, phone } = props.inputs;
  console.log(props.inputs);
  let arr = [name, email, phone];

  return (
    <>
      {arr.map((input, index) => {
        return <div key={index}> {input}</div>;
      })}
    </>
  );
};

export default Contact;
