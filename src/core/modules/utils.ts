import LogicModule from "../LogicModule";

export class UtilsModule extends LogicModule {
    
    private _start_time: Date = null;
    /** 游戏启动时长 */
    public game_started_time: number = 0;

    initialize() {
        this.game_started_time = 0;
        this._start_time = new Date();
    }

    always_update(dt: number) {
       this.game_started_time += dt;
    }

    /**
     * 获取游戏的当前时间，未必会和本机时间一致
     */
    public get now(): Date {
        return new Date(this._start_time.getTime() + this.game_started_time * 1000);
    }

    set_start_time(time: Date) {
        this._start_time = time;
    }

}