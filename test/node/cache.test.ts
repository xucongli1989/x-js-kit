/**
 * 这一行规定此文件要在node环境下运行，需要保持在文件的最开头，因为后面的代码都需要在node环境中运行了
 * @jest-environment node
 */



test("cache.localStorage", () => {
    const kit = require("../../dist/index.polyfill").default
    //默认无localStorage
    let hasError = false
    try {
        kit.cache.localStorage.add("a", {
            value: 123
        })
    } catch (e) {
        hasError = true
    }
    expect(hasError).toBeTruthy()
    //引入localStorage模块
    Object.assign(global, {
        localStorage: require("localStorage")
    })
    kit.cache.localStorage.add("a", {
        value: 123
    })
    expect(kit.cache.localStorage.get("a").value).toBe(123)
    kit.cache.localStorage.remove("a")
    expect(kit.cache.localStorage.get("a")).toBeNull()
})