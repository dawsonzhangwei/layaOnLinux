import LogicModule from "../LogicModule";
import { PlatformModule } from "./platform";
const ANDROID_AUDIO_PLAY_INTERVAL = 0.18;

export default class AudioManager  extends LogicModule {

    private file_index = {};
    private audio_clips = {};

    constructor() {
        super();
        window['audio'] = this;
        this.preload();
    }

    private engine_play_audio(clip: Laya.AudioSound, loop:boolean = false): Laya.SoundChannel {
        return clip.play(0, loop? 0: 1);
    }
    
    public get mute_effect() : boolean {
        return !game.modules.user.settings.sound_enabled;
    }

    public get mute_music(): boolean {
        return !game.modules.user.settings.music_enabled;
    }

    public play_effect(audio: any, loop: boolean): Laya.SoundChannel {
        if (!this.mute_effect) {
            let clip = this.audio_clips[audio];
            // clip = clip ? clip : game.modules.res.cache[audio];
            this._current_clip = clip;
            if (clip && !(game.modules.platform as PlatformModule).is_Android()) {
                return this.engine_play_audio(clip, loop);
            }
            else
                console.error("不存在音效", audio);
        }
        return null;
    }

    // Android 平台间歇播放音效
    private _current_clip: any = null;
    private _last_play_duration = ANDROID_AUDIO_PLAY_INTERVAL;
    always_update(dt: number) {
        this._last_play_duration += dt;
        if (this._last_play_duration > ANDROID_AUDIO_PLAY_INTERVAL) {
            if (this._current_clip && (game.modules.platform as PlatformModule).is_Android()) {
                this.engine_play_audio(this._current_clip);
                this._current_clip = null;
            }
            this._last_play_duration = 0;
        }
    }

    private preload() {
        
        const INDEX_FILE_PATH = "res/sounds/index.json";
        this['sound_index_load_complete_callback'] = ()=>{
            this.file_index = Laya.loader.getRes(INDEX_FILE_PATH);
            this['cache_audio_clip_callback'] = (name, path)=>{
                this.audio_clips[name] = Laya.loader.getRes(path);
            };
            for (const name in this.file_index) {
                let file = `res/sounds/${this.file_index[name]}`;
                Laya.loader.load(file, Laya.Handler.create(this, this['cache_audio_clip_callback'], [name, file]));
            }
        };
        Laya.loader.load(INDEX_FILE_PATH, Laya.Handler.create(this, this['sound_index_load_complete_callback']));
    }

    play_music(clip: any, loop: boolean) {
        // cc.audioEngine.playMusic(clip, loop)
        // TODO:
        this._bgm_started = true;
    }

    pause_music() {
        // cc.audioEngine.pauseMusic();
        // TODO:
    }

    resume_music() {
        if (!this._bgm_started) {
            this.play_music(this.audio_clips["背景音乐"], true);
        } else {
            // cc.audioEngine.resumeMusic();
            // TODO:
        }
    }


    private _initialized = false;
    private _bgm_started = false;
    update(dt: number) {
        if (!this._initialized) {
            if (!this.mute_music)
                this.resume_music();
            this._initialized = true;
        }        
    }

    is_ready(): boolean {
        return true;
        // FIXME: 检查与预加载状态
        return this.audio_clips["背景音乐"] != null;
    }
}