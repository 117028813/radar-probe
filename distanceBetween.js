define(function () {
  return {
    distanceBetween(x1, y1, x2, y2) {
      let x = Math.abs(x1 - x2);
      let y = Math.abs(y1 - y2);
      return Math.sqrt(x*x + y*y);
    }
  }
})