import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Home from './Components/HomePage/Home';
import Login from './Components/LoginPage/Login';
import Employees from './Components/EmployeesPage/Employees';
import Upload from './Components/UploadPage/Upload';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

import Container from 'react-bootstrap/Container'
import Header from './Components/Header/Header';

export default function App() {

  return (
    <Container>
      <HashRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={
            <Home />
          } />
          <Route exact path="/login" element={
            <Login />
          } />
          <Route exact path="/employees" element={
            <PrivateRoute>
              <Employees />
            </PrivateRoute>
          } />
          <Route exact path="/upload" element={
            <PrivateRoute>
              <Upload />
            </PrivateRoute>
          } />
        </Routes>
      </HashRouter>
    </Container>
  );
}
