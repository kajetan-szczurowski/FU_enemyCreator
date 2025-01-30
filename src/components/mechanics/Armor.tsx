import { ArmorType } from "../data/types"
export default function Armor({armorData}: props) {
  return (
    <div>
        <label>{(armorData.requireTraining)? `${armorData.label} ◆`: armorData.label}</label>
        <ul>
            <li>Koszt: {armorData.cost}</li>
            <li>Pancerz: {armorData.physicalProtection}</li>
            <li>Magiczny Pancerz: {armorData.magicalProtection}</li>
            <li>Inicjatywa: {armorData.initiative}</li>
        </ul>
        <div>{armorData.description}</div>
    </div>
  )
}

type props = {
  armorData: ArmorType
}
