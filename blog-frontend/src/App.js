import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Articles from './Articles';
import Article from './Article';
import ContactForm from './ContactForm';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Articles />} />
                    <Route path="/articles/:id" element={<Article />} />
                    <Route path="/contact" element={<ContactForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
