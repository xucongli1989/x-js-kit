import log from "../src/logger/index"
import { LevelTypeEnum, LogRecorderType } from "../src/logger/log"

class CustomLogRecorder implements LogRecorderType {
    info(str: string) {
        console.info(str + "custom-log")
    }
    infoAsync(str: string) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                console.info(str + "custom-log")
                res()
            }, 1000)
        })
    }
    warn(str: string) {
        console.warn(str)
    }
    warnAsync(str: string) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                console.warn(str)
                res()
            }, 1000)
        })
    }
    error(str: string) {
        console.error(str)
    }
    errorAsync(str: string) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                console.error(str)
                res()
            }, 1000)
        })
    }
}

test("logger", async () => {
    console.info = jest.fn()
    log.logger.write(LevelTypeEnum.info, "一般日志")
    expect(console.info).toHaveBeenCalledWith("一般日志")
    log.logger.write(LevelTypeEnum.info, { name: "test" })
    expect(console.info).toHaveBeenCalledWith(JSON.stringify({ name: "test" }))

    console.info = jest.fn()
    expect(await log.logger.writeAsync(LevelTypeEnum.info, "一般日志异步测试"))
    expect(console.info).toHaveBeenCalledWith("一般日志异步测试")

    console.warn = jest.fn()
    log.logger.write(LevelTypeEnum.warn, "警告日志")
    expect(console.warn).toHaveBeenCalledWith("警告日志")
    log.logger.write(LevelTypeEnum.warn, { name: "test" })
    expect(console.warn).toHaveBeenCalledWith(JSON.stringify({ name: "test" }))

    console.warn = jest.fn()
    expect(await log.logger.writeAsync(LevelTypeEnum.warn, "警告日志异步测试"))
    expect(console.warn).toHaveBeenCalledWith("警告日志异步测试")

    console.error = jest.fn()
    log.logger.write(LevelTypeEnum.error, "错误日志")
    expect(console.error).toHaveBeenCalledWith("错误日志")
    log.logger.write(LevelTypeEnum.error, { name: "test" })
    expect(console.error).toHaveBeenCalledWith(JSON.stringify({ name: "test" }))

    console.error = jest.fn()
    expect(await log.logger.writeAsync(LevelTypeEnum.error, "错误日志异步测试"))
    expect(console.error).toHaveBeenCalledWith("错误日志异步测试")

    //其它
    console.info = jest.fn()
    log.logger.info("一般日志")
    expect(console.info).toHaveBeenCalledWith("一般日志")

    console.warn = jest.fn()
    log.logger.warn("警告日志")
    expect(console.warn).toHaveBeenCalledWith("警告日志")

    console.error = jest.fn()
    log.logger.error("错误日志")
    expect(console.error).toHaveBeenCalledWith("错误日志")

    console.info = jest.fn()
    expect(await log.logger.infoAsync("一般日志异步测试"))
    expect(console.info).toHaveBeenCalledWith("一般日志异步测试")

    console.warn = jest.fn()
    expect(await log.logger.warnAsync("警告日志异步测试"))
    expect(console.warn).toHaveBeenCalledWith("警告日志异步测试")

    console.error = jest.fn()
    expect(await log.logger.errorAsync("错误日志异步测试"))
    expect(console.error).toHaveBeenCalledWith("错误日志异步测试")

    //自定义日志记录器
    log.setLoggerRecorder(new CustomLogRecorder())
    console.info = jest.fn()
    log.logger.info("一般日志")
    expect(console.info).toHaveBeenCalledWith("一般日志custom-log")

    console.info = jest.fn()
    expect(await log.logger.infoAsync("一般日志异步测试"))
    expect(console.info).toHaveBeenCalledWith("一般日志异步测试custom-log")
})