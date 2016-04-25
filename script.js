var i;
var fib = [0, 1];

for (i = 2; i < 30; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
alert(fib);