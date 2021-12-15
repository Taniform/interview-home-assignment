import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from './pages/Landing';
import EmailList from './pages/EmailList';
import EmailDetail from './pages/EmailDetail';
import AddEmail from './pages/AddEmail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/userEmailList" element={<EmailList />} />
        <Route path="/emailDetail/:id" element={<EmailDetail />} />
        <Route path="/addEmail" element={<AddEmail />} />
      </Routes>
    </div>
  );
}

export default App;
