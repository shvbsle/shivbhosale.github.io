import React from 'react';
import {
    Drawer, Button, Radio, Icon,
    Result, Card,
    Typography, Tag, Spin, message, Pagination, Divider
} from 'antd';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';


const blogConfig = require('./blogConfig.json')
const { Meta } = Card;

export class BlogList extends React.Component {
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

    render() {
        return (
            <div style={{ display: 'inline-table', width:'70vw' }}>
                <List
                        itemLayout="vertical"
                        size="small"
                        >               
                    {
                        Object.keys(blogConfig['blog_keys']).map(item => (
                            <List.Item
                            
                            style={{
                                color:'white'
                            }}
                            >
                                <List.Item.Meta
                                title={
                                <div>
                                <Avatar src={blogConfig['blog_keys'][item]['cover_img_url']} />
                                <Typography.Text style={{
                                    color:'white',
                                    paddingLeft:'20px',
                                    paddingRight:'20px'
                                }} >{blogConfig['blog_keys'][item]['title']}</Typography.Text> 
                                <Button ghost shape='circle' icon='eye'
                                onClick={() => {
                                    // window.history.pushState('page2', 'Shiv 200', '/#b/?id='+item);
                                    // this.openBlogDrawer.bind(this)(blogConfig['blog_keys'][item])
                                    window.open(window.origin + '/?view=blog&id='+item)
                                }}/>
                                </div>
                                }
                                description={
                                    !!!blogConfig['blog_keys'][item]['tags'] ? <div></div> : (
                                        blogConfig['blog_keys'][item]['tags'].map(tag => (
                                            <div style={{display:'inline', color:'cyan', paddingRight:'10px'}}>#{tag}</div>
                                        ))
                                    )
                                }
                                />
                            </List.Item>
                            

                        ))
                    }
                    </List>         

            </div>
        );
    }
}

