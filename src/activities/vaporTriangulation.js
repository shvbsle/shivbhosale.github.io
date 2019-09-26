import React from 'react';
import {
    Tabs, Icon, Carousel, Card, Row, Col, Collapse,
    Button, Modal, TreeSelect, Divider
} from 'antd';


export default class Triangulation extends React.Component {

    state = {
        screenWidth: 1399
    }

    renderTraingles() {
        var c = document.getElementById("triangulationCanvas");
        var ctx = c.getContext("2d");
        ctx.fillStyle = "white"
        // The X (cols) and Y(rows)
        const dims = [20, 10];

        ctx.beginPath();
        var rowOffset = 0;
        var colOffset = 0
        for (var i = 0; i < dims[1]; i++) {
            ctx.moveTo(0, 0 + rowOffset);
            ctx.lineTo(1399, 0 + rowOffset);
            ctx.stroke();
            rowOffset += 20;
            
        }
        for (var j = 0; j < dims[0]; j++) {
            ctx.moveTo(0+colOffset, 0);
            ctx.lineTo(0+colOffset, 300);
            ctx.stroke();
            colOffset+=40
        }



    }

    componentDidMount() {
        // this.renderTraingles();
    }


    render() {

        const screenWidth = 1399;
        return (
            <div>
                <h1>This is where cool stuff will go</h1>
                <canvas id="triangulationCanvas" height="150"
                    style={{
                        borderColor: 'black',
                        width: '100%',
                        color: 'white'
                    }}
                ></canvas>
                <Button
                    onClick={this.renderTraingles.bind(this)}
                >Check Back Later</Button>

            </div>
        )
    }
}