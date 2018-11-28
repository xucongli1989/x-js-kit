import common from "../src/common/index"

test("common-stringHelper", () => {
    const str = "1234567890"
    expect(common.stringHelper.splitString("", 0)).toEqual([])
    expect(common.stringHelper.splitString("", -1)).toEqual([])
    expect(common.stringHelper.splitString(str, 0)).toEqual([str])
    expect(common.stringHelper.splitString(str, -1)).toEqual([str])
    expect(common.stringHelper.splitString(str, 10)).toEqual([str])
    expect(common.stringHelper.splitString(str, 11)).toEqual([str])
    expect(common.stringHelper.splitString(str, 1)).toEqual(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"])
    expect(common.stringHelper.splitString(str, 9)).toEqual(["123456789", "0"])
    expect(common.stringHelper.splitString(str, 3)).toEqual(["123", "456", "789", "0"])
})