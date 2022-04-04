import { expect } from "@jest/globals";
import {text2morse, morse2text} from "./main.js";


//test lots of valid inputs
it("Should translate a to .-", () => {
    const result = text2morse(["a"]);
    console.log("res ", result)
    expect(result).toBe(".-")
})

it ("Should translate b to -...", () => {
    const result = text2morse(["b"]);
    expect(result).toBe("-...")
})

it ("Should translate c to -.-.", () => {
    const result = text2morse(["c"]);
    expect(result).toBe("-.-.")
})

it ("Should translate d to -..", () => {
    const result = text2morse(["d"]);
    expect(result).toBe("-..")
})

it ("Should translate e to .", () => {
    const result = text2morse(["e"]);
    expect(result).toBe(".")
})

it ("Should translate f to ..-.", () => {
    const result = text2morse(["f"]);
    expect(result).toBe("..-.")
})

it ("Should translate g to --.", () => {
    const result = text2morse(["g"]);
    expect(result).toBe("--.")
})

it ("Should translate h to ....", () => {
    const result = text2morse(["h"]);
    expect(result).toBe("....")
})

it ("Should translate i to ..", () => {
    const result = text2morse(["i"]);
    expect(result).toBe("..")
})

it ("Should translate j to .---", () => {
    const result = text2morse(["j"]);
    expect(result).toBe(".---")
})

it ("Should translate empty string to empty", () => {
    const result = text2morse("");
    expect(result).toBe("")
})

// MORSE TO ENGLISH

it ("Should translate .- to a", () => {
    const result = morse2text([".-"]);
    expect(result).toStrictEqual(["a"])
})

it ("Should translate -... to b", () => {
    const result = morse2text(["-..."]);
    expect(result).toStrictEqual(["b"])
})

it ("Should translate  -.-. to c", () => {
    const result = morse2text(["-.-."]);
    expect(result).toStrictEqual(["c"])
})

it ("Should translate -.. to d", () => {
    const result = morse2text(["-.."]);
    expect(result).toStrictEqual(["d"])
})

it ("Should translate . to e", () => {
    const result = morse2text(["."]);
    expect(result).toStrictEqual(["e"])
})

it ("Should translate ..-. to f", () => {
    const result = morse2text(["..-."]);
    expect(result).toStrictEqual(["f"])
})

it ("Should translate --. to g", () => {
    const result = morse2text(["--."]);
    expect(result).toStrictEqual(["g"])
})

it ("Should translate .... to h", () => {
    const result = morse2text(["...."]);
    expect(result).toStrictEqual(["h"])
})

it ("Should translate .. to i", () => {
    const result = morse2text([".."]);
    expect(result).toStrictEqual(["i"])
})
