import React from 'react';
import { Layout, Menu, Icon, Divider,
        Row, Col } from 'antd';
import {
    MobileView,
    BrowserView,
    } from "react-device-detect";

import {BlogViewer} from './activities/blogViewer'
import AboutMe from './activities/aboutMe'
const { Header, Content, Footer} = Layout;

class MainPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name:' SHIV NEWWWW',
            contentLayoutStyle: {
                "min-height": "90vh",
                "padding": "15px 0px",
                "background": "#010815"
            },
            contentStyle: {
                padding: '0 0',
                backgroundColor:'#010815'
            },
            footerStyle: {
                textAlign: 'center',
                backgroundColor:'#010815',
                color:'white'
            },
            activeSection:'aboutme',
            githubBarStyle:{
                color:'white'
            },
            aboutMeStyle:{
                color:'white'
            },
            blogBarStyle:{
                color:'white'
            }

            
        }

        this.isActiveAboutMe = this.isActiveAboutMe.bind(this)
        this.isActiveBlog = this.isActiveBlog.bind(this)

    }

    isActiveAboutMe(){
        this.setState({
            githubBarStyle:{
                color:'white'
            },
            aboutMeStyle:{
                color:'cyan'
            },
            blogBarStyle:{
                color:'white'
            },
            activeSection:'aboutme'
        })
        const url = new URL(window.location);
        url.searchParams.set('view', 'aboutme');
        url.searchParams.delete('id');
        window.history.pushState({}, '', url);
    }


    isActiveBlog(){
        this.setState({
            githubBarStyle:{
                color:'white'
            },
            aboutMeStyle:{
                color:'white'
            },
            blogBarStyle:{
                color:'cyan'
            },
            activeSection:'blog'
        })
        const url = new URL(window.location);
        url.searchParams.set('view', 'blog');
        window.history.pushState({}, '', url);

    }

    evaluateParams = (url) => {
        var queryStart = url.indexOf("?") + 1,
            queryEnd = url.length + 1,
            query = url.slice(queryStart, queryEnd - 1),
            pairs = query.replace(/\+/g, " ").split("&"),
            parms = {}, i, n, v, nv;

        if (query === url || query === "" || query + "#/b" === url) return;

        for (i = 0; i < pairs.length; i++) {
            nv = pairs[i].split("=", 2);
            n = decodeURIComponent(nv[0]);
            v = decodeURIComponent(nv[1]);

            if (!parms.hasOwnProperty(n)) parms[n] = [];
            parms[n].push(nv.length === 2 ? v : null);
        }
        return parms;
    }

    componentDidMount(){
        var qparams = this.props.location.search;
        var params = this.evaluateParams(qparams);
        if(params){
            if('view' in params){
                if(params['view'][0] == 'about'){
                    this.isActiveAboutMe()
                }
                else if(params['view'][0] == 'blog'){
                    // if
                    this.isActiveBlog()
                }
            }   
        }
        else{
            console.log('omgggg')
            this.isActiveAboutMe()
        }

        console.log(params);
    }

    render(){

        const activeView = this.state.activeSection;
        var dislayComponent = null;
        if (activeView == "blog"){
            dislayComponent = <BlogViewer/>;
        }
        else{
            dislayComponent = <AboutMe/>;
        }

        return(
            <div className="App">
                <Layout className="layout"
                    
                >
                    <Header
                    style={{
                        alignContent:'center'
                    }}>
                        <center>
                            <Row>
                                <Col span={3}></Col>
                                <Col span={6}
                                >
                                    <MobileView>
                                        <a href="https://github.com/ShivBhosale" target="_blank">
                                        <Icon style={this.state.githubBarStyle} 
                                        
                                        type="github"></Icon>
                                    </a>
                                    </MobileView>
                                <BrowserView>
                                    <Icon style={this.state.githubBarStyle} type="github"></Icon>
                                    <a style={{ marginLeft: '10px' }} href="https://github.com/ShivBhosale" target="_blank">Github</a>
                                </BrowserView>
                                </Col>
                                <Col span={6}
                                onClick={this.isActiveAboutMe}
                                >
                                <MobileView>
                                        <Icon style={this.state.aboutMeStyle} 
                                        type="robot"></Icon>
                                </MobileView>
                                <BrowserView>
                                    <Icon style={this.state.aboutMeStyle} type="robot"></Icon>
                                    <a style={{ marginLeft: '10px' }} type="primary">
                                        About Me
                                    </a>
                                    </BrowserView>
                                </Col>
                                <Col span={6}
                                onClick={this.isActiveBlog}
                                >
                                    <MobileView>
                                        <Icon style={this.state.blogBarStyle} 
                                        
                                        type="book"></Icon>
                                    </MobileView>
                                    <BrowserView>
                                    <Icon style={this.state.blogBarStyle} type="book"></Icon>
                                    <a style={{ marginLeft: '10px' }}>Blog</a>
                                    </BrowserView>
                                </Col>
                                <Col span={3}></Col>
                            </Row>
                        </center>
                    </Header>
                    <Content style={this.state.contentStyle}>
                    <div className="site-layout-content"
                        style={this.state.contentLayoutStyle}>
                            {dislayComponent}
                        </div>
                    </Content>
                    <Footer style={this.state.footerStyle}>
                    Wanna use this notebook viewer? Star it on my <a href="https://github.com/ShivBhosale/React-Jupyter-Viewer" target="_blank">Github! <Icon type="github"/> </a>

                    </Footer>
                </Layout>
          </div>
        );
    }
}




export default MainPage;
