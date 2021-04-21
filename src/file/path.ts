/**
 * 获取文件名（包含扩展名），如：c:\1\2\3.txt => 3.txt
 */
export function getFileName(path: string): string {
    if (!path) {
        return ""
    }
    const str = path.replace(/\//g, "\\")
    const splitIndex = str.lastIndexOf("\\")
    if (splitIndex < 0) {
        return path.trim()
    }
    return str.substr(splitIndex + 1).trim()
}

/**
 * 获取文件名（不包含扩展名），如：c:\1\2\3.txt => 3
 */
export function getFileNameWithoutExt(path: string): string {
    const fileName = getFileName(path)
    if (!fileName) {
        return ""
    }
    const dotIndex = fileName.lastIndexOf(".")
    if (dotIndex < 0) {
        return fileName
    }
    return fileName.substr(0, dotIndex)
}

/**
 * 获取扩展名（包含点）
 */
export function getExt(path: string): string {
    const fileName = getFileName(path)
    if (!fileName) {
        return ""
    }
    const dotIndex = fileName.lastIndexOf(".")
    if (dotIndex < 0) {
        return ""
    }
    return fileName.substr(dotIndex)
}

/**
 * 获取扩展名（不包含点）
 */
export function getExtWithoutDot(path: string): string {
    const fileName = getFileName(path)
    if (!fileName) {
        return ""
    }
    const dotIndex = fileName.lastIndexOf(".")
    if (dotIndex < 0) {
        return ""
    }
    return fileName.substr(dotIndex + 1)
}
