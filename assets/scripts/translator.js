// import alphabet and morse data from "./data.js"
import { alphabet, morse } from './data.js';

// Create a constructor with a class of translator to accommodate translation functions"
class Translator {
	constructor(alphabet, morse) {
		this.alphabet = alphabet;
		this.morse = morse;
		this.message = '';
		this.translatedMessage = '';
	}

	text2Morse(message) {
		console.log(message);
		let inputText = message.toLowerCase();
		if (inputText.length === 0) {
			return 'Please write a message to translate';
		} else {
			return inputText
				.split('')
				.map((letter) => alphabet[letter])
				.join(' ');
		}
	}

	morse2Text(message) {
		let inputText = message;
		if (inputText.length === 0) {
			return 'Please write a message to translate';
		} else {
			return inputText
				.split(' ')
				.map((letter) => morse[letter])
				.join('');
		}
	}
}

export default Translator;