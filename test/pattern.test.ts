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

    let app2 = pattern.singleton.getInstance(App)
    app2.index++
    let app3 = pattern.singleton.getInstance(App)
    app3.index++
    let app4 = pattern.singleton.getInstance(App)
    app4.index++

    expect(app1.index).toBe(5)
})