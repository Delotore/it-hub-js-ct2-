/**
 * @param {string} word - Слово для проверки
 * @returns {boolean} - Итог проверки
 * @description Проверка слова на палиндром
 */
export function isPalindrome(word) {
  if (word === null) {
    throw new Error("Пользователь отменил ввод");
  }

  let result = "";
  let a = 1;
  let b = -1;
  let l = word.length;
  if (l === 1) {
    result = word + " - не палиндром";
  }
  return result;
}
