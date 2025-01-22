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