class User {
    constructor(id, firstName, lastName, biography) {
        this.userId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.biography = biography;
        this.tone = null;
    }

    setTone(tone) {
        this.tone = tone
    }
}

module.exports = User;