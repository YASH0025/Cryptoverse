import React from "react";
import { Routes, Route, Link } from "react-router-dom";
 import {Layout, Typography, Space} from 'antd'
import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components";

//import {Navbar} from './components'
import "./App.css";



const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
            </Routes>

            <Routes>
              <Route path="/exchanges" element={<Exchanges />}></Route>
            </Routes>

            <Routes>
              <Route
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              ></Route>
            </Routes>

            <Routes>
            <Route path="/crypto/:uuId" element={<CryptoDetails />} />
            </Routes>

            <Routes>
              <Route path="/news" element={<News />}></Route>
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br />
            All Rights Reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
