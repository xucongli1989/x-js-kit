import common from "../src/common/index"
import { RegExpEngineEnum } from "../src/common/regexp"
import { PagerInfoType } from "../src/entity/pager-info"

test("common.array", () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    expect(common.array.splitArray(arr, 0)).toEqual([])
    expect(common.array.splitArray(arr, -1)).toEqual([])
    expect(common.array.splitArray([], 0)).toEqual([])
    expect(common.array.splitArray([], -1)).toEqual([])
    expect(common.array.splitArray(arr, 1)).toEqual([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12]])
    expect(common.array.splitArray(arr, 6)).toEqual([
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12]
    ])
    expect(common.array.splitArray(arr, 10)).toEqual([
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [11, 12]
    ])
    expect(common.array.splitArray(arr, 12)).toEqual([arr])
    expect(common.array.splitArray(arr, 13)).toEqual([arr])

    expect(common.array.unique([])).toEqual([])
    expect(common.array.unique([1])).toEqual([1])
    expect(common.array.unique([1, 1, 1])).toEqual([1])
    expect(common.array.unique([1, 1, 2, 2, 3])).toEqual([1, 2, 3])

    expect(common.array.union([], [])).toEqual([])
    expect(common.array.union([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3, 1, 2, 3])

    expect(common.array.intersect([1, 2, 3, 3, 4], [])).toEqual([])
    expect(common.array.intersect([1, 2, 3, 3, 4], [9])).toEqual([])
    expect(common.array.intersect([1, 2, 3, 3, 4], [2])).toEqual([2])
    expect(common.array.intersect([1, 2, 3, 3, 4], [3])).toEqual([3])

    expect(common.array.diff([], [])).toEqual([])
    expect(common.array.diff([1, 2, 3], [])).toEqual([1, 2, 3])
    expect(common.array.diff([], [1, 2, 3])).toEqual([1, 2, 3])
    expect(common.array.diff([1, 2, 3], [1, 2, 3, 4, 5])).toEqual([4, 5])
    expect(common.array.diff([1, 2, 3, 4, 5], [1, 2, 3])).toEqual([4, 5])
    expect(common.array.diff([1, 2, 3, 4, 5], [1, 2, 3, 9, 9, 9])).toEqual([4, 5, 9])

    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    expect(arr.map((k) => (k % 2 == 0 ? k : null))).toEqual([null, 2, null, 4, null, 6, null, 8, null])
    expect(common.array.map<number>([], (k) => k)).toEqual([])
    expect(common.array.map<number>(arr, (k, i) => i)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8])
    expect(
        common.array.map<number>(arr, (k) => (k % 2 == 0 ? k : null))
    ).toEqual([2, 4, 6, 8])
    expect(
        common.array.map<number>(arr, (k) => (k % 2 == 0 ? k : undefined))
    ).toEqual([2, 4, 6, 8])
    expect(common.array.map<number>(arr, (k) => k + 10)).toEqual([11, 12, 13, 14, 15, 16, 17, 18, 19])

    expect(common.array.createNumberArray(0, 5)).toEqual([0, 1, 2, 3, 4, 5])
    expect(common.array.createNumberArray(-5, -3)).toEqual([-5, -4, -3])
    expect(common.array.createNumberArray(0, 10, 2)).toEqual([0, 2, 4, 6, 8, 10])
    expect(common.array.createNumberArray(0, 10, 3)).toEqual([0, 3, 6, 9])
    expect(common.array.createNumberArray(0, 0)).toEqual([0])

    expect(common.array.isNullOrEmpty(null as any)).toBeTruthy()
    expect(common.array.isNullOrEmpty([])).toBeTruthy()
    expect(common.array.isNullOrEmpty([1])).toBeFalsy()

    expect(common.array.isAnyNullOrEmpty(null as any, null as any, null as any)).toBeTruthy()
    expect(common.array.isAnyNullOrEmpty(null as any, null as any, [])).toBeTruthy()
    expect(common.array.isAnyNullOrEmpty([], [], [])).toBeTruthy()
    expect(common.array.isAnyNullOrEmpty([1], [2], [])).toBeTruthy()
    expect(common.array.isAnyNullOrEmpty([1], [2], [3])).toBeFalsy()


    expect(common.array.isAllNullOrEmpty(null as any, null as any, null as any)).toBeTruthy()
    expect(common.array.isAllNullOrEmpty(null as any, null as any, [])).toBeTruthy()
    expect(common.array.isAllNullOrEmpty([], [], [])).toBeTruthy()
    expect(common.array.isAllNullOrEmpty([1], [2], [])).toBeFalsy()
    expect(common.array.isAllNullOrEmpty([1], [2], [3])).toBeFalsy()

    expect(common.array.isNotNullOrEmpty(null as any)).toBeFalsy()
    expect(common.array.isNotNullOrEmpty([])).toBeFalsy()
    expect(common.array.isNotNullOrEmpty([1])).toBeTruthy()

    expect(common.array.isAnyNotNullOrEmpty(null as any, null as any, null as any)).toBeFalsy()
    expect(common.array.isAnyNotNullOrEmpty(null as any, null as any, [])).toBeFalsy()
    expect(common.array.isAnyNotNullOrEmpty([], [], [])).toBeFalsy()
    expect(common.array.isAnyNotNullOrEmpty([1], [2], [])).toBeTruthy()
    expect(common.array.isAnyNotNullOrEmpty([1], [2], [3])).toBeTruthy()


    expect(common.array.isAllNotNullOrEmpty(null as any, null as any, null as any)).toBeFalsy()
    expect(common.array.isAllNotNullOrEmpty(null as any, null as any, [])).toBeFalsy()
    expect(common.array.isAllNotNullOrEmpty([], [], [])).toBeFalsy()
    expect(common.array.isAllNotNullOrEmpty([1], [2], [])).toBeFalsy()
    expect(common.array.isAllNotNullOrEmpty([1], [2], [3])).toBeTruthy()
})

test("common.convert", () => {
    const num = "123.123",
        str = "abc",
        numAndStr = "abc123abc"
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

test("common.cookie", async () => {
    Object.defineProperty(document, "cookie", {
        writable: true,
        value: "a=1; b=2; c=3"
    })
    expect(common.cookie.getItem("a")).toBe("1")
    expect(common.cookie.getItem("z")).toBeNull()
    expect(common.cookie.hasItem("a")).toBeTruthy()
    expect(common.cookie.hasItem("z")).toBeFalsy()
    expect(common.cookie.keys()).toEqual(["a", "b", "c"])
    expect(common.cookie.removeItem("a")).toBeTruthy()
    expect(common.cookie.getItem("a")).toBeNull()
    // expect(common.cookie.setItem("new1", "1", 1000)).toBeTruthy()
    // await new Promise(res => {
    //     setTimeout(res, 1100)
    // })
    // expect(common.cookie.getItem("new1")).toBeNull()
})

test("common.data", () => {
    expect(common.data.isNull("")).toBeFalsy()
    expect(common.data.isNull(null)).toBeTruthy()
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
    expect(common.data.isFunction(() => null)).toBeTruthy()

    expect(common.data.isLower("")).toBeFalsy()
    expect(common.data.isLower("aBc")).toBeFalsy()
    expect(common.data.isLower("abc")).toBeTruthy()

    expect(common.data.isNullOrEmpty("                  ")).toBeFalsy()
    expect(common.data.isNullOrEmpty("123")).toBeFalsy()
    expect(common.data.isNullOrEmpty(null)).toBeTruthy()
    expect(common.data.isNullOrEmpty("")).toBeTruthy()
    expect(common.data.isNullOrEmpty(undefined)).toBeTruthy()

    expect(common.data.isNullOrWhiteSpace("123")).toBeFalsy()
    expect(common.data.isNullOrWhiteSpace(null)).toBeTruthy()
    expect(common.data.isNullOrWhiteSpace("")).toBeTruthy()
    expect(common.data.isNullOrWhiteSpace(undefined)).toBeTruthy()
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

    expect(common.data.isNullOrUndefined(null)).toBeTruthy()
    expect(common.data.isNullOrUndefined(undefined)).toBeTruthy()
    expect(common.data.isNullOrUndefined(0)).toBeFalsy()
    expect(common.data.isNullOrUndefined("")).toBeFalsy()
    expect(common.data.isNullOrUndefined("123")).toBeFalsy()

    expect(common.data.isUpper("")).toBeFalsy()
    expect(common.data.isUpper("aBc")).toBeFalsy()
    expect(common.data.isUpper("ABC")).toBeTruthy()

    expect(common.data.isDate("")).toBeFalsy()
    expect(common.data.isDate(123)).toBeFalsy()
    expect(common.data.isDate(new Date("abc"))).toBeFalsy()
    expect(common.data.isDate(new Date())).toBeTruthy()

    expect(common.data.isError(new Error("test"))).toBeTruthy()

    expect(common.data.isIn(1)).toBeFalsy()
    expect(common.data.isIn(1, 1, 2, 3)).toBeTruthy()
    expect(common.data.isIn(1, 2, 3, 4)).toBeFalsy()
    expect(common.data.isIn(null, undefined, "")).toBeFalsy()
    expect(common.data.isIn(null, null, 1, 2, 3)).toBeTruthy()
    expect(common.data.isIn(undefined, undefined, 1, 2, 3)).toBeTruthy()
    expect(common.data.isIn(undefined)).toBeFalsy()
    expect(common.data.isIn("")).toBeFalsy()
    expect(common.data.isIn("", "")).toBeTruthy()
    expect(common.data.isIn("a", "A", "b")).toBeFalsy()
    expect(common.data.isIn("a", "a", "b")).toBeTruthy()
    expect(common.data.isInIgnoreCase("a")).toBeFalsy()
    expect(common.data.isInIgnoreCase("aaa", "AAA", "b")).toBeTruthy()
})

test("common.enumTool", () => {
    enum Test1 {
        a,
        b,
        c
    }
    expect(common.enumTool.convertEnumToList(Test1)).toEqual([
        { key: "a", value: 0 },
        { key: "b", value: 1 },
        { key: "c", value: 2 }
    ])

    enum Test2 {
        a = "aaa",
        b = "bbb",
        c = "ccc"
    }
    expect(common.enumTool.convertEnumToList(Test2)).toEqual([
        { key: "a", value: "aaa" },
        { key: "b", value: "bbb" },
        { key: "c", value: "ccc" }
    ])

    enum Test3 {
        a = "aaa",
        b = 7,
        c = 8
    }
    expect(common.enumTool.convertEnumToList(Test3)).toEqual([
        { key: "a", value: "aaa" },
        { key: "b", value: 7 },
        { key: "c", value: 8 }
    ])


    enum Test4 {
        a,
        b,
        c
    }
    expect(common.enumTool.toEnum(Test4, "")).toEqual(Test4.a)
    expect(common.enumTool.toEnum(Test4, "a")).toEqual(Test4.a)
    expect(common.enumTool.toEnum(Test4, "b")).toEqual(Test4.a)
    expect(common.enumTool.toEnum(Test4, "b", Test4.c)).toEqual(Test4.c)
    expect(common.enumTool.toEnum(Test4, "0")).toEqual(Test4.a)
    expect(common.enumTool.toEnum(Test4, "1")).toEqual(Test4.b)
    expect(common.enumTool.toEnum(Test4, "2")).toEqual(Test4.c)
    expect(common.enumTool.toEnum(Test4, "3")).toEqual(Test4.a)
    expect(common.enumTool.toEnum(Test4, "3", Test4.c)).toEqual(Test4.c)
    expect(common.enumTool.isValueInEnum(Test4, 0)).toBeTruthy()
    expect(common.enumTool.isValueInEnum(Test4, 1)).toBeTruthy()
    expect(common.enumTool.isValueInEnum(Test4, 2)).toBeTruthy()
    expect(common.enumTool.isValueInEnum(Test4, 3)).toBeFalsy()
    expect(common.enumTool.isValueInEnum(Test4, "a")).toBeFalsy()
    expect(common.enumTool.isValueInEnum(Test4, "b")).toBeFalsy()
    expect(common.enumTool.isValueInEnum(Test4, "c")).toBeFalsy()
    expect(common.enumTool.isValueInEnum(Test4, "d")).toBeFalsy()

    enum Test5 {
        a = "aaa",
        b = "bbb",
        c = "ccc"
    }
    expect(common.enumTool.toEnum(Test5, "")).toEqual(Test5.a)
    expect(common.enumTool.toEnum(Test5, "a")).toEqual(Test5.a)
    expect(common.enumTool.toEnum(Test5, "b")).toEqual(Test5.a)
    expect(common.enumTool.toEnum(Test5, "b", Test5.c)).toEqual(Test5.c)
    expect(common.enumTool.toEnum(Test5, "aaa")).toEqual(Test5.a)
    expect(common.enumTool.toEnum(Test5, "bbb")).toEqual(Test5.b)
    expect(common.enumTool.toEnum(Test5, "ccc")).toEqual(Test5.c)
    expect(common.enumTool.toEnum(Test5, "ddd")).toEqual(Test5.a)
    expect(common.enumTool.toEnum(Test5, "ddd", Test5.c)).toEqual(Test5.c)
    expect(common.enumTool.isValueInEnum(Test5, "aaa")).toBeTruthy()
    expect(common.enumTool.isValueInEnum(Test5, "bbb")).toBeTruthy()
    expect(common.enumTool.isValueInEnum(Test5, "ccc")).toBeTruthy()
    expect(common.enumTool.isValueInEnum(Test5, "ddd")).toBeFalsy()
    expect(common.enumTool.isValueInEnum(Test5, "a")).toBeFalsy()
    expect(common.enumTool.isValueInEnum(Test5, "b")).toBeFalsy()
    expect(common.enumTool.isValueInEnum(Test5, "c")).toBeFalsy()
    expect(common.enumTool.isValueInEnum(Test5, "d")).toBeFalsy()
    expect(common.enumTool.isValueInEnum(Test5, 0)).toBeFalsy()
    expect(common.enumTool.isValueInEnum(Test5, 1)).toBeFalsy()
    expect(common.enumTool.isValueInEnum(Test5, 2)).toBeFalsy()
    expect(common.enumTool.isValueInEnum(Test5, 3)).toBeFalsy()
})

test("common.idCard", () => {
    const cnIdCard15 = "320000881213110"
    const cnIdCard18 = "301111198812134588"
    expect(common.idCard.toCNIDCardEntity("")).toBeNull()
    expect(common.idCard.toCNIDCardEntity("123456")).toBeNull()
    let model = common.idCard.toCNIDCardEntity(cnIdCard15)
    expect(model).not.toBeNull()
    expect(model!.birthday).toBe("1988-12-13")
    expect(model!.len).toBe(15)
    model = common.idCard.toCNIDCardEntity(cnIdCard18)
    expect(model!.birthday).toBe("1988-12-13")
    expect(model!.len).toBe(18)
})

test("common.image", () => {
    expect(common.image.replaceImgSrc("")).toBe("")
    expect(common.image.replaceImgSrc("<div><img src='a.jpg'/><img src='b.jpg'/></div>")).toBe("<div><img data-src='a.jpg'/><img data-src='b.jpg'/></div>")
    expect(common.image.replaceImgSrc("<div><img src='a.jpg'/><img src='b.jpg'/></div>", "test")).toBe("<div><img test='a.jpg'/><img test='b.jpg'/></div>")
    expect(common.image.replaceImgSrc("<div><img src='a.jpg'/><img src='b.jpg'/></div>", "newAttr='abc' test")).toBe("<div><img newAttr='abc' test='a.jpg'/><img newAttr='abc' test='b.jpg'/></div>")
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
    expect(common.json.toParams({ name: "  ", age: "", remark: 0, type: undefined, class: null, local: "cn" })).toBe("remark=0&local=cn")

    expect(common.json.toObject("")).toBeNull()
    expect(common.json.toObject("a")).toBeNull()
    let jsonObject = common.json.toObject('{"a":123,"b":456}') as any
    expect(jsonObject.a).toBe(123)
    expect(jsonObject.b).toBe(456)
    jsonObject = common.json.toObject('\n\n    {"a":123,"b":456}\n\n        \n') as any
    expect(jsonObject.a).toBe(123)
    expect(jsonObject.b).toBe(456)
    const arrayObject = common.json.toObject('\n\n    [1,2,3]\n\n        \n') as any
    expect(arrayObject).toEqual([1, 2, 3])
})

test("common.lib", () => {
    expect(common.lib.getGlobalObject()).toBe(window)
    expect(common.lib.getLocalStorage()).not.toBeNull()
    expect(common.lib.getSymbol()).not.toBeNull()
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
    expect(common.lib.tryRun((a, b, c) => a + b + c, 1, 2, 3)).toBe(6)
    expect(
        common.lib.tryRun(() => {
            const objTemp = {} as any
            console.log(objTemp.a.b)
        })
    ).toBeNull()
    expect(
        common.lib.tryRun(() => {
            throw new Error("error!")
        })
    ).toBeNull()

    let merge1: any
    let merge2: any
    let merge3: any
    let count = 0
    //未定义时合并
    let result = common.lib.mergeObjectAndCombineSameFunc(merge1)
    expect(result).toEqual(merge1)
    result = common.lib.mergeObjectAndCombineSameFunc(merge1, merge2, merge3)
    expect(result).toEqual({})
    merge1 = {}
    result = common.lib.mergeObjectAndCombineSameFunc(merge1, merge2, merge3)
    expect(result).toEqual({})
    //只有一个函数时的合并（普通合并）
    merge1 = {
        name: "X",
        age: 12,
        say: () => {
            console.log("test")
        }
    }
    merge2 = { school: "MIT", age: 20 }
    merge3 = { grade: 1, sub: { sub1: "test" } }
    result = common.lib.mergeObjectAndCombineSameFunc(merge1, merge2, merge3)
    expect(result).toEqual(Object.assign(merge1, merge2, merge3))
    //有两个不同名时的函数合并
    merge1 = {
        name: "X",
        age: 12,
        say: () => {
            console.log("test")
        }
    }
    merge2 = {
        school: "MIT",
        age: 20,
        walk: () => {
            console.log("test")
        }
    }
    merge3 = { grade: 1 }
    result = common.lib.mergeObjectAndCombineSameFunc(merge1, merge2, merge3)
    expect(result).toEqual(Object.assign(merge1, merge2, merge3))
    //有两个同名函数时的合并
    merge1 = {
        name: "X",
        age: 12,
        say: () => {
            console.log("test")
        },
        same: () => {
            count += 1
        }
    }
    merge2 = {
        school: "MIT",
        age: 20,
        walk: () => {
            console.log("test")
        },
        same: () => {
            count += 2
        }
    }
    merge3 = { grade: 1, same: 1 }
    const merge4 = { grade: 1, same: null }
    const merge5 = { grade: 1, same: "same" }
    const merge6 = {
        grade: 1,
        same: () => {
            count += 3
        }
    }
    result = common.lib.mergeObjectAndCombineSameFunc(merge1, merge2, merge3, merge4, merge5, merge6)
    result.same()
    expect(count).toBe(6)
})

test("common.random", () => {
    expect(common.random.create() == common.random.create()).toBeFalsy()
    expect(common.random.create().length).toBe(22)
    expect(common.random.uuid() == common.random.uuid()).toBeFalsy()
    expect(common.random.uuid().length).toBe(36)
    for (let i = 0; i < 100; i++) {
        const num = common.random.range(5, 10)
        expect(num >= 5 && num <= 10).toBeTruthy()
    }
    expect(common.random.id()).toBe(1)
    expect(common.random.id()).toBe(2)
    expect(common.random.id()).toBe(3)
})

test("common.regexp", () => {
    expect(common.regexp.escapeReg("")).toBe("")
    expect(common.regexp.escapeReg("?")).toBe("\\?")
    expect(common.regexp.escapeReg("^")).toBe("\\^")
    expect(common.regexp.escapeReg("$")).toBe("\\$")
    expect(common.regexp.escapeReg("*")).toBe("\\*")

    expect(common.regexp.escapeReg("", RegExpEngineEnum.DOTNET)).toBe("")
    expect(common.regexp.escapeReg("\\", RegExpEngineEnum.DOTNET)).toBe("\\\\")
    expect(common.regexp.escapeReg("*", RegExpEngineEnum.DOTNET)).toBe("\\*")
    expect(common.regexp.escapeReg("+", RegExpEngineEnum.DOTNET)).toBe("\\+")
    expect(common.regexp.escapeReg("?", RegExpEngineEnum.DOTNET)).toBe("\\?")
    expect(common.regexp.escapeReg("|", RegExpEngineEnum.DOTNET)).toBe("\\|")
    expect(common.regexp.escapeReg("{", RegExpEngineEnum.DOTNET)).toBe("\\{")
    expect(common.regexp.escapeReg("[", RegExpEngineEnum.DOTNET)).toBe("\\[")
    expect(common.regexp.escapeReg("(", RegExpEngineEnum.DOTNET)).toBe("\\(")
    expect(common.regexp.escapeReg(")", RegExpEngineEnum.DOTNET)).toBe("\\)")
    expect(common.regexp.escapeReg("^", RegExpEngineEnum.DOTNET)).toBe("\\^")
    expect(common.regexp.escapeReg("$", RegExpEngineEnum.DOTNET)).toBe("\\$")
    expect(common.regexp.escapeReg(".", RegExpEngineEnum.DOTNET)).toBe("\\.")
    expect(common.regexp.escapeReg("#", RegExpEngineEnum.DOTNET)).toBe("\\#")
    expect(common.regexp.escapeReg(" ", RegExpEngineEnum.DOTNET)).toBe("\\ ")
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
    expect(common.string.getNumber("123.00abc")).toBe(123.0)
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
    expect(common.string.lTrimString("?abc", "?")).toBe("abc")
    expect(common.string.lTrimString("abcdaa", "a")).toBe("bcdaa")
    expect(common.string.lTrimString("aaaaaa", "a")).toBe("")
    expect(common.string.lTrimString(" aaaa ", " ")).toBe("aaaa ")
    expect(common.string.lTrimString("abcxxxabc", "abc")).toBe("xxxabc")
    expect(common.string.lTrimString("abxab", "AB")).toBe("abxab")
    expect(common.string.lTrimString("abxab", "Ab", true)).toBe("xab")

    expect(common.string.rTrimString("", "")).toBe("")
    expect(common.string.rTrimString("abc?", "?")).toBe("abc")
    expect(common.string.rTrimString("abcdaa", "a")).toBe("abcd")
    expect(common.string.rTrimString("aaaaaa", "a")).toBe("")
    expect(common.string.rTrimString(" aaaa ", " ")).toBe(" aaaa")
    expect(common.string.rTrimString("abcxxxabc", "abc")).toBe("abcxxx")
    expect(common.string.rTrimString("abxab", "AB")).toBe("abxab")
    expect(common.string.rTrimString("abxab", "Ab", true)).toBe("abx")

    expect(common.string.trimString("", "")).toBe("")
    expect(common.string.trimString("?abc?", "?")).toBe("abc")
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

    expect(common.string.equalsIgnoreCase("", "")).toBeTruthy()
    expect(common.string.equalsIgnoreCase("a", "b")).toBeFalsy()
    expect(common.string.equalsIgnoreCase("abcD", "Abcd")).toBeTruthy()

    expect(common.string.equalsIgnoreCaseAndTrim("", "")).toBeTruthy()
    expect(common.string.equalsIgnoreCaseAndTrim(" ", "             ")).toBeTruthy()
    expect(common.string.equalsIgnoreCaseAndTrim("abc", "    abc   ")).toBeTruthy()
    expect(common.string.equalsIgnoreCaseAndTrim(" a b", "a b")).toBeTruthy()
    expect(common.string.equalsIgnoreCaseAndTrim("ab", "Ab")).toBeTruthy()
    expect(common.string.equalsIgnoreCaseAndTrim("ab", "ac")).toBeFalsy()

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

    const builder = new common.string.Builder<number>()
    expect(builder.toString()).toBe("")
    expect(builder.length()).toBe(0)
    expect(builder.append(1, 2, 3).toString()).toBe("123")
    expect(builder.clear().length() == 0 && builder.toString() == "").toBeTruthy()
    builder.append(100).append(200).append(300)
    expect(builder.toString()).toBe("100200300")
    builder.clear()
    expect(builder.length() == 0 && builder.toString() == "").toBeTruthy()

    expect(common.string.format("")).toBe("")
    expect(common.string.format(null as any)).toBeNull()
    expect(common.string.format("今天是星期一", "一", "二")).toBe("今天是星期一")
    expect(common.string.format("今天是星期{0}")).toBe("今天是星期{0}")
    expect(common.string.format("今天是星期{0}", "二")).toBe("今天是星期二")
    expect(common.string.format("今天是星期{0}", "二", "三", "四")).toBe("今天是星期二")
    expect(common.string.format("今天是星期{2}", "二", "三", "四")).toBe("今天是星期四")
    expect(common.string.format("今天是星期{0}{1}{2}{3}", "二", "三", "四")).toBe("今天是星期二三四{3}")
    expect(common.string.format("今天是星期{3}{2}{1}{0}", "二", "三", "四")).toBe("今天是星期{3}四三二")
    expect(common.string.format("今天是星期{0}，已经成交了{1}单", "二", 30)).toBe("今天是星期二，已经成交了30单")
    expect(common.string.format("今天是星期{0}，已经成交了{1}单", "二", 30, 40, 50)).toBe("今天是星期二，已经成交了30单")
    expect(common.string.format("今天是星期{0}，已经成交了{1}单，我们的目标是{2}单", "二", 30, 40)).toBe("今天是星期二，已经成交了30单，我们的目标是40单")
    expect(common.string.format("今天是星期{0}，已经成交了{1}单，我们的目标是{2}单", "二", 30, 40, 50, 60)).toBe("今天是星期二，已经成交了30单，我们的目标是40单")

    expect(common.string.removeBlankLines(null as any)).toBe("")
    expect(common.string.removeBlankLines("  \n ")).toBe(" ")
    expect(common.string.removeBlankLines("  \n \n")).toBe("")
    expect(common.string.removeBlankLines("a\n    \nb\n \n \nc")).toBe("a\nb\nc")

    expect(common.string.replaceNewlineToBr("")).toBe("")
    expect(common.string.replaceNewlineToBr("abc\\n\\ndef\\r\\ng\\r\\n")).toBe("abc<br/><br/>def<br/>g<br/>")
    expect(common.string.replaceNewlineToBr("abc\n\ndef\r\ng\r\n")).toBe("abc<br/><br/>def<br/>g<br/>")

    expect(common.string.getChineseWord("")).toBe("")
    expect(common.string.getChineseWord("hello world")).toBe("")
    expect(common.string.getChineseWord("hello 世界, how are you 你好")).toBe("世界你好")

    expect(common.string.combineStr("")).toBe("")
    expect(common.string.combineStr(",")).toBe("")
    expect(common.string.combineStr(",", "a")).toBe("a")
    expect(common.string.combineStr(",", "a", "b", "c", "d")).toBe("a,b,c,d")

    expect(common.string.isRangeText("").isSuccess).toBeFalsy()
    expect(common.string.isRangeText(" ").isSuccess).toBeFalsy()
    expect(common.string.isRangeText(",").isSuccess).toBeFalsy()
    expect(common.string.isRangeText(":").isSuccess).toBeFalsy()
    expect(common.string.isRangeText("1").isSuccess).toBeTruthy()
    expect(common.string.isRangeText("2").isSuccess).toBeTruthy()
    expect(common.string.isRangeText("2:5").isSuccess).toBeTruthy()
    expect(common.string.isRangeText("5:4").isSuccess).toBeFalsy()
    expect(common.string.isRangeText("5:-4").isSuccess).toBeTruthy()
    expect(common.string.isRangeText("-1").isSuccess).toBeTruthy()
    expect(common.string.isRangeText("-2").isSuccess).toBeTruthy()
    expect(common.string.isRangeText("-5:-2").isSuccess).toBeTruthy()
    expect(common.string.isRangeText("-5:2").isSuccess).toBeFalsy()
    expect(common.string.isRangeText("2,4:7,-5:-2").isSuccess).toBeTruthy()
    expect(common.string.isRangeText("  2  , 4  : 7 , -5  : -2  ").isSuccess).toBeTruthy()
    expect(common.string.isRangeText("1,").isSuccess).toBeTruthy()
    expect(common.string.isRangeText("1:").isSuccess).toBeFalsy()
    expect(common.string.isRangeText("1::5").isSuccess).toBeFalsy()
    expect(common.string.isRangeText("1,,2").isSuccess).toBeFalsy()
    expect(common.string.isRangeText("1，2，3：4,9").isSuccess).toBeTruthy()

    expect(common.string.removeStartLine("")).toBe("")
    expect(common.string.removeStartLine("__abc__")).toBe("abc__")

    expect(common.string.removeWhiteSpace(null as any)).toBe("")
    expect(common.string.removeWhiteSpace("   1   2   3   ")).toBe("123")
})

test("common.url", () => {
    let splitQueryInfo = common.url.splitUrlByQueryInfo("")
    expect(splitQueryInfo.hostPart).toBe("")
    expect(splitQueryInfo.queryPart).toBe("")
    expect(splitQueryInfo.hashPart).toBe("")

    splitQueryInfo = common.url.splitUrlByQueryInfo("http://www.abc.com")
    expect(splitQueryInfo.hostPart).toBe("http://www.abc.com")
    expect(splitQueryInfo.queryPart).toBe("")
    expect(splitQueryInfo.hashPart).toBe("")

    splitQueryInfo = common.url.splitUrlByQueryInfo("http://www.abc.com?#")
    expect(splitQueryInfo.hostPart).toBe("http://www.abc.com")
    expect(splitQueryInfo.queryPart).toBe("")
    expect(splitQueryInfo.hashPart).toBe("")

    splitQueryInfo = common.url.splitUrlByQueryInfo("http://www.abc.com?a=b&c=d#123")
    expect(splitQueryInfo.hostPart).toBe("http://www.abc.com")
    expect(splitQueryInfo.queryPart).toBe("a=b&c=d")
    expect(splitQueryInfo.hashPart).toBe("123")

    splitQueryInfo = common.url.splitUrlByQueryInfo("http://www.abc.com#123#aaa#bbb")
    expect(splitQueryInfo.hostPart).toBe("http://www.abc.com")
    expect(splitQueryInfo.queryPart).toBe("")
    expect(splitQueryInfo.hashPart).toBe("123#aaa#bbb")

    splitQueryInfo = common.url.splitUrlByQueryInfo("http://www.abc.com?#123#aaa#bbb?a=x")
    expect(splitQueryInfo.hostPart).toBe("http://www.abc.com")
    expect(splitQueryInfo.queryPart).toBe("")
    expect(splitQueryInfo.hashPart).toBe("123#aaa#bbb?a=x")

    splitQueryInfo = common.url.splitUrlByQueryInfo("http://localhost/user?id=123&v=3#/pay?productId=123456&result=cancel")
    expect(splitQueryInfo.hostPart).toBe("http://localhost/user")
    expect(splitQueryInfo.queryPart).toBe("id=123&v=3")
    expect(splitQueryInfo.hashPart).toBe("/pay?productId=123456&result=cancel")

    let mergedUrl = common.url.mergeUrlBySplitQueryInfo({
        hostPart: "",
        queryPart: "",
        hashPart: ""
    })
    expect(mergedUrl).toBe("")

    mergedUrl = common.url.mergeUrlBySplitQueryInfo({
        hostPart: "http://www.abc.com",
        queryPart: "",
        hashPart: ""
    })
    expect(mergedUrl).toBe("http://www.abc.com")

    mergedUrl = common.url.mergeUrlBySplitQueryInfo({
        hostPart: "http://www.abc.com",
        queryPart: "a=b&c=d",
        hashPart: "123"
    })
    expect(mergedUrl).toBe("http://www.abc.com?a=b&c=d#123")

    let keyValueArr = common.url.convertQueryStringToKeyValueArray("")
    expect(keyValueArr).toEqual([])
    keyValueArr = common.url.convertQueryStringToKeyValueArray("a=b&c=d&c=ddd")
    expect(keyValueArr).toEqual([
        { key: "a", value: "b" },
        { key: "c", value: "d" }
    ])

    let queryString = common.url.convertKeyValueArrayToQueryString([])
    expect(queryString).toBe("")
    queryString = common.url.convertKeyValueArrayToQueryString([
        {
            key: "a",
            value: "b",
            extend: undefined
        },
        {
            key: "a",
            value: "bbbb",
            extend: undefined
        },
        {
            key: "c",
            value: "d",
            extend: undefined
        }
    ])
    expect(queryString).toBe("a=b&c=d")

    const url = "http://www.abc.com"
    expect(common.url.appendQueryString(null as any, null as any)).toBe("")
    expect(common.url.appendQueryString(url, null as any)).toBe(url)
    expect(common.url.appendQueryString(url, "a=1&b=2")).toBe(url + "?a=1&b=2")
    expect(common.url.appendQueryString(url + "?x=100", "a=1&b=2")).toBe(url + "?x=100&a=1&b=2")
    expect(common.url.appendQueryString(url + "?a=100", "a=1&b=2")).toBe(url + "?a=1&b=2")
    expect(common.url.appendQueryString(url + "?a=100", "a=&b=2")).toBe(url + "?a=&b=2")
    expect(common.url.appendQueryString("http://www.abc.com#test", "a=1&b=2")).toBe("http://www.abc.com?a=1&b=2#test")
    expect(common.url.appendQueryString("http://www.abc.com?x=100#test", "a=1&b=2")).toBe("http://www.abc.com?x=100&a=1&b=2#test")

    const search = "http://www.abc.com?a=1,2,3&b=test"
    expect(common.url.getUrlParameter(search, "a")).toBe("1,2,3")
    expect(common.url.getUrlParameter(search, "b")).toBe("test")
})

test("common.dom", () => {
    //参数无效
    const func1 = () => {
        const tempResult = common.dom.appendElementToLimitContainer(null as any, null as any, 100, null as any)
        expect(tempResult).toBeDefined()
        expect(tempResult.isOverflow).toBeFalsy()
    }
    //未超出
    const func2 = () => {
        const divContainer = document.createElement("div")
        const ellipsisElement = document.createElement("p")
        ellipsisElement.innerHTML = "..."
        for (let i = 0; i < 5; i++) {
            const subElement = document.createElement("p")
            subElement.innerHTML = (i + 1).toString()
            const result = common.dom.appendElementToLimitContainer(divContainer, subElement, 5, ellipsisElement)
            expect(result.isOverflow).toBeFalsy()
        }
        expect(divContainer.innerHTML).toEqual("<p>1</p><p>2</p><p>3</p><p>4</p><p>5</p>")
    }
    //未超出
    const func3 = () => {
        const divContainer = document.createElement("div")
        const ellipsisElement = document.createElement("p")
        ellipsisElement.innerHTML = "..."
        for (let i = 0; i < 5; i++) {
            const subElement = document.createElement("p")
            subElement.innerHTML = (i + 1).toString()
            const result = common.dom.appendElementToLimitContainer(divContainer, subElement, 6, ellipsisElement)
            expect(result.isOverflow).toBeFalsy()
        }
        expect(divContainer.innerHTML).toEqual("<p>1</p><p>2</p><p>3</p><p>4</p><p>5</p>")
    }
    //超出
    const func4 = () => {
        const divContainer = document.createElement("div")
        const ellipsisElement = document.createElement("p")
        ellipsisElement.innerHTML = "..."
        for (let i = 0; i < 10; i++) {
            const subElement = document.createElement("p")
            subElement.innerHTML = (i + 1).toString()
            const result = common.dom.appendElementToLimitContainer(divContainer, subElement, 5, ellipsisElement)
            if (i <= 4) {
                expect(result.isOverflow).toBeFalsy()
            } else {
                expect(result.isOverflow).toBeTruthy()
            }
        }
        expect(divContainer.innerHTML).toEqual("<p>1</p><p>2</p><p>3</p><p>...</p><p>9</p><p>10</p>")
    }
    //追加到容器开头-未超出
    const func5 = () => {
        const divContainer = document.createElement("div")
        const ellipsisElement = document.createElement("p")
        ellipsisElement.innerHTML = "..."
        for (let i = 0; i < 5; i++) {
            const subElement = document.createElement("p")
            subElement.innerHTML = (i + 1).toString()
            const result = common.dom.appendElementToLimitContainer(divContainer, subElement, 6, ellipsisElement, true)
            expect(result.isOverflow).toBeFalsy()
        }
        expect(divContainer.innerHTML).toEqual("<p>5</p><p>4</p><p>3</p><p>2</p><p>1</p>")
    }
    //追加到容器开头-超出
    const func6 = () => {
        const divContainer = document.createElement("div")
        const ellipsisElement = document.createElement("p")
        ellipsisElement.innerHTML = "..."
        for (let i = 0; i < 10; i++) {
            const subElement = document.createElement("p")
            subElement.innerHTML = (i + 1).toString()
            const result = common.dom.appendElementToLimitContainer(divContainer, subElement, 5, ellipsisElement, true)
            if (i <= 4) {
                expect(result.isOverflow).toBeFalsy()
            } else {
                expect(result.isOverflow).toBeTruthy()
            }
        }
        expect(divContainer.innerHTML).toEqual("<p>10</p><p>9</p><p>8</p><p>...</p><p>2</p><p>1</p>")
    }

    func1()
    func2()
    func3()
    func4()
    func5()
    func6()
})

test("common.color", () => {
    expect(common.color.hexToEntity("")).toBeNull()

    let model = common.color.hexToEntity("#12345678")
    expect(model.r).toEqual(parseInt("12", 16))
    expect(model.g).toEqual(parseInt("34", 16))
    expect(model.b).toEqual(parseInt("56", 16))
    expect(model.a).toEqual(parseInt("78", 16))

    model = common.color.hexToEntity("#123456")
    expect(model.r).toEqual(parseInt("12", 16))
    expect(model.g).toEqual(parseInt("34", 16))
    expect(model.b).toEqual(parseInt("56", 16))
    expect(model.a).toEqual(parseInt("ff", 16))

    expect(common.color.rgbaToHex({ r: 1, g: 2, b: 3 })).toBe("#010203ff")
    expect(common.color.rgbaToHex({ r: 12, g: 34, b: 56 })).toBe("#0c2238ff")
    expect(common.color.rgbaToHex({ r: 12, g: 34, b: 56, a: 0 })).toBe("#0c223800")
    expect(common.color.rgbaToHex({ r: 12, g: 34, b: 56, a: 255 })).toBe("#0c2238ff")
    expect(common.color.rgbaToHex({ r: 12, g: 34, b: 56, a01: 0 })).toBe("#0c223800")
    expect(common.color.rgbaToHex({ r: 12, g: 34, b: 56, a01: 0.5 })).toBe("#0c22387f")
    expect(common.color.rgbaToHex({ r: 12, g: 34, b: 56, a01: 1 })).toBe("#0c2238ff")
    expect(common.color.rgbaToHex({ r: 12, g: 34, b: 56, a100: 0 })).toBe("#0c223800")
    expect(common.color.rgbaToHex({ r: 12, g: 34, b: 56, a100: 50 })).toBe("#0c22387f")
    expect(common.color.rgbaToHex({ r: 12, g: 34, b: 56, a100: 100 })).toBe("#0c2238ff")
})


test("common.pager", () => {
    const lst = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]

    expect(common.pager.createPagerInfo(0, 2, 0)).toEqual(<PagerInfoType>{ pageIndex: 1, startIndex: -1, endIndex: -1, pageSize: 2, recordCount: 0, pageCount: 0 })
    expect(common.pager.createPagerInfo(lst.length, 2, 0)).toEqual(<PagerInfoType>{ pageIndex: 1, startIndex: 0, endIndex: 1, pageSize: 2, recordCount: 9, pageCount: 5 })
    expect(common.pager.createPagerInfo(lst.length, 2, 1)).toEqual(<PagerInfoType>{ pageIndex: 1, startIndex: 0, endIndex: 1, pageSize: 2, recordCount: 9, pageCount: 5 })
    expect(common.pager.createPagerInfo(lst.length, 2, 3)).toEqual(<PagerInfoType>{ pageIndex: 3, startIndex: 4, endIndex: 5, pageSize: 2, recordCount: 9, pageCount: 5 })
    expect(common.pager.createPagerInfo(lst.length, 2, 100)).toEqual(<PagerInfoType>{ pageIndex: 5, startIndex: 8, endIndex: 8, pageSize: 2, recordCount: 9, pageCount: 5 })
    expect(common.pager.createPagerInfo(lst.length, 10, 1)).toEqual(<PagerInfoType>{ pageIndex: 1, startIndex: 0, endIndex: 8, pageSize: 10, recordCount: 9, pageCount: 1 })
    expect(common.pager.createPagerInfo(lst.length, 10, 2)).toEqual(<PagerInfoType>{ pageIndex: 1, startIndex: 0, endIndex: 8, pageSize: 10, recordCount: 9, pageCount: 1 })
    expect(common.pager.createPagerInfo(lst.length, 8, 1)).toEqual(<PagerInfoType>{ pageIndex: 1, startIndex: 0, endIndex: 7, pageSize: 8, recordCount: 9, pageCount: 2 })
    expect(common.pager.createPagerInfo(lst.length, 8, 2)).toEqual(<PagerInfoType>{ pageIndex: 2, startIndex: 8, endIndex: 8, pageSize: 8, recordCount: 9, pageCount: 2 })
})