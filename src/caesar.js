// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function getShiftedCharacter(character, shift) {
    const codeForA = "a".charCodeAt(0);
    const codeForZ = "z".charCodeAt(0);
    const characterCode = character.charCodeAt(0);

    let shiftedCharacterCode = characterCode + shift;

    if (shiftedCharacterCode < codeForA) {
      shiftedCharacterCode += 26;
    } else if (shiftedCharacterCode > codeForZ) {
      shiftedCharacterCode -= 26;
    }

    return String.fromCharCode(shiftedCharacterCode);
  }

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;

    // your solution code here
    let result = input.toLowerCase().split("");

    if (encode) {
      result = result.map((character) => {
        // if (!isLetter(character)) return character;
        if (!character.match(/[a-z]/)) return character;
        return getShiftedCharacter(character, shift);
      });
    } else {
      result = result.map((character) => {
        if (!character.match(/[a-z]/)) return character;
        return getShiftedCharacter(character, shift * -1);
      });
    }

    result = result.join("");

    return result;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
