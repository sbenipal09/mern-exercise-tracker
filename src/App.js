import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ExerciseList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateUser from "./components/create-user.component";
import CreateExercise from "./components/create-exercise.component";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/edit/:id">Edit Exercise</Link></li>
            <li><Link to="/create">Create Exercise</Link></li>
            <li><Link to="/user">Create User</Link></li>
          </ul>
        </nav>

        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
