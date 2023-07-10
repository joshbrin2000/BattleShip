import {Ship} from '../shipClass';

function shipClassTests() {
    const ship = new Ship(test, 1);
    test('ship.hitCount should be 0', () => {
        expect(ship.hitCount()).toEqual(0);
    });

    test('ship.isSunkshould return false', () => {
        expect(ship.isSunk()).toEqual(false);
    });

    test('ship.hit should be undefined', () => {
        expect(ship.regHit()).toBeUndefined();
    });

    test('ship.hitCount should be 1', () => {
        expect(ship.hitCount()).toEqual(1);
    });

    test('ship.isSunk should be true', () => {
        expect(ship.isSunk()).toEqual(true);
    });
}

shipClassTests();