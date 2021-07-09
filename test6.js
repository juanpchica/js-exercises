function encode(plainText) {
  result = "";

  plainText = plainText.toLowerCase();

  for (var i = 0; i < plainText.length; i++) {
    // Counting occurrences of s[i]
    var count = 1;
    while (
      i + 1 < plainText.length &&
      plainText.charAt(i) == plainText.charAt(i + 1)
    ) {
      i++;
      count++;
    }
    result += count + plainText.charAt(i);
  }

  return result;
}

encode("aaaabcccaaa"); //=

function average(table) {
  // Your code goes here
  if (table === "") return 0;
  sum = table.reduce((acc, val) => {
    return acc + val; //=
  });

  return sum / table.length;
}

average([5, 5, 5]); //=
