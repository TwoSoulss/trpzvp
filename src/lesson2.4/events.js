import EventEmitter from 'events'
import fs from 'fs'
import readline from 'readline'

class FileManager extends EventEmitter {
    constructor() {
        super();
        this.on('create', this.createFile);
        this.on('read', this.readFile);
        this.on('update', this.updateFile);
        this.on('delete', this.deleteFile);
        this.on('exit', this.exitProgram);
    }

    createFile(fileName) {
        fs.writeFile(fileName, '', (err) => {
            if (err) console.error(`Помилка створення файлу: ${err.message}`);
            else console.log(`Файл "${fileName}" створено успішно!`);
            promptUser();
        });
    }

    readFile(fileName) {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) console.error(`Помилка читання файлу: ${err.message}`);
            else console.log(`Вміст файлу "${fileName}":\n${data}`);
            promptUser();
        });
    }

    updateFile(fileName) {
        rl.question('Введіть текст для додавання: ', (text) => {
            fs.appendFile(fileName, `\n${text}`, (err) => {
                if (err) console.error(`Помилка оновлення файлу: ${err.message}`);
                else console.log(`Файл "${fileName}" оновлено!`);
                promptUser();
            });
        });
    }

    deleteFile(fileName) {
        fs.unlink(fileName, (err) => {
            if (err) console.error(`Помилка видалення файлу: ${err.message}`);
            else console.log(`Файл "${fileName}" видалено!`);
            promptUser();
        });
    }

    exitProgram() {
        console.log('Вихід з програми.');
        rl.close();
    }
}

const fileManager = new FileManager();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptUser() {
    console.log('\n> Виберіть дію:');
    console.log('1 - Створити файл');
    console.log('2 - Читати файл');
    console.log('3 - Оновити файл');
    console.log('4 - Видалити файл');
    console.log('5 - Вийти');

    rl.question('> Введіть номер дії: ', (choice) => {
        switch (choice) {
            case '1':
                rl.question('> Введіть назву файлу: ', (fileName) => fileManager.emit('create', fileName));
                break;
            case '2':
                rl.question('> Введіть назву файлу: ', (fileName) => fileManager.emit('read', fileName));
                break;
            case '3':
                rl.question('> Введіть назву файлу: ', (fileName) => fileManager.emit('update', fileName));
                break;
            case '4':
                rl.question('> Введіть назву файлу: ', (fileName) => fileManager.emit('delete', fileName));
                break;
            case '5':
                fileManager.emit('exit');
                break;
            default:
                console.log('Невідома команда. Спробуйте ще раз.');
                promptUser();
        }
    });
}

promptUser();

