import React from 'react';
import animateScrollTo from 'animated-scroll-to';

import logo from './logo.svg';
import './App.css';
import { Route, Switch, HashRouter,BrowserRouter, Link} from 'react-router-dom'
import {
  Tabs, Icon, Carousel, Card, Row, Col, Collapse,
  Button, Modal, TreeSelect, Divider, Typography, Popover,
  BackTop, Tooltip
} from 'antd';
import Triangulation from './activities/vaporTriangulation'
import AboutMe from './activities/aboutMe'
import {BlogDrawer} from './activities/blogDrawer'
import Landing from './landingPage'
import {BlogViewer} from './activities/blogViewer'
import MainPage from './main' 

function App() {
  return (
    <BrowserRouter basename="/">
      <Route exact path="/" component={MainPage} />
      <Route exact path="/main" component={Landing} />
      <Route path="/b" component={BlogViewer} />
      {/* <Route component={Landing} /> */}
    </BrowserRouter>
  );
}

export default App;
