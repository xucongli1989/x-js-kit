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

test("common.convert", () => {
    const num = "123.123", str = "abc", numAndStr = "abc123abc"
    expect(common.convert.toInt("")).toBe(0)
    expect(common.convert.toInt(num)).toBe(123)
    expect(common.convert.toInt(str)).toBe(0)
    expect(common.convert.toInt(numAndStr)).toBe(0)
    expect(common.convert.toIntDefault(num, 100)).toBe(123)
    expect(common.convert.toIntDefault(str, 100)).toBe(100)
    expect(common.convert.toIntDefault(numAndStr, 100)).toBe(100)
    expect(common.convert.toIntNull(num)).toBe(123)
    expect(common.convert.toIntNull(str)).toBeNull()
    expect(common.convert.toIntNull(numAndStr)).toBeNull()
    expect(common.convert.toFloat("")).toBe(0)
    expect(common.convert.toFloat(num)).toBe(123.123)
    expect(common.convert.toFloat(str)).toBe(0)
    expect(common.convert.toFloat(numAndStr)).toBe(0)
    expect(common.convert.toFloatDefault(num, 100)).toBe(123.123)
    expect(common.convert.toFloatDefault(str, 100)).toBe(100)
    expect(common.convert.toFloatDefault(numAndStr, 100)).toBe(100)
    expect(common.convert.toFloatNull(num)).toBe(123.123)
    expect(common.convert.toFloatNull(str)).toBeNull()
    expect(common.convert.toFloatNull(numAndStr)).toBeNull()
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

    const obj1 = {
        name: "1",
        age: 20
    }
    expect(common.lib.deepClone(null)).toBeNull()
    expect(common.lib.deepClone(obj1)).not.toBe(obj1)
    expect(common.lib.deepClone(obj1)).toEqual(obj1)

    expect(common.lib.tryRun(null as any)).toBeNull()
    expect(common.lib.tryRun((a, b, c) => { return a + b + c }, 1, 2, 3)).toBe(6)
    expect(common.lib.tryRun(() => {
        const obj = {} as any
        console.log(obj.a.b)
    })).toBeNull()
    expect(common.lib.tryRun(() => { throw new Error("error!") })).toBeNull()
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

    expect(common.string.lTrimString("", "")).toBe("")
    expect(common.string.lTrimString("abcdaa", "a")).toBe("bcdaa")
    expect(common.string.lTrimString("aaaaaa", "a")).toBe("")
    expect(common.string.lTrimString(" aaaa ", " ")).toBe("aaaa ")
    expect(common.string.lTrimString("abcxxxabc", "abc")).toBe("xxxabc")
    expect(common.string.lTrimString("abxab", "AB")).toBe("abxab")
    expect(common.string.lTrimString("abxab", "Ab", true)).toBe("xab")

    expect(common.string.rTrimString("", "")).toBe("")
    expect(common.string.rTrimString("abcdaa", "a")).toBe("abcd")
    expect(common.string.rTrimString("aaaaaa", "a")).toBe("")
    expect(common.string.rTrimString(" aaaa ", " ")).toBe(" aaaa")
    expect(common.string.rTrimString("abcxxxabc", "abc")).toBe("abcxxx")
    expect(common.string.rTrimString("abxab", "AB")).toBe("abxab")
    expect(common.string.rTrimString("abxab", "Ab", true)).toBe("abx")

    expect(common.string.trimString("", "")).toBe("")
    expect(common.string.trimString("abcdaa", "a")).toBe("bcd")
    expect(common.string.trimString("aaaaaa", "a")).toBe("")
    expect(common.string.trimString(" aaaa ", " ")).toBe("aaaa")
    expect(common.string.trimString("abcxxxabc", "abc")).toBe("xxx")
    expect(common.string.trimString("abxab", "AB")).toBe("abxab")
    expect(common.string.trimString("abxab", "Ab", true)).toBe("x")

    expect(common.string.trimHTML("")).toBe("")
    expect(common.string.trimHTML("  abc  ")).toBe("abc")
    expect(common.string.trimHTML(" <br/> abc  ")).toBe("abc")
    expect(common.string.trimHTML("<div>abc</div>")).toBe("<div>abc</div>")
    expect(common.string.trimHTML("   nbsp;<div>abc</div>   ")).toBe("<div>abc</div>")
    expect(common.string.trimHTML("<br>   nbsp;<div>abc</div>  <br> ")).toBe("<div>abc</div>")
    expect(common.string.trimHTML("  x <div>abc</div>  <br>  x  ")).toBe("x <div>abc</div>  <br>  x")

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

test("common.url", () => {
    const url = "http://www.abc.com"
    expect(common.url.appendQueryString(null as any, null as any)).toBe("")
    expect(common.url.appendQueryString(url, null as any)).toBe(url)
    expect(common.url.appendQueryString(url, "a=1&b=2")).toBe(url + "?a=1&b=2")
    expect(common.url.appendQueryString(url + "?x=100", "a=1&b=2")).toBe(url + "?x=100&a=1&b=2")

    const search = "http://www.abc.com?a=1,2,3&b=test"
    expect(common.url.getUrlParameter(search, "a")).toBe("1,2,3")
    expect(common.url.getUrlParameter(search, "b")).toBe("test")
})
