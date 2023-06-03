import React from "react";

class Education extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      school: "",
      major: "",
      date: "",
      isSubmitted: false,
    };
  }
  handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ ...this.state, [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ isSubmitted: true });
  }

  render() {
    return (
      <>
        <div id="education-container" className="cards">
          <h4>Education</h4>

          <form onSubmit={this.handleSubmit}>
            <label>School</label>
            <input
              type="text"
              name="school"
              value={this.state.school}
              onChange={this.handleChange}
              required
            ></input>

            <label>Title of Study</label>
            <input
              type="text"
              name="major"
              value={this.state.major}
              onChange={this.handleChange}
              required
            ></input>

            <label>Date of Study</label>
            <input
              type="text"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
              required
            ></input>

            <button type="submit">Submit</button>
          </form>
        </div>

        {this.state.isSubmitted && (
          <section id="education-text">
            <DisplayEducation inputs={this.state} />
          </section>
        )}
      </>
    );
  }
}

const DisplayEducation = props => {
  const { school, major, date } = props.inputs;
  let arr = [school, major, date];

  return (
    <>
      {arr.map((input, index) => {
        return <div key={index}> {input}</div>;
      })}
    </>
  );
};

export default Education;
