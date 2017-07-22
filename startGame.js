define(['drawNegativeSector'], function (drawNegativeSector) {
  return {
    startGame(context, imageDataTmp, circle, rightCircleImg, circleRight) {
      let start = 30;
      let end = 0;
      window.saveInterval = setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.putImageData(imageDataTmp, 0, 0);
        drawNegativeSector.drawNegativeSector(circle.x, circle.y, circle.radius, start, end, context);
        context.putImageData(rightCircleImg, 500, 0);
        drawNegativeSector.drawNegativeSector(circleRight.x, circleRight.y, circleRight.radius, start, end, context);
        start++;
        end++;
      }, 30);
    }
  }
})