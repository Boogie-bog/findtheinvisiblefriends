export const Detection = function(game) {
   if( 
        (game.mouseCanvasPos.x>=game.friend.position.x &&
        game.mouseCanvasPos.x<=game.friend.position.x+game.friend.boxSize &&
        game.mouseCanvasPos.y>=game.friend.position.y &&
        game.mouseCanvasPos.y<=game.friend.position.y+game.friend.boxSize)
        ||
        (game.mousePanelPos.x >= 25 &&
        game.mousePanelPos.x <= 275 &&
        game.mousePanelPos.y >= 325 &&
        game.mousePanelPos.y <= 375)
        ||
        (game.mousePanelPos.x >= 25 &&  
        game.mousePanelPos.x <=275 &&
        game.mousePanelPos.y>=625 &&
        game.mousePanelPos.y<=675 &&
        game.foundCounter>=25)
    ){
        document.body.style.cursor = "pointer"
   } else {document.body.style.cursor = "default"}
}

export const DetectionFoundButtons = function(game){
    if(
        (game.mouseCanvasPos.x >= game.menuButton.posx &&
        game.mouseCanvasPos.x <= game.menuButton.posx + game.menuButton.width &&
        game.mouseCanvasPos.y >= game.menuButton.posy &&
        game.mouseCanvasPos.y <= game.menuButton.posy + game.menuButton.height)

        ||
        
        (game.mouseCanvasPos.x >= game.moreButton.posx &&
        game.mouseCanvasPos.x <= game.moreButton.posx + game.moreButton.width &&
        game.mouseCanvasPos.y >= game.moreButton.posy &&
        game.mouseCanvasPos.y <= game.moreButton.posy + game.moreButton.height)
        ||
        (game.mousePanelPos.x >= 25 &&
        game.mousePanelPos.x <= 275 &&
        game.mousePanelPos.y >= 325 &&
        game.mousePanelPos.y <= 375)
        ||
        (game.mousePanelPos.x >= 25 &&  
        game.mousePanelPos.x <=275 &&
        game.mousePanelPos.y>=625 &&
        game.mousePanelPos.y<=675 &&
        game.foundCounter>=25)
    ){
        document.body.style.cursor = "pointer"
    }else{
        document.body.style.cursor = "default"
    }
}

export const DetectionMenu = function(game){
    if(
        (game.mouseCanvasPos.x >= 275-50 &&
        game.mouseCanvasPos.x <= 275+50 &&
        game.mouseCanvasPos.y >= 250+50*0-25 &&
        game.mouseCanvasPos.y <= 250+50*0+15)
        ||
        (game.mouseCanvasPos.x >= 275-50 &&
        game.mouseCanvasPos.x <= 275+50 &&
        game.mouseCanvasPos.y >= 250+50*1-25 &&
        game.mouseCanvasPos.y <= 250+50*1+15)
        ||
        (game.mouseCanvasPos.x >= 275-50 &&
        game.mouseCanvasPos.x <= 275+50 &&
        game.mouseCanvasPos.y >= 250+50*2-25 &&
        game.mouseCanvasPos.y <= 250+50*2+15)
        ||
        (game.mouseCanvasPos.x >= 275-50 &&
        game.mouseCanvasPos.x <= 275+50 &&
        game.mouseCanvasPos.y >= 250+50*3-25 &&
        game.mouseCanvasPos.y <= 250+50*3+15)
        ||
        (game.mouseCanvasPos.x >= 275-50 &&
        game.mouseCanvasPos.x <= 275+50 &&
        game.mouseCanvasPos.y >= 250+50*4-25 &&
        game.mouseCanvasPos.y <= 250+50*4+15)
        ||
        (game.mouseCanvasPos.x >= game.width*2/3-200 &&
        game.mouseCanvasPos.x <= game.width*2/3+200 &&
        game.mouseCanvasPos.y >= game.height/2-50 &&
        game.mouseCanvasPos.y <= game.height/2+100)
        ||
        (game.mousePanelPos.x >= 25 &&
        game.mousePanelPos.x <= 275 &&
        game.mousePanelPos.y >= 325 &&
        game.mousePanelPos.y <= 375)
        ||
        (game.mousePanelPos.x >= 25 &&  
        game.mousePanelPos.x <=275 &&
        game.mousePanelPos.y>=625 &&
        game.mousePanelPos.y<=675 &&
        game.foundCounter>=25)
    ){
        document.body.style.cursor = "pointer"
    }else{
        document.body.style.cursor = "default"
    }
}

export const setSoundLevel = function(game){
    if(game.distance.hyp > 375){
        game.soundLevel = 0
        return
    }
    if(game.distance.hyp <= 375 && game.distance.hyp > 250){
        game.soundLevel = 1
        return
    }
    if(game.distance.hyp <= 250 && game.distance.hyp > 125){
        game.soundLevel = 2
        return
    }
    if(game.distance.hyp <= 125 && game.distance.hyp > 60){
        game.soundLevel = 3
        return
    }
    if(game.distance.hyp <= 60){
        game.soundLevel = 4
    }
}

export const panelDetection = function (game){
    if(
        (game.mousePanelPos.x >= 25 &&
        game.mousePanelPos.x <= 275 &&
        game.mousePanelPos.y >= 325 &&
        game.mousePanelPos.y <= 375)
        ||
        (game.mousePanelPos.x >= 25 &&  
        game.mousePanelPos.x <=275 &&
        game.mousePanelPos.y>=625 &&
        game.mousePanelPos.y<=675 &&
        game.foundCounter>=25)
    ){
        document.body.style.cursor = "pointer"
    }else{
        document.body.style.cursor = "pointer"
        }
}