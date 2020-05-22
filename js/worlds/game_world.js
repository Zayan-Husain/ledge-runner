class game_world extends world {
  constructor(name2, wh2) {
    super(name2);
    this.ledgeTimer = new ytimer(50);
    this.wh = wh2;
    this.ledgeSpeed = 2;
    this.score = 0;
    this.ledgeSpeedTimer = new ytimer(800);
    this.maxLedgeSpeed = 12;
    this.isSmartphone = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    this.coinTimer = new ytimer(600);
    this.textures = ["ph1.jpg", "ph2.jpg", "ph3.jpg"];
    this.currentImage = 0;
    this.image = loadImage("img/" + this.textures[this.currentImage]);
    this.powerupTimer = new ytimer(400);
  }

  init() {
    super.init();
    this.entitys = [];
    this.score = 0;
    var p = new player(this.wh.w / 2, 20);
    this.add(p);
    var c = new coin();
    this.add(c);
    this.addPowerUp();
    this.currentImage = 0;
    this.ledgeSpeed = 2;
    this.ledgeSpeedTimer = new ytimer(800);
  }
  update() {
    super.update();
    var t = this;
    t.spawnLedge();
    t.score++;
    t.levelProgression();
    t.coinSpawns();
  }
  render() {
    super.render();
    var t = this;
    t.ytext(t.wh.w / 2, 22, "Score: " + t.score);
  }
  spawnLedge() {
    var t = this;
    if (t.ledgeTimer.finished()) {
      var r = Math.random() * 2;
      var last_l;
      for (let i = 0; i < r; i++) {
        var w = Math.random() * ((t.wh.w - 20) / 2) + 40;
        var x = Math.random() * t.wh.w;
        var l = new ground(x, t.wh.h + 60, this.image);
        l.cwh(w); //set sprite wh before you create next img
        this.image = loadImage("img/" + this.textures[this.currentImage]);
        l.speed = t.ledgeSpeed;
        //l.debug = true;
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
      t.currentImage++;
      if (t.currentImage > t.textures.length - 1) {
        t.currentImage = t.textures.length - 1;
      }
      if (this.ledgeSpeed > this.maxLedgeSpeed) {
        this.ledgeSpeed = this.maxLedgeSpeed;
      }
    }
    if (this.powerupTimer.finished()) {
      this.addPowerUp();
    }
  } //end level progression
  coinSpawns() {
    var t = this;
    if (t.coinTimer.finished()) {
      var c = new coin();
      this.add(c);
    }
  }
  addPowerUp() {
    var gp = new power_up();
    var r = Math.round(Math.random() * 3);
    if (r == 0) {
      r++;
    }
    var powerup = "";
    if (r == 1) {
      powerup = "No Gravity";
    }
    if (r == 2) {
      powerup = "Higher Gravity";
    }
    if (r == 3) {
      powerup = "Reverse Gravity";
    }
    gp.power_up_type = powerup;
    this.add(gp);
  }
}
