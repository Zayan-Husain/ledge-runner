class power_up extends yentity {
  constructor() {
    super();
    var t = this;
    t.power_up_type = "Higher Gravity";
    this.grafic_type = "none";
  }
  init() {
    super.init();
    var t = this;
    var x = t.rand(t.world.wh.w);
    t.sx(x);
    t.sy(t.world.wh.h + 30);
  }
  update() {
    super.update();
    var t = this;
    t.hit_player();
    t.move();
  }
  render() {
    super.render();
    var t = this;
    t.world.ytext(t.x, t.y - 22, t.power_up_type);
  }
  hit_player() {
    var p = this.hit_test("player", 0, 0);
    if (p) {
      p.power_up_type = this.power_up_type;
      p.power_up_start = true;
      this.world.remove(this);
    }
  }
  move() {
    var t = this;
    this.move_by(0, -this.speed);
    if (t.y < 0) {
      t.world.remove(t);
    }
  }
}
