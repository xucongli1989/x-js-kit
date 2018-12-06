/**
 * 定时器
 */
export default class StopWatch {
    private _date = new Date()
    private _value = 0
    private _startFlag = false
    private _stopFlag = false
    /**
     * 间隔的毫秒数
     */
    get value() {
        return this._value
    }
    /**
     * 开始计时
     */
    start() {
        if (this._startFlag || this._stopFlag) {
            throw new Error("You cannot call 'start' because this object has been started or stopt!")
        }
        this._startFlag = true
        this._date = new Date()
        return this
    }
    /**
     * 停止计时
     */
    stop() {
        if (this._stopFlag) {
            throw new Error("You cannot call 'stop' because this object has been stopt!")
        }
        this._stopFlag = true
        this._value = new Date().valueOf() - this._date.valueOf()
        return this
    }
}