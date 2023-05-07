import React from 'react';
import { withNamespaces } from 'react-i18next';

const App = ({ t }) => {
    console.log("home");
    return (
        <>
            home
        </>
    );
};

export default withNamespaces()(App);
