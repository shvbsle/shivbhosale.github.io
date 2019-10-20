import React from 'react';
import {
    Tabs, Icon, Carousel, Card, Row, Col, Collapse,
    Button, Modal, TreeSelect, Divider, Typography
} from 'antd';

export default class AboutMe extends React.Component {
    render() {

        return (
            <div class='AboutMe' id="AboutMe">
                <center>
                    <Typography.Paragraph
                        style={{
                            color: 'white' ,
                            maxWidth:'350px'
                        }}
                    >Good at building data intensive software. My tech inventory is a mixed bag of Python, Apache Spark, React, Golang and a couple of ML frameworks. In my free time I read, build software or do math. Check out my projects to know more about my work.</Typography.Paragraph>
                </center>

            </div>
        )
    }
}