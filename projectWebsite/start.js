var i;
var form= document.querySelector("form");
var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext('2d');
rect={};

    drag = false;

window.onload = function() {
  var canvas = document.getElementById("mycanvas");
  var ctx = canvas.getContext('2d');
  var img=document.getElementById("img1");
  ctx.drawImage(img,0,0);
}


function bchoose() {
  var radios = form.elements["r1"];
  for(i=0;i<4;i++) {
	if(radios[i].checked==true) {
		console.log(radios[i].value + "is checked");
	}
  }		
}

function init() {
  canvas.addEventListener('mousedown', mouseDown, false);
  canvas.addEventListener('mouseup', mouseUp, false);
  canvas.addEventListener('mousemove', mouseMove, false);
}
function mouseDown(e) {
  rect.startX = e.pageX - this.offsetLeft;
  rect.startY = e.pageY - this.offsetTop;
  drag = true;
}
function mouseUp() {
  drag = false;
}
function mouseMove(e) {
  if (drag) {
    rect.w = (e.pageX - this.offsetLeft) - rect.startX;
    rect.h = (e.pageY - this.offsetTop) - rect.startY ;
    draw();
  }
}

function draw() {
    ctx.setLineDash([6]);
  ctx.strokeRect(rect.startX, rect.startY, rect.w, rect.h);
}

init();