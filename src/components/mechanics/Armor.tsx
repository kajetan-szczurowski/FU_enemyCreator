import { ArmorType } from "../data/types"
export default function Armor({armorData}: props) {
  const cost = armorData.cost !== '-'? armorData.cost: 0;
  const label = (armorData.requireTraining)? `${armorData.label} ◆`: armorData.label
  return (
    <div className="item-container">
        <ul className = "item-data">
            <li><strong>{label}</strong></li>
            <li>{cost} ZNT</li>
            <li>{armorData.physicalProtection.join(' ')}</li>
            <li>{armorData.magicalProtection.join(' ')}</li>
            <li>{armorData.initiative}</li>
        </ul>
        <div>{armorData.description}</div>
    </div>
  )
}

type props = {
  armorData: ArmorType
}
