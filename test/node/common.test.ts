/**
 * 这一行规定此文件要在node环境下运行，需要保持在文件的最开头，因为后面的代码都需要在node环境中运行了
 * @jest-environment node
 */


Object.assign(global, {
    localStorage: require("localStorage")
})

test("common.lib-localStorage", () => {
    const kit = require("../../dist/index.polyfill").default
    expect(kit.common.lib.getGlobalObject()).toBe(global)
    expect(kit.common.lib.getLocalStorage()).not.toBeNull()
    expect(kit.common.lib.isBowser()).toBeFalsy()
    expect(kit.common.lib.isServer()).toBeTruthy()
})
