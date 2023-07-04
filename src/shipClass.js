class Ship {
    constructor(name, pos, len) {
        this.name = name;
        this.pos = pos;
        this.len = len;
        this.sunk = false;
        this.hit = Array(this.len).fill(false);
    }

    getHit() {
        return this.hit;
    }
}

module.exports = {Ship};
