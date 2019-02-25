function setup() {
	createCanvas(600, 600);
}

var b1 = 0;
var bv1 = 12;

var b2 = 0;
var bv2 = 14;

var b3 = 0;
var bv3 = 16;

function draw() {
	background(300);
	fill(30,30,30);
	ellipse(b1, height/2, 50);
	ellipse(width/2, b2, 50);
	ellipse(b3, b3, 50);
	b1 = b1 + bv1
	b2 = b2 + bv2
	b3 = b3 + bv3
	
	if (b1 >= width) {
		bv1 = -bv1
	}
	if (b1 <= 0) {
		bv1 = -bv1
	}
	
	if (b2 >= height) {
		bv2 = -bv2
	}
	if (b2 <= 0) {
		bv2 = -bv2
	}
	
	if (b3 >= height) {
		bv3 = -bv3
	}
	if (b3 <= 0) {
		bv3 = -bv3
	}
}
