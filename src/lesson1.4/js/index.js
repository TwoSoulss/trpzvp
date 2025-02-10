//1
// let i = 0;
//
// while (i <= 100) {
//     console.log(i);
//     i++;
// }

//2
// i = 0;

// do{
//     if (i % 2){
//         console.log(i + ' is odd');
//     } else
//     i++;
// } while (i <= 10);

//7
let decisions = +prompt('який день тижня? введіть число');

    if (!isNaN(decisions) && decisions >= 1 && decisions <= 7){
        switch (decisions) {
            case 1:
                console.log("Понеділок")
                break;
            case 2:
                console.log("Вівторок")
                break;
            case 3:
                console.log("Середа")
                break;
            case 4:
                console.log("Четвер")
                break;
            case 5:
                console.log("Пятниця")
                break;
            case 6:
                console.log("Субота")
                break;
            case 7:
                console.log("Неділя")
                break;
        }
    } else {
        console.log("ви ввели число")
    }

console.log(decisions);
