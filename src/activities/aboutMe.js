import React from 'react';
import {
    Tabs, Icon, Carousel, Card, Row, Col, Collapse,
    Button, Modal, TreeSelect, Divider, Typography,
    Avatar
} from 'antd';
const { Meta } = Card;

export default class AboutMe extends React.Component {
    render() {

        return (
            <div class='AboutMe' id="AboutMe">
                <center>
                    <Typography.Title
                        style={{
                            color: 'white',
                            paddingTop: '7%'
                        }}
                        >SHIV.
                    </Typography.Title>

                    <Typography.Paragraph
                        style={{
                            color: 'white' ,
                            maxWidth:'350px',
                            textAlign:'justify'
                        }}
                    >I'm good at building high performance AI systems. 
                    My research interests revolve around high-performance computing,
                    computer vision and graphics. 
                    In my free time I read, build software, make comics or learn math. 
                    Check out my Github and LinkedIn to know more about my work.</Typography.Paragraph>
                    <br></br>
                    <br></br>
                    <a
                                        href="https://www.glance.com/"
                        target="_blank"
                        >
                    <img 
                    style={{
                        maxWidth:'150px'
                    }}
                    src='https://glancecdn.azureedge.net/assets/ui/images/desk_uploads/header_logo.png'></img>
                    </a>
                    <br></br>
                    <br></br>
                    <Typography.Paragraph
                        style={{
                            color: 'white' ,
                            maxWidth:'350px',
                            textAlign:'justify'
                        }}>I work as a Machine-Learning-Engineer 2 @ Glance.
                        I'm solving computer-vision and personalization 
                        for 100 Million+ users, at scale. My work is a mixed bag of
                        ML/DS, Softare Engineering and Infra.
                    
                    </Typography.Paragraph>
                    <br></br>
                    <br></br>

                    <a
                    href="https://www.linkedin.com/in/shivjeet-bhosale-97142a133"
                    target="_blank"
                    >
                    <Icon type='linkedin' style={{
                        color:'white',
                        fontSize:'22px'
                    }}></Icon>
                    </a>


                </center>

            </div>
        )
    }
}