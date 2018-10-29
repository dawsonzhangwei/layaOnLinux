// import Browser = Laya.Browser;
// import Stage = Laya.Stage;
// class layaSample {
// 	private png1: string = "./img/8.png";
// 	private png2: string = "./img/ico.png";

// 	private flag: boolean = false;
// 	private img: Laya.Sprite;
// 	constructor() {
// 		Laya.init(Browser.width, Browser.height, Laya.WebGL);
// 		Laya.stage.bgColor = "#334";
// 		Laya.stage.scaleMode = "showall";

// 		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
// 		Laya.stage.alignH = Stage.ALIGN_CENTER;

// 		this.img = new Laya.Sprite();

// 		this.switchimg();

// 		this.img.on(Laya.Event.CLICK, this, this.switchimg);

// 		Laya.stage.addChild(this.img);
// 	}

// 	private switchimg() {

// 		this.img.graphics.clear();

// 		const imgUrl: string = (this.flag = !this.flag) ? this.png1 : this.png2;

// 		this.img.loadImage(imgUrl);

// 		this.img.size(200, 200);

// 		this.img.pos(300, 200);

// 	}
// }

// new layaSample();


import Browser = Laya.Browser;
class Main {
	private png1: string = "./img/9.png";
	private png2: string = "./img/ico.png";

	private img: Laya.Sprite;
	private flag: boolean = false;
	constructor() {
		Laya.init(1334, 750);

		Laya.stage.bgColor = "#fff";

		Laya.loader.load(
			[this.png1, this.png2],
			Laya.Handler.create(this, this.graphicsImg)
		);

		console.log(Laya.version)
	}

	private graphicsImg(e) {

		this.img = new Laya.Sprite();

		Laya.stage.addChild(this.img);

		this.switchIMg();

		this.img.on("click", this, this.switchIMg);

		this.img.size(200, 300)


	}
	private switchIMg(): void {

		this.img.graphics.clear();

		let imgUrl: string = (this.flag = !this.flag) ? this.png1 : this.png2;

		let texture: Laya.Texture = Laya.loader.getRes(imgUrl);

		console.log(texture)

		this.img.graphics.drawTexture(texture);

		this.img.size(texture.width, texture.height)



	}
}

new Main();
