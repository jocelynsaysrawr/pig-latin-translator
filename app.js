const englishToPigLatin = str => {
  let translatedWord;
  if (str.charAt(0).match(/[aeiou]/gi)) {
    translatedWord = str + "-ay";
    return translatedWord;
  } else if (str.charAt(0).match(/[^aeiou]/gi)) {
    const vowelIdx = str.indexOf(str.match(/[aeiou]/gi)[0]);
    translatedWord =
      str.substr(vowelIdx) + "-" + str.substr(0, vowelIdx).toLowerCase() + "ay";
    return translatedWord;
  }
};

const pigLatinToEnglish = str => {
  let translatedWord;
  const dashIdx = str.indexOf(str.match(/\-/g));
  if (str.substr(dashIdx) === "-ay") {
    translatedWord = str.slice(0, -3);
    return translatedWord;
  } else {
    const consonants = str
      .substr(dashIdx)
      .slice(0, -2)
      .slice(1);
    translatedWord = consonants + str.substr(0, dashIdx);
    return translatedWord;
  }
};

console.log(englishToPigLatin("Pie"));
console.log(englishToPigLatin("apple"));

console.log(pigLatinToEnglish("ie-pay"));
console.log(pigLatinToEnglish("apple-ay"));
