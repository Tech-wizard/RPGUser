

class User {

    name: string;

    cash = 0;

    gold = 0;

    exp = 0;

    totalExp = 0;

    level = 1;

    heros: Hero[] = [];

    _herosInTeam: Hero[] = [];

    // pet: pet;

    constructor(name: string) {

        this.name = name;

    }

    get herosInTeam() {
        return this.heros.filter(hero => hero.isInTeam)
    }

    //@Cache

    getFightPower() {

        var result = 0;
        this.herosInTeam.map(hero => result += hero.getFightPower());
        // result += this.pet.getFightPower();
        return result;
    }

}

enum qualityType {

    C,
    B,
    A,
    S,
    SS
}

enum equipmentType {

    weapon,
    cloth,
    accessorie

}

enum occupationType {


}


class Hero {

    name: string;

    isInTeam: boolean = false;

    equipments: Equipment[] = [];

    level = 1;

    curHP: number;   //当前血量

    maxHP: number;   //最大血量

    STR: number;  //力量

    CON: number;  //体力

    DEX: number;  //技巧

    MAG: number;  //魔力

    SPD: number;  //速度

    quality: number; //成长品质

    _ATK: number;  //伤害

    _HIT: number;  //命中

    _CRIT: number;  //暴击

    _EV: number; //闪避

    constructor(name: string, str: number, con: number, dex: number, mag: number, spd: number, quality: number) {

        this.name = name;
        this.STR = str;
        this.CON = con;
        this.DEX = dex;
        this.MAG = mag;
        this.SPD = spd;
        this.quality = quality;
        this.heroInformationUpdate();
    }

    equip(equipment: Equipment) {

        this.equipments.push(equipment);
        this.heroInformationUpdate();

    }
@logger
    get maxHp() {

        return this.CON * 10;

    }
@logger
    get HIT() {

        return this.DEX * 7 + this.SPD * 2;
    }
@logger
    get CRIT() {

        return this.DEX * 11;

    }
@logger
    get EV() {
        return this.DEX * 5 + this.SPD * 7;
    }


    get ATK() {

        var result = 0;
        this.equipments.forEach(e => result += e._attack)
        result += this.STR * 3 + this.MAG * 2;
        return result;

    }

    get fightPower() {

        return this.getFightPower();

    }

    getFightPower() {

        return this._ATK*5 + this.SPD * 4 + this.STR * 10 + this.MAG * 8 + this.CON * 6 + this.DEX * 11;
    }

    heroInformationUpdate() {

        this.equipments.forEach(e => this.STR += e.STR);
        this.equipments.forEach(e => this.CON += e.CON);
        this.equipments.forEach(e => this.DEX += e.DEX);
        this.equipments.forEach(e => this.MAG += e.MAG);
        this.equipments.forEach(e => this.SPD += e.SPD);
        this._ATK = this.ATK;
        this._CRIT = this.CRIT;
        this._EV = this.EV;
        this._HIT = this.HIT;

    }

}

class Equipment {

    //jewels: jewel[] = [];

    STR = 0;  //力量

    CON = 0;  //体力

    DEX = 0;  //技巧

    MAG = 0;  //魔力

    SPD = 0;  //速度

    runes: rune[] = [];

    equipmentType: number;

    name: string;

    _attack: number;

    constructor(name: string, type: number, atk: number, runes: rune[]) {
        this.name = name;
        this.equipmentType = type;
        this._attack = atk;
        this.runes = runes;
        this.equipmentUpdate();
    }

    equipmentUpdate() {

        this.runes.forEach(e => this.STR += e.STR);
        this.runes.forEach(e => this.CON += e.CON);
        this.runes.forEach(e => this.DEX += e.DEX);
        this.runes.forEach(e => this.SPD += e.SPD);
        this.runes.forEach(e => this.MAG += e.MAG);

    }


}

// class jewel {


// }

class rune {

    STR = 0;  //力量

    CON = 0;  //体力

    DEX = 0;  //技巧

    MAG = 0;  //魔力

    SPD = 0;  //速度

    quality: number;

    constructor(quality: number) {

        this.quality = quality;

        switch (Math.floor(Math.random() * 4)) {

            case 0:
                this.STR += Math.floor(Math.random() * 12) * this.quality;
                break;

            case 1:
                this.CON += Math.floor(Math.random() * 12) * this.quality;
                break;

            case 2:
                this.DEX += Math.floor(Math.random() * 12) * this.quality;
                break;

            case 3:
                this.MAG += Math.floor(Math.random() * 12) * this.quality;
                break;

            case 4:
                this.SPD += Math.floor(Math.random() * 12) * this.quality;
                break;

        }


    }



}

// class pet {

//     getFightPower() {

//         return 200;

//     }

// }



var logger: MethodDecorator = (target:any, propertykey, desc:PropertyDescriptor) => {
    const getter = desc.get;
    desc.get = function n(...arg) {
        return getter.apply(this, arg);
    }
    return
}

var Cache: MethodDecorator = (target:any, propertykey, desc) => {

    const method = desc.value;

    desc.velue = function (...arg) {

        var cacheKey = "_cache" + propertykey;
        if (!target[cacheKey]) {
            target[cacheKey] = method.apply(this, arg);
        }
        return target[cacheKey];
    }

}

// var arr: Hero[] = [];

// function test(hero: Hero) {

//     return true;

// }

// var is_every_hero_in_team = arr.every(hero => hero.isInTeam)


