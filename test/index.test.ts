import JsKit from "../dist/index"
import JsKitLib from "../lib/index"
import stopWatch from "../lib/timer/stopWatch"

test("index-引用测试", () => {
    const obj = JsKit.cache.localStorage.getGlobalCache()
    expect(obj).toBeDefined()
})

test("index-引用测试(lib目录)", () => {
    const obj = JsKitLib.cache.localStorage.getGlobalCache()
    expect(obj).toBeDefined()
})

test("引用部分模块测试", async () => {
    const sw = new stopWatch()
    sw.start()
    await new Promise(res => {
        setTimeout(res, 10)
    })
    expect(sw.stop().value).toBeGreaterThan(0)
})