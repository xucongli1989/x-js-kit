/**
 * 策略项
 */
export declare class StrategyItem {
    name: string;
    context: any;
    handler(item: StrategyItem): void;
}
/**
 * 策略管理类
 */
export declare class Strategy {
    private _strategyList;
    context: any;
    add(name: string, handler: (item: StrategyItem) => void): this;
    process(): void;
}
//# sourceMappingURL=strategy.d.ts.map