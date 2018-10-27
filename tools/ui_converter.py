import os

UI_SRC_DIR = "src/view/raw"
UI_CLASS_PREFIX = "UI_"
UI_BIN_EXTENTION = "bin"
INDEX_TEMPLATE = '''/** This file is generated by tool. Please do not modify it. **/

{imports}

export class FairyGUIHelper {
	/** 初始化 FairyGUI */
	static init() {
		FairyGUIHelper.bindAll();
		fairygui.UIConfig.packageFileExtension = "bin";
		Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
	}

	/** 绑定 UI 与脚本类 */
	static bind(url: string, viewClass: any) {
		fairygui.UIObjectFactory.setPackageItemExtension(url, viewClass);
	}

	/** 加载 FairyGUI 的包 */
	static loadPackage(pkg: string, atlas:string|string[], completeHandle?: Laya.Handler) {
		let res_list = [{ url: pkg, type: Laya.Loader.BUFFER }];
		if (typeof(atlas) === 'string') {
			res_list.push({url: atlas, type: Laya.Loader.IMAGE});
		} else if (atlas.length){
			for (const url of atlas) {
				res_list.push({url, type: Laya.Loader.IMAGE});
			}
		}
		const callback = {
			complete: function() {
				fairygui.UIPackage.addPackage(pkg.split('.').slice(0, -1).join('.'), Laya.loader.getRes(pkg));
				if(completeHandle) {
					completeHandle.run();
				}
			}
		};
		Laya.loader.load(res_list, Laya.Handler.create(callback, callback.complete));
	}

	/** 绑定所有UI与工具生成的脚本类 */
	static bindAll() {
{bindings}
	}
}
'''




def glob_path(path, pattern):
	import fnmatch
	import os
	result = []
	for root, _, files in os.walk(path):
		for filename in files:
			if fnmatch.fnmatch(filename, pattern):
				result.append(os.path.join(root, filename))
	return result



def process_ui_file(path):
	import re
	file = open(path, 'r+', encoding='utf8')
	content = file.read()
	regex = r"module\s(\w+)\s"
	module_name = re.findall(regex, content, re.MULTILINE)[0]
	regex = r"export class (\w+)"
	class_name = re.findall(regex, content, re.MULTILINE)[0]
	component_name = class_name.replace(UI_CLASS_PREFIX, '')
	# 插入包名和组件名
	insert_pos = content.find('public static URL')
	pkg_line = 'public static PACKAGE:string = "{pkg}";\n'.format(pkg=module_name)
	content = content[:insert_pos] + pkg_line + '\t\t' + content[insert_pos:]
	comp_line = 'public static COMPONENT:string = "{comp}";\n'.format(comp=component_name)
	content = content[:insert_pos] + comp_line + '\t\t' + content[insert_pos:]
	# 注册命名空间
	module_line = 'window["{module}"] = { ...(window["{module}"]), ...{module} };'.replace('{module}', module_name).replace('{class}', class_name)
	if content.find(module_line) == -1:
		content += "\n"
		content += module_line
		file.seek(0)
		file.write(content)
		file.close()
	return module_name, component_name, class_name

def main():
	imports =''
	bindings = ''
	for f in glob_path(UI_SRC_DIR, "**.ts"):
		if f.endswith("index.ts"): continue
		if f.endswith("Binder.ts"):
			os.remove(f)
			continue
		module_name, component_name, class_name = process_ui_file(f)
		path = os.path.relpath(f, UI_SRC_DIR).replace('\\', '/')
		imports += 'import "./{}"\n'.format(path)
		bindings += '\t\tFairyGUIHelper.bind({module_name}.{class_name}.URL, {module_name}.{class_name});\n'.format(module_name=module_name, class_name=class_name)
	file = open(os.path.join(UI_SRC_DIR, 'index.ts'), 'w', encoding='utf8')
	file.write(
		INDEX_TEMPLATE.replace('{imports}', imports).replace('{bindings}', bindings)
	)
	file.close()

if __name__ == '__main__':
	main()
