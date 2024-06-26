import React, { Component } from "react";
import axios from "axios";
export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    this.onChangeDate=this.onChangeDate.bind(this);
    this.onChangeDescription=this.onChangeDescription.bind(this);
    this.onChangeUsername=this.onChangeUsername.bind(this);
    this.onChangeDuration=this.onChangeDuration.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ users: ['test user'], username: '' }); // Fixed typo here
  }
  

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  onChangeDescription = (e) => {
    this.setState({ description: e.target.value });
  };

  onChangeDate = (e) => {
    this.setState({ date: e.target.value });
  };

  onChangeDuration = (e) => {
    this.setState({ duration: e.target.value });
  };

  onSubmit(e){
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description:this.state.description,
      duration:this.state.duration,
      date:this.state.date


    }

    console.log(exercise)
    axios.post('http://localhost:5000/exercise/add',exercise)
    .then(response=>{console.log(response)})
    .catch((error)=>{console.log(error)});
     
  }
  render() {
    return (
      <div className="container">
      <h3>Create New Exercise</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            required
            className="form-control"
            value={this.state.username}
            onChange={this.onChangeUsername}
          >
            {this.state.users.map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={this.state.description}
            onChange={this.onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={this.state.duration}
            onChange={this.onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <input
            type="date"
            className="form-control"
            value={this.state.date}
            onChange={this.onChangeDate}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
    );
  }
}
