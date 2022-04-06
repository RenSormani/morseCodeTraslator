import Translator from './translator.js';
import { alphabet, morse } from './data.js';
import { expect } from '@jest/globals';

//test valid inputs
// ENGLISH TO MORSE

it('Should translate a to .-', () => {
	const translator = new Translator(alphabet, morse);
	const result = translator.translateMorse('a');
	expect(result).toBe('.-');
});

it ('Should translate b to -...', () => {
    const translator = new Translator(alphabet, morse);
    const result = translator.translateMorse(['b']);
    expect(result).toBe('-...')
})

it ("Should translate c to -.-.", () => {
    const translator = new Translator(alphabet, morse);
    const result = translator.translateMorse(['c']);
    expect(result).toBe("-.-.")
})

it ("Should translate d to -..", () => {
    const translator = new Translator(alphabet, morse);
    const result = translator.translateMorse(["d"]);
    expect(result).toBe("-..")
})

it ("Should translate e to .", () => {
    const translator = new Translator(alphabet, morse);
    const result = translator.translateMorse(["e"]);
    expect(result).toBe(".")
})

it ("Should translate f to ..-.", () => {
    const translator = new Translator(alphabet, morse);
    const result = translator.translateMorse(["f"]);
    expect(result).toBe("..-.")
})

it ("Should translate g to --.", () => {
    const translator = new Translator(alphabet, morse);
    const result = translator.translateMorse(["g"]);
    expect(result).toBe("--.")
})

it ("Should translate h to ....", () => {
    const translator = new Translator(alphabet, morse);
    const result = translator.translateMorse(["h"]);
    expect(result).toBe("....")
})

it ("Should translate i to ..", () => {
    const translator = new Translator(alphabet, morse);
    const result = translator.translateMorse(["i"]);
    expect(result).toBe("..")
})

it ("Should translate j to .---", () => {
    const translator = new Translator(alphabet, morse);
    const result = translator.translateMorse(["j"]);
    expect(result).toBe(".---")
})

it ("Should translate empty string to 'Please write a message to translate'", () => {
    const translator = new Translator(alphabet, morse);
    const result = translator.translateMorse("");
    expect(result).toBe("Please write a message to translate")
})

// MORSE TO ENGLISH

it('Should translate .- to a', () => {
	const translator = new Translator(alphabet, morse);
	const result = translator.translateEnglish('.-');
	expect(result).toBe('a');
});

it('Should translate -... to b', () => {
	const translator = new Translator(alphabet, morse);
	const result = translator.translateEnglish('-...');
	expect(result).toBe('b');
});

it('Should translate -.-. to c', () => {
	const translator = new Translator(alphabet, morse);
	const result = translator.translateEnglish('-.-.');
	expect(result).toBe('c');
});

it('Should translate -.. to d', () => {
	const translator = new Translator(alphabet, morse);
	const result = translator.translateEnglish('-..');
	expect(result).toBe('d');
});

it('Should translate . to e', () => {
	const translator = new Translator(alphabet, morse);
	const result = translator.translateEnglish('.');
	expect(result).toBe('e');
});

it('Should translate ..-. to f', () => {
	const translator = new Translator(alphabet, morse);
	const result = translator.translateEnglish('..-.');
	expect(result).toBe('f');
});

it('Should translate --. to g', () => {
	const translator = new Translator(alphabet, morse);
	const result = translator.translateEnglish('--.');
	expect(result).toBe('g');
});

it('Should translate .... to h', () => {
	const translator = new Translator(alphabet, morse);
	const result = translator.translateEnglish('....');
	expect(result).toBe('h');
});

it('Should translate .. to i', () => {
	const translator = new Translator(alphabet, morse);
	const result = translator.translateEnglish('..');
	expect(result).toBe('i');
});


// Invalid Inputs

// Null/No Inputs
it('Should return please input valid text when input is null', () => {
	const translator = new Translator();
	const englishResult = translator.translateEnglish('');
	const morseResult = translator.translateMorse('');
	expect(englishResult).toBe('Please write a message to translate');
	expect(morseResult).toBe('Please write a message to translate');
});