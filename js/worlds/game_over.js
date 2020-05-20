///////////////game_over world///////////////////
class game_over extends world {
  constructor(name2, wh2) {
    super(name2);
    this.wh = wh2;
  }

  init() {
    super.init();
    var t = this;
    var game_world = yeng.get_world("game_world");
    t.score = game_world.score;
    var btn_start_img = loadImage("img/menu.png");
    t.btn_start = new yentity(this.wh.w / 2, 175, btn_start_img);
    t.btn_start.sethb_wh(200, 30); //set hitbox width height
    t.add(t.btn_start);
  }
  update() {
    super.update();
    var t = this;
    if (t.btn_start.clicked(2)) {
      this.change_world("start", true);
    }
  }

  render() {
    super.render();
    textSize(30);
    this.ytext(this.wh.w / 2, this.wh.h / 2 - 11, "Game Over!");
    textSize(23);
    this.ytext(
      this.wh.w / 2,
      this.wh.h / 2 + 22,
      "Your score is " + this.score
    );
  } //end render
} //end world class
///////////////end game_over world///////////////////
