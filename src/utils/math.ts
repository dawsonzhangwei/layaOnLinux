
export function deg2rad(p_y: number): number { 
    return p_y * Math.PI / 180.0; 
}

export function rad2deg(p_y: number): number {
    return p_y * 180.0 / Math.PI;
}

/**
 * 二维向量类
 */
export class Vector2 {

    constructor(x = 0, y = 0) {
        this._x = x;
        this._y = y;
    }
    
    private _x : number;
    private _y: number;

    public get x() : number { return this._x; }
    public set x(v : number) { this._x = v; }
    
    public get y() : number { return this._y;}
    public set y(v : number) { this._y = v; }
    
    public get width() : number { return this._x; }
    public set width(v : number) { this._x = v;}
    
    public get height() : number { return this._y; }
    public set height(v : number) { this._y = v;}

    /** 面积 */
    public get area() : number { return this._x * this._y; }
    /** 长度 */
    public get length(): number { return Math.sqrt(this._x * this._x + this._y * this._y); }

    add_assign(v: Vector2): Vector2 {
        this._x += v._x;
        this._y += v._y;
        return this;
    }

    minus(v: Vector2): Vector2 {
        return new Vector2(this._x - v._x, this._y - v._y);
    }

    nevigate(): Vector2 {
        return new Vector2( -this._x, -this._y);
    }

    multiply(num: number): Vector2 {
        return new Vector2(this._x * num, this._y * num);
    }

    normalize(): Vector2 {
        let l = this._x * this._x + this._y * this._y;
        if (l != 0) {
            l = Math.sqrt(l);
            this._x /= l;
            this._y /= l;
        }
        return this;
    }

    distance_to(p_vector2: Vector2): number {
        return Math.sqrt((this._x - p_vector2._x) * (this._x - p_vector2._x) + (this._y - p_vector2._y) * (this._y - p_vector2._y));
    }
    
    distance_squared_to(p_vector2: Vector2): number {
        return (this._x - p_vector2._x) * (this._x - p_vector2._x) + (this._y - p_vector2._y) * (this._y - p_vector2._y);
    }

    cross(p_other: Vector2): number {
        return this._x * p_other._y - this._y * p_other._x;
    }

    dot(p_other: Vector2): number {
        return this._x * p_other._x + this._y * p_other._y;
    }

    angle_to(p_vector2: Vector2): number {
        return Math.atan2(this.cross(p_vector2), this.dot(p_vector2));
    }

    angle_to_point(p_vector2: Vector2): number {
        return Math.atan2(this._y - p_vector2._y, this._x - p_vector2._x);
    }

    clone(): Vector2 {
        return new Vector2(this._x, this._y);
    }

    toString(): string {
        return `${this._x},${this._y}`;
    }
}