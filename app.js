//animals and zombies attacking each other game
//Animal constructor has all the methods and Zombie is inheriting those methods from Animal constructor
function Animal (name, ability, armor, strengthIndex){
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
}


Animal.prototype.attack = function(enemy){
  var dext = this.strength[this.strengthIndex].dexterity
  var dmg = this.strength[this.strengthIndex].damage;
  if(dext === 50){
    console.log(this.name + ' attacked the opponent in his neck using his ' + this.ability + ' ! Gave ' + enemy.name + ' a fatal ' + dmg + ' damage!!')
    enemy.damageTaken(dmg);
    return;
  }
   else if(dext >= 40 && dext <= 49){
    console.log(this.name + ' attacked the opponent in his butt using his ' + this.ability + ' !! Gave ' + enemy.name + ' some damage. Pretty good damage of ' + dmg + ' damage!');
    enemy.damageTaken(dmg);
    console.log(enemy.name + ' now has ' + enemy.hp + ' HP.');
    return;
  }
  else if(dext >= 30 && dext <= 39){
    console.log(this.name + ' attacked the opponent in his back using his ' + this.ability + ' ! Gave ' + enemy.name + ' enough damage. ' + dmg + ' damage!');
    enemy.damageTaken(dmg);
    console.log(enemy.name + ' now has ' + enemy.hp + ' HP.');
    return;
  }

  else if(dext >= 20 && dext <= 29){
    console.log(this.name + ' attacked the opponent in his shin using his ' + this.ability + ' ! Gave ' + enemy.name + ' enough damage. ' + dmg + ' damage!');
    enemy.damageTaken(dmg);
    console.log(enemy.name + ' now has ' + enemy.hp + ' HP.');
    return;
  }
  else if(dext >= 10 && dext <= 19){
    console.log(this.name + ' attacked the opponent in his shin using his ' + this.ability + ' ! Gave ' + enemy.name + ' enough damage. ' + dmg + ' damage!');
    enemy.damageTaken(dmg);
    console.log(enemy.name + ' now has ' + enemy.hp + ' HP.');
    return;
  }
}

// Animal.damageTaken
function Zombie (name, ability, strengthIndex) {
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

Animal.prototype.damageTaken = function(damage){
  this.strengthIndex -= 1
  var dext = this.strength[this.strengthIndex].dexterity;
  this.hp -= damage;
  console.log('Zombie took a damage of ' + damage + ' and Zombie hp is at ' + this.hp + '.');
  console.log(this.name + ' dexterity is now at ' + dext + '.')
}

//inheriting attack from Animal and damage from Zombie
//both ways work!
Zombie.prototype = Animal.prototype;
// Zombie.prototype = new Animal();

var newRabbit = new Animal('Rabbit the Jumper', 'Super Kick', 'Fluffy Fur is like a air bag', 4);
var zombie1 = new Zombie('Zombi1', 'acid reflects and spits out stomach acid', 2);
console.log(newRabbit);
console.log(zombie1);

zombie1.attack(newRabbit);
zombie1.attack(newRabbit);
newRabbit.attack(zombie1);
