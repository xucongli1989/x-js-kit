/**
 * 策略项
 */
export class StrategyItem {
    name: string = ""
    context: any
    handler(item: StrategyItem) { }
}

/**
 * 策略管理类
 */
export class Strategy {
    private _strategyList: StrategyItem[] = []
    context: any
    add(name: string, handler: (item: StrategyItem) => void) {
        this._strategyList.push({
            name: name,
            context: this.context,
            handler: handler
        })
        return this
    }
    process() {
        this._strategyList.forEach(item => {
            item.handler(item)
        })
    }
}