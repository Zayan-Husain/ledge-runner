class game_world extends world {
  constructor(name2, wh2) {
    super(name2);
    this.ledgeTimer = new ytimer(50);
    this.wh = wh2;
    this.ledgeSpeed = 2;
    this.score = 0;
    this.ledgeSpeedTimer = new ytimer(300);
    this.maxLedgeSpeed = 12;
    this.isSmartphone = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    // this.coinTimer = new ytimer(120);
  }

  init() {
    super.init();
    var p = new player(this.wh.w / 2, 20);
    this.add(p);
    var c = new coin();
    this.add(c);
  }
  update() {
    super.update();
    var t = this;
    t.spawnLedge();
    t.score++;
    t.levelProgression();
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
      var last_l;
      for (let i = 0; i < r; i++) {
        var w = Math.random() * ((t.wh.w - 20) / 2) + 40;
        var x = Math.random() * t.wh.w;
        var l = new ground(x, t.wh.h + 20);
        l.speed = t.ledgeSpeed;
        l.cwh(w);

        if (last_l && last_l.x > l.x) {
          t.remove(last_l);
        }

        t.add(l);

        if (l.hit_test("ground", 0, 0)) {
          t.remove(l);
        }

        last_l = l;
      } //end loop
    } //end if
  } //end spawnLedge()
  levelProgression() {
    var t = this;
    if (this.ledgeSpeedTimer.finished()) {
      this.ledgeSpeed += 0.5;
      if (this.ledgeSpeed > this.maxLedgeSpeed) {
        this.ledgeSpeed = this.maxLedgeSpeed;
      }
    }
  }
}
