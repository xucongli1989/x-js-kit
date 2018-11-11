import cache from "../src/cache/index"
import { ItemContentType } from "../src/cache/localStorage"

test('cache.localStorage', () => {
    const itemContent: ItemContentType = {
        value: "123456"
    }
    //添加与获取
    cache.localStorage.add("myCache", itemContent)
    expect(cache.localStorage.get("myCache")).toEqual(itemContent)
    //添加与获取（带过期时间）
    itemContent.expire = new Date().valueOf() - 1
    //expect(cache.localStorage.get("myCache")).toEqual(null)
});