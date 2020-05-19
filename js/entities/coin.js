class coin extends yentity {
  constructor(x2, y2) {
    super(x2, y2);
    var t = this;
    t.grafic_type = "none";
    t.type = "coin";
    t.speed = 2;
  }
  init() {
    super.init();
    var t = this;
    t.sx(t.rand(t.world.wh.w - 10));
    t.sy(t.world.wh.h + 30);
    t.sprite.draw = function () {
      fill(color(255, 240, 0));
      ellipse(0, 0, t.w, t.h);
    };
  }
  update() {
    super.update();
    var t = this;
    t.move();
  }
  move() {
    var t = this;
    this.move_by(0, -this.speed);
    if (t.y < 0) {
      t.world.remove(t);
    }
    if (t.hit_test("player", 0, 0)) {
      t.world.remove(t);
      t.world.score += 500;
    }
  }
}
