namespace laya {
	export class MaskDemo {
		private Res: string;
		private img: Laya.Sprite;
		private cMask: Laya.Sprite;
		constructor() {
			Laya.init(Laya.Browser.width, Laya.Browser.height, Laya.WebGL);

			// Laya.stage.bgColor = '#123'
			Laya.stage.bgColor = "#123";

			this.Res = "./img/8.jpg";

			Laya.loader.load(
				this.Res,
				Laya.Handler.create(this, this.graphicsImg)
			);
		}

		private graphicsImg(): void {
			this.img = new Laya.Sprite();
			console.log(this.img)
			this.img.graphics.drawTexture(
				Laya.loader.getRes(this.Res),
				0,
				0,
				600,
				300
			);

			Laya.stage.addChild(this.img);

			this.cMask = new Laya.Sprite();

			this.cMask.graphics.drawCircle(200, 200, 200, "#123");

			this.cMask.pos(215, 0)
			// Laya.stage.addChild(this.cMask)


			// this.img.mask = this.cMask;

			this.img.mask = this.cMask;
		}
	}
}

new laya.MaskDemo();
