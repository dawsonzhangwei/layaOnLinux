import LogicModule from "../LogicModule";
import { UserModule } from "./user";

export enum Events {
    SHARE_APP_SUCCESS = 'SHARE_APP_SUCCESS',
    REWARD_VIDEO_PLAY_FINISHED = 'REWARD_VIDEO_PLAY_FINISHED',
    APP_ENTER_BACKGROUND = "APP_ENTER_BACKGROUND",
    APP_ENTER_FOREGROUND = "APP_ENTER_FOREGROUND",
}

export enum ShareResult {
    SHARE_SUCCESS = 'SHARE_SUCCESS',
    SHARE_GROUP_REQUIRED = 'SHARE_GROUP_REQUIRED',
    SHARE_DIFFRENT_GROUP_REQUIREED = 'SHARE_DIFFRENT_GROUP_REQUIREED',
    SHARE_CONFIG_ERR = 'SHARE_CONFIG_ERR',
    SHARE_CANCELED = 'SHARE_CANCELED',
}

export enum BannerAdType {
    START_PAGE_BANNER,
    LEVEL_UP_BANNER,
    GAME_OVER_BANNER,
    GAME_RESUME_BANNER,
};

export interface AppConfig {
    // 环境 0调试环境 1正式环境 2提审环境 3黑名单环境
    env: number
};

export class PlatformModule extends LogicModule {

    public config: AppConfig = null;

    initialize() {
        this.config = {
            env: 0,
        };
    }

    public is_reward_ad_allow_to_show() {
        return true;
    }

    /**
     * 为了达成某项奖励而执行 “购买” 行为
     * @param type 统计类型
     * @param callback 操作结果回调
     */
    public pay_for_action(type: number, callback: (ret: ShareResult) => void) {
        callback(ShareResult.SHARE_SUCCESS);
    }

    /**
     * 执行应用分享操作
     * @param type 分享入口标记
     * @param callback 分享结束回调
     * @param groupRequired 是否要求分享到群
     * @param diffrentGroupRequired 是否要求分享到不同的群
     */
    public quick_share_with_statistics(type: number, callback: (ret: ShareResult) => void, groupRequired = true, diffrentGroupRequired = true) {
        const self = this;
        this.on_request_share_event(type);
        let func = (ret: ShareResult) => {
            callback(ret);
            if (ret == ShareResult.SHARE_SUCCESS) {
                self.on_share_success_event(type);
                self.on_app_shared(type);
            }
        };
        this.quick_share(func, groupRequired, diffrentGroupRequired);
    }

    /** 分享 */
    public quick_share(callback: (ret: ShareResult) => void, groupRequired = true, diffrentGroupRequired = true) {
        callback(ShareResult.SHARE_SUCCESS);
        this.on_app_shared();
    }

    protected on_request_share_event(type: number) { }
    protected on_share_success_event(type: number) { }

    protected on_app_shared(type: number = -1) {
        this.on_share_success_event(type);
        this.event(Events.SHARE_APP_SUCCESS);
    }

    public show_banner_ad(type: BannerAdType) {
        console.log("展示Banner广告", type);
    }

    public hide_banner_ad(type: BannerAdType) {
        console.log("隐藏Banner广告", type);
    }

    public show_reward_video_ad(type: number, callback: (ret: ShareResult) => void) {
        console.log("展示视频广告", type);
        callback(ShareResult.SHARE_SUCCESS);
    }

    /** 震动手机 */
    public shake_device() {
        if ((game.modules.user as UserModule).settings.shake_enabled) {
            this.raw_shake_device();
        }
    }

    public post_score(uid: string, score: number) {
        console.log("上报分数", score);
    }

    /** 震动手机平台实现 */
    protected raw_shake_device() { }

    public is_iPhoneX(): boolean {
        return false;
    }

    public is_Android(): boolean {
        return false;
    }

}