import timer from "../src/timer/index"

test("timer.stopWatch", async () => {
    let stopWatch = new timer.StopWatch()
    expect(stopWatch.value).toBe(0)
    //正常情况
    await new Promise(res => {
        stopWatch.start()
        setTimeout(() => {
            stopWatch.stop()
            res()
        }, 1000)
    })
    expect(stopWatch.value).toBe(1000)
    //重复调用
    stopWatch = new timer.StopWatch()
    stopWatch.start()
    expect(() => {
        stopWatch.stop().start()
    }).toThrowError(/has been stopt/)
})