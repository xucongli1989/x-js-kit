import entity from "../src/entity/index"

test("entity.keyValue", () => {
    const model = new entity.keyValue.KeyValue("name", "test")
    expect(model).toEqual({
        key: "name",
        value: "test"
    })

    const nameModel = new entity.keyValue.KeyNameValue("name", "姓名", "test")
    expect(nameModel).toEqual({
        key: "name",
        name: "姓名",
        value: "test"
    })
})