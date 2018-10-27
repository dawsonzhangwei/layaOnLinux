import LogicModule from "src/core/LogicModule";

export class StaticData extends LogicModule {
    private _data_depot = {};
    private _config_loaded = false;

    constructor() {
        super();
        const resList = Object.keys(this.get_res_member_map());
        if (resList.length) {
            this._config_loaded = false;
            Laya.loader.load(resList, Laya.Handler.create(this, this.onConfigLoad));
        } else {
            this._config_loaded = true;
        }
    }

    private onConfigLoad() {
        const resMemberMap = this.get_res_member_map();
        for (const path in resMemberMap) {
            const membeName = resMemberMap[path];
            const dataList: any[] = Laya.loader.getRes(path);
            this[membeName] = dataList;
            for (const row of dataList) {
                if (row && row.id) this._data_depot[row.id] = row;
            }
        }
        this._config_loaded = true;
    }

    //* 获取配表文件与成员名对照表 */
    protected get_res_member_map(): Object {
        return {};
    }


    /** 通过ID查找配表数据  */
    public get_config_by_id(id: number) {
        return this._data_depot[id];
    }

    is_ready(): boolean {
        return this._config_loaded;
    }

}