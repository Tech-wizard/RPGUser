var arr = [];
function test(hero) {
    return true;
}
var is_every_hero_in_team = arr.every(function (hero) { return hero.isInTeam; });
var User = (function () {
    function User() {
        this.cash = 0;
        this.gold = 0;
        this.exp = 0;
        this.totalExp = 0;
        this.level = 0;
        this.heros = [];
        this._herosInTeam = [];
    }
    var d = __define,c=User,p=c.prototype;
    d(p, "herosInTeam"
        ,function () {
            return this.heros.filter(function (hero) { return hero.isInTeam; });
        }
    );
    p.getFightPower = function () {
        var result = 0;
        this.herosInTeam.map(function (hero) { return result += hero.getFightPower(); });
        result += this.pet.getFightPower();
    };
    return User;
}());
egret.registerClass(User,'User');
var Hero = (function () {
    function Hero() {
        this.isInTeam = false;
        this.equipments = [];
        this.hp = 50;
        this.level = 1;
        this.quality = 2.8;
    }
    var d = __define,c=Hero,p=c.prototype;
    d(p, "maxHp"
        ,function () {
            return this.level * 100 * this.quality;
        }
    );
    d(p, "attack"
        //attack:number = 100;
        ,function () {
            var result = 0;
            this.equipments.forEach(function (e) { return result += e.attack; });
            return result;
        }
    );
    d(p, "fightPower"
        ,function () {
            return this.getFightPower();
        }
    );
    p.getFightPower = function () {
        return this.maxHp * 1.5 + this.attack * 1.8;
    };
    return Hero;
}());
egret.registerClass(Hero,'Hero');
var Equipment = (function () {
    function Equipment() {
        this.jewels = [];
    }
    var d = __define,c=Equipment,p=c.prototype;
    d(p, "attack"
        ,function () {
            return 50;
        }
    );
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
var jewel = (function () {
    function jewel() {
    }
    var d = __define,c=jewel,p=c.prototype;
    return jewel;
}());
egret.registerClass(jewel,'jewel');
var pet = (function () {
    function pet() {
    }
    var d = __define,c=pet,p=c.prototype;
    p.getFightPower = function () {
        return 200;
    };
    return pet;
}());
egret.registerClass(pet,'pet');
//# sourceMappingURL=User.js.map