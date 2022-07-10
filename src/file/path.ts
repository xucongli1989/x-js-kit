import { rTrimString } from "../common/string"

/**
 * 将指定路径转换为标准的路径，标准的路径分隔符为 \，如果是文件夹，则最后也带 \
 */
export function getStandardPath(path: string, isFolder: boolean) {
    if (!path) {
        return ""
    }
    path = path.trim().replaceAll("/", "\\")
    path = rTrimString(path, "\\")
    if (isFolder) {
        return path + "\\"
    }
    return path
}

/**
 * 获取文件名（包含扩展名），如：c:\1\2\3.txt => 3.txt
 */
export function getFileName(path: string): string {
    if (!path) {
        return ""
    }
    const str = getStandardPath(path, false)
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

/**
 * 判断某个路径是否为本地磁盘根路径，如：c:\  或  \\test-pc\
 */
export function isLocalDiskRootPath(path: string) {
    if (!path) {
        return false
    }
    path = getStandardPath(path, true)
    return /^[^\\]+:\\$/.test(path) || /^\\\\[^\\]+\\$/.test(path)
}

/**
 * 获取路径中的磁盘名称，如：c:\a\b\c\ -> c，\\test-pc\a\b\c\ -> test-pc
 */
export function getLocalPathDiskName(path: string) {
    if (!path) {
        return ""
    }
    path = getStandardPath(path, true)
    let mt = path.match(/^[^\\]+(?=:)/)
    if (mt?.length) {
        return mt[0]
    }
    mt = path.match(/^\\\\([^\\]+)(?=\\)/)
    if (mt?.length) {
        return mt[1]
    }
    return ""
}

/**
 * 获取路径所在的文件夹名称，如：c:\  --> c；  c:\a\b\ --> b;  c:\a\b\c.pdf --> b
 */
export function getPathFolderName(path: string, isFolderPath: boolean) {
    if (!path) {
        return ""
    }
    path = getStandardPath(path, isFolderPath)
    const arr = path.split("\\")
    return arr[arr.length - 2].replaceAll(":", "")
}

/**
 * 判断一个路径是否为系统回收站的路径
 */
export function isSystemRecyclePath(path: string) {
    if (!path) {
        return false
    }
    return path.toUpperCase().includes("$RECYCLE.BIN")
}

/**
 * 判断一个路径是否为 Office 临时文件的路径（文件名以 ~$ 开头）
 */
export function isOfficeTempPath(path: string) {
    if (!path) {
        return false
    }
    return getFileName(path).startsWith("~$")
}

/**
 * 将物理绝对路径转换为 file 协议的 url
 */
export function convertPathToFileUrl(path: string) {
    if (!path) {
        return ""
    }
    return `file://${path.replaceAll("\\", "/").trim()}`
}
