var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var User = (function () {
    // pet: pet;
    function User(name) {
        this.cash = 0;
        this.gold = 0;
        this.exp = 0;
        this.totalExp = 0;
        this.level = 1;
        this.heros = [];
        this._herosInTeam = [];
        this.name = name;
    }
    var d = __define,c=User,p=c.prototype;
    d(p, "herosInTeam"
        ,function () {
            return this.heros.filter(function (hero) { return hero.isInTeam; });
        }
    );
    //@Cache
    p.getFightPower = function () {
        var result = 0;
        this.herosInTeam.map(function (hero) { return result += hero.getFightPower(); });
        // result += this.pet.getFightPower();
        return result;
    };
    return User;
}());
egret.registerClass(User,'User');
var qualityType;
(function (qualityType) {
    qualityType[qualityType["C"] = 0] = "C";
    qualityType[qualityType["B"] = 1] = "B";
    qualityType[qualityType["A"] = 2] = "A";
    qualityType[qualityType["S"] = 3] = "S";
    qualityType[qualityType["SS"] = 4] = "SS";
})(qualityType || (qualityType = {}));
var equipmentType;
(function (equipmentType) {
    equipmentType[equipmentType["weapon"] = 0] = "weapon";
    equipmentType[equipmentType["cloth"] = 1] = "cloth";
    equipmentType[equipmentType["accessorie"] = 2] = "accessorie";
})(equipmentType || (equipmentType = {}));
var occupationType;
(function (occupationType) {
})(occupationType || (occupationType = {}));
var Hero = (function () {
    function Hero(name, str, con, dex, mag, spd, quality) {
        this.isInTeam = false;
        this.equipments = [];
        this.level = 1;
        this.name = name;
        this.STR = str;
        this.CON = con;
        this.DEX = dex;
        this.MAG = mag;
        this.SPD = spd;
        this.quality = quality;
        this.heroInformationUpdate();
    }
    var d = __define,c=Hero,p=c.prototype;
    p.equip = function (equipment) {
        this.equipments.push(equipment);
        this.heroInformationUpdate();
    };
    d(p, "maxHp"
        ,function () {
            return this.CON * 10;
        }
    );
    d(p, "HIT"
        ,function () {
            return this.DEX * 7 + this.SPD * 2;
        }
    );
    d(p, "CRIT"
        ,function () {
            return this.DEX * 11;
        }
    );
    d(p, "EV"
        ,function () {
            return this.DEX * 5 + this.SPD * 7;
        }
    );
    d(p, "ATK"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (e) { return result += e._attack; });
            result += this.STR * 3 + this.MAG * 2;
            return result;
        }
    );
    d(p, "fightPower"
        ,function () {
            return this.getFightPower();
        }
    );
    p.getFightPower = function () {
        return this._ATK * 5 + this.SPD * 4 + this.STR * 10 + this.MAG * 8 + this.CON * 6 + this.DEX * 11;
    };
    p.heroInformationUpdate = function () {
        var _this = this;
        this.equipments.forEach(function (e) { return _this.STR += e.STR; });
        this.equipments.forEach(function (e) { return _this.CON += e.CON; });
        this.equipments.forEach(function (e) { return _this.DEX += e.DEX; });
        this.equipments.forEach(function (e) { return _this.MAG += e.MAG; });
        this.equipments.forEach(function (e) { return _this.SPD += e.SPD; });
        this._ATK = this.ATK;
        this._CRIT = this.CRIT;
        this._EV = this.EV;
        this._HIT = this.HIT;
    };
    __decorate([
        logger
    ], p, "maxHp", null);
    __decorate([
        logger
    ], p, "HIT", null);
    __decorate([
        logger
    ], p, "CRIT", null);
    __decorate([
        logger
    ], p, "EV", null);
    return Hero;
}());
egret.registerClass(Hero,'Hero');
var Equipment = (function () {
    function Equipment(name, type, atk, runes) {
        //jewels: jewel[] = [];
        this.STR = 0; //力量
        this.CON = 0; //体力
        this.DEX = 0; //技巧
        this.MAG = 0; //魔力
        this.SPD = 0; //速度
        this.runes = [];
        this.name = name;
        this.equipmentType = type;
        this._attack = atk;
        this.runes = runes;
        this.equipmentUpdate();
    }
    var d = __define,c=Equipment,p=c.prototype;
    p.equipmentUpdate = function () {
        var _this = this;
        this.runes.forEach(function (e) { return _this.STR += e.STR; });
        this.runes.forEach(function (e) { return _this.CON += e.CON; });
        this.runes.forEach(function (e) { return _this.DEX += e.DEX; });
        this.runes.forEach(function (e) { return _this.SPD += e.SPD; });
        this.runes.forEach(function (e) { return _this.MAG += e.MAG; });
    };
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
// class jewel {
// }
var rune = (function () {
    function rune(quality) {
        this.STR = 0; //力量
        this.CON = 0; //体力
        this.DEX = 0; //技巧
        this.MAG = 0; //魔力
        this.SPD = 0; //速度
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
    var d = __define,c=rune,p=c.prototype;
    return rune;
}());
egret.registerClass(rune,'rune');
// class pet {
//     getFightPower() {
//         return 200;
//     }
// }
var logger = function (target, propertykey, desc) {
    var getter = desc.get;
    desc.get = function n() {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i - 0] = arguments[_i];
        }
        return getter.apply(this, arg);
    };
    return;
};
var Cache = function (target, propertykey, desc) {
    var method = desc.value;
    desc.velue = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i - 0] = arguments[_i];
        }
        var cacheKey = "_cache" + propertykey;
        if (!target[cacheKey]) {
            target[cacheKey] = method.apply(this, arg);
        }
        return target[cacheKey];
    };
};
// var arr: Hero[] = [];
// function test(hero: Hero) {
//     return true;
// }
// var is_every_hero_in_team = arr.every(hero => hero.isInTeam)
//# sourceMappingURL=User.js.map