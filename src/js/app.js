export default class MathCalc {
  constructor(distance) {
    this.attack = undefined;
    this.distance = distance;
    this.stoned = undefined;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  get attack() {
    return this._attack;
  }

  set attack(attack) {
    let attackLineRatio = 1.1 - 0.1 * this.distance;
    let attackLogAdj = Math.log2(this.distance) * 5;
    if (this._stoned) {
      this._attack = Math.floor((attack * attackLineRatio) - attackLogAdj); 
    }
    else {
      this._attack = Math.floor(attack* attackLineRatio);
    }
    return this._attack
  }
}







/*
Легенда

Мощь атаки магов и демонов привела к разбалансировке игрового мира. Поэтому вы ввели для игроков несколько новых правил и возможностей:

Сила урона зависит от расстояния (для Magician, Daemon) - линейно падает, а именно: 
на ближайшую клетку 100%, 
на 5 клетку от себя - 60% 
(соответственно, на 2-ую клетку - 90%, на 3-ую - 80%, на 4-ую - 70%)

Возможность насылать «дурман» на магов и демонов. 
При это их сила атаки падает уже не только линейно, а по формуле: attack - log2(x) * 5,
 где x - это расстояние в клетках. 
 attack рассчитывается с учётом п.1. 
 Пример: атака 100 единиц, атакуем 2 клетку от себя, получаем вместе с дурманом: 85 (вместо 90).

 Описание
Реализуйте классы Magician и Daemon с get/set stoned. При этом get/set attack должен учитывать логику, описанную в легенде.
Подсказка: используйте класс Math и наследование, чтобы не дублировать код.


В get attack никаких параметров передавать не нужно. В геттере мы лишь возвращаем силу урона. Её можно округлить.
В set attack уже нужно передавать параметр расстояния до атакуемой клетки. Затем нужно посчитать погрешность, 
которая будет при расстоянии от 2 до 5 клеток.Потом нужно из изначально заданной силы атаки, 
вычесть эту разницу для получения силы урона на расстоянии.
*/