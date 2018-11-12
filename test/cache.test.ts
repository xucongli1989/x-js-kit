import cache from "../src/cache/index"
import { ItemContentType } from "../src/cache/localStorage"

const cacheName = "myCache"

test('cache.localStorage-添加与获取', () => {
    const itemContent: ItemContentType = {
        value: "123456"
    }
    cache.localStorage.add(cacheName, itemContent)
    expect(cache.localStorage.get(cacheName)).toEqual(itemContent)
})

test('cache.localStorage-添加与获取（初始化为过期时间）', () => {
    const itemContent: ItemContentType = {
        value: "123456",
        expire: new Date().valueOf() - 1
    }
    cache.localStorage.add(cacheName, itemContent)
    expect(cache.localStorage.get(cacheName)).toEqual(null)
})

test('cache.localStorage-添加与获取（定时为过期时间）', async () => {
    const itemContent: ItemContentType = {
        value: "123456",
        expire: new Date().valueOf() + 1000
    }
    cache.localStorage.add(cacheName, itemContent)
    await new Promise(res => {
        setTimeout(res, 1001)
    })
    expect(cache.localStorage.get(cacheName)).toEqual(null)
})