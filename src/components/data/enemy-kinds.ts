import { Enemy } from "./types"

export const enemyKindsList: EnemyKind[] = [
    {id: 'beast', label: 'bestia', enemyKindFunction: beastEnemyKind},
    {id: 'daemon', label: 'demon', enemyKindFunction: daemonEnemyKind},
    {id: 'humaoid', label: 'humanoid', enemyKindFunction: humanoidEnemyKind},
    {id: 'constructed', label: 'konstrukt', enemyKindFunction: constructedEnemyKind},
    {id: 'undead', label: 'Nieumarly', enemyKindFunction: undeadEnemyKind},
    {id: 'monster', label: 'Potwor', enemyKindFunction: monsterEnemyKind},
    {id: 'plant', label: 'Roslina', enemyKindFunction: plantEnemyKind},
    {id: 'elemental', label: 'Zywiolak', enemyKindFunction: elementalEnemyKind}
]


type EnemyKind = {
    id: string,
    label: string,
    enemyKindFunction: (input: Enemy) => Enemy,
}


function beastEnemyKind(input: Enemy): Enemy {
    const enemy = {...input};
    enemy.maxNumberOfSKills = 4;
    enemy.extraRule = 'Nie mozna uzywac wyposazenia';
    return enemy;
}

function daemonEnemyKind(input: Enemy): Enemy {
    const enemy = {...input};
    enemy.maxNumberOfSKills = 3;
    enemy.extraRule = 'Odporne na 2 wybrane obrazenia';
    return enemy;
}

function humanoidEnemyKind(input: Enemy): Enemy {
    const enemy = {...input};
    enemy.maxNumberOfSKills = 3;
    enemy.extraRule = 'Uzywa wyposazenie';
    return enemy;
}

function constructedEnemyKind(input: Enemy): Enemy {
    const enemy = {...input};
    enemy.maxNumberOfSKills = 2;
    enemy.insensitivities = [...enemy.insensitivities, 'Trucizna'];
    enemy.resistances = [...enemy.resistances, 'Ziemne'];
    enemy.resistancesToEffects = [...enemy.resistancesToEffects, 'Zatrucie'];
    return enemy;
}

function undeadEnemyKind(input: Enemy): Enemy {
    const enemy = {...input};
    enemy.maxNumberOfSKills = 2;
    enemy.insensitivities = [...enemy.insensitivities, 'Trucizna', 'Mroczne'];
    enemy.resistancesToEffects = [...enemy.resistancesToEffects, 'Zatrucie'];
    enemy.weaknesses = [...enemy.weaknesses, 'Swietliste'];
    enemy.extraRule = 'Jesli efekt (mikstura, zaklecie, arkanum) ma przywrocic nieumarlemu HP, kontrolujacy zaklecie moze odebrac 1/2 HP nieumarlemu';
    return enemy;
}

function monsterEnemyKind(input: Enemy): Enemy {
    const enemy = {...input};
    enemy.maxNumberOfSKills = 4;
    return enemy;
}

function plantEnemyKind(input: Enemy): Enemy {
    const enemy = {...input};
    enemy.maxNumberOfSKills = 2;
    enemy.resistancesToEffects = [...enemy.resistancesToEffects, 'Oszolomienie', 'Roztrzesienie', 'Rozwscieczenie'];
    enemy.extraRule = 'Wybierasz jedno wrazliwosc z grupy: Powietrze, Lodowe, Elektryczne,'
    return enemy;
}

function elementalEnemyKind(input: Enemy): Enemy {
    const enemy = {...input};
    enemy.maxNumberOfSKills = 2;
    enemy.resistancesToEffects = [...enemy.resistancesToEffects, 'Zatrucie'];
    enemy.extraRule = 'Wybierasz jedna odpornosc';
    enemy.insensitivities = [...enemy.insensitivities, 'Trujace'];
    return enemy;
}

