import { StaticData } from "src/core/modules/data";

export class GameStaticData extends StaticData {

    public elements: any[] = null;

    constructor() {
        super();
    }

    protected get_res_member_map(): Object {
        return {
            "res/data/excel/Elements.json": "elements",
        };
    }
}