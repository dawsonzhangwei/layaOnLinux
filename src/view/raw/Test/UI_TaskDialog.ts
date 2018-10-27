/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Test {

	export class UI_TaskDialog extends fairygui.GComponent {

		public m_n0:fairygui.GImage;
		public m_n1:UI_bt_close;
		public m_n2:fairygui.GTextField;
		public m_n3:fairygui.GImage;
		public m_t2:fairygui.Transition;

		public static COMPONENT:string = "TaskDialog";
		public static PACKAGE:string = "Test";
		public static URL:string = "ui://470wsdlpgs1xc";

		public static createInstance():UI_TaskDialog {
			return <UI_TaskDialog><any>(fairygui.UIPackage.createObject("Test","TaskDialog"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n1 = <UI_bt_close><any>(this.getChildAt(1));
			this.m_n2 = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_n3 = <fairygui.GImage><any>(this.getChildAt(3));
			this.m_t2 = this.getTransitionAt(0);
		}
	}
}
window["Test"] = { ...(window["Test"]), ...Test };