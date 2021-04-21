/**
 * 获取文件名（包含扩展名），如：c:\1\2\3.txt => 3.txt
 */
export function getFileName(path: string): string {
    if (!path) {
        return ""
    }
    const arr = path.replace(/\//g, "\\").split("\\")
    return arr[arr.length - 1].trim()
}

/**
 * 获取文件名（不包含扩展名），如：c:\1\2\3.txt => 3
 */
export function getFileNameWithoutExt(path: string): string {
    return getFileName(path).split(".")[0]
}

/**
 * 获取扩展名（包含点）
 */
export function getExt(path: string): string {
    const fileName = getFileName(path)
    if (!fileName) {
        return ""
    }
    const arr = fileName.split(".")
    if (arr.length <= 1) {
        return ""
    }
    return "." + arr[arr.length - 1].trim()
}

/**
 * 获取扩展名（不包含点）
 */
export function getExtWithoutDot(path: string): string {
    const fileName = getFileName(path)
    if (!fileName) {
        return ""
    }
    const arr = fileName.split(".")
    if (arr.length <= 1) {
        return ""
    }
    return arr[arr.length - 1].trim()
}
