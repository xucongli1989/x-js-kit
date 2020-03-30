/**
 * 定时器
 */
export default class StopWatch {
    private _date;
    private _value;
    private _startFlag;
    private _stopFlag;
    /**
     * 间隔的毫秒数
     */
    get value(): number;
    /**
     * 开始计时
     */
    start(): this;
    /**
     * 停止计时
     */
    stop(): this;
}
//# sourceMappingURL=stopWatch.d.ts.map