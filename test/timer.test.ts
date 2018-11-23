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
        }, 2000)
    })
    const val = stopWatch.value
    expect(val - 2000).toBeLessThan(5)
    await new Promise(res => {
        setTimeout(res, 500)
    })
    expect(stopWatch.value).toBe(val)
    //重复调用
    stopWatch = new timer.StopWatch()
    stopWatch.start()
    expect(() => {
        stopWatch.stop().start()
    }).toThrowError(/has been stopt/)
})