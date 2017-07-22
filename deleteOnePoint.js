// 从散点数组中随机删掉一点
define(function () {
  return {
    deleteOnePoint(arrPoints) {
      arrPoints.splice( Math.floor( Math.random()*arrPoints.length ), 1 )
    }
  }
})