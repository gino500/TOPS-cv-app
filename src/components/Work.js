import React from "react";

class Work extends React.Component {
  constructor() {
    super();

    this.state = {
      company: "",
      title: "",
      date: "",
      tasks: "",
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
        <div id="work-container" className="form">
          <h4>Work</h4>

          <form onSubmit={this.handleSubmit}>
            <label>Company Name</label>
            <input
              type="text"
              name="company"
              value={this.state.company}
              onChange={this.handleChange}
              required
            ></input>

            <label>Job Title</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            ></input>

            <label>Date</label>
            <input
              type="text"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
              required
            ></input>

            <label>Tasks</label>
            <input
              type="text"
              name="tasks"
              value={this.state.tasks}
              onChange={this.handleChange}
              required
            ></input>

            <button type="submit">Submit</button>
          </form>
        </div>

        {this.state.isSubmitted && (
          <section id="work-text" className="text">
            <WorkContact inputs={this.state} />
          </section>
        )}
      </>
    );
  }
}

const WorkContact = props => {
  const { company, title, date, tasks } = props.inputs;
  let arr = [company, title, date, tasks];

  return (
    <>
      {arr.map((input, index) => {
        return <div key={index}> {input}</div>;
      })}
    </>
  );
};

export default Work;
