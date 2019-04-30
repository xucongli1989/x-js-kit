import log from "../src/logger/index"
import { LevelTypeEnum, LogType } from "../src/logger/log"

class CustomLogger implements LogType {
    write(level: LevelTypeEnum, content: string) {
        throw new Error(content)
    }
    async writeAsync(level: LevelTypeEnum, content: Promise<string>) {
        this.write(level, await content)
    }
    info() { }
    async infoAsync() { }
    warn() { }
    async warnAsync() { }
    error() { }
    async errorAsync() { }
}

function createPromise(str: string): Promise<string> {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(str)
        }, 100)
    })
}

test("logger", async () => {
    console.log = jest.fn()
    expect(await log.logger.writeAsync(LevelTypeEnum.info, createPromise("一般日志异步测试")))
    expect(console.log).toHaveBeenCalledWith("一般日志异步测试")

    console.log = jest.fn()
    log.logger.write(LevelTypeEnum.info, "一般日志")
    expect(console.log).toHaveBeenCalledWith("一般日志")
    log.logger.write(LevelTypeEnum.info, { name: "test" })
    expect(console.log).toHaveBeenCalledWith(JSON.stringify({ name: "test" }))

    console.warn = jest.fn()
    log.logger.write(LevelTypeEnum.warn, "警告日志")
    expect(console.warn).toHaveBeenCalledWith("警告日志")

    console.error = jest.fn()
    log.logger.write(LevelTypeEnum.error, "错误日志")
    expect(console.error).toHaveBeenCalledWith("错误日志")

    //其它
    console.log = jest.fn()
    log.logger.info("一般日志")
    expect(console.log).toHaveBeenCalledWith("一般日志")

    console.warn = jest.fn()
    log.logger.warn("警告日志")
    expect(console.warn).toHaveBeenCalledWith("警告日志")

    console.error = jest.fn()
    log.logger.error("错误日志")
    expect(console.error).toHaveBeenCalledWith("错误日志")

    console.log = jest.fn()
    expect(await log.logger.infoAsync(createPromise("一般日志异步测试")))
    expect(console.log).toHaveBeenCalledWith("一般日志异步测试")

    console.warn = jest.fn()
    expect(await log.logger.warnAsync(createPromise("警告日志异步测试")))
    expect(console.warn).toHaveBeenCalledWith("警告日志异步测试")

    console.error = jest.fn()
    expect(await log.logger.errorAsync(createPromise("错误日志异步测试")))
    expect(console.error).toHaveBeenCalledWith("错误日志异步测试")

    //自定义日志记录器
    log.setLogger(new CustomLogger())
    expect(() => { log.logger.write(LevelTypeEnum.info, "test") }).toThrow("test")
    expect(log.logger.writeAsync(LevelTypeEnum.info, createPromise("test123"))).rejects.toThrow("test123")
})