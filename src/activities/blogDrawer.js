import React from 'react';
import {
    Drawer, Button, Radio, Icon,
    Result,
    Typography
} from 'antd';

export class BlogDrawer extends React.Component {
    state = { visible: false, placement: 'right' };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
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
                    width='350px'
                >
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
            </div>
        );
    }
}