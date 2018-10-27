// import GameConfig from "./config";
// import { GameLogicMain } from "./game/GameLogicMain";

// import "src/view/raw"
// import TaskDialog from "./view/Test/TaskDialog";
// import { FairyGUIHelper } from "src/view/raw";

// class Main {

// 	private game: GameLogicMain = null;

// 	constructor() {
// 		// 根据设置初始化引擎
// 		if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
// 		else Laya.init(GameConfig.width, GameConfig.height, Laya.WebGL);
// 		Laya.stage.scaleMode = GameConfig.scaleMode;
// 		Laya.stage.screenMode = GameConfig.screenMode;
// 		if (GameConfig.debug) {
// 			Laya.alertGlobalError = true;
// 			if (GameConfig.stat)  Laya.Stat.show();
// 			if (GameConfig.debugPanel) Laya.DebugPanel.init();
// 		}
// 		console.log("Laya引擎启动成功");
// 		// 初始化 FairyGUI
// 		FairyGUIHelper.init();
// 		// 激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
// 		Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
// 	}

// 	onVersionLoaded(): void {
// 		this.game = new GameLogicMain();
// 		window['game'] = this.game;
// 		Laya.stage.timer.frameLoop(1, this, this.onEngineFrameUpdate);

// 		// 加载 FairyGUI 页面
// 		FairyGUIHelper.loadPackage("res/ui/Test.bin", "res/ui/Test_atlas0.png", Laya.Handler.create(this, this.onTestPageLoaded));
// 	}

// 	private onTestPageLoaded() {
// 		let dialog = TaskDialog.createInstance();
// 		fairygui.GRoot.inst.addChild(dialog);
// 	}

// 	onEngineFrameUpdate() {
// 		const delta = Laya.stage.timer.delta / 1000;
// 		this.game.update(delta);
// 	}
// }

// //激活启动类
// new Main();
module laya {
	// import Sprite  = Laya.Sprite;

	export class LayaSample {
		constructor() {
			//初始化引擎，不支持WebGL时自动切换到Canvas
			Laya.init(550, 400, Laya.WebGL);
			this.setup();
		}
		private setup(): void {
			var t1: Laya.Text = this.createText();
			//设置不进行任何裁剪
			t1.overflow = Laya.Text.VISIBLE;
			t1.pos(10, 10);
			var t2: Laya.Text = this.createText();
			//设置不显示文本区域外的字符像素
			t2.overflow = Laya.Text.SCROLL;
			t2.pos(10, 110);
			var t3: Laya.Text = this.createText();
			//设置不显示超出文本域的字符
			t3.overflow = Laya.Text.HIDDEN;
			t3.pos(10, 210);
		}
		private createText(): Laya.Text {
			var txt: Laya.Text = new Laya.Text();
			txt.text = `我草`
			txt.borderColor = "#ffff00";
			//设置宽高以后的自动裁剪会按照这个区域裁剪
			txt.size(300, 50);
			txt.fontSize = 20;
			txt.color = "#ffffff";
			Laya.stage.addChild(txt);
			return txt;
		}
	}
}
new laya.LayaSample();
