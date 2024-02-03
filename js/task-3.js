const profile = { // об`єкт з 2 властивостями і 3 методами(функціїї)
    username: "Jacob",
    playTime: 300,
    changeUsername(newName) { // оголошення методу для зміни їм`я
        this.username = newName; // перевизначення ім`я через this і властивість
    },
    updatePlayTime(hours) { // оголошення методу для зміни їм`я
        this.playTime += hours; //  перевизначення ігрових годин через this і властивість
    },
    getInfo() { //  оголошення методу для виведення інформації
        return `${this.username} has ${this.playTime} active hours!` // повернення з використання шаблоного рядка з інтерполяцією + this
    }
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"