require(['drawCircle', 'drawPoints', 'deleteOnePoint', 'renderPointsAtRight', 'startGame'], 
function (drawCircle, drawPoints, deleteOnePoint, renderPointsAtRight, startGame) {
  let canvas = document.querySelector('#canvas')
  let context = canvas.getContext('2d')

  canvas.width = 1000;
  canvas.height = 500;

  // 保存背景圆的位置和半径
  let circle = {x: 250, y: 250, radius: 200};
  let circleRight = {x: 750, y: 250, radius: 200};
  // 保存随机生成的散点
  let arrPoints = []; 

  drawCircle.drawCircle(circle, context);
  drawPoints.drawPoints(10, context, arrPoints, circle);
  deleteOnePoint.deleteOnePoint(arrPoints);

  let imageDataTmp = context.getImageData(0, 0, canvas.width/2, canvas.height); // 保存左边画好的背景圆和散点
  let startGameButton = document.querySelector('#startGame');
  let stopGameButton = document.querySelector('#stopGame');
  let rightCircleImg; // 保存右侧去掉一点后的图像
  window.saveInterval;

  startGameButton.onclick = function () {
    drawCircle.drawCircle(circleRight, context);
    renderPointsAtRight.renderPointsAtRight(context, arrPoints);
    rightCircleImg = context.getImageData(500, 0, canvas.width, canvas.height);
    startGame.startGame(context, imageDataTmp, circle, rightCircleImg, circleRight);
    this.disabled = true;
    stopGameButton.disabled = false;
  }

  stopGameButton.onclick = function () {
    this.disabled = true;
    clearInterval(window.saveInterval);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.putImageData(imageDataTmp, 0, 0);
    context.putImageData(rightCircleImg, 500, 0);
  }

})