//todo : add spring view 
//todo : add translator by props 

import React from 'react';
import { withNamespaces } from 'react-i18next';
import DashboardLayout from '../../../components/layout_dashboard'
// import Controller from "./controller";
// import Spring from "../../../components/spring"
// import { Button } from 'antd';

{/* <Spring pages={3} item={[{ offset: 1, speed: 1, style: { backgroundColor: "#232946" } }, { offset: 2, speed: 1, style: { backgroundColor: "#8bd3dd" } }]} /> */ }

const Content = (props, { t }) => {
    // const { entertainment } = Controller();
    return (
        <>
            home
            {/* <Spring pages={3} item={[{ offset: 1, speed: 1, style: { backgroundColor: "#232946" } }, { offset: 2, speed: 1, style: { backgroundColor: "#8bd3dd" } }]} />
            {
                entertainment &&
                entertainment.map((item) => {
                    return (
                        <Button>en-{item.get("sample")}</Button>
                    );
                })
            } */}
        </>
    );
};

const App = ({ t }) => {

    return (
        <DashboardLayout props={<Content />} />
    );
};

export default withNamespaces()(App);
