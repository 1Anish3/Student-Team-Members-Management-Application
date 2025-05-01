import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddMember from './components/AddMember';
import MembersList from './components/MemberList';
import MemberDetails from './components/MemberDetails';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-member" element={<AddMember />} />
                <Route path="/view-members" element={<MembersList />} />
                <Route path="/member/:id" element={<MemberDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
