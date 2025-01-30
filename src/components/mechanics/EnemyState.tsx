import { useState, useEffect } from 'react'
import { Enemy } from '../data/types';

export default function ({source, enemyValueKeyName, label, enemyRef}: props) {
    const [selectedStates, setSelectedStates] = useState(enemyRef.current[enemyValueKeyName]);
    useEffect(handleChange, [selectedStates]);

    return(
        <div>
            <label>{label}</label>
            <select onChange={(e) => setSelectedStates(prev => [...prev, e.target.value])}>
                {source.map(state => <option key = {state}>{state}</option>)}
            </select>
            <ul>
                {selectedStates.map(state => <li key={state} onClick={e => handleDelete(state)}>{state}</li>)}
            </ul>
        </div>
    )
  
    function handleChange(){
        enemyRef.current[enemyValueKeyName] = selectedStates;
    }

    function handleDelete(toDelete: string){
        setSelectedStates(prev => prev.filter(state => state!== toDelete));
    }
}

type props = {
    source: string[]
    label: string,
    enemyValueKeyName: "resistances" | "insensitivities" | "weaknesses" | "resistancesToEffects",
    enemyRef: React.MutableRefObject<Enemy>
}

