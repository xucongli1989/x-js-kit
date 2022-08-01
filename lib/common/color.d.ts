/**
 * 颜色实体
 */
export interface RGBAColorType {
    r: number;
    g: number;
    b: number;
    a: number;
}
/**
 * 将十六进制的 RGBA 颜色转换为实体对象
 */
export declare function hexToEntity(hex: string): RGBAColorType;
/**
 * 将 RGBA 转换为十六进制的颜色字符串（小写，如：#ff001199）
 */
export declare function rgbaToHex(r: number, g: number, b: number, a?: number): string;
//# sourceMappingURL=color.d.ts.map