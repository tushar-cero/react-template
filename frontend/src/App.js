import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import React, { useRef, useState, useEffect } from 'react';
// import { AnimatePresence } from "framer-motion"; // cover Routes with the tag

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/error" element={<Error></Error>}></Route>
                <Route component={Error}/>
            </Routes>
        </Router>
    );
}

export default App;
