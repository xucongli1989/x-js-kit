import device from "../src/device/index"

test("device.browser", () => {
    expect(device.browser.size()).toEqual({ height: 768, width: 1024 })
    expect(device.browser.getWidthType()).toBe(device.browser.BrowserWidthTypeEnum.Large)
})