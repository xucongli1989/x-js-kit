import common from "../src/common/index"

test("common.stringHelper", () => {
    const str = "1234567890"
    expect(common.stringHelper.splitString("", 0)).toEqual([])
    expect(common.stringHelper.splitString("", -1)).toEqual([])
    expect(common.stringHelper.splitString(str, 0)).toEqual([])
    expect(common.stringHelper.splitString(str, -1)).toEqual([])
    expect(common.stringHelper.splitString(str, 10)).toEqual([str])
    expect(common.stringHelper.splitString(str, 11)).toEqual([str])
    expect(common.stringHelper.splitString(str, 1)).toEqual(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"])
    expect(common.stringHelper.splitString(str, 9)).toEqual(["123456789", "0"])
    expect(common.stringHelper.splitString(str, 3)).toEqual(["123", "456", "789", "0"])

    expect(common.stringHelper.ellipsis(null as any, 1)).toBe("")
    expect(common.stringHelper.ellipsis(str, 0)).toBe("")
    expect(common.stringHelper.ellipsis(str, 5)).toBe("12345...")
    expect(common.stringHelper.ellipsis(str, 9)).toBe("123456789...")
    expect(common.stringHelper.ellipsis(str, 10)).toBe(str)
    expect(common.stringHelper.ellipsis(str, 11)).toBe(str)
    expect(common.stringHelper.ellipsis(str, 6, "###")).toBe("123456###")

    expect(common.stringHelper.getNumber(null as any)).toBeNull()
    expect(common.stringHelper.getNumber("")).toBeNull()
    expect(common.stringHelper.getNumber("abc")).toBeNull()
    expect(common.stringHelper.getNumber("123abc")).toBe(123)
    expect(common.stringHelper.getNumber("123.00abc")).toBe(123.00)
    expect(common.stringHelper.getNumber("aaa123.456abc")).toBe(123.456)
})

test("common.arrayHelper", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    expect(common.arrayHelper.splitArray(arr, 0)).toEqual([])
    expect(common.arrayHelper.splitArray(arr, -1)).toEqual([])
    expect(common.arrayHelper.splitArray([], 0)).toEqual([])
    expect(common.arrayHelper.splitArray([], -1)).toEqual([])
    expect(common.arrayHelper.splitArray(arr, 1)).toEqual([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12]])
    expect(common.arrayHelper.splitArray(arr, 6)).toEqual([[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]])
    expect(common.arrayHelper.splitArray(arr, 10)).toEqual([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12]])
    expect(common.arrayHelper.splitArray(arr, 12)).toEqual([arr])
    expect(common.arrayHelper.splitArray(arr, 13)).toEqual([arr])
})

test("common.lib", () => {
    expect(common.lib.getGlobalObject()).toBe(window)
    expect(common.lib.getLocalStorage()).toBeDefined()
    expect(common.lib.isBowser()).toBeTruthy()
    expect(common.lib.isServer()).toBeFalsy()
})