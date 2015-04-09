var ARK3 = ARK3 || {};

ARK3.armory = (function () {

    //Weapon constructor
    function Weapon(itemName, damage, description, worth) {
        this.itemName = itemName;
        this.damage = damage;
        this.description = description;
        this.worth = worth;
    }

    //Armor constructor
    function Armor(itemName, ac, agiBonus, description, worth) {
        this.itemName = itemName;
        this.ac = ac;
        this.agiBonus = agiBonus;
        this.description = description;
        this.worth = worth;
    }

    return {

        //Weapon construction
        longsword: new Weapon("Longsword", "1D8"),
        magic: new Weapon("Magic", "4D3"),
        dagger: new Weapon("Dagger", "2D6"),
        axe: new Weapon("Axe", "1D6"),
        pistols: new Weapon("Pistols", "2D4"),

        //Armor construction
        clothCap: new Armor("Cloth cap", 0, 1),
        clothRobe: new Armor("Cloth robe", 1, 2),
        clothSlippers: new Armor("Cloth slippers", 0, 1),
        leatherHood: new Armor("Leather hood", 1, 0),
        leatherJerkin: new Armor("Leather jerkin", 2, 1),
        leatherBoots: new Armor("Leather boots", 0, 0),
        chainHelm: new Armor("Chain helm", 2, -1),
        chainShirt: new Armor("Chain shirt", 3, -2),
        chainBoots: new Armor("Chain boots", 1, -1),
        ironHelm: new Armor("Iron helm", 3, -2),
        ironBreastplate: new Armor("Iron breastplate", 4, -3),
        ironBoots: new Armor("Iron boots", 2, -2)

    };

})();