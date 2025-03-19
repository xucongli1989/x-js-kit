import { LanguageTypeEnum } from "."

const defaultNameSpace = "translation"

export enum XJsKitTranslationKeyNameEnum {
    必须提供一个有效的范围 = "必须提供一个有效的范围",
    格式不正确只支持单个范围请删除逗号 = "格式不正确只支持单个范围请删除逗号",
    格式不正确 = "格式不正确",
    格式不正确必须为整数且不能为0 = "格式不正确必须为整数且不能为0",
    左侧数字为负数时右侧数字必须也同时为负数 = "左侧数字为负数时右侧数字必须也同时为负数",
    格式不正确左侧数字必须小于等于右侧数字 = "格式不正确左侧数字必须小于等于右侧数字"
}

export const XJsKitI18nResourcesData: Record<LanguageTypeEnum, Record<typeof defaultNameSpace, Record<keyof typeof XJsKitTranslationKeyNameEnum, string>>> = {
    "zh-CN": {
        translation: {
            必须提供一个有效的范围: "必须提供一个有效的范围！",
            格式不正确只支持单个范围请删除逗号: "格式不正确，只支持单个范围，请删除逗号！",
            格式不正确: "格式不正确！",
            格式不正确必须为整数且不能为0: "格式不正确，必须为整数，且不能为 0！",
            左侧数字为负数时右侧数字必须也同时为负数: "左侧数字为负数时，右侧数字必须也同时为负数！",
            格式不正确左侧数字必须小于等于右侧数字: "格式不正确，左侧数字必须小于等于右侧数字！"
        }
    },
    "zh-TW": {
        translation: {
            必须提供一个有效的范围: "必須提供一個有效的範圍！",
            格式不正确只支持单个范围请删除逗号: "格式不正確，只支援單個範圍，請刪除逗號！",
            格式不正确: "格式不正確！",
            格式不正确必须为整数且不能为0: "格式不正確，必須為整數，且不能為 0！",
            左侧数字为负数时右侧数字必须也同时为负数: "左側數字為負數時，右側數字必須也同時為負數！",
            格式不正确左侧数字必须小于等于右侧数字: "格式不正確，左側數字必須小於等於右側數字！"
        }
    },
    "en-US": {
        translation: {
            必须提供一个有效的范围: "A valid range must be provided!",
            格式不正确只支持单个范围请删除逗号: "Incorrect format, only a single range is supported, please remove the comma!",
            格式不正确: "Incorrect format!",
            格式不正确必须为整数且不能为0: "Incorrect format, must be an integer and cannot be 0!",
            左侧数字为负数时右侧数字必须也同时为负数: "When the left number is negative, the right number must also be negative!",
            格式不正确左侧数字必须小于等于右侧数字: "Incorrect format, the left number must be less than or equal to the right number!"
        }
    },
    "fr-FR": {
        translation: {
            必须提供一个有效的范围: "Une plage valide doit être fournie !",
            格式不正确只支持单个范围请删除逗号: "Format incorrect, seule une plage unique est prise en charge, veuillez supprimer la virgule !",
            格式不正确: "Format incorrect !",
            格式不正确必须为整数且不能为0: "Format incorrect, doit être un entier et ne peut pas être 0 !",
            左侧数字为负数时右侧数字必须也同时为负数: "Lorsque le nombre à gauche est négatif, le nombre à droite doit également être négatif !",
            格式不正确左侧数字必须小于等于右侧数字: "Format incorrect, le nombre à gauche doit être inférieur ou égal au nombre à droite !"
        }
    },
    "de-DE": {
        translation: {
            必须提供一个有效的范围: "Ein gültiger Bereich muss angegeben werden!",
            格式不正确只支持单个范围请删除逗号: "Falsches Format, es wird nur ein einzelner Bereich unterstützt, bitte das Komma entfernen!",
            格式不正确: "Falsches Format!",
            格式不正确必须为整数且不能为0: "Falsches Format, muss eine ganze Zahl sein und darf nicht 0 sein!",
            左侧数字为负数时右侧数字必须也同时为负数: "Wenn die linke Zahl negativ ist, muss die rechte Zahl ebenfalls negativ sein!",
            格式不正确左侧数字必须小于等于右侧数字: "Falsches Format, die linke Zahl muss kleiner oder gleich der rechten Zahl sein!"
        }
    },
    "es-ES": {
        translation: {
            必须提供一个有效的范围: "¡Debe proporcionarse un rango válido!",
            格式不正确只支持单个范围请删除逗号: "Formato incorrecto, solo se admite un rango único, ¡por favor elimine la coma!",
            格式不正确: "¡Formato incorrecto!",
            格式不正确必须为整数且不能为0: "¡Formato incorrecto, debe ser un número entero y no puede ser 0!",
            左侧数字为负数时右侧数字必须也同时为负数: "Cuando el número de la izquierda es negativo, el número de la derecha también debe ser negativo.",
            格式不正确左侧数字必须小于等于右侧数字: "Formato incorrecto, el número de la izquierda debe ser menor o igual al número de la derecha."
        }
    },
    "ja-JP": {
        translation: {
            必须提供一个有效的范围: "有効な範囲を提供する必要があります！",
            格式不正确只支持单个范围请删除逗号: "形式が正しくありません。単一の範囲のみがサポートされているので、コンマを削除してください！",
            格式不正确: "形式が正しくありません！",
            格式不正确必须为整数且不能为0: "形式が正しくありません。整数でなければならず、0であってはなりません！",
            左侧数字为负数时右侧数字必须也同时为负数: "左側の数字が負の場合、右側の数字も負でなければなりません！",
            格式不正确左侧数字必须小于等于右侧数字: "形式が正しくありません。左側の数字は右側の数字以下でなければなりません！"
        }
    },
    "ko-KR": {
        translation: {
            必须提供一个有效的范围: "유효한 범위를 제공해야 합니다!",
            格式不正确只支持单个范围请删除逗号: "잘못된 형식입니다. 단일 범위만 지원되므로 쉼표를 제거하세요!",
            格式不正确: "잘못된 형식입니다!",
            格式不正确必须为整数且不能为0: "잘못된 형식입니다. 정수여야 하며 0일 수 없습니다!",
            左侧数字为负数时右侧数字必须也同时为负数: "왼쪽 숫자가 음수인 경우 오른쪽 숫자도 음수여야 합니다!",
            格式不正确左侧数字必须小于等于右侧数字: "잘못된 형식입니다. 왼쪽 숫자는 오른쪽 숫자보다 작거나 같아야 합니다!"
        }
    }
}
