console.log("---script_4---");

const entrepreneurs = [
  { first: "Steve", last: "Jobs", year: 1955 },
  { first: "Oprah", last: "Winfrey", year: 1954 },
  { first: "Bill", last: "Gates", year: 1955 },
  { first: "Sheryl", last: "Sandberg", year: 1969 },
  { first: "Mark", last: "Zuckerberg", year: 1984 },
  { first: "Beyonce", last: "Knowles", year: 1981 },
  { first: "Jeff", last: "Bezos", year: 1964 },
  { first: "Diane", last: "Hendricks", year: 1947 },
  { first: "Elon", last: "Musk", year: 1971 },
  { first: "Marissa", last: "Mayer", year: 1975 },
  { first: "Walt", last: "Disney", year: 1901 },
  { first: "Larry", last: "Page", year: 1973 },
  { first: "Jack", last: "Dorsey", year: 1976 },
  { first: "Evan", last: "Spiegel", year: 1990 },
  { first: "Brian", last: "Chesky", year: 1981 },
  { first: "Travis", last: "Kalanick", year: 1976 },
  { first: "Marc", last: "Andreessen", year: 1971 },
  { first: "Peter", last: "Thiel", year: 1967 },
];
// --> Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ; <--
function born(x) {
  return x.year > 1969 && x.year < 1980; // Crée une fonction born qui retourne les dates entre 1969 et 1980.
}
let rh = entrepreneurs.filter(born); // Variable = filtre dans le tableau les dates de naissance, (compris entre 1969 et 1980).
console.log("liste des entrepreneurs qui sont nés dans les années 70:  ");
console.log(rh);

// --> Sors une array qui contient le prénom et le nom des entrepreneurs ; <--
rh = []; // créer un tableau vide rh
for (i = 0; i < entrepreneurs.length; i++) {
  // créer une valeur a 0 pour remplir le tableau rh de la meme longueur que le tableau entrepreneurs
  rh[i] = { first: entrepreneurs[i].first, last: entrepreneurs[i].last }; // dans un tableau rh récupère le first(prénom) et last(nom) du tableau entrepreneurs.
}
console.log("Le prénom et le nom des entrepreneurs: ");
console.log(rh);

// --> Quel âge aurait chaque inventeur aujourd'hui ? <--
rh = [];
for (let i = 0; i < entrepreneurs.length; i++) {
  rh[i] = {
    first: entrepreneurs[i].first,
    last: entrepreneurs[i].last,
    year: entrepreneurs[i].year,
    age: Date.now() - entrepreneurs[i].year, //ajoute une colonne age dans le tableau rh.
  };
}
console.log("L'âge des inventeurs aujourd'hui est: ");
console.log(rh);

// --> Trie les entrepreneurs par ordre alphabétique du nom de famille. <--
function compare(a, b) {
  // créer une fonction qui compare les last(nom), pour ranger par ordre alphabétique.
  if (a.last < b.last) {
    return -1;
  }
  if (a.last > b.last) {
    return 1;
  }
  return 0;
}

rh = [];
for (let i = 0; i < entrepreneurs.length; i++) {
  rh[i] = {
    last: entrepreneurs[i].last,
    first: entrepreneurs[i].first,
    last: entrepreneurs[i].last,
    year: entrepreneurs[i].year,
    age: 2021 - entrepreneurs[i].year,
  };
}
rh.sort(compare); // utilise la fonction compare pour l'odre alphabétique des noms de famille.

console.log("les entrepreneurs par ordre alphabétique du nom de famille: ");
console.log(rh);
