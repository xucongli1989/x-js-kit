/**
 * 这一行规定此文件要在node环境下运行，需要保持在文件的最开头，因为后面的代码都需要在node环境中运行了
 * @jest-environment node
 */
import check from "../../src/check/index"
test("check.browser", () => {
    expect(() => check.browser.isIE(6, "")).toThrow(/userAgent/)
})
