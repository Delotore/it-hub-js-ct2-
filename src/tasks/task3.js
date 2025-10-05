/**
 * @param {string} height - Высота лесенки
 * @returns {string} Строка с отображением лесенки
 * @description Формирование строки с лесенкой заданной длины
 */
export function renderLadder(height) {
  if (height === null) {
    throw new Error("Пользователь отменил ввод");
  }

  if (isNaN(height)) {
    throw new Error("Некорректные входные данные");
  }
  const h = Number(height);

  if (h < 0) {
    throw new Error("Некорректные входные данные");
  }

  if (!Number.isInteger(h)) {
    throw new Error("Некорректные входные данные");
  }

  if (h === 0) {
    return "";
  }

  let result = "";
  let ladder = "";
  for (let a = 1; a <= h; a++) {
    ladder = ladder + a;
    result += ladder + "\n";
  }
  return result.trimEnd();
}
