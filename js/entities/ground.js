///////////////ground///////////////////
class ground extends yentity {
	constructor(x2, y2, g) {
		super(x2, y2, g);
		this.speed = 4;
		this.type = 'ground';
		this.grafic_type = 'none';
	} //end constructor

	update() {
		super.update();
		var t = this;
		t.move();
	} //end update
	move() {
		var t = this;
		t.move_by(0, -t.speed);
		if (t.y < -50) {
			t.world.remove(t);
		}
	}
	cwh(w) {
		var t = this;
		t.set_wh(w, 30);
		t.sethb_wh(w, 30);
	}
} //end class
///////////////end ground///////////////////
