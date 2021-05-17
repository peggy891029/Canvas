var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
canvas.width= 400;
canvas.height= 400;

var mouse = {
  x: 0,
  y: 0
}

canvas.addEventListener("mousemove", function(evt){
  mouse.x = evt.offsetX
  mouse.y = evt.offsetY
})

var time=0
function draw(){
  time++
  ctx.clearRect(0, 0, 400, 400)
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50
    ctx.moveTo(pos, 0)
    ctx.lineTo(pos, 400)
    ctx.fillText(pos, pos, 10)
    
    ctx.moveTo(0, pos)
    ctx.lineTo(400, pos)
    ctx.fillText(pos, 10, pos)
  }

  ctx.strokeStyle = "rgba(0, 0, 0, 0.1)"
  ctx.stroke()
 
  ctx.beginPath()
  ctx.moveTo(25, 350)
  ctx.lineTo(375, 350)
  ctx.lineWidth = 3
  ctx.strokeStyle="black"
  ctx.stroke()

  ctx.fillStyle= "#EBDD5A"
  ctx.fillRect(100, 100, 250, 10)
  ctx.strokeRect(100, 100, 250, 10)

  ctx.fillStyle= "#F7DBB4"
  ctx.fillRect(110, 110, 230, 20)
  ctx.strokeRect(110, 110, 230, 20)

  ctx.beginPath()
  ctx.moveTo(100, 130)
  ctx.lineTo(350, 130)
  ctx.lineTo(340, 150)
  ctx.lineTo(110, 150)
  ctx.closePath()
  ctx.fillStyle="#EBDD5A"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  
  ctx.fillStyle= "#F7F7F7"
  ctx.fillRect(110, 150, 230, 15)
  ctx.strokeRect(110, 150, 230, 10)

  ctx.fillStyle= "#C6DFF3"
  ctx.fillRect(110, 160, 230, 190)
  ctx.strokeRect(110, 160, 230, 190)
  
  ctx.fillStyle= "#F7F7F7"
  ctx.fillRect(125, 190, 40, 30)
  ctx.strokeRect(125, 190, 40, 30)
  
  ctx.beginPath()
  ctx.moveTo(90, 250)
  ctx.lineTo(180, 250)
  ctx.lineWidth = 3
  ctx.strokeStyle="black"
  ctx.stroke()
  
  ctx.fillStyle= "#F7F7F7"
  ctx.fillRect(285, 190, 40, 30)
  ctx.strokeRect(285, 190, 40, 30)
  
  ctx.beginPath()
  ctx.moveTo(270, 250)
  ctx.lineTo(360, 250)
  ctx.lineWidth = 3
  ctx.strokeStyle="black"
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(130, 110)
  ctx.lineTo(130, 120)
  ctx.moveTo(160, 110)
  ctx.lineTo(160, 120)
  ctx.moveTo(190, 110)
  ctx.lineTo(190, 120)
  ctx.moveTo(225, 110)
  ctx.lineTo(225, 120)
  ctx.moveTo(260, 110)
  ctx.lineTo(260, 120)
  ctx.moveTo(290, 110)
  ctx.lineTo(290, 120)
  ctx.moveTo(320, 110)
  ctx.lineTo(320, 120)
  ctx.lineWidth = 3
  ctx.strokeStyle="black"
  ctx.stroke()
  
ctx.beginPath()
  ctx.arc(225, 250, 45, Math.PI*2, Math.PI, true)
  ctx.lineTo(180, 350)
  ctx.lineTo(270, 350)
ctx.closePath()
  ctx.fillStyle="white"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(145, 295, 15, Math.PI*2, Math.PI, true)
  ctx.lineTo(130, 310)
  ctx.lineTo(160, 310)
ctx.closePath()
  ctx.fillStyle="white"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(305, 295, 15, Math.PI*2, Math.PI, true)
  ctx.lineTo(290, 310)
  ctx.lineTo(320, 310)
ctx.closePath()
  ctx.fillStyle="white"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()

  ctx.beginPath()
   ctx.moveTo(55, 350)
   ctx.lineTo(55, 150-mouse.y/4)
   ctx.lineTo(95, 175 - (time%3)-mouse.y/4)
   ctx.lineTo(55, 195-mouse.y/4)
ctx.closePath()
  ctx.fillStyle="red"
  ctx.fill()
  ctx.strokeStyle="#51B1DB"
  ctx.stroke()

//車子
  ctx.fillStyle="#8aecc1"
  let carx = time%440-40
  ctx.fillRect(carx, 340, 40, 25)
  ctx.strokeStyle="black"
  ctx.strokeRect(carx, 340, 40, 25)

  ctx.beginPath()
  ctx.arc(carx+10, 365, 5, 0, Math.PI*2)
  ctx.arc(carx+30, 365, 5, 0, Math.PI*2)
  ctx.fillStyle="black"
  ctx.fill()
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI*2)
  ctx.fillStyle="black"
  ctx.fill()
             
} 
//draw()

setInterval(draw, 30)