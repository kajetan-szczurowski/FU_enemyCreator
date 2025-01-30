export type Enemy = {
    resistances: string[],
    insensitivities: string[],
    weaknesses: string[],
    resistancesToEffects: string[],
    skills: string[],

    maxNumberOfSKills: number,
    extraRule? : string
    level: number
}

export type SequenceStepProps = {
    enemyRef: React.MutableRefObject<Enemy>,
    readyFeedback: React.MutableRefObject<boolean>
}

export type ItemType = {
    label: string,
    cost: string,
    requireTraining: boolean,
    description: string
}

export type WeaponType = ItemType & {
    precision: string[],
    damage: string,
    damageType: string,
}

export type ArmorType = ItemType & {
    physicalProtection: string[],
    magicalProtection: string[],
    initiative: string,
}

export type ItemGroup<T = ArmorType | WeaponType> = {
    label: string,
    items: T[]
}
