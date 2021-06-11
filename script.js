const participants = [
    'Número 1', 'Número 2', 'Número 3', 'Número 4', 'Número 5', 'Número 6', 'Número 7', 'Número 8', 'Número 9', 'Número 10', 'Número 11', 'Número 12', 'Número 13', 'Número 14', 'Número 15', 'Número 16', 'Número 17', 'Número 18', 'Número 19', 'Número 20','Número 21', 'Número 22', 'Número 23', 'Número 24', 'Número 25', 'Número 26', 'Número 27', 'Número 28', 'Número 29', 'Número 30', 'Número 31', 'Número 32', 'Número 33', 'Número 34', 'Número 35', 'Número 36', 'Número 37', 'Número 38', 'Número 39', 'Número 40', 'Número 41', 'Número 42', 'Número 43', 'Número 44', 'Número 45', 'Número 46', 'Número 47', 'Número 48', 'Número 49', 'Número 50','Número 51', 'Número 52', 'Número 53', 'Número 54', 'Número 55', 'Número 56', 'Número 57', 'Número 58', 'Número 59', 'Número 60', 'Número 61', 'Número 62', 'Número 63', 'Número 64', 'Número 65', 'Número 66', 'Número 67', 'Número 68', 'Número 69', 'Número 70', 'Número 71', 'Número 72', 'Número 73', 'Número 74', 'Número 75', 'Número 76', 'Número 77', 'Número 78', 'Número 79', 'Número 80', 'Número 81', 'Número 82', 'Número 83', 'Número 84', 'Número 85', 'Número 86', 'Número 87', 'Número 88', 'Número 89', 'Número 90', 'Número 91', 'Número 92', 'Número 93', 'Número 94', 'Número 95', 'Número 96', 'Número 97', 'Número 98', 'Número 99', 'Número 100',
];


function draw() {
    const randomParticipant = participants[Math.floor(Math.random() * participants.length)];
    document.getElementById('result').innerHTML = `Parabéns, ${randomParticipant}! <br> você foi o ganhador da rifa! 🎉` 
}

const txtdraw = document.getElementById('drawtxt')



