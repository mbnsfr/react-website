import '../style/main/App.css';
import { Button, DatePicker, Space } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  return <h2>Home</h2>;
};

const Gallery = () => {
  return <h2>Gallery</h2>;
};

const About = () => {
  return <h2>About</h2>;
};


const App = () => {
  const { t } = useTranslation();
  return (
    <Router>
      <div>
        <div>
          <Link to="/">{t('welcome')}</Link>
          <Link to="/gallery">
            <Space>
              <DatePicker />
              <Button type="primary">Primary Button</Button>
            </Space>
          </Link>
          <Link to="/about">About</Link>
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

export default App;