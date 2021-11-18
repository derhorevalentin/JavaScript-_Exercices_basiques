console.log("---script_5---");

const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
  { title: "Les frères Karamazov", id: 450911, rented: 55 },
  { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
  { title: "Le meilleur des mondes", id: 88847, rented: 58 },
  { title: "La disparition", id: 364445, rented: 33 },
  { title: "La lune seule le sait", id: 63541, rented: 43 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Guerre et Paix", id: 748147, rented: 19 },
];

// --> Est-ce que tous les livres ont été au moins empruntés une fois ? <--
let borrowed = true; // livre emprunté(read) = true.
for (let i = 0; i < books.lengh; i++) {
  // ajoute une valeur i , plus petit que le nombre de livre , +1.
  if (books[i].rented == 0) {
    // si livre emprunté est strictement égal a 0.
    borrowed = false; // livre emprunté(read) = false
    break; // permet de sortir d'un case et que tous les cas non décrits dans les case finissent dans la partie default.
  }
}
if (borrowed) {
  // si read = true retourne "Tous les livres empruntés".
  console.log(
    "Est-ce que tous les livres ont été au moins empruntés une fois ?"
  );
  console.log("Tous les livres ont été au moins empruntés une fois");
} else {
  // si non read = false "Tous les livres n'ont pas été empruntés".
  console.log(
    "Est-ce que tous les livres ont été au moins empruntés une fois ?"
  );
  console.log("Tous les livres n'ont pas été empruntés au mois une fois");
}

// --> Quel est livre le plus emprunté ? <--
let mostRented = books.reduce(
  (max, book) =>
    //créer une varibale mostRented =  applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur, valeur max du tableau books.
    max.rented > book.rented ? max : book // valeur max de la colonne renter plus grande que , valeur max du tableau books colonne rented scrutée.
);
console.log("Quel est livre le plus emprunté ?");
console.log("Le livre le plus emprunté est : ");
console.log(mostRented);

// --> Quel est le livre le moins emprunté ? <--
let lessRented = books.reduce(
  (min, book) =>
    //créer une varibale lessRented =  applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur, valeur min du tableau books.
    min.rented < book.rented ? min : book // valeur min de la colonne renter plus petite que , valeur min du tableau books colonne rented scrutée.
);
console.log("Quel est livre le moins emprunté ?");
console.log("Le livre le moins emprunté est : ");
console.log(lessRented);

// --> Trouve le livre avec l'ID: 873495 ; <--
function idCheck(book) {
  // applique la fonction, idCheck dans le tableau book.
  return book.id == 873495; // retourne le livre avec l'id strictement égal à 873495.
}
let idSearch = books.find(idCheck); // créé une variable idSearch égal à, dans tableau books, la valeur qui respect la condition (id strictement égal à 873495).
console.log("Trouve le livre avec l'ID: 873495");
console.log("Le livre avec l'ID: 873495 est: ");
console.log(idSearch);

// --> Supprime le livre avec l'ID: 133712 ; <--
let destroy;
for (let i = 0; i < books.length; i++) {
  if (books[i].id == 133712) {
    destroy = books.splice(i, 1);
  }
}
console.log("Supprime le livre avec l'ID: 133712 !");
console.log("Le livre avec l'ID: 133712 a été supprimé ! ");
console.log(books);

// --> Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé). <--
function compare(a, b) {
  // créer une fonction qui compare les titres, pour ranger par ordre alphabétique.
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
}
books.sort(compare); // utilise la fonction compare pour l'odre alphabétique des titres.
console.log("Les livres par ordre alphabétique: ");
console.log(books);
