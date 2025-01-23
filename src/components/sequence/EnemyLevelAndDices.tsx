import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { SequenceStepProps } from "../data/types";
import DiceSelect from '../mechanics/DiceSelect';


export default function EnemyLevelAndDices({enemyRef, readyFeedback}: SequenceStepProps) {
  const [dices, setDices] = useState([{label: 'Potega', value: 4}, {label: 'Zrecznosc', value: 4}, {label: 'Sila Woli', value: 4}, {label: 'Wejrzenie', value: 4}]);
  const [level, setLevel] = useState(1);
  useEffect(checkReadiness, [dices, level]);
  const defaultTargetDicesSum = 32;
  const targetDicesSum = useRef(defaultTargetDicesSum);
  const maxLevel = 60;
  const minLevel = 1;
  const secondLevelCap = 40;
  const secondTargetDicesSum = 36;
  const firstLevelCap = 20;
  const firstTargetDicesSum = 34;

  const currentDicesSum = dices.reduce((acc, dice) => acc + dice.value, 0);
  return (
    <>
        <label htmlFor='level-input'>Level</label>
        <input name = 'level-input' onChange={handleLvlChange} type='number' min={minLevel} max = {maxLevel} defaultValue={level}/>
        <div>Dices:</div>
        {dices.map(dice => (
                <DiceSelect key={dice.label} label = {dice.label} setState={setDices}/>
        ))}
        <div>
            Sum of dices: {currentDicesSum} / {targetDicesSum.current}
        </div>
    </>

  )

  function handleLvlChange(event: React.FormEvent<HTMLInputElement>) {
    const newValue = Number(event.currentTarget.value);
    if (isNaN(newValue)) return;
    if (newValue < minLevel || newValue > maxLevel) return;
    enemyRef.current.level = newValue;
    targetDicesSum.current = (newValue >= secondLevelCap)? secondTargetDicesSum : (newValue >= firstLevelCap)? firstTargetDicesSum : defaultTargetDicesSum;
    setLevel(newValue);
  }

  function checkReadiness(){
    readyFeedback.current = currentDicesSum === targetDicesSum.current;
  }
}
