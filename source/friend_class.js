import {friendsList} from "./friends.js"

export default class Friend {
    constructor(game){
        this.image = friendsList[game.friendID].img
        this.boxSize = 50
        this.imageWidth = this.boxSize
        this.imageHeight = this.imageWidth * friendsList[game.friendID].imgRatio
        this.position = {
            // x:game.width - 350,
            // y:game.height-143,
            x: Math.floor((Math.random()*(1100-this.boxSize))+1),
            y: Math.floor((Math.random()*(700-this.boxSize))+1)
        }
        this.truePos = this.image.getBoundingClientRect()
        this.sounds = friendsList[game.friendID].sounds
        this.soundF = friendsList[game.friendID].soundsF[Math.floor(Math.random()*5)]
        this.unlock = friendsList[game.friendID].unlock
    }

    draw(ctx,game){
        if(game.gameState == "Found" || game.gameState == "Found_SND"){
        ctx.drawImage(this.image,this.position.x,this.position.y, this.imageWidth,this.imageHeight)
        }
    }
}