import entity from "../src/entity/index"

test("entity.keyValue", () => {
    let model = new entity.keyValue.KeyValue("name", "test")
    expect(model.extend).toBeUndefined()
    expect(model.key).toBe("name")
    expect(model.value).toBe("test")
    model = new entity.keyValue.KeyValue("name", "test", {
        other: "123"
    })
    expect(model.extend).toEqual({ other: "123" })

    let nameModel = new entity.keyValue.KeyNameValue("name", "姓名", "test")
    expect(nameModel.extend).toBeUndefined()
    expect(nameModel.key).toBe("name")
    expect(nameModel.name).toBe("姓名")
    expect(nameModel.value).toBe("test")
    nameModel = new entity.keyValue.KeyNameValue("name", "姓名", "test", {
        other: "123"
    })
    expect(nameModel.extend).toEqual({ other: "123" })
})

test("entity.message", () => {
    const model = new entity.message.MessageEntity()
    expect(model.head).toBeDefined()
    expect(model.body).toBeDefined()
    expect(model.head.isAck).toBeTruthy()
    expect(model.head.isSuccess).toBeTruthy()
    expect(model.head.isException).toBeFalsy()
    expect(model.body.data).toBeNull()
    expect(model.body.extendData).toBeNull()
    model.body.data = "test"
    expect(model.body.data).toEqual("test")
})

test("entity.select", () => {
    let model = new entity.select.SelectItem("优惠券", "123")
    expect(model.extend).toBeUndefined()
    expect(model.isSelected).toBeFalsy()
    expect(model.text).toBe("优惠券")
    expect(model.value).toBe("123")

    model = new entity.select.SelectItem("优惠券", "123", true, { other: "123" })
    expect(model.extend).toEqual({ other: "123" })
    expect(model.isSelected).toBeTruthy()
    expect(model.text).toBe("优惠券")
    expect(model.value).toBe("123")
})

test("entity.serialize", () => {
    class Test1 {
        get id() {
            return 123
        }
    }
    expect(JSON.stringify(new Test1())).toBe("{}")

    class Test2 extends entity.serialize.BaseClass {
        get id() {
            return 123
        }
    }
    expect(JSON.stringify(new Test2())).toBe('{"id":123}')
})