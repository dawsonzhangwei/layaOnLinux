import LogicModule from "./LogicModule";

export enum Events {
    LOGIC_INITIALIZED = "LOGIC_INITIALIZED",
}

const SAVE_DATA_FILE = "SAVE_DATA_FILE";
const AUTO_SAVE_DURATION = 20;

export default class LogicMain extends Laya.EventDispatcher {

    constructor() {
        super();
    }

    /** 游戏暂停标记 */
    public paused = false;

    /** 游戏逻运行时长 */
    public logic_run_time: number = 0;

    /** 逻辑模块 */
    protected modules_list: LogicModule[] = [];
    protected modules = {}
   
    /** 初始化 */
    protected initialize() {
        console.log("逻辑框架启动成功");
        this.paused = false;
        this.logic_run_time = 0;
        for (const m of this.modules_list) {
            m.initialize();
        }
        // 定时存档
        Laya.timer.loop(AUTO_SAVE_DURATION * 1000, this, this.save);
    }

    protected add_module(name, m) {
        this.modules_list.push(m);
        this.modules[name] = m;
    }

    public get_module(name): LogicModule {
        return this.modules[name];
    }

    public is_ready(): boolean {
        for (const m of this.modules_list) {
            if (!m.is_ready())
                return false;
        }
        return true;
    }

    public update(dt) {
        for (const m of this.modules_list) {
            m.always_update(dt);
        }
        if (this.is_ready() && !this.paused) {
            if (this.logic_run_time == 0) {
                this.initialize();
                this.load();
                this.event(Events.LOGIC_INITIALIZED);
            }
            this.logic_run_time += dt;
            // 更新各个模块
            for (const m of this.modules_list) {
                m.update(dt);
            }
        }
    }

    public save() {
        let data = {};
        for (const key in this.modules) {
            if (this.modules.hasOwnProperty(key)) {
                const m: LogicModule = this.modules[key];
                data[key] = m.save();
            }
        }
        Laya.LocalStorage.setJSON("game", data);
        console.log("存档数据", data);
    }

    public load() {
        const data = Laya.LocalStorage.getJSON("game");
        if (data) {
            console.log("读取数据", data);
            for (const key in this.modules) {
                if (this.modules.hasOwnProperty(key)) {
                    const m: LogicModule = this.modules[key];
                    if (data[key] != undefined) {
                        m.load(data[key]);
                    }
                }
            }
        }
    }
}

