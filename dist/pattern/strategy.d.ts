/**
 * 策略项
 */
export declare class StrategyItem {
    constructor(name: string, context: any, handler: (item: StrategyItem) => void);
    name: string;
    context: any;
    handler: (item: StrategyItem) => void;
}
/**
 * 策略管理类，用于一次性执行多次策略方法。
 * 使用方法：const strategy = new Strategy()
 * strategy.add(item => {...}).add(item => {...}).add(item => {...}).execute()
 */
export declare class Strategy {
    /**
     * 策略列表
     */
    private _strategyList;
    /**
     * 上下文，用于多个策略之间的数据共享
     */
    context: any;
    /**
     * 添加一个策略项
     */
    add(handler: (item: StrategyItem) => void, name?: string): this;
    /**
     * 执行策略列表
     */
    execute(): void;
}
//# sourceMappingURL=strategy.d.ts.map