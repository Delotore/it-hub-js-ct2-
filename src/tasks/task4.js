/**
 * @param {string} word - Слово для проверки
 * @returns {boolean} - Итог проверки
 * @description Проверка слова на палиндром
 */
export function isPalindrome(word) {
  if (!word) {
    throw new Error("Пользователь отменил ввод");
  }
  if (word.includes(" ")) {
    throw new Error("Введено несколько слов");
  }
  if (!/^[а-яА-Яa-zA-Z]+$/.test(word)) {
    throw new Error("Некорректные входные данные");
  }

  let result = "";
  let left = 0;
  let right = word.length;
  for (left; left < word.length - 1; left++) {
    right--;
    if (word[left].toLowerCase() === word[right].toLowerCase()) {
      result = " - палиндром";
    } else {
      result = " - не палиндром";
    }
  }
  if (word.length === 1) {
    result = " - не палиндром";
  }
  return word + result;
}
