"use strict";

var mapping = {
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "V": "...-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----."
}; // Function for toggle functionality

function toggle() {
  var decrypt = "Decrypt Message";
  var encrypt = "Encrypt Message";
  var current = document.getElementById("toggle").innerHTML;

  if (current == decrypt) {
    document.getElementById("toggle").innerHTML = encrypt;
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
    document.getElementById("input").placeholder = "Insert your morse code here...";
    document.getElementById("convert").innerHTML = "Convert to Plain Text";
    document.getElementById("convert").setAttribute('onclick', 'morse2text()');
  } else {
    document.getElementById("toggle").innerHTML = decrypt;
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
    document.getElementById("input").placeholder = "Type your message here...";
    document.getElementById("convert").innerHTML = "Convert to Morse Code";
    document.getElementById("convert").setAttribute('onclick', 'text2morse()');
  }
} // Function for encrypting the message 


function text2morse() {
  var input = document.getElementById("input").value;
  input = input.toUpperCase();
  var arr1 = input.split("");
  var arr2 = arr1.map(function (x) {
    if (mapping[x]) {
      return mapping[x];
    } else {
      return x;
    }
  });
  var code = arr2.join(" ");
  document.getElementById("output").value = code;
} // Function to search value in an object


function getKey(obj, val) {
  return Object.keys(obj).find(function (key) {
    return obj[key] === val;
  });
} // Function for decrypting the message


function morse2text() {
  var code = document.getElementById("input").value;
  var arr1 = code.split(" ");
  var arr2 = arr1.map(function (x) {
    if (getKey(mapping, x)) {
      return getKey(mapping, x);
    } else if (x == "") {
      return " ";
    } else {
      return x;
    }
  }); //Removes the space characters in a string

  var text = arr2.join("").replace(/\s\s+/g, ' ');
  document.getElementById("output").value = text;
} //--------------------------------CLEAR-------------------------------------------


var inputValue;
var outputValue = document.getElementById("output__text");
document.getElementById("clear__button").addEventListener("click", function () {
  document.getElementById("input").value = "";
  document.getElementById("output__text").value = "";
});