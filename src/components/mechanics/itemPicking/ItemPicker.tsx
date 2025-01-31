import { WeaponType, ArmorType, ItemGroup } from "../../data/types"
import ItemLister from "./ItemLister"
import { useState, useRef } from "react"
import { Enemy } from "../../data/types";
import "../../styles/items.css"
export default function ItemPicker<T extends WeaponType | ArmorType>({itemSources, defaultTakens, enemyRef, allowMany = true}: props<T>) {
    const [taken, setTaken] = useState<T[]>(defaultTakens ?? []);
    const [visible, setVisible] = useState(false);
    const visibilityButtoLabel = visible? 'Hide': 'Show';
    const firstRun = useRef(true);
    if (!firstRun.current) handleChange();
    firstRun.current = false;
     
    return(
        <div className = {`item-picker`}>
          <label>Choose Items:</label>
          <button onClick = {()=> setVisible(current => !current)}>{visibilityButtoLabel}</button>
          <div className = {`display-${visible}`}>
            {itemSources.map(it => <ItemLister<T> label = {it.label} items={it.items} clickHandler={(item: T) => handlePick(item)}/>)}
            <hr/>
            <ItemLister<T> label = "Selected:" items={taken} clickHandler={(item: T) => setTaken(prev => prev.filter(it => it.label != item.label))}/>
          </div>
        </div>
    )

    function handleChange(){
        const key = Object.keys(itemSources[0].items[0]).includes("precision")? "attacks": "armor";
        enemyRef.current[key] = taken as any;
    }

    function handlePick(item: T){
        if (allowMany) setTaken(prev => [...prev, item]);
        else setTaken([item]);
    }

}


type props<T = WeaponType | ArmorType> = {
    itemSources: ItemGroup<T>[],
    defaultTakens?: T[],
    enemyRef: React.MutableRefObject<Enemy>,
    allowMany?: boolean
}
