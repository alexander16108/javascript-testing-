const string = (textLength) => {
  if (textLength.length < 1) {
    return 'the string is more than one character';
  } else if (textLength.length > 10) {
    return 'the characters inside this string is more than ten please reduce it';
  } else {
    return textLength.length;
  }
}

module.exports = string;