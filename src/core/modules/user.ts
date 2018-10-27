import LogicModule from "../LogicModule";

export enum Events {
    USER_LEVEL_UP = 'USER_LEVEL_UP',
}

export interface SaveData {
    last_active_at: string;
    money: number;
    settings: Settings;
};

export interface UserInfo {
    uid: string;
    name: string;
    avatar_url: string;
}

export interface Settings {
    music_enabled: boolean;
    sound_enabled: boolean;
    shake_enabled: boolean;
};

export class UserModule extends LogicModule {

    private _money: number = 0;
    public info: UserInfo = null;
    public settings: Settings = null;

    public get money() : number {
        return this._money;
    }
   
    public get level(): number {
        return 0;
    }

    public add_money(amount: number) {
        this._money += amount;
    }

    public minus_money(amount: number) {
        this._money -= amount;
    }

    initialize() {
        this.settings = {
            music_enabled: true,
            sound_enabled: true,
            shake_enabled: true,
        }
    }

    save(): SaveData {
        return {
            last_active_at: game.modules.utils.now.toISOString(),
            money: this.money,
            settings: this.settings,
        }
    }

    load(data: SaveData) {
        this._money = data.money;
        this.settings = data.settings;
    }
}