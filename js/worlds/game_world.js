class game_world extends world {
  constructor(name2, wh2) {
    super(name2);
    this.ledgeTimer = new ytimer(50);
    this.wh = wh2;
    this.ledgeSpeed = 5;
    this.score = 0;
  }

  init() {
    super.init();
    var p = new player(this.wh.w / 2, 20);
    this.add(p);
  }
  update() {
    super.update();
    var t = this;
    t.spawnLedge();
    t.score++;
  }
  render() {
    super.render();
    var t = this;
    t.ytext(t.wh.w / 2, 22, "Score: " + t.score);
  }
  spawnLedge() {
    var t = this;
    if (t.ledgeTimer.finished()) {
      var r = Math.random() * 3;
      for (let i = 0; i < r; i++) {
        var w = Math.random() * (t.wh.w / 2) + 40;
        var x = Math.random() * t.wh.w;
        var l = new ground(x, t.wh.h + 20);
        l.speed = t.ledgeSpeed;
        l.cwh(w);
        t.add(l);
      } //end loop
    } //end if
  } //end spawnLedge()
  levelProgression() {
    var t = this;
    if (t.score == 500) {
      t.ledgeSpeed += 2;
    }
    if (t.score == 1000) {
      t.ledgeSpeed += 2;
    }
  }
}
