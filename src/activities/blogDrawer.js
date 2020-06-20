import React from 'react';
import {
    Drawer, Button, Radio, Icon,
    Result, Card,
    Typography, Tag, Spin, message
} from 'antd';
import { Link} from 'react-router-dom'

import JupViewer from './JupViewer'
const blogConfig = require('./blogConfig.json')
// console.log(blogConfig)
const { Meta } = Card;

export class BlogDrawer extends React.Component {
    state = {
        visible: false,
        placement: 'right',

        // states for the Blog modal
        bmodal_visible: false,
        bmodal_title: "Loading...",
        bmodal_cover: "",
        bmodal_subtitle: "",
        bmodal_subtext: "",
        bmodal_nb_url: "",

        // Notebook view
        nb_view: (
            <center>
                <Spin />
            </center>
        )

    };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false
        });
    };

    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };

    openBlogDrawer(item) {
        // console.log(item)
        this.setState({
            bmodal_visible: true,
            bmodal_title: item['title'],
            bmodal_cover: item['cover_img_url'],
            bmodal_subtitle: item['subtitle'],
            bmodal_subtext: item['subtitle'],
            bmodal_nb_url: item['nb_url'],
            nb_view: (
                <center>
                    <JupViewer
                        title={item['title']}
                        subtitle={item['subtitle']}
                        coverImg={item['cover_img_url']}
                        file={item['nb_url']}
                    />
                </center>)
        })
    }

    onCloseBlog = () => {
        window.location = window.location.origin
        // Doesnt reach these
        this.setState({
            bmodal_visible: false
        });
    };

    parseURLParams(url) {
        var queryStart = url.indexOf("?") + 1,
            queryEnd = url.indexOf("#") + 1 || url.length + 1,
            query = url.slice(queryStart, queryEnd - 1),
            pairs = query.replace(/\+/g, " ").split("&"),
            parms = {}, i, n, v, nv;

        if (query === url || query === "") return;

        for (i = 0; i < pairs.length; i++) {
            nv = pairs[i].split("=", 2);
            n = decodeURIComponent(nv[0]);
            v = decodeURIComponent(nv[1]);

            if (!parms.hasOwnProperty(n)) parms[n] = [];
            parms[n].push(nv.length === 2 ? v : null);
        }
        return parms;
    }

    componentDidMount(newProps) {
        const parsedParams = this.parseURLParams(window.location.href);
        if (!!parsedParams) {
            if (('id' in parsedParams)) {
                if (parsedParams['id'] in blogConfig['blog_keys']) {
                    const blog_content = blogConfig['blog_keys'][parsedParams['id']]
                    this.setState({
                        bmodal_visible: true,
                        nb_view: (
                            <center>
                                <JupViewer
                                    title={blog_content['title']}
                                    subtitle={blog_content['subtitle']}
                                    coverImg={blog_content['cover_img_url']}
                                    file={blog_content['nb_url']}
                                />
                            </center>)
                    })
                }
                else {
                    message.warning('No Blog found on the intended URL')
                    this.setState({
                        nb_view: (
                            <center>
                                <Result
                                    icon={<Icon type="frown" theme="twoTone" />}
                                    title={<div style={{ 'color': 'white' }}>Oops! No Notebook on this URL!</div>}
                                />
                            </center>)
                    })
                }
            }
            else {
                this.setState({
                    nb_view: (
                        <center>
                            <Result
                                icon={<Icon type="frown" theme="twoTone" />}
                                title={<div style={{ 'color': 'white' }}>Oops! No Notebook on this URL!</div>}
                            />
                        </center>)
                })
            }
        }
        else {
            this.setState({
                nb_view: (
                    <center>
                        <JupViewer
                            title="Jupyter as Blogs!"
                            subtitle="This React component lets you use a jupyter notebook as a blog"
                            coverImg="https://pbs.twimg.com/media/DnT_X9qXgAYyTOz.jpg"
                            file="https://raw.githubusercontent.com/fastai/course-v3/master/nbs/dl1/00_notebook_tutorial.ipynb"
                        />
                    </center>)
            })
        }
    }


    render() {
        return (
            <div style={{ display: 'inline-table' }}>
                <Icon style={{ color: 'white' }} type="book"></Icon>
                <a style={{ marginLeft: '10px' }} type="primary" onClick={this.showDrawer}>
                    blog
                </a>
                <Drawer
                    title="My Blogs"
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    // visible={true}
                    width='350px'
                    bodyStyle={{
                        padding: '5px',
                    }}
                >

                    {
                        Object.keys(blogConfig['blog_keys']).map(item => (
                            <Card
                                onClick={() => {
                                    // window.history.pushState('page2', 'Shiv 200', '/#b/?id='+item);
                                    // this.openBlogDrawer.bind(this)(blogConfig['blog_keys'][item])
                                    window.open(window.origin + '/#b/?id='+item)
                                }}
                                // onClick={()=>{window.location = window.location.origin+"/n?id="+item}}
                                hoverable
                                cover={<img alt="example" src={blogConfig['blog_keys'][item]['cover_img_url']} />}
                                style={{
                                    backgroundColor: '#efefef',
                                }}
                            >
                                <Meta
                                    title={blogConfig['blog_keys'][item]['title']} description={blogConfig['blog_keys'][item]['subtitle']} />
                                <br></br>

                                {
                                    !!!blogConfig['blog_keys'][item]['tags'] ? <div></div> : (
                                        blogConfig['blog_keys'][item]['tags'].map(tag => (
                                            <Tag color="cyan">{tag}</Tag>
                                        ))
                                    )
                                }

                            </Card>

                        ))
                    }
                </Drawer>

                <Drawer
                    title="Opened Blog"
                    placement={this.state.placement}
                    closable={true}
                    onClose={this.onCloseBlog}
                    visible={this.state.bmodal_visible}
                    width='100%'
                    bodyStyle={{
                        padding: '0px',
                        backgroundColor: '#515151'
                    }}
                >
                    <center>
                        {this.state.nb_view}
                    </center>
                </Drawer>
            </div>
        );
    }
}