import * as i18n from "./i18n/index";
declare const _default: {
    cache: {
        localStorage: typeof import("./cache/localStorage");
    };
    check: {
        common: typeof import("./check/common");
        url: typeof import("./check/url");
        browser: typeof import("./check/browser");
    };
    common: {
        string: typeof import("./common/string");
        array: typeof import("./common/array");
        convert: typeof import("./common/convert");
        cookie: typeof import("./common/cookie");
        json: typeof import("./common/json");
        data: typeof import("./common/data");
        enumTool: typeof import("./common/enumTool");
        idCard: typeof import("./common/idCard");
        image: typeof import("./common/image");
        lib: typeof import("./common/lib");
        random: typeof import("./common/random");
        url: typeof import("./common/url");
        regexp: typeof import("./common/regexp");
        dom: typeof import("./common/dom");
        color: typeof import("./common/color");
        pager: typeof import("./common/pager");
    };
    config: {
        common: typeof import("./config/common");
        recorder: typeof import("./config/recorder");
    };
    constant: {
        regexConst: typeof import("./constant/regex");
        map: typeof import("./constant/map");
        enums: typeof import("./constant/enums");
    };
    date: {
        format: typeof import("./date/format");
        convert: typeof import("./date/convert");
    };
    declaration: {
        common: typeof import("./declaration/common");
        date: typeof import("./declaration/date");
    };
    device: {
        browser: typeof import("./device/browser");
    };
    entity: {
        idCard: typeof import("./entity/idCard");
        keyValue: typeof import("./entity/keyValue");
        select: typeof import("./entity/select");
        serialize: typeof import("./entity/serialize");
        message: typeof import("./entity/message");
        methodResult: typeof import("./entity/method-result");
        fileInfo: typeof import("./entity/file-info");
    };
    recorder: {
        log: typeof import("./recorder/log");
        dom: typeof import("./recorder/dom");
    };
    pattern: {
        strategy: typeof import("./pattern/strategy");
        singleton: typeof import("./pattern/singleton");
    };
    timer: {
        stopWatch: typeof import("./timer/stopWatch").default;
        StopWatch: typeof import("./timer/stopWatch").default;
    };
    validation: {
        fieldMessage: typeof import("./validation/fieldMessage");
    };
    file: {
        path: typeof import("./file/path");
        img: typeof import("./file/img");
    };
    i18n: typeof i18n;
};
export default _default;
//# sourceMappingURL=index.d.ts.map