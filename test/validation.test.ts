import validation from "../src/validation/index"
import { FieldMessageItem } from "../src/validation/fieldMessage"

test("validation.fieldMessage", () => {
    const getData = () => {
        const model = new validation.fieldMessage.FieldMessageModel()
        model.itemList = []
        const item = new validation.fieldMessage.FieldMessageItem()
        item.isPassed = false
        item.id = "name"
        item.fieldItems = {
            name: {
                isShow: false,
                msg: ""
            },
            age: {
                isShow: false,
                msg: ""
            },
            address: {
                isShow: false,
                msg: ""
            }
        }
        model.itemList.push(item)
        return model
    }
    //普通测试
    let model = getData()
    expect(model.isPassed).toBeFalsy()
    expect(model.getItem("name")).toEqual(model.itemList[0])
    expect(model.getItem("")).toBeNull()
    expect(model.itemList[0].extend).toBeUndefined()

    model = getData()
    model.itemList.forEach(item => {
        const tempItem = item
        tempItem.isPassed = true
    })
    expect(model.isPassed).toBeTruthy()
    //更新测试
    model = getData()
    model.itemList[0].init({
        isShowAll: true
    })
    Object.keys(model.itemList[0].fieldItems).forEach(key => {
        expect(model.itemList[0].fieldItems[key].isShow).toBeTruthy()
    })
    //更新测试
    model = getData()
    model.itemList[0].init({
        isShowAll: false
    })
    Object.keys(model.itemList[0].fieldItems).forEach(key => {
        expect(model.itemList[0].fieldItems[key].isShow).toBeFalsy()
    })
    //更新测试
    model = getData()
    model.itemList[0].init({
        needShowFields: ["name"]
    })
    expect(model.itemList[0].fieldItems.name.isShow).toBeTruthy()
    model.itemList[0].init({
        unNeedShowFields: ["name"]
    })
    expect(model.itemList[0].fieldItems.name.isShow).toBeFalsy()
    //更新测试
    model = getData()
    model.itemList[0].fieldItems.name.isShow = true
    model.itemList[0].extend = "test"
    const oldItemInfo = JSON.parse(JSON.stringify(model.itemList[0])) as FieldMessageItem
    model.itemList[0].fieldItems.name.isShow = false
    model.itemList[0].init({
        oldItem: oldItemInfo
    })
    expect(model.itemList[0].extend).toBe("test")
    expect(model.itemList[0].fieldItems.name.isShow).toBeTruthy()
})