/*
* 游戏初始化配置;
*/
export default class GameConfig {
    static width:number=750;
    static height:number=1334;
    static scaleMode:string="fixedwidth";
    static screenMode: string ="vertical";
    static alignV:string="top";
    static alignH:string="left";
    static startScene:any="";
    static sceneRoot:string="";
    static debug: boolean = window['DEBUG_ENABLED'];
    static stat: boolean = window['DEBUG_ENABLED'];
    static debugPanel: boolean = window['DEBUG_ENABLED'] && !window['wx'];
    static physicsDebug:boolean=true;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
    }
}
GameConfig.init();