// girlscript task 1
let oranges = 35;
let apples = 40;
let f = 0;
while (apples != 0 || oranges != 0) {
  if (oranges == 0) apples--;
  f++;
  if (apples == 0) break;
  if (oranges > 0) oranges--;
  if (f == 50) break;
}
if (f < 50) console.log('sorry cannot do it, the basket is empty'); else console.log(f);