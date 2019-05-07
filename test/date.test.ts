import date from "../src/date/index"

test("date.format", () => {
    expect(date.format.toHourStringFromMins(-100)).toBe("")
    expect(date.format.toHourStringFromMins(0)).toBe("0分钟")
    expect(date.format.toHourStringFromMins(30)).toBe("30分钟")
    expect(date.format.toHourStringFromMins(100)).toBe("1小时40分钟")
    expect(date.format.toHourStringFromMins(120)).toBe("2小时")

    const dt = new Date(2019, 2, 3, 10, 22, 33, 666)
    expect(date.format.format(dt)).toBe("2019-03-03")
    expect(date.format.format(dt, "yyyy-MM-dd hh:mm:ss:S")).toBe("2019-03-03 10:22:33:666")
    expect(date.format.format(dt, "yy")).toBe("19")
    expect(date.format.format(dt, "yyyy")).toBe("2019")
    expect(date.format.format(dt, "yyyyabc")).toBe("2019abc")
    expect(date.format.format(new Date("abc"))).toBe("")
})

test("date.convert", () => {
    const dt = date.convert.toEntity(new Date("2019/01/27 10:11:30:888"))
    expect(dt.year).toBe(2019)
    expect(dt.month).toBe(1)
    expect(dt.day).toBe(27)
    expect(dt.hour).toBe(10)
    expect(dt.min).toBe(11)
    expect(dt.second).toBe(30)
    expect(dt.millisecond).toBe(888)
    expect(dt.week).toBe(0)

    expect(date.convert.parse("")).toBeNull()
    expect(date.convert.parse("123")).toBeNull()
    expect(date.convert.parse("/Date(1441036800000)/")).toEqual(new Date(1441036800000))

})