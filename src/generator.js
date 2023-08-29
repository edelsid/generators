export default class Team {
  constructor(size) {
    this.size = size;
  }

  fill() {
    const names = ['Lisette', 'Morren', 'Fafnir', 'Constance', 'Eustacia'];
    const types = ['Bowman', 'Swordsman', 'Magician'];
    const health = 100;
    const level = 1;
    const attacks = [25, 10, 25, 40, 30];
    const defences = [25, 10, 25, 40, 30];

    const members = [];
    for (let i = 0; i < this.size; i += 1) {
      const name = names[Math.floor(Math.random() * names.length)];
      const type = types[Math.floor(Math.random() * types.length)];
      const attack = attacks[Math.floor(Math.random() * attacks.length)];
      const defence = defences[Math.floor(Math.random() * defences.length)];
      const value = {
        name, type, health, level, attack, defence,
      };
      members.push(value);
    }
    return members;
  }

  * [Symbol.iterator]() {
    for (let i = 0; i < this.size; i += 1) {
      yield this.fill()[i];
    }
    return { value: undefined };
  }
}
