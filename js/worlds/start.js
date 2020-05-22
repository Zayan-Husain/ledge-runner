///////////////start world///////////////////
class start extends world {
  constructor(name2, wh2) {
    super(name2);
    this.wh = wh2;
    if (localStorage.getItem("high-score") === null) {
      localStorage.setItem("high-score", 0);
    }
    this.highScore = localStorage.getItem("high-score");
  }

  init() {
    var t = this;
    //get btn images
    var btn_start_img = loadImage("img/play.png");
    var btn_credits_img = loadImage("img/credits.png");
    //create btn entitys
    var btn_reset_score_img = loadImage("img/resetHighScore.png");
    t.btn_reset_score = new yentity(this.wh.w / 2, 55, btn_reset_score_img);
    t.add(t.btn_reset_score);
    t.btn_start = new yentity(this.wh.w / 2, 200, btn_start_img);
    t.btn_credits = new yentity(this.wh.w / 2, 300, btn_credits_img);

    //t.btn_start.debug = true;
    //t.btn_credits.debug = true;

    //set btns hitbox/clicble area
    t.btn_start.sethb_wh(200, 30); //set hitbox width height
    t.btn_credits.sethb_wh(247, 49); //set hitbox width height

    //add btns
    t.add(t.btn_start);
    t.add(t.btn_credits);
    this.highScore = localStorage.getItem("high-score");
  }
  render() {
    this.ytext(this.wh.w / 2, 22, "Highest Score: " + this.highScore);
  }
  update() {
    super.update();
    var t = this;
    t.btn_reset_score.sethb_wh(170, 25); //set hitbox width height
    t.btn_reset_score.set_wh(170, 25); //set hitbox width height

    //if buttons clicked
    if (t.btn_reset_score.clicked(2)) {
      localStorage.setItem("high-score", 0);
      this.highScore = 0;
    }
    if (t.btn_start.clicked(2)) {
      t.change_world("game_world", true);
    }
    if (t.btn_credits.clicked(2)) {
      t.change_world("credits", true);
    }
  } //end update
} //end world class
///////////////end start world///////////////////
