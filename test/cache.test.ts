import cache from "../src/cache/index"
import { ItemContentType } from "../src/cache/localStorage"

const cacheKey1 = "myCache1"
const cacheKey2 = "myCache2"

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