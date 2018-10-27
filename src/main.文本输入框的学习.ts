import GameConfig from "./config";
const { width, height } = GameConfig;


class LayaInput {
	constructor() {
		Laya.init(width, height, Laya.WebGL);
		Laya.stage.bgColor = "#f99";
		this.Text_InputSingleline();
		this.Text_InputMultiline()
	}

	private Text_InputSingleline():void {
		let  textInput : Laya.TextInput  = new Laya.TextInput('单行输入')
		textInput.wordWrap = true;
		textInput.fontSize = 30;
		textInput.pos(100, 100)
		textInput.size(300, 200)
		textInput.borderColor = '#000'
		textInput.bgColor = '#923'
		textInput.align = 'center'
		textInput.valign = 'middle'
		textInput.color = '#c66'
		Laya.stage.addChild(textInput)
	}

	private Text_InputMultiline():void {
		let textInput : Laya.TextInput = new Laya.TextInput('多行输入')

		textInput.fontSize = 30;
		textInput.wordWrap = true;
		textInput.multiline = true;
		textInput.bgColor = '#c30'
		textInput.align = 'left'
		textInput.valign = 'top'
		textInput.pos(100, 500)
		textInput.size(300, 200)
		Laya.stage.addChild(textInput)
	}

}


new LayaInput()
