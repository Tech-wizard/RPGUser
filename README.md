# RPGUser
User 玩家=》Hero 英雄 =》equipment 装备 =》rune 符文

##玩家

>###基础属性：钱，金币，经验，英雄，英雄列表
>###高级属性：战斗力

##英雄

>###基础属性：力量，体力，魔力，技巧，速度
>###高级属性：伤害，血量，命中，闪避，暴击，战斗力
>###血量 = 体力 * 10
>###伤害 = 所有装备的攻击力 + 3 * 力量+2 * 魔力
>###命中 = 技巧 * 7 +速度 * 2
>###闪避 = 技巧 * 5 + 速度 * 7
>###暴击 = 技巧 * 11
>###战斗力 = 攻击力 * 5 + 速度 * 4 + 力量 * 10+ 魔力 * 8+ 体力 * 6+ 技巧 * 11    
##装备

>###基础属性：攻击力，力量，体力，魔力，技巧，速度 


##符文

>###基础属性：力量，体力，魔力，技巧，速度，品质  
>###属性都会在实例化时随机生成


>>###用Math.floor(Math.random()*10)可均衡获取0到9的随机整数。

>##░░░░░▄█▌▀▄▓▓▄▄▄▄▀▀▀▄▓▓▓▓▓▌█
>##░░░▄█▀▀▄▓█▓▓▓▓▓▓▓▓▓▓▓▓▀░▓▌█
>##░░█▀▄▓▓▓███▓▓▓███▓▓▓▄░░▄▓▐█▌ 
>##░█▌▓▓▓▀▀▓▓▓▓███▓▓▓▓▓▓▓▄▀▓▓▐█
>##▐█▐██▐░▄▓▓▓▓▓▀▄░▀▓▓▓▓▓▓▓▓▓▌█▌
>##█▌███▓▓▓▓▓▓▓▓▐░░▄▓▓███▓▓▓▄▀▐█ 
>##█▐█▓▀░░▀▓▓▓▓▓▓▓▓▓██████▓▓▓▓▐█ 
>##▌▓▄▌▀░▀░▐▀█▄▓▓██████████▓▓▓▌█▌
>##▌▓▓▓▄▄▀▀▓▓▓▀▓▓▓▓▓▓▓▓█▓█▓█▓▓▌█
>##█▐▓▓▓▓▓▓▄▄▄▓▓▓▓▓▓█▓█▓█▓█▓▓▓▐
