import cache from "../src/cache/index"
import { ItemContentType } from "../src/cache/localStorage"

const cacheKey1 = "myCache1"
const cacheKey2 = "myCache2"
const cacheKey3 = "myCache3"

test("cache.localStorage-获取全局缓存", () => {
    expect(cache.localStorage.getGlobalCache()).not.toBeNull()
})

test('cache.localStorage-添加与获取', () => {
    const itemContent: ItemContentType = {
        value: "123456"
    }
    cache.localStorage.add(cacheKey1, itemContent)
    expect(cache.localStorage.get(cacheKey1)).toEqual(itemContent)
})

test('cache.localStorage-添加与获取（初始化为过期时间）', () => {
    const itemContent: ItemContentType = {
        value: "123456",
        expire: new Date().valueOf() - 1
    }
    cache.localStorage.add(cacheKey1, itemContent)
    expect(cache.localStorage.get(cacheKey1)).toBeNull()
})

test('cache.localStorage-添加与获取（定时为过期时间）', async () => {
    const itemContent: ItemContentType = {
        value: "123456",
        expire: new Date().valueOf() + 1000
    }
    cache.localStorage.add(cacheKey1, itemContent)
    await new Promise(res => {
        setTimeout(res, 1001)
    })
    expect(cache.localStorage.get(cacheKey1)).toBeNull()
})

test("cache.localStorage-删除缓存", () => {
    const itemContent: ItemContentType = {
        value: "123456"
    }
    cache.localStorage.add(cacheKey1, itemContent)
    cache.localStorage.add(cacheKey2, itemContent)
    cache.localStorage.remove(cacheKey1)
    expect(cache.localStorage.get(cacheKey1)).toBeNull()
    expect(cache.localStorage.get(cacheKey2)).toEqual(itemContent)
})

test("cache.localStorage-定时清理缓存", async () => {
    //默认信息
    expect(cache.localStorage.getAutoClearExpiredTimeSpan()).toBe(30 * 60 * 1000)
    cache.localStorage.setAutoClearExpiredTimeSpan(100000)
    expect(cache.localStorage.getAutoClearExpiredTimeSpan()).toBe(100000)

    //自动清理测试
    const now = new Date().valueOf()
    const itemContent1: ItemContentType = {
        value: "123456",
        expire: now + 1000
    }
    const itemContent2: ItemContentType = {
        value: "123456",
        expire: now + 2000
    }
    const itemContent3: ItemContentType = {
        value: "123456",
        expire: now + 4000
    }
    cache.localStorage.setAutoClearExpiredTimeSpan(30 * 60 * 1000)
    cache.localStorage.add(cacheKey1, itemContent1)
    cache.localStorage.add(cacheKey2, itemContent2)
    cache.localStorage.add(cacheKey3, itemContent3)
    await new Promise(res => {
        setTimeout(res, 1500)
    })
    expect(cache.localStorage.get(cacheKey1, true)).not.toBeNull()
    expect(cache.localStorage.get(cacheKey2, true)).not.toBeNull()
    expect(cache.localStorage.get(cacheKey3, true)).not.toBeNull()
    cache.localStorage.setAutoClearExpiredTimeSpan(100)
    await new Promise(res => {
        setTimeout(res, 1600)
    })
    expect(cache.localStorage.get(cacheKey1, true)).toBeNull()
    expect(cache.localStorage.get(cacheKey2, true)).toBeNull()
    expect(cache.localStorage.get(cacheKey3, true)).not.toBeNull()
    await new Promise(res => {
        setTimeout(res, 1000)
    })
    expect(cache.localStorage.get(cacheKey3, true)).toBeNull()
})