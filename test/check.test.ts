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

    expect(check.common.isAllNumber("123456")).toBeTruthy()
    expect(check.common.isAllNumber("123456-")).toBeFalsy()
    expect(check.common.isAllNumber("abc")).toBeFalsy()
    expect(check.common.isAllNumber("")).toBeFalsy()

    expect(check.common.isCNMobile("")).toBeFalsy()
    expect(check.common.isCNMobile("1301231231")).toBeFalsy()
    expect(check.common.isCNMobile("130123123120")).toBeFalsy()
    expect(check.common.isCNMobile("13012312312")).toBeTruthy()
})

test("check.url", () => {
    expect(check.url.isHttp("https://www.google.com")).toBeFalsy()
    expect(check.url.isHttp("http//www.google.com")).toBeFalsy()
    expect(check.url.isHttp("")).toBeFalsy()
    expect(check.url.isHttp("http://www.google.com")).toBeTruthy()
    expect(check.url.isHttp("hTTp://www.google.com")).toBeTruthy()

    expect(check.url.isHttps("http://www.google.com")).toBeFalsy()
    expect(check.url.isHttps("https//www.google.com")).toBeFalsy()
    expect(check.url.isHttps("")).toBeFalsy()
    expect(check.url.isHttps("https://www.google.com")).toBeTruthy()
    expect(check.url.isHttps("hTTps://www.google.com")).toBeTruthy()

    expect(check.url.isHttpOrHttpsUrl("")).toBeFalsy()
    expect(check.url.isHttpOrHttpsUrl("ftp://")).toBeFalsy()
    expect(check.url.isHttpOrHttpsUrl("Http://a.com")).toBeTruthy()
    expect(check.url.isHttpOrHttpsUrl("httPs://a.com")).toBeTruthy()
})