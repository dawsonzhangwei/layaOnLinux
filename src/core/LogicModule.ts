/**
 * 逻辑模块  
 * 代表一个逻辑功能，例如成就、商店、战斗等
 */
export default class LogicModule extends Laya.EventDispatcher {

    /** 模块是否准备就绪 */
    public is_ready() : boolean { return true; }

    /** 初始化 */
    public initialize() {}

    /** 逻辑更新 */
    public update(dt: number) {}

    /** 恒更新，不考虑逻辑是否初始化完毕或暂停等逻辑，固定每帧调用 */
    public always_update(dt: number) {}

    /** 读档 */
    public load(data: object) {}

    /** 存档 */
    public save(): object { return undefined; }
}