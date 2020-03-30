import Game from "./game.js"
import {friendsList} from "./friends.js"


export default class InputHandler{
    constructor(game,ctx){
        document.addEventListener("mousemove",function(event){
            game.mousePos = {x:event.clientX,y:event.clientY}
        })
        document.addEventListener("click",function(event){
            // Finding Friend
            if(
                game.mouseCanvasPos.x>=game.friend.position.x &&
                game.mouseCanvasPos.x<=game.friend.position.x+game.friend.boxSize &&
                game.mouseCanvasPos.y>=game.friend.position.y &&
                game.mouseCanvasPos.y<=game.friend.position.y+game.friend.boxSize &&
                document.body.style.cursor == "pointer"&&
                game.gameState == "Running"
            ){
                game.goFound()
                return
                
            }

            // Found - More Button
            if(
                game.mouseCanvasPos.x >= game.moreButton.posx &&
                game.mouseCanvasPos.x <= game.moreButton.posx + game.moreButton.width &&
                game.mouseCanvasPos.y >= game.moreButton.posy &&
                game.mouseCanvasPos.y <= game.moreButton.posy + game.moreButton.height &&
                document.body.style.cursor == "pointer" &&
                (game.gameState == "Found" || game.gameState == "Found_SND")
            ){
                game.findmore()
                return
            }

            // Found - Menu Button
            if(
                game.mouseCanvasPos.x >= game.menuButton.posx &&
                game.mouseCanvasPos.x <= game.menuButton.posx + game.menuButton.width &&
                game.mouseCanvasPos.y >= game.menuButton.posy &&
                game.mouseCanvasPos.y <= game.menuButton.posy +game.menuButton.height &&
                document.body.style.cursor == "pointer" &&
                (game.gameState == "Found" || game.gameState == "Found_SND")
            ){
                game.goMenu()
                return
            }

            // Menu - Select Friend 0
            if(
                game.mouseCanvasPos.x >= 275-50 &&
                game.mouseCanvasPos.x <= 275+50 &&
                game.mouseCanvasPos.y >= 250+50*0-25 &&
                game.mouseCanvasPos.y <= 250+50*0+15 &&
                document.body.style.cursor == "pointer" &&
                game.gameState == "Menu" &&
                game.foundCounter >= friendsList[0].unlock
            ){
                game.friendID = 0
                return
            }
            
            // Menu - Select Friend 1
            if(
                game.mouseCanvasPos.x >= 275-50 &&
                game.mouseCanvasPos.x <= 275+50 &&
                game.mouseCanvasPos.y >= 250+50*1-25 &&
                game.mouseCanvasPos.y <= 250+50*1+15 &&
                document.body.style.cursor == "pointer" &&
                game.gameState == "Menu" &&
                game.foundCounter >= friendsList[1].unlock
            ){
                game.friendID = 1
                return
            }
            
            // Menu - Select Friend 2
            if(
                game.mouseCanvasPos.x >= 275-50 &&
                game.mouseCanvasPos.x <= 275+50 &&
                game.mouseCanvasPos.y >= 250+50*2-25 &&
                game.mouseCanvasPos.y <= 250+50*2+15 &&
                document.body.style.cursor == "pointer" &&
                game.gameState == "Menu"&&
                game.foundCounter >= friendsList[2].unlock
            ){
                game.friendID = 2
                return
            }
            
            // Menu - Select Friend 3
            if(
                game.mouseCanvasPos.x >= 275-50 &&
                game.mouseCanvasPos.x <= 275+50 &&
                game.mouseCanvasPos.y >= 250+50*3-25 &&
                game.mouseCanvasPos.y <= 250+50*3+15 &&
                document.body.style.cursor == "pointer" &&
                game.gameState == "Menu" &&
                game.foundCounter >= friendsList[3].unlock

            ){
                game.friendID = 3
                return
            }
            
            // Menu - Select Friend 4
            if(
                game.mouseCanvasPos.x >= 275-50 &&
                game.mouseCanvasPos.x <= 275+50 &&
                game.mouseCanvasPos.y >= 250+50*4-25 &&
                game.mouseCanvasPos.y <= 250+50*4+15 &&
                document.body.style.cursor == "pointer" &&
                game.gameState == "Menu" &&
                game.foundCounter >= friendsList[4].unlock
            ){
                game.friendID = 4
                return
            }
            
            // Menu - Select Start
            if(
                game.mouseCanvasPos.x >= game.width*2/3-200 &&
                game.mouseCanvasPos.x <= game.width*2/3+200 &&
                game.mouseCanvasPos.y >= game.height/2-50 &&
                game.mouseCanvasPos.y <= game.height/2+100 &&
                document.body.style.cursor == "pointer" &&
                game.gameState == "Menu"
            ){
                
                game.friend.sounds[game.soundLevel].play()
                game.findmore()
                return
            }

            // Panel Counter to Zero
            if(
                game.mousePanelPos.x >= 25 &&
                game.mousePanelPos.x <= 275 &&
                game.mousePanelPos.y >= 325 &&
                game.mousePanelPos.y <= 375
            ){
                game.eraseCounter()

            }

            // Panel Bonus Audio
            if(
                (game.mousePanelPos.x >= 25 &&  
                game.mousePanelPos.x <=275 &&
                game.mousePanelPos.y>=625 &&
                game.mousePanelPos.y<=675 &&
                game.foundCounter>=25)
            ){
                document.getElementById("snd_bonus").play()
            }
                        
        })
    }
}