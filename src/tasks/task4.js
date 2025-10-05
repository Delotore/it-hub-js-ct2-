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

  let wordreversed = "";
  let result = "";
  for (let a = word.length - 1; a >= 0; a--) {
    wordreversed += word[a];
  }
  if (word.toLowerCase() === wordreversed.toLowerCase()) {
    result = " - палиндром";
  } else {
    result = " - не палиндром";
  }
  if (word.length === 1) {
    result = " - не палиндром";
  }
  return word + result;
}
