import React from 'react';
import {
    Drawer, Button, Radio, Icon,
    Result, Card,
    Typography
} from 'antd';
import JupViewer from './JupViewer'
const blogConfig = require('./blogConfig.json')
console.log(blogConfig)
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

    openBlogDrawer(item) {
        console.log(item)
        this.setState({
            bmodal_visible: true,
            bmodal_title: item['title'],
            bmodal_cover: item['cover_img_url'],
            bmodal_subtitle:item['subtitle'],
            bmodal_subtext:item['subtitle'],
            bmodal_nb_url:item['nb_url']
        })
    }

    onCloseBlog = () => {
        this.setState({
            bmodal_visible: false
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
                >

                    {
                        blogConfig['blogs'].map(item => (
                            <Card
                                onClick={()=>{this.openBlogDrawer.bind(this)(item)}}
                                hoverable
                                cover={<img alt="example" src={item['cover_img_url']} />}
                            >
                                <Meta title={item['title']} description={item['subtitle']} />
                            </Card>

                        ))
                    }
                    <Result
                        icon={<Icon type="meh" theme="twoTone" />}
                        title="Umm... Awkward..."
                        subTitle="Hey! I'm still working on my blog"
                    />
                    <center>
                        <Typography.Title level={4}>In the mean time</Typography.Title>
                        <ul>
                            <li><div><Icon type="robot"></Icon> Check out my Twitter <a href="https://twitter.com/artstylebot" target="_blank">AI Bot</a> till then!</div></li>
                            <li><div>Click on the background pattern for an easter egg!</div></li>
                        </ul>
                    </center>
                </Drawer>
                <Drawer
                    title="Opened Blog"
                    placement={this.state.placement}
                    closable={true}
                    onClose={this.onCloseBlog}
                    visible={this.state.bmodal_visible}
                    width='100%'
                    bodyStyle={{
                        padding:'0px',
                        backgroundColor:'#515151'
                    }}
                >
                    <center>
                        <JupViewer
                            title={this.state.bmodal_title}
                            subtitle={this.state.bmodal_subtitle}
                            coverImg={this.state.bmodal_cover}
                            // file={ipynb}
                            file={this.state.bmodal_nb_url}
                        // file="https://raw.githubusercontent.com/fastai/course-v3/master/nbs/dl1/00_notebook_tutorial.ipynb"
                        />
                    </center>
                </Drawer>
            </div>
        );
    }
}