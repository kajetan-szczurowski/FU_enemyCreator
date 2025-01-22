import React from 'react'
import { SequenceStepProps } from "../data/types";
import DiceSelect from '../mechanics/DiceSelect';


export default function EnemyLevelAndDices({enemyRef, readyFeedback}: SequenceStepProps) {
  const dicesNames = ['Potega', 'Zrecznosc', 'Sila Woli', 'Wejrzenie'];
  const maxLevel = 60;
  const minLevel = 1;
  return (
    <>
        <label htmlFor='level-input'>Level</label>
        <input name = 'level-input' onChange={handleLvlChange} type='number' min={minLevel} max = {maxLevel} defaultValue={minLevel}/>
        <div>Dices:</div>
        {dicesNames.map(dice => (
            <div key = {dice}>
                <label htmlFor={`dice-${dice}`}>{dice}</label>
                <DiceSelect key={dice} />
            </div>
        ))}
    </>

  )

  function handleLvlChange(event: React.FormEvent<HTMLInputElement>) {
    const newValue = Number(event.currentTarget.value);
    if (isNaN(newValue)) return;
    if (newValue < minLevel || newValue > maxLevel) return;
    enemyRef.current.level = newValue;
  }
}
