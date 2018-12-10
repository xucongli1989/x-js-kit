/**
 * 这一行规定此文件要在node环境下运行，需要保持在文件的最开头，因为后面的代码都需要在node环境中运行了
 * @jest-environment node
 */
import common from "../../src/common/index"

const localStorage = require("localStorage")
Object.assign(global, {
    localStorage
})

test("common.lib", () => {
    expect(common.lib.getLocalStorage()).toBeDefined()
    expect(common.lib.isBowser()).toBeFalsy()
    expect(common.lib.isServer()).toBeTruthy()
})