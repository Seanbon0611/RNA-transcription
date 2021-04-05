const toRna = (dna) => {
  if (dna.length === 0) {
    return "";
  }
  let sperateStrands = dna.split("");
  let result = [];
  for (let strand of sperateStrands) {
    switch (strand) {
      case "G":
        result.push("C");
        break;
      case "C":
        result.push("G");
        break;
      case "T":
        result.push("A");
        break;
      case "A":
        result.push("U");
        break;

      default:
        return "Error";
    }
  }
  return result.join("");
};

toRna("");
toRna("G");
toRna("ACGTGGTCTTAA")