import React from 'react';
import { withNamespaces } from 'react-i18next';

const App = ({ t }) => {

    return (
        <>
            panel
        </>
    );
};

export default withNamespaces()(App);

// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// <Router>
// <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/gallery" element={<Gallery />} />
// </Routes>
// </Router>

// import i18n from '../translations/i18n';
// const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
// }
