import '../style/main/App.less';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import i18n from '../translations/i18n';
import { withNamespaces } from 'react-i18next';
import Home from "./web/home/index"
import Article from "./web/article/index"
import Panel from "./panel/index"
import Error from "../components/error"

const App = ({ t }) => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home changeLanguage={changeLanguage} t={t} />} />
        <Route path="/article" element={<Article changeLanguage={changeLanguage} t={t} />} />
        <Route path="/panel*" element={<Panel />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default withNamespaces()(App);

  // import Controller from "./App.jsx";
  // <Spring pages={3} item={[{ offset: 1, speed: 1, style: { backgroundColor: "#232946" } }, { offset: 2, speed: 1, style: { backgroundColor: "#8bd3dd" } }]} />

  // import Spring from "../components/spring"
  // const { entertainment } = Controller();
  // {entertainment &&
  //   entertainment.map((item) => {
  //     return (
  //       <Button onClick={() => changeLanguage('en')}>en-{item.get("sample")}</Button>
  //     );
  //   })}

