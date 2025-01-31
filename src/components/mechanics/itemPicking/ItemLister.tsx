import { WeaponType, ArmorType } from "../../data/types"
import Weapon from "../Weapon"
import Armor from "../Armor"
export default function itemLister<T extends WeaponType | ArmorType>({items, clickHandler, label}: props<T>) {
    return(
            <ul>
                <strong>{label}</strong>
                <hr/>
                {items.map(item => <li key = {item.label} onClick = {clickHandler? () => clickHandler(item): function(){}}>
                    {Object.keys(item).includes("precision")? 
                    <Weapon weaponData={item as WeaponType}/>:
                    <Armor armorData={item as ArmorType}/>}
                    </li>)}
            </ul>
    )

}


type props<T> = {
    items: T[],
    clickHandler?: Function,
    label: string
}

