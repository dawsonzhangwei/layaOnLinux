/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Test {

	export class UI_bt_close extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n0:fairygui.GImage;

		public static COMPONENT:string = "bt_close";
		public static PACKAGE:string = "Test";
		public static URL:string = "ui://470wsdlpgs1xe";

		public static createInstance():UI_bt_close {
			return <UI_bt_close><any>(fairygui.UIPackage.createObject("Test","bt_close"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
		}
	}
}
window["Test"] = { ...(window["Test"]), ...Test };