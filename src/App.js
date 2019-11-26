import React from 'react';
import animateScrollTo from 'animated-scroll-to';

import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
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

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/n" component={BlogViewer} />
      <Route component={Landing} />
    </Switch>
  );
}

export default App;
