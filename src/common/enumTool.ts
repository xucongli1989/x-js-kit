import { KeyValue } from "../entity/keyValue";

/**
 * 将枚举转换为KeyValue列表
 */
export function convertEnumToList<T>(em: T): KeyValue[] {
  const lst = [] as KeyValue[];
  for (const key in em) {
    if (!isNaN(Number(key))) {
      continue;
    }
    const item = {} as KeyValue;
    item.key = key;
    item.value = em[key];
    lst.push(item);
  }
  return lst;
}
