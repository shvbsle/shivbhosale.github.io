(window.webpackJsonpshiv=window.webpackJsonpshiv||[]).push([[0],{110:function(e,t,n){e.exports=n(177)},116:function(e,t,n){},118:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},119:function(e,t,n){},177:function(e,t,n){"use strict";n.r(t);n(111);var a=n(0),r=n.n(a),i=n(2),o=n.n(i),s=(n(116),n(117),n(118),n(119),n(182)),l=n(180),c=n(178),h=n(14),u=n(179),d=n(15),m=n.n(d),p=n(42),g=n(37),v=n(38),w=n(40),f=n(39),b=n(41),_=n(183),y=n(185),E=n(99),T=n.n(E);n(128),n(129);function x(e){return new Promise((function(t){return setTimeout(t,e)}))}var k=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(w.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={dims:window.screen.width>600?[20,7]:[10,10],col_pegs:[],col_pregs_dest:[],interm_pegs:[],screenWidth:window.screen.availWidth,screenHeight:window.screen.availHeight>window.screen.availWidth?window.screen.availHeight/2:window.screen.availHeight,easter_count:0},n}return Object(b.a)(t,e),Object(v.a)(t,[{key:"getRandomInt",value:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}},{key:"transformTriangle",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t,n,a,r,i,o,s,l,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[.02,.06,.14,.3,.7,.86,.94,.98,1],n=this.state.col_pegs,e.next=4,this.generateGrid();case 4:a=e.sent,this.setState({col_pregs_dest:a}),e.t0=m.a.keys(t);case 7:if((e.t1=e.t0()).done){e.next=18;break}for(o in r=e.t1.value,i=[],n){for(l in s=[],n[o])c=a[o][l]-n[o][l],s.push(n[o][l]+c*t[r]);i.push(s)}return this.setState({col_pegs:i}),e.next=14,this.renderTraingles();case 14:return e.next=16,x(1);case 16:e.next=7;break;case 18:this.setState({col_pegs:a});case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"generateGrid",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t,n,a,r,i,o,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for([30,50,40,15,20],t=[],n=0;n<=this.state.dims[0];n++){for(a=this.state.screenHeight,r=[],i=0,o=0;o<this.state.dims[1];o++)s=this.getRandomInt(5,21),r.push(i+a*(s/100)),i+=a*(s/100),a*=1-s/100;t.push(r)}return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderTraingles",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t,n,a,r,i,o,s,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o in t=this.state.col_pegs,n=document.getElementById("triangulationCanvas"),(a=n.getContext("2d")).clearRect(0,0,n.width,n.height),a.strokeStyle="#559e89",a.fillStyle="#FF0000",a.beginPath(),r=0,i=this.state.screenWidth/this.state.dims[0],r=0,t){for(l in s=0,t[o])s=t[o][l],a.moveTo(r,s),a.lineTo(r,t[o][l-1]),a.stroke(),0!=o&&(a.moveTo(r,s),a.lineTo(r-i,t[o-1][l]),a.stroke(),o%2==0?(a.moveTo(r,s),a.lineTo(r-i,t[o-1][l-1]),a.stroke()):(a.moveTo(r,t[o][l-1]),a.lineTo(r-i,t[o-1][l]),a.stroke()));r+=i}case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,this.generateGrid();case 3:return e.t1=e.sent,e.t2=window.screen.availWidth,e.t3=window.screen.availHeight>window.screen.availWidth?window.screen.availHeight/2:window.screen.availHeight,e.t4={col_pegs:e.t1,screenWidth:e.t2,screenHeight:e.t3},e.t0.setState.call(e.t0,e.t4),e.next=10,this.renderTraingles();case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,8==this.state.easter_count?r.a.createElement("center",null,r.a.createElement(_.a,{icon:"close",type:"primary",onClick:function(){e.setState({easter_count:0})}},"Close"),r.a.createElement("br",null),r.a.createElement(T.a,{placeholder:"Placeholder Text",mode:"javascript",theme:"monokai",name:"triangulation_source",style:{maxWidth:"100%"},fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:"\n/*################################################################## \n* HEY! YOU HAVE UNLOCKED THE EASTER EGG!  \n* THIS IS THE SOURCE CODE FOR THE \n* BACKGROUND ANIMATION THAT I WROTE.\n* FEEL FREE TO USE IT!\n*###################################################################\n*/\nimport React from 'react';\nimport {\n    Tabs, Icon, Carousel, Card, Row, Col, Collapse,\n    Button, Modal, TreeSelect, Divider, Tooltip\n} from 'antd';\n\nfunction sleep(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nexport default class Triangulation extends React.Component {\n    state = {\n        dims: window.screen.width > 600 ? [20, 7] : [10, 10],\n        col_pegs: [],\n        col_pregs_dest: [],\n        interm_pegs: [],\n        screenWidth: window.screen.availWidth,\n        screenHeight: window.screen.availHeight > window.screen.availWidth ? window.screen.availHeight / 2 : window.screen.availHeight\n    }\n\n    getRandomInt(min, max) {\n        min = Math.ceil(min);\n        max = Math.floor(max);\n        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive\n    }\n\n    async transformTriangle() {\n        const steps = [0.02, 0.06, 0.14, 0.30, 0.70, 0.86, 0.94, 0.98, 1.0]\n        const col_pegs = this.state.col_pegs\n        const new_col_pegs = await this.generateGrid()\n\n        this.setState({\n            col_pregs_dest: new_col_pegs\n        });\n        for (var p in steps) {\n            var intermediate_pegs = [];\n            for (var obj in col_pegs) {\n                var intermediate_col = [];\n                for (var spl in col_pegs[obj]) {\n                    var delta = new_col_pegs[obj][spl] - col_pegs[obj][spl]\n                    intermediate_col.push(col_pegs[obj][spl] + (delta * steps[p]))\n                }\n                intermediate_pegs.push(intermediate_col)\n            }\n            this.setState({\n                col_pegs: intermediate_pegs\n            })\n            await this.renderTraingles()\n            await sleep(1)\n        }\n        this.setState({\n            col_pegs: new_col_pegs\n        })\n    }\n\n    async generateGrid() {\n        const splits = [30, 50, 40, 15, 20]\n        var col_pegs = [];\n        for (var j = 0; j <= this.state.dims[0]; j++) {\n            var col_height = this.state.screenHeight;\n            var temp_col = []\n            var prev = 0\n            for (var i = 0; i < this.state.dims[1]; i++) {\n                var rand_split = this.getRandomInt(5, 21);\n                temp_col.push(prev + col_height * (rand_split / 100))\n                prev += col_height * (rand_split / 100)\n                col_height = col_height * (1 - (rand_split / 100))\n            }\n            col_pegs.push(temp_col)\n        }\n        return col_pegs\n    }\n\n    async renderTraingles() {\n        var col_pegs = this.state.col_pegs;\n        var c = document.getElementById('triangulationCanvas');\n        var ctx = c.getContext('2d');\n        ctx.clearRect(0, 0, c.width, c.height);\n        ctx.strokeStyle = '#559e89';\n        ctx.fillStyle = '#FF0000';\n\n        ctx.beginPath();\n        var colStart = 0\n        var colOffset = this.state.screenWidth / this.state.dims[0];\n        colStart = 0;\n        for (var obj in col_pegs) {\n            var lower_coord = 0\n            for (var spl in col_pegs[obj]) {\n                lower_coord = col_pegs[obj][spl]\n                ctx.moveTo(colStart, lower_coord);\n                ctx.lineTo(colStart, col_pegs[obj][spl - 1]);\n                ctx.stroke();\n                if (obj != 0) {\n                    ctx.moveTo(colStart, lower_coord);\n                    ctx.lineTo(colStart - colOffset, col_pegs[obj - 1][spl]);\n                    ctx.stroke();\n                    if (obj % 2 == 0) {\n                        ctx.moveTo(colStart, lower_coord);\n                        ctx.lineTo(colStart - colOffset, col_pegs[obj - 1][spl - 1]);\n                        ctx.stroke();\n                    }\n                    else {\n                        ctx.moveTo(colStart, col_pegs[obj][spl - 1]);\n                        ctx.lineTo(colStart - colOffset, col_pegs[obj - 1][spl]);\n                        ctx.stroke();\n                    }\n                }\n            }\n            colStart += colOffset;\n        }\n    }\n\n    async componentDidMount() {\n        this.setState({\n            col_pegs: await this.generateGrid(),\n            screenWidth: window.screen.availWidth,\n            screenHeight: window.screen.availHeight > window.screen.availWidth ? window.screen.availHeight / 2 : window.screen.availHeight\n        })\n        await this.renderTraingles();\n    }\n\n    render() {\n        return (\n            <div\n                onClick={\n                    async () => {\n                        await this.renderTraingles();\n                        this.transformTriangle();\n                    }}>\n                <canvas id='triangulationCanvas'\n                    style={{\n                        position: 'fixed',\n                        marginTop: window.screen.availHeight > window.screen.availWidth ? '20%' : '0%',\n                        textAlign: 'none',\n                        backgroundColor: '#282C34'\n                    }}\n                    width={window.screen.availWidth}\n                    height={window.screen.availHeight}\n                ></canvas>\n            </div>\n        )\n    }\n}",setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2}})):r.a.createElement("div",null),r.a.createElement("canvas",{id:"triangulationCanvas",onClick:Object(p.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.renderTraingles();case 2:e.transformTriangle(),n=e.state.easter_count,e.setState({easter_count:n+1}),8==e.state.easter_count&&(y.a.destroy(),y.a.success("Awesome! You found the source code!")),3==e.state.easter_count&&(y.a.destroy(),y.a.info("Hmmm something is happening!"));case 7:case"end":return t.stop()}}),t)}))),style:{position:"fixed",marginTop:window.screen.availHeight>window.screen.availWidth?"20%":"0%",textAlign:"none",backgroundColor:"#282C34"},width:window.screen.availWidth,height:window.screen.availHeight}))}}]),t}(r.a.Component),j=function(e){function t(){return Object(g.a)(this,t),Object(w.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"AboutMe",id:"AboutMe"},r.a.createElement("center",null,r.a.createElement(l.a.Paragraph,{style:{color:"white",maxWidth:"350px"}},"Good at building data intensive software. My tech inventory is a mixed bag of Python, Apache Spark, React, Golang and a couple of ML frameworks. In my free time I read, build software or do math. Check out my projects to know more about my work.")))}}]),t}(r.a.Component),S=n(181),C=n(184),O=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(w.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1,placement:"right"},n.showDrawer=function(){n.setState({visible:!0})},n.onClose=function(){n.setState({visible:!1})},n.onChange=function(e){n.setState({placement:e.target.value})},n}return Object(b.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"inline-table"}},r.a.createElement(h.a,{style:{color:"white"},type:"book"}),r.a.createElement("a",{style:{marginLeft:"10px"},type:"primary",onClick:this.showDrawer},"blog"),r.a.createElement(S.a,{title:"My Blogs",placement:this.state.placement,closable:!1,onClose:this.onClose,visible:this.state.visible,width:"350px"},r.a.createElement(C.a,{icon:r.a.createElement(h.a,{type:"meh",theme:"twoTone"}),title:"Umm... Awkward...",subTitle:"Hey! I'm still working on my blog"}),r.a.createElement("center",null,r.a.createElement(l.a.Title,{level:4},"In the mean time"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement(h.a,{type:"robot"})," Check out my Twitter ",r.a.createElement("a",{href:"https://twitter.com/artstylebot",target:"_blank"},"AI Bot")," till then!")),r.a.createElement("li",null,r.a.createElement("div",null,"Click on the background pattern for an easter egg!"))))))}}]),t}(r.a.Component);var H=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null),r.a.createElement("center",null,r.a.createElement(l.a.Title,{style:{color:"white",paddingTop:"7%"}},"SHIV."),r.a.createElement("div",null,r.a.createElement(c.a,{type:"primary",content:r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement(h.a,{type:"lock"})," Under construction.")," ",r.a.createElement("br",null),"Check out my Twitter ",r.a.createElement("a",{href:"https://twitter.com/artstylebot"},"AI bot")," till then.")},r.a.createElement(O,null)),r.a.createElement(u.a,{type:"vertical"}),r.a.createElement(h.a,{style:{color:"white"},type:"github"}),r.a.createElement("a",{style:{marginLeft:"10px"},href:"https://github.com/ShivBhosale"},"github"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(j,null))),r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[110,1,2]]]);
//# sourceMappingURL=main.c99a7668.chunk.js.map