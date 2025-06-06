import { runicWordsInSpell } from "./main";

describe("part 2 tests", () => {
  const runicWords = ["THE", "OWE", "MES", "ROD", "HER", "QAQ"];
  const allInscriptions = [
    "AWAKEN THE POWE ADORNED WITH THE FLAMES BRIGHT IRE",
    "THE FLAME SHIELDED THE HEART OF THE KINGS",
    "POWE PO WER P OWE R",
    "THERE IS THE END",
    "QAQAQ",
  ];
  const inscriptionOne: string[] = [allInscriptions[0]];

  test("should work normally", () => {
    const totalRunicSymbols = runicWordsInSpell(inscriptionOne, runicWords);
    expect(totalRunicSymbols).toBe(15);
  });

  test("should work normally", () => {
    const totalRunicSymbols = runicWordsInSpell(
      [allInscriptions[1]],
      runicWords,
    );
    expect(totalRunicSymbols).toBe(9);
  });

  test("should work normally", () => {
    const totalRunicSymbols = runicWordsInSpell(
      [allInscriptions[2]],
      runicWords,
    );
    expect(totalRunicSymbols).toBe(6);
  });

  test("should work normally", () => {
    const totalRunicSymbols = runicWordsInSpell(
      [allInscriptions[3]],
      runicWords,
    );
    expect(totalRunicSymbols).toBe(7);
  });
});
