import Game from "./game.js"

let canvas = document.getElementById("gameScreen");
let sidePanel = document.getElementById("gameInfo")
let Panelctx = sidePanel.getContext("2d")
let ctx = canvas.getContext("2d");
const GAME_WIDTH = 1100;
const GAME_HEIGHT = 700;


// get canvas position
let canvasPosition = canvas.getBoundingClientRect()


let game = new Game(GAME_WIDTH,GAME_HEIGHT,ctx)



const gameLoop = function(){
    ctx.clearRect(0,0,1100,700);
    game.friend.draw(ctx,game);
    game.update(ctx)
    requestAnimationFrame(gameLoop)

}


requestAnimationFrame(gameLoop)



