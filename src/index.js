const messages = [
    "Daniel",
    "Ely",
    "Barby",
    "Daniela",
    "Gela",
    "Aimeé",
    "Lexi",
    "Corazon",
    "Paulina",
    "Edith",
    "Diana"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };