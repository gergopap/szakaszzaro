
1.	//boolean	    integer     string	    char
true		      1		     'valami' 	  'a'

2.
// string számot integernek másol vagy valami hasonlo

3.
let tomb = [1, 2, 3, 4, 5, 6];
let osszeg = 0;

for (let i = 0; i < tomb.length; i++) {
  osszeg += tomb[i];
}

4.

let tomb2 = [1, 2, 3, 4, 5, 6];
let darab = 0;

for (let i = 0; i < tomb2.length; i++) {
  darab++;
}

5.

6.
let tomb1 = [1, 2, 3];
let tomb2 = [1, 3, 7, 9];
let unio = [];
let i;
let j = 0;

for (let i = 0; i < tomb1.length; i++) {
  unio[j] = tomb1[i];
  j++;
};

for (let k = 0; k < tomb2.length; k++) {
  i = 0;
  while (i<tomb2.length && tomb1[i] !== tomb2[j]) {
    i++;
  }
  if (i === tomb1.length ) {
    unio[j] = tomb2[j];
    j++;
  }
};

7.

const osszeadas = (a, b) => {
  return(a + b);
};

const kivonas = (a, b) => {
  return (a -b);
}

const osztas = (a, b) => {
  return (a / b);
}

const szorzas = (a, b) => {
  return (a * b);
}
module.exports(osszeadas, kivonas, szorzas, osztas);

8.

9.

