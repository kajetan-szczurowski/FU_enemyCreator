import { WeaponType, ArmorType, ItemGroup } from "../../data/types"
import ItemLister from "./ItemLister"
import { useState } from "react"
export default function ItemPicker<T extends WeaponType | ArmorType>({itemSources, defaultTakens}: props<T>) {
    const [taken, setTaken] = useState<T[]>(defaultTakens ?? []);

     
    return(
        <div>
          <label>Choose Items:</label>
          {itemSources.map(it => <ItemLister<T> label = {it.label} items={it.items} clickHandler={(item: T) => setTaken(prev => [...prev, item])}/>)}
          <hr/>
          <ItemLister<T> label = "Selected:" items={taken} clickHandler={(item: T) => setTaken(prev => prev.filter(it => it.label != item.label))}/>
        </div>
    )

}


type props<T = WeaponType | ArmorType> = {
    itemSources: ItemGroup<T>[],
    defaultTakens?: T[],
}
