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