const reverseString = (text) => {
  text = text.split("").reverse().join("");
  return text;
}

module.exports = reverseString;