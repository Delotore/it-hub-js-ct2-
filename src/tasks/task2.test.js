import { describe, test, expect } from "vitest";
import { getMultiplesOfThree } from "./task2";

describe("обработка некорректных данных", () => {
  test("[0.25] если пользователь отменяет ввод, выдается ошибка", () => {
    expect(() => getMultiplesOfThree(null)).toThrowError(
      "Пользователь отменил ввод"
    );
  });

  test("[0.5] если пользователь ввёл не число, выдается ошибка", () => {
    expect(() => getMultiplesOfThree("abc")).toThrowError(
      "Некорректные входные данные"
    );
  });
});

test("[0.5] работает на базовых случаях", () => {
  expect(getMultiplesOfThree("11")).toBe("3, 6, 9");
  expect(getMultiplesOfThree("14")).toBe("3, 6, 9, 12");
});

test("[0.25] правая граница включена в вывод", () => {
  expect(getMultiplesOfThree("9")).toBe("3, 6, 9");
});

test("[0.25] не добавляет лишние разделители", () => {
  expect(getMultiplesOfThree("4")).toBe("3");
});

test("[0.25] выдает пустую строку, если кратных нет", () => {
  expect(getMultiplesOfThree("2")).toBe("");
});