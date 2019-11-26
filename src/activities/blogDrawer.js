import React from 'react';
import {
    Drawer, Button, Radio, Icon,
    Result, Card,
    Typography, Tag
} from 'antd';
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
        bmodal_subtitle:"",
        bmodal_subtext:"",
        bmodal_nb_url:""

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
                        padding:'5px',
                    }}
                >

                    {
                        Object.keys(blogConfig['blog_keys']).map(item => (
                            <Card
                                // onClick={()=>{this.openBlogDrawer.bind(this)(item)}}
                                onClick={()=>{window.location = window.location.origin+"/n?id="+item}}
                                hoverable
                                cover={<img alt="example" src={blogConfig['blog_keys'][item]['cover_img_url']} />}
                                style={{
                                    backgroundColor:'#efefef',
                                }}
                                >
                                <Meta 
                                title={blogConfig['blog_keys'][item]['title']} description={blogConfig['blog_keys'][item]['subtitle']} />
                                <br></br>

                                {
                                    !!!blogConfig['blog_keys'][item]['tags']?<div></div>:(
                                        blogConfig['blog_keys'][item]['tags'].map(tag => (
                                            <Tag color="cyan">{tag}</Tag>
                                        ))
                                    )
                                }
                                
                            </Card>

                        ))
                    }
                </Drawer>
            </div>
        );
    }
}