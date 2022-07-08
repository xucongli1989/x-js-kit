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
 * 判断一个路径是否为系统回收站的路径
 */
export declare function isSystemRecyclePath(p: string): boolean;
/**
 * 判断一个路径是否为 Office 临时文件的路径（文件名以 ~$ 开头）
 */
export declare function isOfficeTempPath(p: string): boolean;
/**
 * 将物理绝对路径转换为 file 协议的 url
 */
export declare function convertPathToFileUrl(p: string): string;
//# sourceMappingURL=path.d.ts.map