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
  }
  update() {
    super.update();
    var t = this;
  }

  render() {
    super.render();

    fill(255);
    textAlign(CENTER);
    textSize(50);
    text("game over you lose! ", 250, 100);
    textSize(24);
    text("your score is: " + this.score, 200, 150);
  } //end render
} //end world class
///////////////end game_over world///////////////////
