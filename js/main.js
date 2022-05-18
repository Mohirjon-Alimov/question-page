var message = alert("Salom hush kelibsiz");
var yourName = prompt("ismingiz nima ?", "Ali" );
var surname = prompt("familiyangiz", "Aliyev");
var age = prompt("yoshingiz", "18");
var whereBorn = prompt("Tug'ilgan manzilingiz");
var areStudy = prompt("O'qiysizmi?");
var work = prompt("Ishlaysizmi?");

var list = document.querySelector("ul");


console.log("ismingiz: " + yourName + "\n" + "familiyangiz: " + surname + "\n" + "yoshingiz: " + age + "\n" + "Tug'ilgan manzilingiz: " + whereBorn + "\n" + "O'qiysizmi? "+ areStudy + "\n" + "Ishlaysizmi? " + work);

var elName = document.createElement("li");
var elSurname = document.createElement("li");
var elAge = document.createElement("li");
var elWhereBorn = document.createElement("li");
var elStudy = document.createElement("li");
var elWork = document.createElement("li");


var pForName = document.createElement("p");
var pForSurname = document.createElement("p");
var pForAge = document.createElement("p");
var pForBorn = document.createElement("p");
var pForStudy = document.createElement("p");
var pForWork = document.createElement("p");

pForName.textContent = `ismingiz: ${yourName}`;
pForSurname.textContent = "familiyangiz: " + surname;
pForAge.textContent = "yoshingiz: " + age;
pForBorn.textContent = "Tug'ilgan manzilingiz: " + whereBorn;
pForStudy.textContent = "O'qiysizmi? "+ areStudy;
pForWork.textContent = "Ishlaysizmi? " + work;

elName.appendChild(pForName);
elSurname.appendChild(pForSurname);
elAge.appendChild(pForAge);
elWhereBorn.appendChild(pForBorn);
elStudy.appendChild(pForStudy);
elWork.appendChild(pForWork);

list.append(elName, elSurname, elAge, elWhereBorn, elStudy, elWork);