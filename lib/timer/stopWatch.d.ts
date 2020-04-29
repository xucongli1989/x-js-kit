/**
 * 定时器，提供开始计时与结束计时方法，最终会计算出这两个时间的差。
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