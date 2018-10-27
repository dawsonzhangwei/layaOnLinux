// class LayaSample 11{
// 	constructor() {
// 		//初始化引擎，不支持WebGL时自动切换到Canvas
// 		Laya.init(550, 400, Laya.WebGL);
// 		this.setup();
// 	}
// 	private setup(): void {
// 		var t1: Laya.Text = this.createText();
// 		//设置不进行任何裁剪
// 		t1.overflow = Laya.Text.VISIBLE;
// 		t1.pos(10, 10);
// 		var t2: Laya.Text = this.createText();
// 		//设置不显示文本区域外的字符像素
// 		t2.overflow = Laya.Text.SCROLL;
// 		t2.pos(10, 110);
// 		var t3: Laya.Text = this.createText();
// 		//设置不显示超出文本域的字符
// 		t3.overflow = Laya.Text.HIDDEN;
// 		t3.pos(10, 210);
// 	}
// 	private createText(): Laya.Text {
// 		var txt: Laya.Text = new Laya.Text();
// 		txt.text =
// 			"Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
// 			"Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
// 			"Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！";
// 		txt.borderColor = "#ffff00";
// 		//设置宽高以后的自动裁剪会按照这个区域裁剪
// 		txt.size(300, 50);
// 		txt.fontSize = 20;
// 		txt.color = "#ffffff";
// 		Laya.stage.addChild(txt);
// 		return txt;
// 	}
// }
// new LayaSample();
