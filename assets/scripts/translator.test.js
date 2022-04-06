import Translator from './translator.js';
import { alphabet, morse } from './data';
import { expect } from '@jest/globals';

//test valid inputs
// ENGLISH TO MORSE

it("Should translate a to .-", () => {
    const result = translateMorse('a');
    expect(result).toBe(".-")
})

it ("Should translate b to -...", () => {
    const result = translateMorse(["b"]);
    expect(result).toBe("-...")
})

it ("Should translate c to -.-.", () => {
    const result = translateMorse(["c"]);
    expect(result).toBe("-.-.")
})

it ("Should translate d to -..", () => {
    const result = translateMorse(["d"]);
    expect(result).toBe("-..")
})

it ("Should translate e to .", () => {
    const result = translateMorse(["e"]);
    expect(result).toBe(".")
})

it ("Should translate f to ..-.", () => {
    const result = translateMorse(["f"]);
    expect(result).toBe("..-.")
})

it ("Should translate g to --.", () => {
    const result = translateMorse(["g"]);
    expect(result).toBe("--.")
})

it ("Should translate h to ....", () => {
    const result = translateMorse(["h"]);
    expect(result).toBe("....")
})

it ("Should translate i to ..", () => {
    const result = translateMorse(["i"]);
    expect(result).toBe("..")
})

it ("Should translate j to .---", () => {
    const result = translateMorse(["j"]);
    expect(result).toBe(".---")
})

it ("Should translate empty string to empty", () => {
    const result = translateMorse("");
    expect(result).toBe("")
})

// MORSE TO ENGLISH

it ("Should translate .- to a", () => {
    const result = translateEnglish([".-"]);
    expect(result).toStrictEqual(["a"])
})

it ("Should translate -... to b", () => {
    const result = translateEnglish(["-..."]);
    expect(result).toStrictEqual(["b"])
})

it ("Should translate  -.-. to c", () => {
    const result = translateEnglish(["-.-."]);
    expect(result).toStrictEqual(["c"])
})

it ("Should translate -.. to d", () => {
    const result = translateEnglish(["-.."]);
    expect(result).toStrictEqual(["d"])
})

it ("Should translate . to e", () => {
    const result = translateEnglish(["."]);
    expect(result).toStrictEqual(["e"])
})

it ("Should translate ..-. to f", () => {
    const result = translateEnglish(["..-."]);
    expect(result).toStrictEqual(["f"])
})

it ("Should translate --. to g", () => {
    const result = translateEnglish(["--."]);
    expect(result).toStrictEqual(["g"])
})

it ("Should translate .... to h", () => {
    const result = translateEnglish(["...."]);
    expect(result).toStrictEqual(["h"])
})

it ("Should translate .. to i", () => {
    const result = translateEnglish([".."]);
    expect(result).toStrictEqual(["i"])
})


// Invalid Inputs

// Null/No Inputs
it('Should return please input valid text when input is null', () => {
	const translator = new Translator();
	const englishResult = translateEnglish('');
	const morseResult = translateMorse('');
	expect(englishResult).toBe('Please write a message to translate');
	expect(morseResult).toBe('Please write a message to translate');
});