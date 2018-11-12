/**
 * 将分钟数转为带小时的字符串，如：10小时20分钟
 */
export const toHourStringFromMins = (mins: number): string => {
    if (mins < 0) {
        return "";
    }
    let h = parseInt((mins / 60).toString());
    let m = parseInt((mins % 60).toString());
    let s = [];
    if (h > 0) {
        s.push(`${h}小时`);
    }
    if (m > 0) {
        s.push(`${m}分钟`);
    }
    return s.join("");
}