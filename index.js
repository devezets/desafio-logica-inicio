//Classificador de nível de Herói

let herois = [
    { nome: "Arthas", xp: 500 },
    { nome: "Jinx", xp: 3000 },
    { nome: "Garen", xp: 12000 }
];

for (let i = 0; i < herois.length; i++) {

    let nivel = "";
    let xp = herois[i].xp;

    if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${herois[i].nome} está no nível de ${nivel}`);
}
