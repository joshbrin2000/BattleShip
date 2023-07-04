import {Ship} from '../shipClass';

function shipClassTests() {
    const ship = new Ship(test, 0, 3);
    test('ship.getHit should be [false,false,false]', () => {
        expect(ship.getHit()).toEqual([false,false,false]);
    });
}

shipClassTests();