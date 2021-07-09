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



function calc(array, n1, n2) {
  // Your code goes here
  sum = 0;
  for (var i = n1; i<=n2; i++){
    sum += i;
  }
  return sum; //=
}

var array = [0,1,2,3,4,5,3];
print(calc(array, 0, 6));


function closestToZero(numbers) {
  if (numbers.length === 0) return 0;

  let closest = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let absNumber = Math.abs(number);
    let absClosest = Math.abs(closest);

    if (absNumber < absClosest) {
      closest = number;
    } else if (absNumber === absClosest && closest < 0) {
      closest = number;
    }
  }

  return closest;
}

closestToZero([-9, 8, 2, -5, 7]); //=
