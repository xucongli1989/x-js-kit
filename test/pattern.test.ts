import pattern from "../src/pattern/index"

test("pattern.strategy", () => {
    const strategy = new pattern.strategy.Strategy()
    strategy.context = {
        idx: 0
    }
    strategy.add(item => {
        const tempItem = item
        tempItem.context.idx++
    }).add(item => {
        const tempItem = item
        tempItem.context.idx++
    }, "item").add(item => {
        const tempItem = item
        tempItem.context.idx++
    }).execute()
    expect(strategy.context.idx).toBe(3)
})

test("pattern.singleton", () => {
    class App {
        constructor() {
            this.index++
        }
        index = 0
    }
    const app1 = pattern.singleton.getInstance(App)
    app1.index++
    expect(app1.index).toBe(2)

    const app2 = pattern.singleton.getInstance(App)
    app2.index++
    const app3 = pattern.singleton.getInstance(App)
    app3.index++
    const app4 = pattern.singleton.getInstance(App)
    app4.index++

    expect(app1.index).toBe(5)
})