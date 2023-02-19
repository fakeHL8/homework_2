const student = "Ромашов Владимир Владимирович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

const sim1 = Array(16).fill([4, 1, 2, 5, 2, 2, 0]).flat();
const ses1 = Array(1).fill([0, 2, 0, 2, 0, 0, 0]).flat();
const holi = Array(2).fill([0, 0, 0, 0, 0, 0, 0]).flat();
const sim2 = Array(23).fill([1, 4, 4, 2, 5, 0, 0]).flat();
const ses2 = Array(1).fill([2, 0, 2, 0, 2, 0, 0]).flat();

let array = [sim1, ses1, holi, sim2, ses2].flat();

let fullprice = +prompt('Стоимость приставки', 23500); // Ввод стоимости приставки
let fare = +prompt('Стоимость проезда', 120); // Ввод стоимости билета на проезд
let fare1 = +prompt('Дают на проезд', 150); // Сколько даёт мама на проезд
let lunch = +prompt('Дают на обед', 250); // Сколько даёт мама на обед

const diff = fare1 - fare;

let money = 0;
let day = 0;

if (diff < 0) {
    alert('Стоимость проезда больше чем дают на проезд')
} else {
    for (let elim = 0; elim < array.length; elim++) {
        if (money >= fullprice) {
            break
        }

        if((array[elim] <= 3) && (array[elim] > 0)) {
            money = money + lunch + diff
        } else if (array[elim] > 3) {
            money = money + diff
        }

        day = day + 1
        continue
    }
}

if (money >= fullprice) {
    console.log('На приставку накопить удалось за ' + Number(day) + ' дней.')
} else {
    console.log('На приставку накопить не удалось, но за все время было накоплено ' + Number(money) + ' рублей.')
}