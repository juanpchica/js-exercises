/*
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example


There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Function Description

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock
Returns

int: the number of pairs
Input Format

The first line contains an integer , the number of socks represented in .
The second line contains  space-separated integers, , the colors of the socks in the pile.
*/
function sockMerchan(n, ar) {
  //Validate constrains
  if (!ar && ar.lenght !== n) return 0;

  let totalPairs = 0;
  let mapPairs = {};

  //Calculate numbers of pairs
  ar.forEach((sock) => {
    if (!mapPairs[sock]) {
      mapPairs[sock] = 1;
    } else {
      mapPairs[sock]++;
    }
  });

  for (const colorSock in mapPairs) {
    if (mapPairs[colorSock] % 2 === 0) {
      totalPairs += mapPairs[colorSock] / 2; //=
    } else {
      totalPairs += (mapPairs[colorSock] - 1) / 2;
    }
  }

  //Return number of pairs
  return totalPairs;
}

sockMerchan(9, [1, 3, 4, 1, 1, 3, 4, 4, 5]); //=

/******************************************************************** */
function rotLeft(a, d) {
  let rotateArr = [];
  let newPosition;

  for (const el in a) {
    newPosition = el - d; //=
    if (newPosition < 0) {
      newPosition = a.length + newPosition; //=
    }
    rotateArr[newPosition] = a[el];
  }

  return rotateArr;
}

rotLeft([1, 5, 3, 4, 2], 1); //=
