/**
 * 将指定路径转换为标准的路径，标准的路径分隔符为 \，如果是文件夹，则最后也带 \
 */
export declare function getStandardPath(path: string, isFolder: boolean): string;
/**
 * 获取文件名（包含扩展名），如：c:\1\2\3.txt => 3.txt
 */
export declare function getFileName(path: string): string;
/**
 * 获取文件名（不包含扩展名），如：c:\1\2\3.txt => 3
 */
export declare function getFileNameWithoutExt(path: string): string;
/**
 * 获取扩展名（包含点）
 */
export declare function getExt(path: string): string;
/**
 * 获取扩展名（不包含点）
 */
export declare function getExtWithoutDot(path: string): string;
/**
 * 判断某个路径是否为本地磁盘根路径，如：c:\  或  \\test-pc\
 */
export declare function isLocalDiskRootPath(path: string): boolean;
/**
 * 获取路径中的磁盘名称，如：c:\a\b\c\ -> c，\\test-pc\a\b\c\ -> test-pc
 */
export declare function getLocalPathDiskName(path: string): string;
/**
 * 获取路径所在的文件夹名称，如：c:\  --> c；  c:\a\b\ --> b;  c:\a\b\c.pdf --> b
 */
export declare function getPathFolderName(path: string, isFolderPath: boolean): string;
/**
 * 判断一个路径是否为系统回收站的路径
 */
export declare function isSystemRecyclePath(path: string): boolean;
/**
 * 判断一个路径是否为 Office 临时文件的路径（文件名以 ~$ 开头）
 */
export declare function isOfficeTempPath(path: string): boolean;
/**
 * 将物理绝对路径转换为 file 协议的 url
 */
export declare function convertPathToFileUrl(path: string): string;
//# sourceMappingURL=path.d.ts.map