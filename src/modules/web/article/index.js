import React from 'react';
import { withNamespaces } from 'react-i18next';
import DashboardLayout from '../../../components/layout_dashboard'

const Content = ({ t }) => {

    return (
        <>
            Article
        </>
    );
};

const App = ({ t }) => {

    return (
        <DashboardLayout props={<Content />} />
    );
};

export default withNamespaces()(App);
