import { describe, test, expect } from "vitest";
import { processWord } from "./task1";

describe("[0.25] обработка некорректных данных", () => {
  test("если слово содержит небуквенные символы, выдается ошибка", () => {
    expect(() => processWord("abc123", "a")).toThrowError(
      "Слово содержит небуквенные символы"
    );
  });

  test("[0.25] если пользователь отменяет ввод, выдается ошибка", () => {
    expect(() => processWord(null, "a")).toThrowError("Некорректное слово");
    expect(() => processWord("Рай", null)).toThrowError(
      "Не указан игнорируемый символ"
    );
  });
});

test("[0.25] работает при единственном вхождении игнорируемого символа", () => {
  expect(processWord("Рай", "а")).toBe("Рй");
  expect(processWord("Мячик", "м")).toBe("ячик");
});

test("[0.5] работает при множественном вхождении игнорируемого символа", () => {
  expect(processWord("Идиллия", "И")).toBe("длля");
  expect(processWord("Погода", "о")).toBe("Пгда");
});

test("[0.25] если игнорируемого символа нет в строке, отдается исходная", () => {
  expect(processWord("Погода", "я")).toBe("Погода");
});
