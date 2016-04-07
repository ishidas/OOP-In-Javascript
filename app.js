//animals and zombies
//constructor
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
  if(this.strength[this.strengthIndex].dexterity === 50){
    console.log(this.name + ' attacked the opponent in his butt using his ' + this.ability + ' ! Gave ' + enemy.name + ' a fatal ' + this.strength[this.strengthIndex].damage + ' damage!!')
    enemy.damageTaken(this.strength[this.strengthIndex].damage)
    return;
  }
   else if(this.strength[this.strengthIndex].dexterity >= 40 && this.strength[this.strengthIndex].dexterity <= 49){
    console.log(this.name + ' attacked the opponent in his butt using his ' + this.ability + ' !! Gave ' + enemy.name + ' some damage. Pretty good damage of ' + this.strength[this.strengthIndex].damage + ' damage!');
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

Zombie.prototype.damageTaken = function(damage){
  this.hp -= damage;
  console.log('Zombie took a damage of ' + damage + ' and Zombie hp is at ' + this.hp + '.');
}

// Zombie.prototype = new Animal();
// Zombie.prototype.attack =

var newRabbit = new Animal('Rabbit the Jumper', 'Super Kick', 'Fluffy Fur is like a air bag', 4);
var zombie1 = new Zombie('Zombi1', 'acid reflects and spits out stomach acid', 2);
console.log(newRabbit);
console.log(zombie1);
newRabbit.attack(zombie1);
