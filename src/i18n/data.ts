import { LanguageTypeEnum } from "."

const defaultNameSpace = "translation"

export enum XJsKitTranslationKeyNameEnum {
    必须提供一个有效的范围 = "必须提供一个有效的范围",
    格式不正确 = "格式不正确",
    格式不正确必须为整数且不能为0 = "格式不正确必须为整数且不能为0",
    左侧数字为负数时右侧数字必须也同时为负数 = "左侧数字为负数时右侧数字必须也同时为负数",
    格式不正确左侧数字必须小于等于右侧数字 = "格式不正确左侧数字必须小于等于右侧数字",
    默认范围文本提示语 = "默认范围文本提示语",
    页面范围文本提示语 = "页面范围文本提示语",
    工作表范围文本提示语 = "工作表范围文本提示语",
    字符范围文本提示语 = "字符范围文本提示语",
    请注意当前功能只支持一个连续的范围请删除范围中的逗号 = "请注意当前功能只支持一个连续的范围请删除范围中的逗号"
}

export const XJsKitI18nResourcesData: Record<LanguageTypeEnum, Record<typeof defaultNameSpace, Record<keyof typeof XJsKitTranslationKeyNameEnum, string>>> = {
    "zh-CN": {
        translation: {
            必须提供一个有效的范围: "必须提供一个有效的范围！",
            格式不正确: "格式不正确！",
            格式不正确必须为整数且不能为0: "格式不正确，必须为整数，且不能为 0！",
            左侧数字为负数时右侧数字必须也同时为负数: "左侧数字为负数时，右侧数字必须也同时为负数！",
            格式不正确左侧数字必须小于等于右侧数字: "格式不正确，左侧数字必须小于等于右侧数字！",
            默认范围文本提示语:
                "格式规范说明：【1】表示第 1 项；【2】表示第 2 项；【2:5】表示第 2 项到第 5 项；【-1】表示最后一项；【-2】表示倒数第 2 项 ；【-5:-2】表示倒数第 5 项至倒数第 2 项；【2,4:7,-5:-2】表示第 2 项和第 4 项至第 7 项及倒数第 5 项至倒数第 2 项。",
            页面范围文本提示语:
                "格式规范说明：【1】表示第 1 页；【2】表示第 2 页；【2:5】表示第 2 页到第 5 页；【-1】表示最后一页；【-2】表示倒数第 2 页 ；【-5:-2】表示倒数第 5 页至倒数第 2 页；【2,4:7,-5:-2】表示第 2 页和第 4 页至第 7 页及倒数第 5 页至倒数第 2 页。",
            工作表范围文本提示语:
                "格式规范说明：【1】表示第 1 个工作表；【2】表示第 2 个工作表；【2:5】表示第 2 个工作表到第 5 个工作表；【-1】表示最后一个工作表；【-2】表示倒数第 2 个工作表 ；【-5:-2】表示倒数第 5 个工作表至倒数第 2 个工作表；【2,4:7,-5:-2】表示第 2 个工作表和第 4 个工作表至第 7 个工作表及倒数第 5 个工作表至倒数第 2 个工作表。",
            字符范围文本提示语:
                "格式规范说明：【1】表示第 1 个字符；【2】表示第 2 个字符；【2:5】表示第 2 个字符到第 5 个字符；【-1】表示最后一个字符；【-2】表示倒数第 2 个字符 ；【-5:-2】表示倒数第 5 个字符至倒数第 2 个字符；【2,4:7,-5:-2】表示第 2 个字符和第 4 个字符至第 7 个字符及倒数第 5 个字符至倒数第 2 个字符。",
            请注意当前功能只支持一个连续的范围请删除范围中的逗号: "请注意，当前功能只支持一个连续的范围，请删除范围中的逗号！"
        }
    },
    "zh-TW": {
        translation: {
            必须提供一个有效的范围: "必須提供一個有效的範圍！",
            格式不正确: "格式不正確！",
            格式不正确必须为整数且不能为0: "格式不正確，必須為整數，且不能為 0！",
            左侧数字为负数时右侧数字必须也同时为负数: "左側數字為負數時，右側數字必須也同時為負數！",
            格式不正确左侧数字必须小于等于右侧数字: "格式不正確，左側數字必須小於等於右側數字！",
            默认范围文本提示语:
                "格式規範說明：【1】表示第 1 項；【2】表示第 2 項；【2:5】表示第 2 項到第 5 項；【-1】表示最後一項；【-2】表示倒數第 2 項 ；【-5:-2】表示倒數第 5 項至倒數第 2 項；【2,4:7,-5:-2】表示第 2 項和第 4 項至第 7 項及倒數第 5 項至倒數第 2 項。",
            页面范围文本提示语:
                "格式規範說明：【1】表示第 1 頁；【2】表示第 2 頁；【2:5】表示第 2 頁到第 5 頁；【-1】表示最後一頁；【-2】表示倒數第 2 頁 ；【-5:-2】表示倒數第 5 頁至倒數第 2 頁；【2,4:7,-5:-2】表示第 2 頁和第 4 頁至第 7 頁及倒數第 5 頁至倒數第 2 頁。",
            工作表范围文本提示语:
                "格式規範說明：【1】表示第 1 個工作表；【2】表示第 2 個工作表；【2:5】表示第 2 個工作表到第 5 個工作表；【-1】表示最後一個工作表；【-2】表示倒數第 2 個工作表 ；【-5:-2】表示倒數第 5 個工作表至倒數第 2 個工作表；【2,4:7,-5:-2】表示第 2 個工作表和第 4 個工作表至第 7 個工作表及倒數第 5 個工作表至倒數第 2 個工作表。",
            字符范围文本提示语:
                "格式規範說明：【1】表示第 1 個字符；【2】表示第 2 個字符；【2:5】表示第 2 個字符到第 5 個字符；【-1】表示最後一個字符；【-2】表示倒數第 2 個字符 ；【-5:-2】表示倒數第 5 個字符至倒數第 2 個字符；【2,4:7,-5:-2】表示第 2 個字符和第 4 個字符至第 7 個字符及倒數第 5 個字符至倒數第 2 個字符。",
            请注意当前功能只支持一个连续的范围请删除范围中的逗号: "請注意，目前功能只支援一個連續的範圍，請刪除範圍中的逗號！"
        }
    },
    "en-US": {
        translation: {
            必须提供一个有效的范围: "A valid range must be provided!",
            格式不正确: "Incorrect format!",
            格式不正确必须为整数且不能为0: "Incorrect format, must be an integer and cannot be 0!",
            左侧数字为负数时右侧数字必须也同时为负数: "When the left number is negative, the right number must also be negative!",
            格式不正确左侧数字必须小于等于右侧数字: "Incorrect format, the left number must be less than or equal to the right number!",
            默认范围文本提示语:
                "Format specification: [1] represents the 1st item; [2] represents the 2nd item; [2:5] represents the 2nd to the 5th item; [-1] represents the last item; [-2] represents the 2nd to last item; [-5:-2] represents the 5th to last item to the 2nd to last item; [2,4:7,-5:-2] represents the 2nd item and from the 4th to the 7th item and from the 5th to last item to the 2nd to last item.",
            页面范围文本提示语:
                "Format specification: [1] represents the 1st page; [2] represents the 2nd page; [2:5] represents the 2nd to the 5th page; [-1] represents the last page; [-2] represents the 2nd to last page; [-5:-2] represents the 5th to last page to the 2nd to last page; [2,4:7,-5:-2] represents the 2nd page and from the 4th to the 7th page and from the 5th to last page to the 2nd to last page.",
            工作表范围文本提示语:
                "Format specification: [1] represents the 1st worksheet; [2] represents the 2nd worksheet; [2:5] represents the 2nd to the 5th worksheet; [-1] represents the last worksheet; [-2] represents the 2nd to last worksheet; [-5:-2] represents the 5th to last worksheet to the 2nd to last worksheet; [2,4:7,-5:-2] represents the 2nd worksheet and from the 4th to the 7th worksheet and from the 5th to last worksheet to the 2nd to last worksheet.",
            字符范围文本提示语:
                "Format specification: [1] represents the 1st character; [2] represents the 2nd character; [2:5] represents the 2nd to the 5th character; [-1] represents the last character; [-2] represents the 2nd to last character; [-5:-2] represents the 5th to last character to the 2nd to last character; [2,4:7,-5:-2] represents the 2nd character and from the 4th to the 7th character and from the 5th to last character to the 2nd to last character.",
            请注意当前功能只支持一个连续的范围请删除范围中的逗号: "Please note, the current functionality only supports a continuous range, please remove the commas in the range!"
        }
    },
    "fr-FR": {
        translation: {
            必须提供一个有效的范围: "Une plage valide doit être fournie !",
            格式不正确: "Format incorrect !",
            格式不正确必须为整数且不能为0: "Format incorrect, doit être un entier et ne peut pas être 0 !",
            左侧数字为负数时右侧数字必须也同时为负数: "Lorsque le nombre à gauche est négatif, le nombre à droite doit également être négatif !",
            格式不正确左侧数字必须小于等于右侧数字: "Format incorrect, le nombre à gauche doit être inférieur ou égal au nombre à droite !",
            默认范围文本提示语:
                "Description du format : [1] représente le 1er élément ; [2] représente le 2ème élément ; [2:5] représente du 2ème au 5ème élément ; [-1] représente le dernier élément ; [-2] représente le 2ème à partir de la fin ; [-5:-2] représente du 5ème à partir de la fin au 2ème à partir de la fin ; [2,4:7,-5:-2] représente le 2ème élément et du 4ème au 7ème élément et du 5ème à partir de la fin au 2ème à partir de la fin.",
            页面范围文本提示语:
                "Description du format : [1] représente la 1ère page ; [2] représente la 2ème page ; [2:5] représente de la 2ème à la 5ème page ; [-1] représente la dernière page ; [-2] représente la 2ème à partir de la fin ; [-5:-2] représente de la 5ème à partir de la fin à la 2ème à partir de la fin ; [2,4:7,-5:-2] représente la 2ème page et de la 4ème à la 7ème page et de la 5ème à partir de la fin à la 2ème à partir de la fin.",
            工作表范围文本提示语:
                "Description du format : [1] représente la 1ère feuille de calcul ; [2] représente la 2ème feuille de calcul ; [2:5] représente de la 2ème à la 5ème feuille de calcul ; [-1] représente la dernière feuille de calcul ; [-2] représente la 2ème à partir de la fin ; [-5:-2] représente de la 5ème à partir de la fin à la 2ème à partir de la fin ; [2,4:7,-5:-2] représente la 2ème feuille de calcul et de la 4ème à la 7ème feuille de calcul et de la 5ème à partir de la fin à la 2ème à partir de la fin.",
            字符范围文本提示语:
                "Description du format : [1] représente le 1er caractère ; [2] représente le 2ème caractère ; [2:5] représente du 2ème au 5ème caractère ; [-1] représente le dernier caractère ; [-2] représente le 2ème à partir de la fin ; [-5:-2] représente du 5ème à partir de la fin au 2ème à partir de la fin ; [2,4:7,-5:-2] représente le 2ème caractère et du 4ème au 7ème caractère et du 5ème à partir de la fin au 2ème à partir de la fin.",
            请注意当前功能只支持一个连续的范围请删除范围中的逗号:
                "Veuillez noter que la fonctionnalité actuelle ne prend en charge qu'une plage continue, veuillez supprimer les virgules dans la plage !"
        }
    },
    "de-DE": {
        translation: {
            必须提供一个有效的范围: "Ein gültiger Bereich muss angegeben werden!",
            格式不正确: "Falsches Format!",
            格式不正确必须为整数且不能为0: "Falsches Format, muss eine ganze Zahl sein und darf nicht 0 sein!",
            左侧数字为负数时右侧数字必须也同时为负数: "Wenn die linke Zahl negativ ist, muss die rechte Zahl ebenfalls negativ sein!",
            格式不正确左侧数字必须小于等于右侧数字: "Falsches Format, die linke Zahl muss kleiner oder gleich der rechten Zahl sein!",
            默认范围文本提示语:
                "Formatbeschreibung: [1] steht für das 1. Element; [2] steht für das 2. Element; [2:5] steht für das 2. bis 5. Element; [-1] steht für das letzte Element; [-2] steht für das vorletzte Element; [-5:-2] steht für das 5. bis 2. Element von hinten; [2,4:7,-5:-2] steht für das 2. Element und das 4. bis 7. Element sowie das 5. bis 2. Element von hinten.",
            页面范围文本提示语:
                "Formatbeschreibung: [1] steht für die 1. Seite; [2] steht für die 2. Seite; [2:5] steht für die 2. bis 5. Seite; [-1] steht für die letzte Seite; [-2] steht für die vorletzte Seite; [-5:-2] steht für die 5. bis 2. Seite von hinten; [2,4:7,-5:-2] steht für die 2. Seite und die 4. bis 7. Seite sowie die 5. bis 2. Seite von hinten.",
            工作表范围文本提示语:
                "Formatbeschreibung: [1] steht für das 1. Arbeitsblatt; [2] steht für das 2. Arbeitsblatt; [2:5] steht für das 2. bis 5. Arbeitsblatt; [-1] steht für das letzte Arbeitsblatt; [-2] steht für das vorletzte Arbeitsblatt; [-5:-2] steht für das 5. bis 2. Arbeitsblatt von hinten; [2,4:7,-5:-2] steht für das 2. Arbeitsblatt und das 4. bis 7. Arbeitsblatt sowie das 5. bis 2. Arbeitsblatt von hinten.",
            字符范围文本提示语:
                "Formatbeschreibung: [1] steht für das 1. Zeichen; [2] steht für das 2. Zeichen; [2:5] steht für das 2. bis 5. Zeichen; [-1] steht für das letzte Zeichen; [-2] steht für das vorletzte Zeichen; [-5:-2] steht für das 5. bis 2. Zeichen von hinten; [2,4:7,-5:-2] steht für das 2. Zeichen und das 4. bis 7. Zeichen sowie das 5. bis 2. Zeichen von hinten.",
            请注意当前功能只支持一个连续的范围请删除范围中的逗号:
                "Bitte beachten Sie, dass die aktuelle Funktionalität nur einen kontinuierlichen Bereich unterstützt, bitte entfernen Sie die Kommas im Bereich!"
        }
    },
    "es-ES": {
        translation: {
            必须提供一个有效的范围: "¡Debe proporcionarse un rango válido!",
            格式不正确: "¡Formato incorrecto!",
            格式不正确必须为整数且不能为0: "¡Formato incorrecto, debe ser un número entero y no puede ser 0!",
            左侧数字为负数时右侧数字必须也同时为负数: "Cuando el número de la izquierda es negativo, el número de la derecha también debe ser negativo.",
            格式不正确左侧数字必须小于等于右侧数字: "Formato incorrecto, el número de la izquierda debe ser menor o igual al número de la derecha.",
            默认范围文本提示语:
                "Especificación de formato: [1] representa el 1er elemento; [2] representa el 2do elemento; [2:5] representa del 2do al 5to elemento; [-1] representa el último elemento; [-2] representa el 2do desde el final; [-5:-2] representa del 5to desde el final al 2do desde el final; [2,4:7,-5:-2] representa el 2do elemento y del 4to al 7mo elemento y del 5to desde el final al 2do desde el final.",
            页面范围文本提示语:
                "Especificación de formato: [1] representa la 1ra página; [2] representa la 2da página; [2:5] representa de la 2da a la 5ta página; [-1] representa la última página; [-2] representa la 2da desde el final; [-5:-2] representa de la 5ta desde el final a la 2da desde el final; [2,4:7,-5:-2] representa la 2da página y de la 4ta a la 7ma página y de la 5ta desde el final a la 2da desde el final.",
            工作表范围文本提示语:
                "Especificación de formato: [1] representa la 1ra hoja de cálculo; [2] representa la 2da hoja de cálculo; [2:5] representa de la 2da a la 5ta hoja de cálculo; [-1] representa la última hoja de cálculo; [-2] representa la 2da desde el final; [-5:-2] representa de la 5ta desde el final a la 2da desde el final; [2,4:7,-5:-2] representa la 2da hoja de cálculo y de la 4ta a la 7ma hoja de cálculo y de la 5ta desde el final a la 2da desde el final.",
            字符范围文本提示语:
                "Especificación de formato: [1] representa el 1er carácter; [2] representa el 2do carácter; [2:5] representa del 2do al 5to carácter; [-1] representa el último carácter; [-2] representa el 2do desde el final; [-5:-2] representa del 5to desde el final al 2do desde el final; [2,4:7,-5:-2] representa el 2do carácter y del 4to al 7mo carácter y del 5to desde el final al 2do desde el final.",
            请注意当前功能只支持一个连续的范围请删除范围中的逗号: "Tenga en cuenta que la funcionalidad actual solo admite un rango continuo, ¡por favor elimine las comas en el rango!"
        }
    },
    "ja-JP": {
        translation: {
            必须提供一个有效的范围: "有効な範囲を提供する必要があります！",
            格式不正确: "形式が正しくありません！",
            格式不正确必须为整数且不能为0: "形式が正しくありません。整数でなければならず、0であってはなりません！",
            左侧数字为负数时右侧数字必须也同时为负数: "左側の数字が負の場合、右側の数字も負でなければなりません！",
            格式不正确左侧数字必须小于等于右侧数字: "形式が正しくありません。左側の数字は右側の数字以下でなければなりません！",
            默认范围文本提示语:
                "形式仕様の説明：【1】は第1項目を表します。【2】は第2項目を表します。【2:5】は第2項目から第5項目を表します。【-1】は最後の項目を表します。【-2】は最後から2番目の項目を表します。【-5:-2】は最後から5番目の項目から最後から2番目の項目を表します。【2,4:7,-5:-2】は第2項目と第4項目から第7項目及び最後から5番目の項目から最後から2番目の項目を表します。",
            页面范围文本提示语:
                "形式仕様の説明：【1】は第1ページを表します。【2】は第2ページを表します。【2:5】は第2ページから第5ページを表します。【-1】は最後のページを表します。【-2】は最後から2番目のページを表します。【-5:-2】は最後から5番目のページから最後から2番目のページを表します。【2,4:7,-5:-2】は第2ページと第4ページから第7ページ及び最後から5番目のページから最後から2番目のページを表します。",
            工作表范围文本提示语:
                "形式仕様の説明：【1】は第1ワークシートを表します。【2】は第2ワークシートを表します。【2:5】は第2ワークシートから第5ワークシートを表します。【-1】は最後のワークシートを表します。【-2】は最後から2番目のワークシートを表します。【-5:-2】は最後から5番目のワークシートから最後から2番目のワークシートを表します。【2,4:7,-5:-2】は第2ワークシートと第4ワークシートから第7ワークシート及び最後から5番目のワークシートから最後から2番目のワークシートを表します。",
            字符范围文本提示语:
                "形式仕様の説明：【1】は第1文字を表します。【2】は第2文字を表します。【2:5】は第2文字から第5文字を表します。【-1】は最後の文字を表します。【-2】は最後から2番目の文字を表します。【-5:-2】は最後から5番目の文字から最後から2番目の文字を表します。【2,4:7,-5:-2】は第2文字と第4文字から第7文字及び最後から5番目の文字から最後から2番目の文字を表します。",
            请注意当前功能只支持一个连续的范围请删除范围中的逗号: "現在の機能は連続した範囲のみをサポートしているため、範囲内のコンマを削除してください！"
        }
    },
    "ko-KR": {
        translation: {
            必须提供一个有效的范围: "유효한 범위를 제공해야 합니다!",
            格式不正确: "잘못된 형식입니다!",
            格式不正确必须为整数且不能为0: "잘못된 형식입니다. 정수여야 하며 0일 수 없습니다!",
            左侧数字为负数时右侧数字必须也同时为负数: "왼쪽 숫자가 음수인 경우 오른쪽 숫자도 음수여야 합니다!",
            格式不正确左侧数字必须小于等于右侧数字: "잘못된 형식입니다. 왼쪽 숫자는 오른쪽 숫자보다 작거나 같아야 합니다!",
            默认范围文本提示语:
                "형식 사양 설명: [1]은 첫 번째 항목을 나타냅니다. [2]는 두 번째 항목을 나타냅니다. [2:5]는 두 번째 항목에서 다섯 번째 항목을 나타냅니다. [-1]은 마지막 항목을 나타냅니다. [-2]는 뒤에서 두 번째 항목을 나타냅니다. [-5:-2]는 뒤에서 다섯 번째 항목에서 뒤에서 두 번째 항목을 나타냅니다. [2,4:7,-5:-2]는 두 번째 항목 및 네 번째 항목에서 일곱 번째 항목 및 뒤에서 다섯 번째 항목에서 뒤에서 두 번째 항목을 나타냅니다.",
            页面范围文本提示语:
                "형식 사양 설명: [1]은 첫 번째 페이지를 나타냅니다. [2]는 두 번째 페이지를 나타냅니다. [2:5]는 두 번째 페이지에서 다섯 번째 페이지를 나타냅니다. [-1]은 마지막 페이지를 나타냅니다. [-2]는 뒤에서 두 번째 페이지를 나타냅니다. [-5:-2]는 뒤에서 다섯 번째 페이지에서 뒤에서 두 번째 페이지를 나타냅니다. [2,4:7,-5:-2]는 두 번째 페이지 및 네 번째 페이지에서 일곱 번째 페이지 및 뒤에서 다섯 번째 페이지에서 뒤에서 두 번째 페이지를 나타냅니다.",
            工作表范围文本提示语:
                "형식 사양 설명: [1]은 첫 번째 워크시트를 나타냅니다. [2]는 두 번째 워크시트를 나타냅니다. [2:5]는 두 번째 워크시트에서 다섯 번째 워크시트를 나타냅니다. [-1]은 마지막 워크시트를 나타냅니다. [-2]는 뒤에서 두 번째 워크시트를 나타냅니다. [-5:-2]는 뒤에서 다섯 번째 워크시트에서 뒤에서 두 번째 워크시트를 나타냅니다. [2,4:7,-5:-2]는 두 번째 워크시트 및 네 번째 워크시트에서 일곱 번째 워크시트 및 뒤에서 다섯 번째 워크시트에서 뒤에서 두 번째 워크시트를 나타냅니다.",
            字符范围文本提示语:
                "형식 사양 설명: [1]은 첫 번째 문자를 나타냅니다. [2]는 두 번째 문자를 나타냅니다. [2:5]는 두 번째 문자에서 다섯 번째 문자를 나타냅니다. [-1]은 마지막 문자를 나타냅니다. [-2]는 뒤에서 두 번째 문자를 나타냅니다. [-5:-2]는 뒤에서 다섯 번째 문자에서 뒤에서 두 번째 문자를 나타냅니다. [2,4:7,-5:-2]는 두 번째 문자 및 네 번째 문자에서 일곱 번째 문자 및 뒤에서 다섯 번째 문자에서 뒤에서 두 번째 문자를 나타냅니다.",
            请注意当前功能只支持一个连续的范围请删除范围中的逗号: "현재 기능은 연속 범위만 지원하므로 범위 내 쉼표를 제거하세요!"
        }
    }
}
