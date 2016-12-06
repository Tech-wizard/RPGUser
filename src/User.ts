
// var arr: Hero[] = [];

// function test(hero: Hero) {

//     return true;

// }

// var is_every_hero_in_team = arr.every(hero => hero.isInTeam)


// 1.Math.random(); 结果为0-1间的一个随机数(包括0,不包括1) 
// 2.Math.floor(num); 参数num为一个数值，函数结果为num的整数部分。 
// 3.Math.round(num); 参数num为一个数值，函数结果为num四舍五入后的整数。

// Math：数学对象，提供对数据的数学计算。
// Math.random(); 返回0和1间(包括0,不包括1)的一个随机数。

// Math.ceil(n); 返回大于等于n的最小整数。
// 用Math.ceil(Math.random()*10);时，主要获取1到10的随机整数，取0的几率极小。

// Math.round(n); 返回n四舍五入后整数的值。
// 用Math.round(Math.random());可均衡获取0到1的随机整数。
// 用Math.round(Math.random()*10);时，可基本均衡获取0到10的随机整数，其中获取最小值0和最大值10的几率少一半。

// Math.floor(n); 返回小于等于n的最大整数。
// 用Math.floor(Math.random()*10);时，可均衡获取0到9的随机整数。

class User {

    name: string;

    cash = 0;

    gold = 0;

    exp = 0;

    totalExp = 0;

    level = 0;

    heros: Hero[] = [];

    _herosInTeam: Hero[] = [];

    // pet: pet;

    constructor(name: string) {

        this.name = name;

    }

    get herosInTeam() {
        return this.heros.filter(hero => hero.isInTeam)
    }

    @Cache

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

Math.round(Math.random() * 10);

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


    get maxHp() {

        return this.CON * 10;

    }

    get HIT() {

        return this.DEX * 7 + this.SPD * 2;
    }

    get CRIT() {

        return this.DEX * 11;

    }

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

        return this.maxHp * 1.5 + this.STR * 10 + this.MAG * 8 + this.CON * 6 + this.DEX * 11;
    }

    heroInformationUpdate() {

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

    constructor(name: string, type: number, atk: number,runes:rune[]) {
        this.name = name;
        this.equipmentType = type;
        this._attack = atk;
        this.runes = runes;
        this.equipmentUpdate();
    }

equipmentUpdate(){

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



var logger: MethodDecorator = (target, key, desc) => {
    const method = desc.value;
    desc.velue = function (...arg) {

        console.log("111");
        return method.apply(this, arg);
    }
}

var Cache: MethodDecorator = (target, propertykey, desc) => {

    const method = desc.value;

    desc.velue = function (...arg) {

        console.log(target, desc);

        var cacheKey = "_cache" + propertykey;
        if (!target[cacheKey]) {
            target[cacheKey] = method.apply(this, arg);
        }
        return target[cacheKey];
    }

}