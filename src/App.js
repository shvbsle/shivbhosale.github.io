import React from 'react';
import animateScrollTo from 'animated-scroll-to';

import logo from './logo.svg';
import './App.css';

import {
  Tabs, Icon, Carousel, Card, Row, Col, Collapse,
  Button, Modal, TreeSelect, Divider, Typography, Popover,
  BackTop, Tooltip
} from 'antd';
import Triangulation from './activities/vaporTriangulation'
import AboutMe from './activities/aboutMe'

function App() {
  return (
    <div className="App">
      <BackTop />

      <center>
        <Typography.Title
          style={{
            color: 'white',
            paddingTop: '7%'
          }}
        >SHIV.</Typography.Title>
        <div>
          <Popover type="primary" content={<div><center><Icon type="lock" /> Under construction.</center> <br></br>Check out my Twitter <a href="https://twitter.com/artstylebot">AI bot</a> till then.</div>}>
            <Icon style={{ color: 'white' }} type="book"></Icon><a style={{ marginLeft: '10px' }} href="#">blog</a>
          </Popover>
          <Divider type="vertical" />
          <Icon style={{ color: 'white' }} type="github"></Icon><a style={{ marginLeft: '10px' }} href="https://github.com/ShivBhosale">github</a>
          <br></br>
          <br></br>
          <AboutMe />
        </div>
      </center>
      <Triangulation />
    </div>
  );
}

export default App;
