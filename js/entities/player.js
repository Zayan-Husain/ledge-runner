///////////////player///////////////////
class player extends yentity {
  constructor(x2, y2, g) {
    super(x2, y2, g);
    this.speed = 4;
    this.type = "player";
    this.grafic_type = "none";
    this.speed = 0.1;
    this.speedx = 0;
    this.speedy = 0;
    this.gravity = 1.6;
    this.vf = 0.5;
    this.hf = 0.95;
    this.original_gravity = this.gravity;
    this.power_up_timer = new ytimer(200);
    this.power_up_type = "none";
    this.power_up_start;
  } //end constructor

  update() {
    var t = this;
    super.update();
    t.move();
    t.adjustPosX();
    t.adjustPosY();
    t.loseCondition();
    t.boundaries();
    t.handlePowerups();
  } //end update
  move() {
    var t = this;
    var g = t.hit_test("ground", 0, 0);
    if (t.world.isSmartphone) {
      if (mouseX < t.x) {
        //A
        t.speedx -= t.speed;
      }
      if (mouseX > 0) {
        //D
        t.speedx += t.speed;
      }
      console.log(t.world.isSmartphone);
    }
    if (keyDown("A")) {
      t.speedx -= t.speed;
    }
    if (keyDown("D")) {
      t.speedx += t.speed;
    }
    if (keyWentUp("A") || keyWentUp("D")) {
      t.speedx = 0;
    }
    if (g) {
      t.speedy = 0;
      t.sy(g.y - g.hitbh + 3);
    } else {
      t.speedy += t.gravity;
    }
    t.speedy *= t.vf;
    t.speedx *= t.hf;
  } //end move
  adjustPosX() {
    var t = this;
    var xs = Math.sign(t.speedx);
    for (let i = 0; i < Math.abs(t.speedx); i++) {
      if (!t.hit_test("ground", xs, 0)) {
        t.move_by(xs, 0);
      } else {
        t.speedx = 0;
        break;
      }
    }
  } //end adjustPosX
  adjustPosY() {
    var t = this;
    var ys = Math.sign(t.speedy);
    for (let i = 0; i < Math.abs(t.speedy); i++) {
      if (!t.hit_test("ground", 0, ys)) {
        t.move_by(0, ys);
      } else {
        t.speedy = 0;
        break;
      }
    }
  } //end adjustPosY
  loseCondition() {
    var t = this;
    if (t.y < -10 || t.y > t.world.wh.h + 10) {
      console.log(t.y);
      console.log(t.x);
      t.world.change_world("game_over", true);
    }
  } //end lose condition
  boundaries() {
    var t = this;
    if (t.x + t.w / 2 > t.world.wh.w) {
      t.sx(t.world.wh.w - t.w / 2);
    } //end right wall
    if (t.x < t.w / 2) {
      t.sx(t.w / 2);
    }
  } //end boundaries()
  handlePowerups() {
    var t = this;
    if (t.power_up_start) {
      if (t.power_up_type == "Higher Gravity") {
        this.gravity = 2.3;
      }
      if (t.power_up_type == "Reverse Gravity") {
        this.gravity = -0.7;
      }
      if (t.power_up_type == "No Gravity") {
        this.gravity = 0;
        t.speedy = 0;
      }
      if (t.power_up_timer.finished()) {
        if (
          t.power_up_type == "Higher Gravity" ||
          t.power_up_type == "Reverse Gravity" ||
          t.power_up_type == "No Gravity"
        ) {
          t.gravity = t.original_gravity;
        }
        this.power_up_timer = new ytimer(200);
        this.power_up_start = false;
      }
    }
  } //end handlePowerups()
} //end class
///////////////end player///////////////////
