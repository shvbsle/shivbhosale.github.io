import React from 'react';
import {
    Drawer, Button, Radio, Icon,
    Result, Card,
    Typography, Tag, Spin, Divider
} from 'antd';
import JupViewer from './JupViewer'
const blogConfig = require('./blogConfig.json')
// console.log(blogConfig)
const { Meta } = Card;


export class BlogViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        this.parseURLParams = this.parseURLParams.bind(this)
    }


    onCloseBlog = () => {
        this.setState({
            bmodal_visible: false
        });
    };


    componentDidMount(newProps) {
        const parsedParams = this.parseURLParams(window.location.href);
        if (!!parsedParams) {
            if (('id' in parsedParams)) {
                if (parsedParams['id'] in blogConfig['blog_keys']) {
                    const blog_content = blogConfig['blog_keys'][parsedParams['id']]
                    this.setState({
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

    render() {
        return (
            <div>
                <center>
                    <br></br>
                    <Button type="primary" icon="home" onClick={() => { window.location = window.location.origin }}>Home</Button>

                    {this.state.nb_view}
                </center>
            </div>
        );
    }
}