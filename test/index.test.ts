import JsKit from "../dist/index"

test("index-引用测试", () => {
    const obj = JsKit.cache.localStorage.getGlobalCache()
    expect(obj).toBeDefined()
})