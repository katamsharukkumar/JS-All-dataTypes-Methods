//******************String Methods************** */
str ="Hello"//original

console.log(str.length); //returns the length of the string 
console.log(str.charAt(1));//returns the character at the specified index in a string
console.log(str.concat(" World")); //concatenates given arguments to the given string.
console.log(str.includes("o")); // returns true or false
console.log(str.indexOf("e")); //returns the index of the first occurence of the substring
console.log(str.lastIndexOf("l")); //returns the index of the first occurence of the substring
console.log("c".localeCompare("b"));//checks if a given string comes before, after, or is equivalent as another string in sort order.
console.log("b".localeCompare("c"));
console.log("c".localeCompare("c"));
console.log(str.padEnd(10,'*')); //pads the current string with another string to the end
console.log(str.padStart(10,'*')); //pads the current string with another string to the start
console.log(str.repeat(3));//creates a new string by repeating the given string a specified number of times and returns it
console.log(str.replace("o","f"));//returns a new string with the specified string/regex replaced.
console.log(str.replaceAll("l",'i'));// returns a new string with all matches of a pattern replaced by a replacement
console.log(str.search(/[a-z]/)); //searches for a match between a given string and a regular expression.
console.log(str.slice(2,4)); //extracts and returns a section of a string.
console.log(str.substring(2,4)); // slice and substring are same
console.log(str.split('')); //divides a string into a list of substrings and returns them as an array.
console.log(str.startsWith('H'));// returns true or false
console.log(str.endsWith('o'));// returns true or false
console.log(str.toUpperCase());//eturns the string converted to uppercase
console.log(str.toLowerCase());//eturns the string converted to lowercase
console.log("    world  ".trim()); //


//***************NUmber Methods************* */
let num = 23.34200000000 ;
let num1 = "675asd"
console.log(isNaN(num));	//Determines whether the passed value is NaN. //returns true or false
console.log(isFinite(num));	//Determines whether the passed value is a finite number. ////returns true or false
console.log(parseFloat(num));	//Converts the numeric floating string to a floating-point number.
console.log(parseInt(num1));	//Converts the numeric string to an integer. //returns number or NaN
console.log(num.toExponential());//	Returns a string value for a number in exponential notation.
console.log(num.toFixed());	//Returns a string value for a number in fixed-point notation.
console.log(num.toPrecision());	//Returns a string value for a number to a specified precision.
console.log(num.toString());	//Returns a string value in a specified radix (base).
console.log(num.valueOf());	//Returns the number's value.
console.log(num1.toLocaleString());	//Returns a string with a language-sensitive representation of a number.