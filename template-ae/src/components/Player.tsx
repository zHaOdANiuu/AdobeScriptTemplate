function Player(parent: Container) {
  let handler = 0
  const data = {
    currentFrame: 0,
    framesLength: 0,
    view: parent.add('customview')
  }
  return {
    view: data.view,
    config: { fps: 30, width: 400, height: 400 },
    onLoad(sequenceFrames: ScriptUIImage[]) {
      data.framesLength = sequenceFrames.length
      data.view.size = [this.config.width, this.config.height]
      const _this = this
      data.view.onDraw = function () {
        this.graphics.drawImage(
          sequenceFrames[data.currentFrame],
          0,
          0,
          _this.config.width,
          _this.config.height
        )
      }
    },
    onPlay() {
      if ($.global.__PlayerData__) {
        return
      }
      $.global.__PlayerData__ = data
      handler = app.scheduleTask(
        `__PlayerData__.view.notify("onDraw");++__PlayerData__.currentFrame;if(__PlayerData__.currentFrame===__PlayerData__.framesLength-1)__PlayerData__.currentFrame=0;`,
        1000 / this.config.fps,
        true
      )
    },
    onPause() {
      app.cancelTask(handler)
      $.global.__PlayerData__ = null
    }
  }
}

export default Player
