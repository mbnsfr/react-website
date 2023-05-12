import React from 'react';
import { withNamespaces } from 'react-i18next';
import PanelLayout from '../../components/layout_panel'

const Content = ({ t }) => {

    return (
        <>
            panel
        </>
    );
};

const App = ({ t }) => {

    return (
        <PanelLayout props={<Content />} />
    );
};

export default withNamespaces()(App);