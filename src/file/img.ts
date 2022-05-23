/**
 * 根据宽、高、及 exif 中的方向信息来返回忽略 exif 时的实际图片的宽高
 */
export function getRealWidthHeightFromExif(width: number, height: number, orientation: number): { width: number; height: number } {
    if (orientation >= 5) {
        return {
            width: height,
            height: width
        }
    }
    return { width, height }
}
