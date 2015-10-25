function checkNumber(a, name) {
  if (typeof(a) != "number") throw name + " must be a number";
}

function checkInteger(a, name) {
  if (!Number.isInteger(a)) throw name + " must be an integer";
}

function solution1(A, B, C) {
  checkNumber(A, "A")
  checkNumber(B, "B")
  checkNumber(C, "C")
  if (C <= 0) throw "C must be positive"
  if (A > B) throw "A cannot be greater than B"
  return (B - A) / C
}

function slowSolution2(A, B) {
  checkInteger(A, "A")
  checkInteger(B, "B")
  var result = 0;
  for (var i = A; i <= B; ++i) {
    for (var j = i + 1; j <= B; ++j) {
      result = Math.max(result, i ^ j)
    }
  }
  return result
}

function solution2(A, B) {
  checkInteger(A, "A")
  checkInteger(B, "B")
  if (A >= B) throw "A must be less than B"
  if (A < 0 && B >= 0) {
    var forNegatives = A != -1 ? solution2(A, -1) : 0;
    var forPositives = B != 0 ? solution2(0, B) : 0;
    return Math.max(forNegatives, forPositives);
  }
  var i = 0x80000000;
  while (i > 0 && (A & i) == (B & i)) {
    i >>>= 1;
  }
  return (i << 1) - 1;
}