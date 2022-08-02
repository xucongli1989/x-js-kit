/**
 * 颜色实体
 */
export interface RGBAColorType {
    /**
     * 0-255
     */
    r: number;
    /**
     * 0-255
     */
    g: number;
    /**
     * 0-255
     */
    b: number;
    /**
     * 0-255
     */
    a?: number;
    /**
     * a 的 0~1 小数形式
     */
    a01?: number;
    /**
     * a 的 0~100 百分比形式
     */
    a100?: number;
}
/**
 * 将十六进制的 RGBA 颜色转换为实体对象
 */
export declare function hexToEntity(hex: string): RGBAColorType;
/**
 * 将 RGBA 转换为十六进制的颜色字符串（小写，如：#ff001199）
 */
export declare function rgbaToHex(rgba: RGBAColorType): string;
//# sourceMappingURL=color.d.ts.map