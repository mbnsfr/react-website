import '../style/main/App.less';
import { Button, DatePicker, Space } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import i18n from '../translations/i18n';
import { withNamespaces } from 'react-i18next';
import controller from "./App.jsx";

const Home = () => {
  return <h2>Home</h2>;
};

const Gallery = () => {
  return <h2>Gallery</h2>;
};

const About = () => {
  return <h2>About</h2>;
};


const App = ({ t }) => {

  const { entertainment } = controller();

  // var a = entertainment[0].get("sample")
  console.log(entertainment)
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <Router>
      <div>
        <div>
          <Link to="/">welcome</Link>
          <Link to="/gallery">
            <Space>
              <DatePicker />
              <Button type="primary">Primary Button</Button>
            </Space>
          </Link>
          <Link to="/about">
            <button onClick={() => changeLanguage('fa')}>fa</button>
            {entertainment &&
              entertainment.map((item) => {
                return (
                  <button onClick={() => changeLanguage('en')}>{item.get("sample")}</button>
                );
              })}
            <h1>{t('welcome')}</h1></Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
};

export default withNamespaces()(App);