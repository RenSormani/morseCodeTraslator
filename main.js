const mapping = {
    "A" : ".-", 
    "B" : "-...",
    "C" : "-.-.", 
    "D" : "-..",
    "E" : ".", 
    "F" : "..-.", 
    "G" : "--.", 
    "H" : "....",
    "I" : "..", 
    "J" : ".---", 
    "K" : "-.-", 
    "L" : ".-..",
    "M" : "--", 
    "N" : "-.", 
    "O" : "---", 
    "P" : ".--.",
    "Q" : "--.-", 
    "R" : ".-.", 
    "S" : "...", 
    "T" : "-",
    "U" : "..-", 
    "V" : "...-", 
    "W" : ".--", 
    "X" : "-..-",
    "Y" : "-.--", 
    "Z" : "--..",
    
    
    "0" : "-----",
    "1" : ".----", 
    "2" : "..---", 
    "3" : "...--",
    "4" : "....-", 
    "5" : ".....", 
    "6" : "-....",
    "7" : "--...", 
    "8" : "---..", 
    "9" : "----."
}

// Function for toggle functionality
function toggle() {
	const decrypt = "Decrypt Message";
	const encrypt = "Encrypt Message";
	let current = document.getElementById("toggle").innerHTML;
			if(current == decrypt)
			{
				document.getElementById("toggle").innerHTML = encrypt;
				document.getElementById("input").value = "";
				document.getElementById("output").value = "";
				document.getElementById("input").placeholder = "Insert your morse code here...";
				document.getElementById("convert").innerHTML = "Convert to Plain Text"
				document.getElementById("convert").setAttribute('onclick','morse2text()');
			} else {
				document.getElementById("toggle").innerHTML = decrypt;
				document.getElementById("input").value = "";
				document.getElementById("output").value = "";
				document.getElementById("input").placeholder = "Type your message here...";
				document.getElementById("convert").innerHTML = "Convert to Morse Code"
				document.getElementById("convert").setAttribute('onclick','text2morse()');
			}
		}