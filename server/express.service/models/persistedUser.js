
const User = require('./user');

class PersistedUser extends User {
    constructor(id, firstName, lastName, biography) {
        super(id, firstName, lastName, biography)
    }

    saveToStorage(storage) {
        storage['persistedUser'] = this
    }
}

module.exports = PersistedUser;