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
        json: typeof import("./common/json");
        data: typeof import("./common/data");
        lib: typeof import("./common/lib");
        url: typeof import("./common/url");
    };
    config: {
        common: typeof import("./config/common");
    };
    constant: {
        regexConst: typeof import("./constant/regex");
        map: typeof import("./constant/map");
    };
    date: {
        format: typeof import("./date/format");
        convert: typeof import("./date/convert");
    };
    declaration: {
        common: typeof import("./declaration/common");
        date: typeof import("./declaration/date");
    };
    entity: {
        keyValue: typeof import("./entity/keyValue");
        select: typeof import("./entity/select");
    };
    pattern: {
        strategy: typeof import("./pattern/strategy");
        singleton: typeof import("./pattern/singleton");
    };
    timer: {
        stopWatch: typeof import("./timer/stopWatch").default;
    };
    validation: {
        fieldMessage: typeof import("./validation/fieldMessage");
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map