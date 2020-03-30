import Game from "./game.js"
import {panelDetection} from "./handledetection.js"

export default class SidePanel{
    constructor(game){
        this.ctx = document.getElementById("gameInfo").getContext("2d")
        this.game = game
    }

    update(game){
        this.ctx.clearRect(0,0,300,700)
        this.ctx.font = "25px Arial";
        this.ctx.fillStyle = "White";
        this.ctx.textAlign = "center";
        this.ctx.fillText(`Amis trouvés: ${game.foundCounter}`,150,300)
        
        this.ctx.fillText(`Instructions`,150,50)
        this.ctx.font = "16.5px Arial";
        this.ctx.fillText(`Tous tes amis sont en isolation sociale`,150,100)
        this.ctx.fillText(`bouge ton curseur et écoute bien...`,150,125)
        this.ctx.fillText(`ils se cachent derrière les cris ;)`,150,150)

        this.ctx.fillStyle = "rgb(51, 51, 187)"
        this.ctx.fillRect(25,325,250,50)
        this.ctx.beginPath();
        this.ctx.strokeStyle = "White"
        this.ctx.rect(25,325,250,50)
        this.ctx.stroke()
        this.ctx.fillStyle = "White";
        this.ctx.textAlign = "center";
        this.ctx.fillText(`Remettre le compteur à zéro`,150,356)

        if(game.foundCounter < 25){
        this.ctx.font = "16.5px Arial";
        this.ctx.fillText(`Trouve 25 amis pour `,150,650)
        this.ctx.fillText(`débloquer du contenu additionnel`,150,675)
        } else {
            this.ctx.fillStyle = "rgb(51, 51, 187)"
            this.ctx.fillRect(25,625,250,50)
            this.ctx.beginPath();
            this.ctx.strokeStyle = "White"
            this.ctx.rect(25,625,250,50)
            this.ctx.stroke()
            this.ctx.fillStyle = "White";
            this.ctx.textAlign = "center";
            this.ctx.fillText(`Ooooh! Une petite surprise!`,150,656)
        }

    }
}