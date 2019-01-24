/**
 * 策略项
 */
export class StrategyItem {
    constructor(name, context, handler) {
        this.name = "";
        this.name = name;
        this.context = context;
        this.handler = handler;
    }
}
/**
 * 策略管理类
 */
export class Strategy {
    constructor() {
        /**
         * 策略列表
         */
        this._strategyList = [];
    }
    /**
     * 添加一个策略项
     */
    add(handler, name = "") {
        this._strategyList.push(new StrategyItem(name, this.context, handler));
        return this;
    }
    /**
     * 执行策略列表
     */
    execute() {
        this._strategyList.forEach(item => {
            item.handler(item);
        });
    }
}
