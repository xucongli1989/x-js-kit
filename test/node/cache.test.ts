/**
 * 这一行规定此文件要在node环境下运行，需要保持在文件的最开头，因为后面的代码都需要在node环境中运行了
 * @jest-environment node
 */

Object.assign(global, {
    localStorage: require("localStorage")
})

test("cache.localStorage", () => {
    const kit = require("../../dist/index.polyfill").default
    kit.cache.localStorage.add("a", {
        value: 123
    })
    expect(kit.cache.localStorage.get("a").value).toBe(123)
    kit.cache.localStorage.remove("a")
    expect(kit.cache.localStorage.get("a")).toBeNull()
})