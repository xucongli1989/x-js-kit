import check from "../src/check/index"

test("check.common", () => {
    expect(check.common.isAllEnglish("abcde")).toBeTruthy()
    expect(check.common.isAllEnglish("abcde=")).toBeFalsy()
    expect(check.common.isAllEnglish("")).toBeFalsy()
    expect(check.common.isAllEnglish("1")).toBeFalsy()

    expect(check.common.isEmail("a@abc.com")).toBeTruthy()
    expect(check.common.isEmail("a@@.com")).toBeFalsy()
    expect(check.common.isEmail(".com")).toBeFalsy()
    expect(check.common.isEmail("a.com")).toBeFalsy()

    expect(check.common.isNumber("123456")).toBeTruthy()
    expect(check.common.isNumber("123456-")).toBeFalsy()
    expect(check.common.isNumber("abc")).toBeFalsy()
    expect(check.common.isNumber("")).toBeFalsy()
})