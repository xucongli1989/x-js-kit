import common from "../src/common/index"

test("common.array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    expect(common.array.splitArray(arr, 0)).toEqual([])
    expect(common.array.splitArray(arr, -1)).toEqual([])
    expect(common.array.splitArray([], 0)).toEqual([])
    expect(common.array.splitArray([], -1)).toEqual([])
    expect(common.array.splitArray(arr, 1)).toEqual([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12]])
    expect(common.array.splitArray(arr, 6)).toEqual([[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]])
    expect(common.array.splitArray(arr, 10)).toEqual([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12]])
    expect(common.array.splitArray(arr, 12)).toEqual([arr])
    expect(common.array.splitArray(arr, 13)).toEqual([arr])

    expect(common.array.unique([])).toEqual([])
    expect(common.array.unique([1])).toEqual([1])
    expect(common.array.unique([1, 1, 1])).toEqual([1])
    expect(common.array.unique([1, 1, 2, 2, 3])).toEqual([1, 2, 3])
})

test("common.data", () => {
    expect(common.data.isArray(null)).toBeFalsy()
    expect(common.data.isArray(1)).toBeFalsy()
    expect(common.data.isArray("1")).toBeFalsy()
    expect(common.data.isArray("[]")).toBeFalsy()
    expect(common.data.isArray([])).toBeTruthy()
    expect(common.data.isArray([1])).toBeTruthy()

    expect(common.data.isBoolean("")).toBeFalsy()
    expect(common.data.isBoolean("123")).toBeFalsy()
    expect(common.data.isBoolean("true")).toBeTruthy()
    expect(common.data.isBoolean("false")).toBeTruthy()

    expect(common.data.isFunction(null)).toBeFalsy()
    expect(common.data.isFunction(() => { })).toBeTruthy()

    expect(common.data.isLower("")).toBeFalsy()
    expect(common.data.isLower("aBc")).toBeFalsy()
    expect(common.data.isLower("abc")).toBeTruthy()

    expect(common.data.isNullOrEmpty("                  ")).toBeFalsy()
    expect(common.data.isNullOrEmpty("123")).toBeFalsy()
    expect(common.data.isNullOrEmpty(null)).toBeTruthy()
    expect(common.data.isNullOrEmpty("")).toBeTruthy()

    expect(common.data.isNullOrWhiteSpace("123")).toBeFalsy()
    expect(common.data.isNullOrWhiteSpace(null)).toBeTruthy()
    expect(common.data.isNullOrWhiteSpace("")).toBeTruthy()
    expect(common.data.isNullOrWhiteSpace("            ")).toBeTruthy()

    expect(common.data.isNumber("")).toBeFalsy()
    expect(common.data.isNumber("abc")).toBeFalsy()
    expect(common.data.isNumber("123")).toBeTruthy()
    expect(common.data.isNumber(123)).toBeTruthy()

    expect(common.data.isObject(null)).toBeFalsy()
    expect(common.data.isObject(undefined)).toBeFalsy()
    expect(common.data.isObject("123")).toBeFalsy()
    expect(common.data.isObject({})).toBeTruthy()

    expect(common.data.isString(null)).toBeFalsy()
    expect(common.data.isString(undefined)).toBeFalsy()
    expect(common.data.isString(123)).toBeFalsy()
    expect(common.data.isString("123")).toBeTruthy()

    expect(common.data.isUndefined(null)).toBeFalsy()
    expect(common.data.isUndefined("")).toBeFalsy()
    expect(common.data.isUndefined("123")).toBeFalsy()
    expect(common.data.isUndefined(undefined)).toBeTruthy()

    expect(common.data.isUpper("")).toBeFalsy()
    expect(common.data.isUpper("aBc")).toBeFalsy()
    expect(common.data.isUpper("ABC")).toBeTruthy()
})

test("common.json", () => {
    const obj = {
        name: "abc",
        age: 10,
        remarkList: [1, 2, 3]
    }
    expect(common.json.hasKey(obj, "")).toBeFalsy()
    expect(common.json.hasKey(obj, "test")).toBeFalsy()
    expect(common.json.hasKey(obj, "name")).toBeTruthy()

    expect(common.json.hasValue(obj, "")).toBeFalsy()
    expect(common.json.hasValue(obj, "abcd")).toBeFalsy()
    expect(common.json.hasValue(obj, "abc")).toBeTruthy()
    expect(common.json.hasValue(obj, 10)).toBeTruthy()

    expect(common.json.toParams(obj)).toBe("name=abc&age=10&remarkList=1&remarkList=2&remarkList=3")
})


test("common.lib", () => {
    expect(common.lib.getGlobalObject()).toBe(window)
    expect(common.lib.getLocalStorage()).toBeDefined()
    expect(common.lib.isBowser()).toBeTruthy()
    expect(common.lib.isServer()).toBeFalsy()
    expect(common.lib.createNamespace("")).toBeNull()
    expect(common.lib.createNamespace("A.B.C.D")).toEqual((window as any).A.B.C.D)

    const obj = {
        a: "1",
        b: {
            c: {
                d: {
                    e: "2"
                }
            }
        }
    }
    expect(common.lib.getValue(obj, "")).toBeNull()
    expect(common.lib.getValue(obj, "a")).toBe("1")
    expect(common.lib.getValue(obj, "b.c.d")).toEqual({ e: "2" })
    expect(common.lib.getValue(obj, "b.c.d.e")).toBe("2")
    expect(common.lib.getValue(obj, "b.c.d.e.f")).toBeNull()
    expect(common.lib.getValue(obj, "b.c.d.e.f.g.h")).toBeNull()
})

test("common.string", () => {
    const str = "1234567890"
    expect(common.string.splitString("", 0)).toEqual([])
    expect(common.string.splitString("", -1)).toEqual([])
    expect(common.string.splitString(str, 0)).toEqual([])
    expect(common.string.splitString(str, -1)).toEqual([])
    expect(common.string.splitString(str, 10)).toEqual([str])
    expect(common.string.splitString(str, 11)).toEqual([str])
    expect(common.string.splitString(str, 1)).toEqual(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"])
    expect(common.string.splitString(str, 9)).toEqual(["123456789", "0"])
    expect(common.string.splitString(str, 3)).toEqual(["123", "456", "789", "0"])

    expect(common.string.ellipsis(null as any, 1)).toBe("")
    expect(common.string.ellipsis(str, 0)).toBe("")
    expect(common.string.ellipsis(str, 5)).toBe("12345...")
    expect(common.string.ellipsis(str, 9)).toBe("123456789...")
    expect(common.string.ellipsis(str, 10)).toBe(str)
    expect(common.string.ellipsis(str, 11)).toBe(str)
    expect(common.string.ellipsis(str, 6, "###")).toBe("123456###")

    expect(common.string.getNumber(null as any)).toBeNull()
    expect(common.string.getNumber("")).toBeNull()
    expect(common.string.getNumber("abc")).toBeNull()
    expect(common.string.getNumber("123abc")).toBe(123)
    expect(common.string.getNumber("123.00abc")).toBe(123.00)
    expect(common.string.getNumber("aaa123.456abc")).toBe(123.456)

    expect(common.string.trim("")).toBe("")
    expect(common.string.trim("   ")).toBe("")
    expect(common.string.trim("         abc ")).toBe("abc")

    expect(common.string.lTrim("")).toBe("")
    expect(common.string.lTrim("   a")).toBe("a")
    expect(common.string.lTrim("   a ")).toBe("a ")

    expect(common.string.rTrim("")).toBe("")
    expect(common.string.rTrim("a    ")).toBe("a")
    expect(common.string.rTrim(" a       ")).toBe(" a")

    expect(common.string.contains("", "")).toBeFalsy()
    expect(common.string.contains("a", "")).toBeTruthy()
    expect(common.string.contains("abcDefGh", "de", true)).toBeTruthy()
    expect(common.string.contains("abcDefGh", "de")).toBeFalsy()
    expect(common.string.contains("abcDefGh", "de", false)).toBeFalsy()

    expect(common.string.escapeHtml("")).toBe("")
    expect(common.string.escapeHtml("<html>")).toBe("&lt;html&gt;")

    expect(common.string.repeat("", 100)).toBe("")
    expect(common.string.repeat("abc", 3)).toBe("abcabcabc")
    expect(common.string.repeat("abc", 5)).toBe("abcabcabcabcabc")
})


