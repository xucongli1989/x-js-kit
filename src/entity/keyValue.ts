export class KeyValue {
    constructor(key: string, value: any) {
        this.key = key
        this.value = value
    }
    key: string = ""
    value: any
}

export class KeyNameValue {
    constructor(key: string, name: string, value: any) {
        this.key = key
        this.name = name
        this.value = value
    }
    key: string = ""
    name: string = ""
    value: any
}