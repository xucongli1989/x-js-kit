import date from "../src/date/index"

test("date.format", () => {
    expect(date.format.toHourStringFromMins(-100)).toBe("")
    expect(date.format.toHourStringFromMins(100)).toBe("1小时40分钟")
})