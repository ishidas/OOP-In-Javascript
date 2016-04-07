    //*************************//
  // Animals and Zombies Game//
//*************************//

// Animal constructor has all the methods and Zombie is inheriting those methods from Animal constructor
// (function(){
var Characters = {}
//Animal Constructor
Characters.Animal = function (name, ability, armor, strengthIndex){
  this.name = name
  this.ability = ability
  this.armor = armor
  this.strength = [
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
  this.hp = 100
  this.strengthIndex = strengthIndex
  this.infinityPouch = []
}


Characters.Animal.prototype.attack = function(enemy){
  var dext = this.strength[this.strengthIndex].dexterity
  var dmg = this.strength[this.strengthIndex].damage;
  if(dext === 50){
    alert(this.name + ' attacked the opponent in his neck using his ' + this.ability + ' ! Gave ' + enemy.name + ' a fatal ' + dmg + ' damage!!')
    enemy.damageTaken(dmg);

    return;
  }
   else if(dext >= 40 && dext <= 49){
    alert(this.name + ' attacked the opponent in his butt using his ' + this.ability + ' !! Gave ' + enemy.name + ' some damage. Pretty good damage of ' + dmg + ' damage!');
    enemy.damageTaken(dmg);
    alert(enemy.name + ' now has ' + enemy.hp + ' HP.');

    return;
  }
  else if(dext >= 30 && dext <= 39){
    alert(this.name + ' attacked the opponent in his back using his ' + this.ability + ' ! Gave ' + enemy.name + ' enough damage. ' + dmg + ' damage!');
    enemy.damageTaken(dmg);
    alert(enemy.name + ' now has ' + enemy.hp + ' HP.');

    return;
  }

  else if(dext >= 20 && dext <= 29){
    alert(this.name + ' attacked the opponent in his shin using his ' + this.ability + ' ! Gave ' + enemy.name + ' enough damage. ' + dmg + ' damage!');
    enemy.damageTaken(dmg);
    alert(enemy.name + ' now has ' + enemy.hp + ' HP.');

    return;
  }
  else if(dext >= 10 && dext <= 19){
    alert(this.name + ' attacked the opponent in his shin using his ' + this.ability + ' ! Gave ' + enemy.name + ' enough damage. ' + dmg + ' damage!');
    enemy.damageTaken(dmg);
    alert(enemy.name + ' now has ' + enemy.hp + ' HP.');

    return;
  }
}

Characters.Animal.prototype.damageTaken = function(damage){
  this.strengthIndex -= 1
  var dext = this.strength[this.strengthIndex].dexterity;
  this.hp -= damage;
  alert('Zombie took a damage of ' + damage + ' and Zombie hp is at ' + this.hp + '.');
  alert(this.name + ' dexterity is now at ' + dext + '.')
  journey2();
}

Characters.Animal.prototype.pickUpItem = function(item){
  alert(this.name + ' found ' + item.name + ' and its ability is ' + item.ability);
  this.hp += item.upHp
  this.hp += item.upDext
  alert('The ' + item.name + ' affected ' + this.name + ' now has ' + this.hp + ' , ' + this.strength[this.strengthIndex].dexterity)
}
//Zombie Constructor
Characters.Zombie = function (name, ability, strengthIndex) {
  this.name = name
  this.ability = ability
  this.strength = [
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
  this.hp = 10
  this.strengthIndex = strengthIndex;
}

//Item constructor
Characters.Item = function (name, color, ability, upHp, upDext){

this.name = name
this.color = color
this.ability = ability
this.upHp = upHp
this.upDext = upDext
}

var item1 = new Characters.Item('Ruby', 'Red', 'up HP by 2', 2, 0);
console.log(item1);
//Zombie constructor is inheriting methods from Animal Here
//both ways work! Zombie.prototype = new Animal(); or below:
Characters.Zombie.prototype = Characters.Animal.prototype;


//creating and console logging instances of Animal and Zombie
var newRabbit = new Characters.Animal('Rabbit the Jumper', 'Super Kick', 'Fluffy Fur is like a air bag', 4);
var zombie1 = new Characters.Zombie('Zombi1', 'acid reflects and spits out stomach acid', 2);
var zombie2 = new Characters.Zombie('Zombi2', 'acid reflects and spits out stomach acid', 2);
// console.log(newRabbit);
// console.log(zombie1);


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
    newRabbit.attack(zombie1);
    journey2();
    break;
  case 'pickup':
    newRabbit.pickUpItem(item1)
    journey2();
    break;
  case 'get':
    zombie2.attack(newRabbit)
}


// zombie1.attack(newRabbit);
// zombie1.attack(newRabbit);
// newRabbit.attack(zombie1);
// console.log(Characters);
// newRabbit.pickUpItem(item1);
// window.exports = Characters;

// })()
