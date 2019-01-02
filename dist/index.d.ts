declare const _default: {
    cache: {
        localStorage: typeof import("./cache/localStorage");
    };
    check: {
        common: typeof import("./check/common");
        url: typeof import("./check/url");
    };
    date: {
        format: typeof import("./date/format");
    };
    validation: {
        fieldMessage: typeof import("./validation/fieldMessage");
    };
    declaration: {
        common: typeof import("./declaration/common");
    };
    constant: {
        regexConst: typeof import("./constant/regex");
    };
    pattern: {
        strategy: typeof import("./pattern/strategy");
    };
    timer: {
        StopWatch: typeof import("./timer/stopWatch").default;
    };
    common: {
        stringHelper: typeof import("./common/stringHelper");
        arrayHelper: typeof import("./common/arrayHelper");
        lib: typeof import("./common/lib");
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map