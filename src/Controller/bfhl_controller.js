function isNumber(str) {
  return typeof str === "string" && /^\d+$/.test(str);
}
function isAlphabet(str) {
  return typeof str === "string" && /^[a-zA-Z]+$/.test(str);
}
function alternatingCapsReversed(letters) {
  // letters: array of single chars (lowercased)
  return letters
    .reverse()
    .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");
}

export function bfhlHandler(req, res, next) {
  try {
    const data = req.body?.data;
    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Body must have array field 'data'" });
    }

    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];
    const special_characters = [];
    let sumNum = 0;
    const allAlphaChars = []; // collect single letters for concat rule

    for (const item of data) {
      // Everything must be treated as strings in output
      const str = String(item);

      if (isNumber(str)) {
        const n = parseInt(str, 10);
        sumNum += n;
        (n % 2 === 0 ? even_numbers : odd_numbers).push(str);
      } else if (isAlphabet(str)) {
        alphabets.push(str.toUpperCase());
        // collect all letters (lowercased) for concat rule
        for (const ch of str.toLowerCase()) allAlphaChars.push(ch);
      } else {
        special_characters.push(str);
      }
    }

    const payload = {
      is_success: true,
      user_id: `${(process.env.FULL_NAME || "").toLowerCase()}_${process.env.DOB || ""}`,
      email: process.env.EMAIL || "",
      roll_number: process.env.ROLL_NUMBER || "",
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: String(sumNum),
      concat_string: alternatingCapsReversed(allAlphaChars),
    };

    return res.status(200).json(payload);
  } catch (err) {
    next(err);
  }
}
