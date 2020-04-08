import recorder from "../src/recorder/index"
import { LevelTypeEnum, LogRecorderType, PromiseType } from "../src/recorder/log"
import { AnyKeyValueType } from "../src/declaration/common"

class CustomLogRecorder implements LogRecorderType {
    info(str: string, option: AnyKeyValueType = {}) {
        console.info(str + "custom-log", option)
    }
    infoAsync(str: string, option: AnyKeyValueType = {}): PromiseType {
        return new Promise((res) => {
            setTimeout(() => {
                console.info(str + "custom-log", option)
                res()
            }, 1000)
        }) as PromiseType
    }
    warn(str: string, option: AnyKeyValueType = {}) {
        console.warn(str, option)
    }
    warnAsync(str: string, option: AnyKeyValueType = {}): PromiseType {
        return new Promise((res) => {
            setTimeout(() => {
                console.warn(str, option)
                res()
            }, 1000)
        }) as PromiseType
    }
    error(str: string, option: AnyKeyValueType = {}) {
        console.error(str, option)
    }
    errorAsync(str: string, option: AnyKeyValueType = {}): PromiseType {
        return new Promise((res) => {
            setTimeout(() => {
                console.error(str, option)
                res()
            }, 1000)
        }) as PromiseType
    }
}

test("recorder.logger", async () => {
    console.info = jest.fn()
    recorder.log.logger.write(LevelTypeEnum.info, "一般日志", {})
    expect(console.info).toHaveBeenCalledWith("一般日志", {})
    recorder.log.logger.write(LevelTypeEnum.info, { name: "test" }, {})
    expect(console.info).toHaveBeenCalledWith({ name: "test" }, {})

    console.info = jest.fn()
    expect(await recorder.log.logger.writeAsync(LevelTypeEnum.info, "一般日志异步测试", {}))
    expect(console.info).toHaveBeenCalledWith("一般日志异步测试", {})

    console.warn = jest.fn()
    recorder.log.logger.write(LevelTypeEnum.warn, "警告日志", {})
    expect(console.warn).toHaveBeenCalledWith("警告日志", {})
    recorder.log.logger.write(LevelTypeEnum.warn, { name: "test" }, {})
    expect(console.warn).toHaveBeenCalledWith({ name: "test" }, {})

    console.warn = jest.fn()
    expect(await recorder.log.logger.writeAsync(LevelTypeEnum.warn, "警告日志异步测试", {}))
    expect(console.warn).toHaveBeenCalledWith("警告日志异步测试", {})

    console.error = jest.fn()
    recorder.log.logger.write(LevelTypeEnum.error, "错误日志", {})
    expect(console.error).toHaveBeenCalledWith("错误日志", {})
    recorder.log.logger.write(LevelTypeEnum.error, { name: "test" }, {})
    expect(console.error).toHaveBeenCalledWith({ name: "test" }, {})

    console.error = jest.fn()
    expect(await recorder.log.logger.writeAsync(LevelTypeEnum.error, "错误日志异步测试", {}))
    expect(console.error).toHaveBeenCalledWith("错误日志异步测试", {})

    //其它
    console.info = jest.fn()
    recorder.log.logger.info("一般日志", {})
    expect(console.info).toHaveBeenCalledWith("一般日志", {})

    console.warn = jest.fn()
    recorder.log.logger.warn("警告日志", {})
    expect(console.warn).toHaveBeenCalledWith("警告日志", {})

    console.error = jest.fn()
    recorder.log.logger.error("错误日志", {})
    expect(console.error).toHaveBeenCalledWith("错误日志", {})

    console.info = jest.fn()
    expect(await recorder.log.logger.infoAsync("一般日志异步测试", {}))
    expect(console.info).toHaveBeenCalledWith("一般日志异步测试", {})

    console.warn = jest.fn()
    expect(await recorder.log.logger.warnAsync("警告日志异步测试", {}))
    expect(console.warn).toHaveBeenCalledWith("警告日志异步测试", {})

    console.error = jest.fn()
    expect(await recorder.log.logger.errorAsync("错误日志异步测试", {}))
    expect(console.error).toHaveBeenCalledWith("错误日志异步测试", {})

    //自定义日志记录器
    recorder.log.setLoggerRecorder(new CustomLogRecorder())
    console.info = jest.fn()
    recorder.log.logger.info("一般日志", {})
    expect(console.info).toHaveBeenCalledWith("一般日志custom-log", {})

    console.info = jest.fn()
    expect(await recorder.log.logger.infoAsync("一般日志异步测试", {}))
    expect(console.info).toHaveBeenCalledWith("一般日志异步测试custom-log", {})
})

test("recorder.dom", () => {
    const { dom } = recorder
    let domRecorder = new dom.DOMDataRecorder()
    //没有DOM的情况
    domRecorder.init()
    expect(Object.keys(domRecorder.value).length).toEqual(0)
    //有DOM但没有指定【jskit-key】属性的值
    document.body.innerHTML = "<div jskit-key>test</div>"
    domRecorder = new dom.DOMDataRecorder()
    domRecorder.init()
    expect(Object.keys(domRecorder.value).length).toEqual(0)
    //包含【jskit-key】与【jskit-val】
    document.body.innerHTML = "<div jskit-key='name' jskit-val='Mark'>test1</div><div jskit-key='name' jskit-val='Jake'>test2</div>"
    domRecorder = new dom.DOMDataRecorder()
    domRecorder.init()
    expect(domRecorder.value.name).toEqual(["Mark", "Jake"])
    // //包含【jskit-key】与【jskit-txt】（无法测试：jsdom没有实现innerText的功能）
    // document.body.innerHTML = "<div jskit-key='name' jskit-type="txt"><h1>test1</h1></div><div jskit-key='name' jskit-type="txt"><h1>test2</h1></div>"
    // domRecorder = new dom.DOMDataRecorder()
    // domRecorder.init()
    // expect(domRecorder.value.name.length).toBe(2)
    // expect(domRecorder.value.name[0]).not.toContain("h1")
    // expect(domRecorder.value.name[0]).toEqual("test1")
    // expect(domRecorder.value.name[1]).not.toContain("h1")
    // expect(domRecorder.value.name[1]).toEqual("test2")
    //包含【jskit-key】与【jskit-type=html】
    document.body.innerHTML = "<div jskit-key='name' jskit-type='html'><h1>test1</h1></div><div jskit-key='name' jskit-type='html'><h1>test2</h1></div>"
    domRecorder = new dom.DOMDataRecorder()
    domRecorder.init()
    expect((domRecorder.value.name as string[]).length).toBe(2)
    expect((domRecorder.value.name as string[])[0]).toEqual("<h1>test1</h1>")
    expect((domRecorder.value.name as string[])[1]).toEqual("<h1>test2</h1>")
    //只有【jskit-key】
    document.body.innerHTML = "<div jskit-key='name'>test</div>"
    domRecorder = new dom.DOMDataRecorder()
    domRecorder.init()
    expect(domRecorder.value.name).toEqual(["1"])
    //包含【jskit-key】与【jskit-type=count】
    document.body.innerHTML = "<div jskit-key='name' jskit-type='count'><h1>test1</h1></div><div jskit-key='name' jskit-type='count'><h1>test2</h1></div><div jskit-key='name' jskit-type='count'><h1>test3</h1></div>"
    domRecorder = new dom.DOMDataRecorder()
    domRecorder.init()
    expect(domRecorder.value.name).toEqual(3)
    //多个【jskit-key】与【jskit-val】与【jskit-type=count】
    document.body.innerHTML = "<div jskit-key='name1' jskit-val='Mark'>test1</div><div jskit-key='name2' jskit-val='Jake'>test2</div><div jskit-key='name3' jskit-type='count'><h1>test3</h1></div>"
    domRecorder = new dom.DOMDataRecorder()
    domRecorder.init()
    expect(domRecorder.value.name1).toEqual(["Mark"])
    expect(domRecorder.value.name2).toEqual(["Jake"])
    expect(domRecorder.value.name3).toEqual(1)
    //自定义前缀
    document.body.innerHTML = "<div pre-key='name1' pre-val='Mark'>test1</div><div pre-key='name2' pre-val='Jake'>test2</div>"
    domRecorder = new dom.DOMDataRecorder()
    domRecorder.init()
    expect(Object.keys(domRecorder.value).length).toBe(0)
    document.body.innerHTML = "<div pre-key='name1' pre-val='Mark'>test1</div><div pre-key='name2' pre-val='Jake'>test2</div>"
    domRecorder = new dom.DOMDataRecorder()
    domRecorder.attrPrefix = "pre-"
    domRecorder.init()
    expect(domRecorder.value.name1).toEqual(["Mark"])
    expect(domRecorder.value.name2).toEqual(["Jake"])
})