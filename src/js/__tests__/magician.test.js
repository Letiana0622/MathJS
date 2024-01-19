import Magician from '../Magician';

test('attack is calculated according to distance impact', () => {
  const Magician1 = new Magician(2);
  const attackTarget = 90;
  Magician1.attack = 100;
  const attackActual = Magician1.attack;
  expect(attackActual).toEqual(attackTarget);
})

test('attack is calculated according to distance and stoned impact', () => {
  const Magician1 = new Magician(2);
  Magician1.stoned = true;
  Magician1.attack = 100;
  const attackTarget = 85;
  const attackActual = Magician1.attack;
  expect(attackActual).toEqual(attackTarget);
})

test('stoned getter', () => {
  const Magician1 = new Magician(2);
  Magician1.stoned = true;
  Magician1.attack = 100;
  const stonedTarget = true;
  const stonedActual = Magician1.stoned;
  expect(stonedActual).toEqual(stonedTarget);
})