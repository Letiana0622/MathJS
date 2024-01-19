import Daemon from '../Daemon';

test('attack is calculated according to distance impact', () => {
  const Daemon1 = new Daemon(2);
  const attackTarget = 90;
  Daemon1.attack = 100;
  const attackActual =Daemon1.attack;
  expect(attackActual).toEqual(attackTarget);
})

test('attack is calculated according to distance and stoned impact', () => {
  const Daemon1 = new Daemon(2);
  Daemon1.stoned = true;
  Daemon1.attack = 100;
  const attackTarget = 85;
  const attackActual = Daemon1.attack;
  expect(attackActual).toEqual(attackTarget);
})

test('stoned getter', () => {
  const Daemon1 = new Daemon(2);
  Daemon1.stoned = true;
  Daemon1.attack = 100;
  const stonedTarget = true;
  const stonedActual = Daemon1.stoned;
  expect(stonedActual).toEqual(stonedTarget);
})