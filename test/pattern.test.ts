import pattern from "../src/pattern/index"

test("pattern.strategy", () => {
    const strategy = new pattern.strategy.Strategy()
    strategy.context = {
        idx: 0
    }
    strategy.add(item => {
        item.context.idx++
    }).add(item => {
        item.context.idx++
    }, "item").add(item => {
        item.context.idx++
    }).execute()
    expect(strategy.context.idx).toBe(3)
})