import "../raw";

export default class TaskDialog extends Test.UI_TaskDialog {
	constructor() {
		super();
	}

	public static createInstance(): TaskDialog {
		const self = <TaskDialog><any>(fairygui.UIPackage.createObject(TaskDialog.PACKAGE, TaskDialog.COMPONENT, TaskDialog));
		// Bind ui callbacks here
		return self;
	}
}
