import Friend from "./friend_class.js"
import {friendsList} from "./friends.js"
import InputHandler from "./inputhandler.js"
import {Detection, DetectionFoundButtons, DetectionMenu, setSoundLevel, panelDetection} from "./handledetection.js"
import SidePanel from "./sidepanel.js"


const GAMESTATE = {
    PAUSED: "Paused",
    RUNNING: "Running",
    MENU: "Menu",
    FOUND: "Found",
    FOUND_SOUND: "Found_SND"
};

let FriendsFound = 0 + localStorage.getItem("FoundCounter")



export default class Game{
    constructor(gameWidth, gameHeight,ctx){
        // Actual Game
        this.width = gameWidth
        this.height = gameHeight
        this.friendID = 0
        this.friend = new Friend(this)
        this.soundLevel = 0
        this.mousePos = 0
        this.inputHandler = new InputHandler(this,ctx)
        this.canvasPos = document.getElementById("gameScreen").getBoundingClientRect()
        this.panelPos = document.getElementById("gameInfo").getBoundingClientRect()
        this.mouseCanvasPos = {
            x: this.mousePos.x - this.canvasPos.x,
            y: this.mousePos.y + this.canvasPos.bottom
        }
        this.mousePanelPos = {
            x: this.mousePos.x - this.panelPos.x,
            y : this.mousePos.y - this.panelPos.y
        }
        this.gameState = GAMESTATE.MENU
        this.panel = new SidePanel(this)
        this.foundCounter = +localStorage.getItem("FoundCounter") + +0
        this.imageCenter = {
            x: 0,
            y: 0,
        }
        this.distance = {
            x: 0,
            y:0,
            hyp:0
        }
             
        // Found Buttons
        this.moreButton = {
            posx: this.width/2-350,
            posy: 500,
            width: 300,
            height: 100,
            text:{
                string: "Trouve le même ami",
                posx: this.width/3-15,
                posy: this.height-143
            }
        }
        this.menuButton = {
            posx: this.width/2+50,
            posy: 500,
            width: 300,
            height: 100,
            text: {
                string: "Cherche un autre ami",
                posx: this.width - 350,
                posy:this.height-143
            }
        }
    }

    findmore(){
        this.gameState = GAMESTATE.RUNNING
        this.friend = new Friend (this)
    }

    goFound(){
        this.gameState = GAMESTATE.FOUND
        FriendsFound = +FriendsFound + +1
        this.foundCounter = FriendsFound
        localStorage.setItem("FoundCounter",FriendsFound)
    }

    eraseCounter(){
        FriendsFound = 0;
        this.foundCounter = 0;
        localStorage.setItem("FoundCounter",0)
    }

    goMenu(){
        this.gameState = GAMESTATE.MENU
    }

    goFoundSound(){
        this.soundLevel = 0
        this.friend.soundF.play()
        this.gameState = GAMESTATE.FOUND_SOUND
    }

    update(ctx){
        this.mousePanelPos = {
            x: this.mousePos.x - this.panelPos.x,
            y : this.mousePos.y - this.panelPos.y
        }
        
        this.panel.update(this)
        this.friend.sounds = friendsList[this.friendID].sounds
        this.mouseCanvasPos = {
            x: this.mousePos.x - this.canvasPos.x,
            y: this.mousePos.y - this.canvasPos.y
        }

        this.friend.imageWidth = this.friend.boxSize
        this.friend.imageHeight = this.friend.imageWidth * friendsList[this.friendID].imgRatio

        // panelDetection(this)

        // Game is Running
        if(this.gameState == GAMESTATE.RUNNING){
            Detection(this)
            this.imageCenter = {
                x: this.friend.position.x + this.friend.boxSize/2,
                y: this.friend.position.y + this.friend.boxSize/2,
            }
            this.distance.x = this.imageCenter.x - this.mouseCanvasPos.x
            this.distance.y = this.imageCenter.y - this.mouseCanvasPos.y
            this.distance.hyp = Math.sqrt(this.distance.x**2 + this.distance.y**2)
            // ctx.drawImage(this.friend.image,this.friend.position.x,this.friend.position.y,this.friend.boxSize,this.friend.boxSize)
            
            ctx.strokeStyle = "black"
            ctx.beginPath()
            // ctx.arc(this.imageCenter.x,this.imageCenter.y,this.distance.hyp,0,2*Math.PI)
            ctx.stroke()
            setSoundLevel(this)
            this.friend.sounds[this.soundLevel].play()
            
        }


        // Found State
        if(this.gameState == GAMESTATE.FOUND){
            if(this.friend.position.x - (this.width/2 + this.friend.boxSize/2) != 0){
                this.friend.position.x -= (this.friend.position.x - this.width/2 + this.friend.boxSize/2)/10
            }
            if(this.friend.position.y - (this.height/2 + this.friend.imageHeight/2+50) != 0){
                this.friend.position.y -= (this.friend.position.y - this.height/2 + this.friend.imageHeight/2+50)/10
            }
            if(this.friend.boxSize < 200){
                this.friend.boxSize -= (this.friend.boxSize - 200)/10
            }
            if(this.friend.boxSize>=195){
                ctx.fillStyle = "rgb(51, 51, 187)"
                ctx.fillRect(this.width/2-350,500,300,100)
                ctx.fillRect(this.width/2+50,500,300,100)
                ctx.font = "25px Arial";
                ctx.fillStyle = "White";
                ctx.textAlign = "center";
                ctx.fillText(this.moreButton.text.string,this.moreButton.text.posx,this.moreButton.text.posy)
                ctx.fillText(this.menuButton.text.string,this.menuButton.text.posx,this.menuButton.text.posy) 
            }
            DetectionFoundButtons(this)
            if(this.friend.boxSize >= 199.90){
                this.goFoundSound()
            }
        }

        // Found_Sound State
        if(this.gameState == GAMESTATE.FOUND_SOUND){
            this.friend.position.x = this.width/2 - this.friend.boxSize/2
            this.friend.position.y = this.height/2 - this.friend.imageHeight/2 - 50
            this.friend.boxSize = 200
            
            ctx.fillStyle = "rgb(51, 51, 187)"
            ctx.fillRect(this.width/2-350,500,300,100)
            ctx.fillRect(this.width/2+50,500,300,100)
            ctx.font = "25px Arial";
            ctx.fillStyle = "White";                ctx.textAlign = "center";
            ctx.fillText(this.moreButton.text.string,this.moreButton.text.posx,this.moreButton.text.posy)
            ctx.fillText(this.menuButton.text.string,this.menuButton.text.posx,this.menuButton.text.posy) 
            
            DetectionFoundButtons(this)

        }

        // Menu State
        if(this.gameState == GAMESTATE.MENU){
            ctx.fillStyle = "rgb(51, 51, 187)"
            ctx.fillRect(25,25,this.width-50,this.height-50)
            
            ctx.fillStyle = "White";
            ctx.font = "bold 40px Arial";
            ctx.textAlign = "center";
            ctx.fillText("Trouve les amis invisibles!",this.width/2,100)
            
            ctx.font = "30px Arial"
            ctx.fillText("Choisi ton ami",this.width/4,200)
            
            friendsList.forEach(function(friend,friendIndex){
                ctx.font = "20px Arial";
                if(FriendsFound< friend.unlock){
                    ctx.fillText(`Trouve ${friendsList[friendIndex].unlock} amis pour débloquer`,275,250+50*friendIndex)
                } else {
                ctx.fillText(friend.string,275,250+50*friendIndex)
                }
            })
            ctx.beginPath();
            ctx.strokeStyle = "white";
            ctx.moveTo(150,210)
            ctx.lineTo(400,210)
            ctx.stroke()

            ctx.beginPath();
            ctx.strokeStyle = "White"
            ctx.rect(215,250+50*this.friendID-27,115,40)
            ctx.stroke()

            ctx.beginPath();
            ctx.strokeStyle = "White"
            ctx.rect(this.width*2/3-200,this.height/2-50,400,150)
            ctx.stroke()

            ctx.font = "Bold 30px Arial"
            ctx.fillText("Trouve ton ami !",this.width*2/3,385)

            DetectionMenu(this)
            


        }
    }
};