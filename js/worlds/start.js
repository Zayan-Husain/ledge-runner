///////////////start world///////////////////
class start extends world {
  constructor(name2, wh2) {
    super(name2);
    this.wh = wh2;
  }

  init() {
    var t = this;
    //get btn images
    var btn_start_img = loadImage("img/play.png");
    var btn_credits_img = loadImage("img/credits.png");
    //create btn entitys
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
  }
  update() {
    super.update();
    var t = this;

    //if start clicked
    if (t.btn_start.clicked(2)) {
      t.change_world("game_world", true);
    }
    if (t.btn_credits.clicked(2)) {
      t.change_world("credits", true);
    }
  } //end update
} //end world class
///////////////end start world///////////////////
