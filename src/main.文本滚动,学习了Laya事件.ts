import GameConfig from "./config";
console.log(GameConfig.width);
const Browser = Laya.Browser;

class LayaSample {
	private txt: Laya.Text;
	private prevX: number = 0;
	private prevY: number = 0;
	constructor() {
		Laya.init(Browser.width, Browser.height, Laya.WebGL);
		this.createText();
	}

	private createText(): void {
		this.txt = new Laya.Text();

		console.log(this.txt);
		this.txt.text = `hello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\nhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrdhello_wolrd\n`;
		this.txt.color = "#fff";
		this.txt.borderColor = "#f50";
		this.txt.bold = true;
		this.txt.fontSize = 16;
		this.txt.overflow = Laya.Text.SCROLL;
		this.txt.size(200, 200);
		Laya.stage.addChild(this.txt);
		this.txt.on(Laya.Event.MOUSE_DOWN, this, this.startScrollText);
		this.txt.pos(300, 200);
	}

	private startScrollText(): void {
		this.prevX = this.txt.mouseX;
		this.prevY = this.txt.mouseY;
		Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.scrollText);
		Laya.stage.on(Laya.Event.MOUSE_UP, this, this.finishScrollText);
	}
	/**
	 *完成滚动后清除事件监听
	 *
	 * @private
	 * @memberof LayaSample
	 */
	private finishScrollText(): void {
		Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.scrollText);
		Laya.stage.off(Laya.Event.MOUSE_UP, this ,this.finishScrollText)
	}
	/**
	 * this.prevX = nowX;this.prevY = nowY; 将它的初始位置重新设置成鼠标的位置.这个问题滚动的就会参照鼠标而滚动,如果没有配置的话文本将回参照第一次点击的原点进行滚动.
	 *
	 * @private
	 * @memberof LayaSample
	 */
	private scrollText(): void {
		let nowX = this.txt.mouseX;
		let nowY = this.txt.mouseY;

		this.txt.scrollX += this.prevX - nowX;
		this.txt.scrollY += this.prevY - nowY;

		this.prevX = nowX;
		this.prevY = nowY;

		console.log(this.txt.scrollX, this.txt.scrollY);
	}
}

new LayaSample();
