import date from "../src/date/index"

test("date.format", () => {
    expect(date.format.toHourStringFromMins(-100)).toBe("")
    expect(date.format.toHourStringFromMins(0)).toBe("0分钟")
    expect(date.format.toHourStringFromMins(30)).toBe("30分钟")
    expect(date.format.toHourStringFromMins(100)).toBe("1小时40分钟")
    expect(date.format.toHourStringFromMins(120)).toBe("2小时")
})