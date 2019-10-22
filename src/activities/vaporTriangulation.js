import React from 'react';
import {
    Tabs, Icon, Carousel, Card, Row, Col, Collapse,
    Button, Modal, TreeSelect, Divider, Tooltip, message
} from 'antd';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const source_code_str = `
/*################################################################## 
* HEY! YOU HAVE UNLOCKED THE EASTER EGG!  
* THIS IS THE SOURCE CODE FOR THE 
* BACKGROUND ANIMATION THAT I WROTE.
* FEEL FREE TO USE IT!
*###################################################################
*/
import React from 'react';
import {
    Tabs, Icon, Carousel, Card, Row, Col, Collapse,
    Button, Modal, TreeSelect, Divider, Tooltip
} from 'antd';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default class Triangulation extends React.Component {
    state = {
        dims: window.screen.width > 600 ? [20, 7] : [10, 10],
        col_pegs: [],
        col_pregs_dest: [],
        interm_pegs: [],
        screenWidth: window.screen.availWidth,
        screenHeight: window.screen.availHeight > window.screen.availWidth ? window.screen.availHeight / 2 : window.screen.availHeight
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    async transformTriangle() {
        const steps = [0.02, 0.06, 0.14, 0.30, 0.70, 0.86, 0.94, 0.98, 1.0]
        const col_pegs = this.state.col_pegs
        const new_col_pegs = await this.generateGrid()

        this.setState({
            col_pregs_dest: new_col_pegs
        });
        for (var p in steps) {
            var intermediate_pegs = [];
            for (var obj in col_pegs) {
                var intermediate_col = [];
                for (var spl in col_pegs[obj]) {
                    var delta = new_col_pegs[obj][spl] - col_pegs[obj][spl]
                    intermediate_col.push(col_pegs[obj][spl] + (delta * steps[p]))
                }
                intermediate_pegs.push(intermediate_col)
            }
            this.setState({
                col_pegs: intermediate_pegs
            })
            await this.renderTraingles()
            await sleep(1)
        }
        this.setState({
            col_pegs: new_col_pegs
        })
    }

    async generateGrid() {
        const splits = [30, 50, 40, 15, 20]
        var col_pegs = [];
        for (var j = 0; j <= this.state.dims[0]; j++) {
            var col_height = this.state.screenHeight;
            var temp_col = []
            var prev = 0
            for (var i = 0; i < this.state.dims[1]; i++) {
                var rand_split = this.getRandomInt(5, 21);
                temp_col.push(prev + col_height * (rand_split / 100))
                prev += col_height * (rand_split / 100)
                col_height = col_height * (1 - (rand_split / 100))
            }
            col_pegs.push(temp_col)
        }
        return col_pegs
    }

    async renderTraingles() {
        var col_pegs = this.state.col_pegs;
        var c = document.getElementById('triangulationCanvas');
        var ctx = c.getContext('2d');
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.strokeStyle = '#559e89';
        ctx.fillStyle = '#FF0000';

        ctx.beginPath();
        var colStart = 0
        var colOffset = this.state.screenWidth / this.state.dims[0];
        colStart = 0;
        for (var obj in col_pegs) {
            var lower_coord = 0
            for (var spl in col_pegs[obj]) {
                lower_coord = col_pegs[obj][spl]
                ctx.moveTo(colStart, lower_coord);
                ctx.lineTo(colStart, col_pegs[obj][spl - 1]);
                ctx.stroke();
                if (obj != 0) {
                    ctx.moveTo(colStart, lower_coord);
                    ctx.lineTo(colStart - colOffset, col_pegs[obj - 1][spl]);
                    ctx.stroke();
                    if (obj % 2 == 0) {
                        ctx.moveTo(colStart, lower_coord);
                        ctx.lineTo(colStart - colOffset, col_pegs[obj - 1][spl - 1]);
                        ctx.stroke();
                    }
                    else {
                        ctx.moveTo(colStart, col_pegs[obj][spl - 1]);
                        ctx.lineTo(colStart - colOffset, col_pegs[obj - 1][spl]);
                        ctx.stroke();
                    }
                }
            }
            colStart += colOffset;
        }
    }

    async componentDidMount() {
        this.setState({
            col_pegs: await this.generateGrid(),
            screenWidth: window.screen.availWidth,
            screenHeight: window.screen.availHeight > window.screen.availWidth ? window.screen.availHeight / 2 : window.screen.availHeight
        })
        await this.renderTraingles();
    }

    render() {
        return (
            <div
                onClick={
                    async () => {
                        await this.renderTraingles();
                        this.transformTriangle();
                    }}>
                <canvas id='triangulationCanvas'
                    style={{
                        position: 'fixed',
                        marginTop: window.screen.availHeight > window.screen.availWidth ? '20%' : '0%',
                        textAlign: 'none',
                        backgroundColor: '#282C34'
                    }}
                    width={window.screen.availWidth}
                    height={window.screen.availHeight}
                ></canvas>
            </div>
        )
    }
}`

export default class Triangulation extends React.Component {
    state = {
        dims: window.screen.width > 600 ? [20, 7] : [10, 10],
        col_pegs: [],
        col_pregs_dest: [],
        interm_pegs: [],
        screenWidth: window.screen.availWidth,
        screenHeight: window.screen.availHeight > window.screen.availWidth ? window.screen.availHeight / 2 : window.screen.availHeight,
        easter_count:0
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    async transformTriangle() {
        const steps = [0.02, 0.06, 0.14, 0.30, 0.70, 0.86, 0.94, 0.98, 1.0]
        const col_pegs = this.state.col_pegs
        const new_col_pegs = await this.generateGrid()

        this.setState({
            col_pregs_dest: new_col_pegs
        });
        for (var p in steps) {
            var intermediate_pegs = [];
            for (var obj in col_pegs) {
                var intermediate_col = [];
                for (var spl in col_pegs[obj]) {
                    var delta = new_col_pegs[obj][spl] - col_pegs[obj][spl]
                    intermediate_col.push(col_pegs[obj][spl] + (delta * steps[p]))
                }
                intermediate_pegs.push(intermediate_col)
            }
            this.setState({
                col_pegs: intermediate_pegs
            })
            await this.renderTraingles()
            await sleep(1)
        }
        this.setState({
            col_pegs: new_col_pegs
        })
    }

    async generateGrid() {
        const splits = [30, 50, 40, 15, 20]
        var col_pegs = [];
        for (var j = 0; j <= this.state.dims[0]; j++) {
            var col_height = this.state.screenHeight;
            var temp_col = []
            var prev = 0
            for (var i = 0; i < this.state.dims[1]; i++) {
                var rand_split = this.getRandomInt(5, 21);
                temp_col.push(prev + col_height * (rand_split / 100))
                prev += col_height * (rand_split / 100)
                col_height = col_height * (1 - (rand_split / 100))
            }
            col_pegs.push(temp_col)
        }
        return col_pegs
    }

    async renderTraingles() {
        var col_pegs = this.state.col_pegs;
        var c = document.getElementById("triangulationCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.strokeStyle = "#559e89";
        ctx.fillStyle = "#FF0000";

        ctx.beginPath();
        var colStart = 0
        var colOffset = this.state.screenWidth / this.state.dims[0];
        colStart = 0;
        for (var obj in col_pegs) {
            var lower_coord = 0
            for (var spl in col_pegs[obj]) {
                lower_coord = col_pegs[obj][spl]
                ctx.moveTo(colStart, lower_coord);
                ctx.lineTo(colStart, col_pegs[obj][spl - 1]);
                ctx.stroke();
                if (obj != 0) {
                    ctx.moveTo(colStart, lower_coord);
                    ctx.lineTo(colStart - colOffset, col_pegs[obj - 1][spl]);
                    ctx.stroke();
                    if (obj % 2 == 0) {
                        ctx.moveTo(colStart, lower_coord);
                        ctx.lineTo(colStart - colOffset, col_pegs[obj - 1][spl - 1]);
                        ctx.stroke();
                    }
                    else {
                        ctx.moveTo(colStart, col_pegs[obj][spl - 1]);
                        ctx.lineTo(colStart - colOffset, col_pegs[obj - 1][spl]);
                        ctx.stroke();
                    }
                }
            }
            colStart += colOffset;
        }
    }

    async componentDidMount() {
        this.setState({
            col_pegs: await this.generateGrid(),
            screenWidth: window.screen.availWidth,
            screenHeight: window.screen.availHeight > window.screen.availWidth ? window.screen.availHeight / 2 : window.screen.availHeight
        })
        await this.renderTraingles();
    }

    render() {
        return (
            <div>

                    {
                        this.state.easter_count==8?(<center>
                            <Button icon='close' type="primary"
                            onClick={()=>{
                                
                            this.setState({
                                easter_count:0
                            })}}>Close</Button><br></br>
                            <AceEditor
                                placeholder="Placeholder Text"
                                mode="javascript"
                                theme="monokai"
                                name="triangulation_source"
                                style={{maxWidth:'100%'}}
                                fontSize={14}
                                showPrintMargin={true}
                                showGutter={true}
                                highlightActiveLine={true}
                                value={source_code_str}
                                readOnly={true}
                                setOptions={{
                                    enableBasicAutocompletion: false,
                                    enableLiveAutocompletion: false,
                                    enableSnippets: false,
                                    showLineNumbers: true,
                                    tabSize: 2,
                                }} />
                        </center>):(<div/>)
                    }
                    <canvas id="triangulationCanvas"
                    onClick={
                        async () => {
                            await this.renderTraingles();
                            this.transformTriangle();
                            const current_easter_count = this.state.easter_count
                            this.setState({
                                easter_count:current_easter_count+1
                            })
                            if(this.state.easter_count == 8){
                                message.destroy()
                                message.success("Awesome! You found the source code!")
                            }
                            if(this.state.easter_count == 3){
                                message.destroy()
                                message.info("Hmmm something is happening!")
                            }
                        }}
                    style={{
                        position: 'fixed',
                        marginTop: window.screen.availHeight > window.screen.availWidth ? '20%' : '0%',
                        textAlign: 'none',
                        backgroundColor: '#282C34'
                    }}
                    width={window.screen.availWidth}
                    height={window.screen.availHeight}
                ></canvas>
                
                
            </div>
        )
    }
}