import check from "../src/check/index"

test("check.browser", () => {
    const firefoxUA = "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:6.0) Gecko/20100101 Firefox/6.0"
    const ie6UA = "Mozilla/5.0 (compatible; MSIE 6.0; Windows NT 5.1)"
    const ie7UA = "Mozilla/5.0 (compatible; MSIE 7.0; Windows NT 5.2; WOW64; .NET CLR 2.0.50727)"
    const ie8UA = "Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; GTB7.4; InfoPath.2; SV1; .NET CLR 3.3.69573; WOW64; en-US)"
    const ie9UA = "Mozilla/5.0 (Windows; U; MSIE 9.0; WIndows NT 9.0; en-US))"
    const ie10UA = "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)"
    const ie11UA = "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko"
    expect(check.browser.isIE(null as any, firefoxUA)).toBeFalsy()
    expect(check.browser.isIE(null as any, "aaa")).toBeFalsy()
    expect(check.browser.isIE(null as any, ie6UA)).toBeTruthy()
    expect(check.browser.isIE(null as any, ie7UA)).toBeTruthy()
    expect(check.browser.isIE(null as any, ie8UA)).toBeTruthy()
    expect(check.browser.isIE(null as any, ie9UA)).toBeTruthy()
    expect(check.browser.isIE(null as any, ie10UA)).toBeTruthy()
    expect(check.browser.isIE(null as any, ie11UA)).toBeTruthy()
    expect(check.browser.isIE(6, ie6UA)).toBeTruthy()
    expect(check.browser.isIE(7, ie7UA)).toBeTruthy()
    expect(check.browser.isIE(8, ie8UA)).toBeTruthy()
    expect(check.browser.isIE(9, ie9UA)).toBeTruthy()
    expect(check.browser.isIE(10, ie10UA)).toBeTruthy()
    expect(check.browser.isIE(11, ie11UA)).toBeTruthy()
    expect(check.browser.isIE(100, ie11UA)).toBeFalsy()

    expect(check.browser.isExtraLarge()).toBeFalsy()
    expect(check.browser.isExtraSmall()).toBeFalsy()
    expect(check.browser.isLarge()).toBeTruthy()
    expect(check.browser.isMedium()).toBeFalsy()
    expect(check.browser.isSmall()).toBeFalsy()

    Object.defineProperty(window.performance, "navigation", {
        value: {
            type: 1
        },
        writable: true
    })
    expect(check.browser.isReload()).toBeTruthy()
    Object.defineProperty(window.performance, "navigation", {
        value: {
            type: 2
        },
        writable: true
    })
    expect(check.browser.isReload()).toBeFalsy()
})

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

    expect(check.common.isChinaIDCard("")).toBeFalsy()
    expect(check.common.isChinaIDCard("123456")).toBeFalsy()
    expect(check.common.isChinaIDCard("320000881214101")).toBeTruthy()
    expect(check.common.isChinaIDCard("320000198812141111")).toBeTruthy()
    expect(check.common.isChinaIDCard("32000019881214123X")).toBeTruthy()
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