class Ship {
    constructor(name, len) {
        this.name = name;
        this.len = len;
        this.sunk = false;
        this.hit = 0;
    }

    hitCount() {
        return this.hit;
    }

    getName() {
        return this.name;
    }

    regHit() {
        this.hit += 1;
    }

    isSunk() {
        if (this.hit === this.len) {
            return true;
        }
        return false;
    }
}

module.exports = {Ship};
