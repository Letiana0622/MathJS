import MathCalc from '../app';

test('attack is calculated according to distance impact', () => {
  const Magician = new MathCalc(2);
  const attackTarget = 90;
  Magician.attack = 100;
  const attackActual = Magician.attack;
  expect(attackActual).toEqual(attackTarget);
})

test('attack is calculated according to distance and stoned impact', () => {
  const Magician = new MathCalc(2);
  Magician.stoned = true;
  Magician.attack = 100;
  const attackTarget = 85;
  const attackActual = Magician.attack;
  expect(attackActual).toEqual(attackTarget);
})

test('stoned getter', () => {
  const Magician = new MathCalc(2);
  Magician.stoned = true;
  Magician.attack = 100;
  const stonedTarget = true;
  const stonedActual = Magician.stoned;
  expect(stonedActual).toEqual(stonedTarget);
})