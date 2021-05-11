const fs = require("fs");

// Para agilizar el proceso en el controller de users
const User = {
    fileName : './data/users.json',

    // Leer todos los usuarios
    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
    },
    findAll: function () {
        return this.getData();
    },

    // Buscar usuario por la ID
    findByPk: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    // Buscar un usuario por su username
    findByField: function (field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    // Generar un ID
    generateID: function () {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser){
            return lastUser.id + 1;
        }
        return 1;
    },

    // Crear un usuario
    create: function (userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateID(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return true;
    },

    // Eliminar usuario
    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
    },
}

module.exports = User;