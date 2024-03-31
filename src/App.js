import React from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExerciseList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateUser from "./components/create-user.component";
import CreateExercise from "./components/create-exercise.component";
import Navbar from './components/navbar.component';

function App() {
  return (
    <>
    <Navbar />
     
    <CreateExercise />
    <CreateUser />
    </>
  );
}

export default App;
