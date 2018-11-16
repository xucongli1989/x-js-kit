import pattern from "../src/pattern/index"

test("pattern.strategy", () => {
    const strategy = new pattern.strategy.Strategy()
    strategy.context = {
        idx: 0
    }
    strategy.add("item1", item => {
        item.context.idx++
    }).add("item2", item => {
        item.context.idx++
    }).process()
    expect(strategy.context.idx).toBe(2)
})