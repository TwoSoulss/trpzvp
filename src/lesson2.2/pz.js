//1 pz
// import axios from 'axios';
//
// async function fetchData() {
//     try{
//         const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
//         console.log(response);
//     } catch (error){
//         console.error(error.message);
//     }
// }
//
// await fetchData();

//2 pz
// import playSound from 'play-sound';
// import chalk from 'chalk';
//
// const player = playSound();
//
// player.play('/home/jokail/Downloads/pda_4LbLWWH.mp3', function (err) {
//     if (err) {
//         console.error(chalk.red('Не вдалося відтворити звук:', err));
//     } else {
//         console.log(chalk.green('Звук відтворено!'));
//     }
// });

//3 pz
// import path from 'path';
// import os from 'os';
//
// const filePath = process.argv[2];
//
// if (!filePath) {
//     console.log('Будь ласка, надайте абсолютний шлях як аргумент.');
//     process.exit(1);
// }
//
// if (!path.isAbsolute(filePath)) {
//     console.log('Будь ласка, надайте абсолютний шлях.');
//     process.exit(1);
// }
//
// const fullPath = path.resolve(filePath);
// const fileName = path.basename(filePath);
// const fileExt = path.extname(filePath);
// const osType = os.type();
//
// console.log('Повний шлях: ', fullPath);
// console.log('Назва файлу: ', fileName);
// console.log('Розширення файлу: ', fileExt);
// console.log('Операційна система: ', osType);

//4 pz
// const userNumber = Number(process.argv[2]);
//
// const random = Math.floor((Math.random() * 2) + 1);
//
// if (userNumber === random) console.log("You win");
// else console.log("You loose");
