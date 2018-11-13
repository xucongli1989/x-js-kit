import validation from "../src/validation/index"
import { FieldMessageItem } from "../src/validation/fieldMessage"

test("validation.fieldMessage", () => {
    const getData = () => {
        const model = new validation.fieldMessage.FieldMessageModel()
        model.fieldMessageItemList = []
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
        model.fieldMessageItemList.push(item)
        return model
    }
    //普通测试
    let model = getData()
    expect(model.isPassed).toBeFalsy()
    expect(model.getFieldMessageItem("name")).toEqual(model.fieldMessageItemList[0])
    expect(model.getFieldMessageItem("")).toBeNull()

    model = getData()
    model.fieldMessageItemList.forEach(item => {
        item.isPassed = true
    })
    expect(model.isPassed).toBeTruthy()
    //更新测试
    model = getData()
    model.fieldMessageItemList[0].init({
        isShowAllMsg: true
    })
    Object.keys(model.fieldMessageItemList[0].fieldItems).forEach(key => {
        expect(model.fieldMessageItemList[0].fieldItems[key].isShow).toBeTruthy()
    })
    //更新测试
    model = getData()
    model.fieldMessageItemList[0].init({
        isShowAllMsg: false
    })
    Object.keys(model.fieldMessageItemList[0].fieldItems).forEach(key => {
        expect(model.fieldMessageItemList[0].fieldItems[key].isShow).toBeFalsy()
    })
    //更新测试
    model = getData()
    model.fieldMessageItemList[0].init({
        needShowMsgFields: ["name"]
    })
    expect(model.fieldMessageItemList[0].fieldItems["name"].isShow).toBeTruthy()
    model.fieldMessageItemList[0].init({
        unNeedShowMsgFields: ["name"]
    })
    expect(model.fieldMessageItemList[0].fieldItems["name"].isShow).toBeFalsy()
    //更新测试
    model = getData()
    model.fieldMessageItemList[0].fieldItems["name"].isShow = true
    const oldItem = JSON.parse(JSON.stringify(model.fieldMessageItemList[0])) as FieldMessageItem
    model.fieldMessageItemList[0].fieldItems["name"].isShow = false
    model.fieldMessageItemList[0].init({
        oldFieldMessageItem: oldItem
    })
    expect(model.fieldMessageItemList[0].fieldItems["name"].isShow).toBeTruthy()
})