
interface ModulesType {
    platform: any;
    data: {
        get_config_by_id(id: number): any;
    };
    utils: any;
    user: any;
}

interface LogicType {
    paused: boolean;
    modules: ModulesType;
    screenSize: { x: number, y: number, width: number, height: number }
    is_ready(): boolean;
    save(): void;
}

interface AudioManagerType {
    play_effect(audio: any);
    preload();
    pause_music();
    resume_music();
}

declare const game: LogicType;
declare const audio: AudioManagerType;
declare const Global: any;
