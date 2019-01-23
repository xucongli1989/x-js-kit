import config from "../src/config/index"
import common from "../src/common/index"

test("config.common", () => {
    expect.assertions(1)
    config.common.setTryRunErrorHandler((e: any) => {
        expect(e).toBeDefined()
    })
    common.lib.tryRun(() => {
        const obj = {} as any
        console.log(obj.a.b)
    })
})