'use strict';
    //*************************//
  // Animals and Zombies Game//
//*************************//

// Animal constructor has all the methods and Zombie is inheriting those methods from Animal constructor
//Animal Constructor
class Animal {
    constructor (name, ability, armor, strengthIndex){
    this._name = name
    this._ability = ability
    this._armor = armor
    this._strength = [
                      {dexterity: 10,
                        damage: 2
                      },
                      {dexterity: 20,
                        damage: 4
                      },
                      {dexterity: 30,
                        damage: 6
                      },
                      {dexterity: 40,
                        damage: 8
                      },
                      {dexterity: 50,
                        damage: 10
                      }
                    ]
    this._hp = 100
    this._strengthIndex = strengthIndex
    this._infinityPouch = []
  }


   attack (enemy){
    var dext = this._strength[this._strengthIndex].dexterity;
    var dmg = this._strength[this._strengthIndex].damage;
    if(dext === 50){
      alert(this._name + ' attacked the opponent in his neck using his ' + this._ability + ' ! Gave ' + enemy._name + ' a fatal ' + dmg + ' damage!!')
      enemy.damageTaken(dmg);
      return;
    }
     else if(dext >= 40 && dext <= 49){
      alert(this._name + ' attacked the opponent in his butt using his ' + this._ability + ' !! Gave ' + enemy._name + ' some damage. Pretty good damage of ' + dmg + ' damage!');
      enemy.damageTaken(dmg);
      alert(enemy._name + ' now has ' + enemy._hp + ' HP.');
      return;
    }
    else if(dext >= 30 && dext <= 39){
      alert(this._name + ' attacked the opponent in his back using his ' + this._ability + ' ! Gave ' + enemy._name + ' enough damage. ' + dmg + ' damage!');
      enemy.damageTaken(dmg);
      alert(enemy._name + ' now has ' + enemy._hp + ' HP.');
      return;
    }

    else if(dext >= 20 && dext <= 29){
      alert(this._name + ' attacked the opponent in his shin using his ' + this._ability + ' ! Gave ' + enemy._name + ' enough damage. ' + dmg + ' damage!');
      enemy.damageTaken(dmg);
      alert(enemy._name + ' now has ' + enemy._hp + ' HP.');
      return;
    }
    else if(dext >= 10 && dext <= 19){
      alert(this._name + ' attacked the opponent in his shin using his ' + this._ability + ' ! Gave ' + enemy._name + ' enough damage. ' + dmg + ' damage!');
      enemy.damageTaken(dmg);
      alert(enemy._name + ' now has ' + enemy._hp + ' HP.');
      return;
    }
  }

  damageTaken (damage){
    this.strengthIndex -= 1
    let dext = this._strength[this._strengthIndex]._dexterity;
    this._hp -= damage;
    alert('Zombie took a damage of ' + damage + ' and Zombie hp is at ' + this._hp + '.');
    alert(this._name + ' dexterity is now at ' + dext  + '.')
    journey2();
  }

  pickUpItem (item){
    alert(this._name + ' found ' + item._name + ' and its ability is ' + item._ability);
    this._hp += item._upHp
    this._hp += item._upDext
    alert('The ' + item._name + ' affected ' + this._name + ' now has ' + this._hp + ' , ' + this._strength[this._strengthIndex]._dexterity)
  }
}
//Zombie Constructor
class Zombie extends Animal {
    constructor (name, ability,strengthIndex) {
      super(name, ability, strengthIndex)
    this._name = name
    this._ability = ability
    this._strength = [
                      {dexterity: 10,
                        damage: 2
                      },
                      {dexterity: 20,
                        damage: 4
                      },
                      {dexterity: 30,
                        damage: 6
                      }
                    ]
    this._hp = 10
    this._strengthIndex = strengthIndex;
  }
   attack(enemy){
     return super.attack(enemy)
  }
  damageTaken(damage){
    return super.damageTaken(damage)
  }

}
//Item constructor
class Item {
  constructor (name, color, ability, upHp, upDext){
    this._name = name
    this._color = color
    this._ability = ability
    this._upHp = upHp
    this._upDext = upDext
  }
}


//creating and console logging instances of Animal, Zombie and item
let newRabbit = new Animal('Rabbit the Jumper', 'Super Kick', 'Fluffy Fur is like a air bag', 4);
let zombie1 = new Zombie('Zombi1', 'acid reflects and spits out stomach acid', 2);
let zombie2 = new Zombie('Zombi2', 'acid reflects and spits out stomach acid', 2);
let item1 = new Item('Ruby', 'Red', 'up HP by 2', 2, 0);
// console.log(newRabbit);
// console.log(zombie1);
// console.log(item1);


//Actions!!
var intro = prompt('Once upon a time, there was a cursed cave in a small village of Zooland. One of the villagers, a rat named Ratter, went inside of the cave and he was cursed and became a zombie. He started an epidemic of Zombie all over the village. A righteous Bunny, called Rabbit the Jumper, quickly adopted to the situation and became a super animal. Hopefully, Rabbit the Jumper can save the village. DO YOU WANN SAVE a village?').toLowerCase();
switch(intro, journey1){
  case 'yes':
    alert('Great! Let\'s begin!');
    break;
  case 'default':
    alert('You need to play it anyways. Let\'s begin.');
}
var journey1 = prompt('You see a zombie1 approaching to you. What do you do? ATTACK, PICKUP item just becasue it\'s there, or GET attacked by a Zombie? ').toLowerCase();
switch(journey1){
  case 'attack':
    newRabbit.attack(zombie1)
    break;
  case 'pickup':
    newRabbit.pickUpItem(item1)
    break;
  case 'get':
    zombie2.attack(newRabbit)
}


// zombie1.attack(newRabbit);
// zombie1.attack(newRabbit);
// newRabbit.attack(zombie1);
// console.log();
// newRabbit.pickUpItem(item1);
// window.exports = ;
