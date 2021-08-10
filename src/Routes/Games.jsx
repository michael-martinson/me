import React, { Component } from 'react';
import { DropDown } from "../Utils/dropdown";

class Games extends Component {

    render() {
        return (
            <div id="gamespage" className="page">
                <div className="page-title">
                    <span >Games</span>
                </div>
                <div>
                    <a href="/me/games/CubeRunner/WebGL/index.html" >Cube Runner</a> 
                </div>
                <div>
                    {/* <iframe src="https://www.w3schools.com" title="W3Schools Free Online Web Tutorials"></iframe>  */}
                    {/* Flappy Bird Clone
                    <Game/> */}
                </div>
            </div>
        );
    }
}

// class Game extends Component {
//     constructor(props) {
//         super(props);
//         this.ctxref = React.createRef();
//         this.ctxheight = 500;
//         this.ctxwidth = 700;
//         this.state = {
//             gravity: 0.8,
//             lift: -15,
//             speed: 5,
//             bird: {
//                 x: 50,
//                 y: 100,
//                 velocity: 0,
//                 radius: 20
//             },
//             obstacles : []
//         }
//         this.add_obstacle();
//     };

//     random_between = (max, min) => {
//         return Math.floor(Math.random() * (max - min) + min)
//     }

//     add_obstacle = () => {
//         console.log("Adding obs");
//         let width = 30;
//         let x = this.ctxwidth;
//         let y1 = 0;
//         let obstacles = this.state.obstacles;
//         let height1 = this.random_between(this.ctxheight, 60);
//         obstacles.push([x, y1, width, height1]);
//         if (height1 < (Math.floor(this.ctxheight * .7))) {
//             let height2 = this.ctxheight - height1 - this.random_between(120, 60);
//             let y2 = this.ctxheight - height2;
//             obstacles.push([x, y2, width, height2])
//         } 
//         this.setState({
//             obstacles
//         })
//     }
    
//     draw = () => {
//         let ctx = this.ctxref.current;
//         if (ctx !== null) {
//             ctx = ctx.getContext("2d");
//             ctx.fillStyle = "green";
//             ctx.fillStyle = "white";
//             ctx.fillRect(0, 0, this.ctxwidth, this.ctxheight);
//             ctx.beginPath();
//             ctx.arc(this.state.bird.x, this.state.bird.y,
//                 this.state.bird.radius, 0, 2 * Math.PI);
//             ctx.fill();
//             ctx.stroke();

//             for (let i = 0; i < this.state.obstacles.length; i++) {
//                 let obs = new Path2D;
//                 obs.rect(...this.state.obstacles[i]);
//                 ctx.fillStyle = "green";
//                 ctx.fill(obs);
//             }
//         }
//     }

//     update = () => {
//         let newV = (this.state.bird.velocity + this.state.gravity) * 0.9;
//         let obstacles = []
//         for (let i = 0; i < this.state.obstacles.length; i++) {
//             let ob = this.state.obstacles[i];
//             ob[0] -= this.state.speed;
//             if (ob[0]+ob[2] > 0) {
//                 obstacles.push(ob);
//             }
//         }
//         this.setState({
//             bird: {
//                 x: 50,
//                 y: Math.max(
//                     Math.min(
//                         this.state.bird.y + newV,
//                         this.ctxheight - this.state.bird.radius
//                     ),
//                     this.state.bird.radius
//                 ),
//                 velocity: newV,
//                 radius: 20
//             },
//             obstacles
//         })

//     }

//     componentDidMount() {
//         setInterval(() => {
//             this.update();
//             this.draw();
//         }, 1000 / 60);
//         setInterval(() => {
//             this.add_obstacle();
//         }, 2500);
//         document.addEventListener("keydown", e => 
//             e.keyCode == 32 ? this.setState({
//                 bird: {
//                     x: 50,
//                     y: this.state.bird.y,
//                     velocity: this.state.bird.velocity + this.state.lift,
//                     radius: 20,
//                 }
//             }) : null
//         );
//     }

//     render() {
//         return (
//             <div>
//                 <canvas ref={this.ctxref} width={this.ctxwidth} height={this.ctxheight} />
//             </div>
//         )
//     };
// }

export default Games;