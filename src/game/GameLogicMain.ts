import LogicMain from "../core/LogicMain";
import { Vector2 } from "src/utils/math";
import { UtilsModule } from "src/core/modules/utils";
import AudioManager from "src/core/modules/audio";
import { PlatformModule } from "src/core/modules/platform";
import { UserModule } from "src/core/modules/user";
import { GameStaticData } from "./modules/data";

export class GameLogicMain extends LogicMain {

    public screenSize: Vector2 = new Vector2(Laya.stage.width, Laya.stage.height);

    constructor() {
        super();
        this.add_module('platform', new PlatformModule());
        this.add_module('data', new GameStaticData());
        this.add_module('user', new UserModule());
        this.add_module('audio', new AudioManager());
        this.add_module('utils', new UtilsModule());
    }
}