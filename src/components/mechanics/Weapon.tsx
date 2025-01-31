import { WeaponType } from "../data/types"
import '../styles/items.css'

export default function Weapon({weaponData}: props) {
  const cost = weaponData.cost !== '-'? weaponData.cost: 0;
  const label = (weaponData.requireTraining)? `${weaponData.label} ◆`: weaponData.label
  return (
    <div className="item-container">
        <ul className = "item-data">
            <li><strong>{label}</strong></li>
            <li>{cost} ZNT</li>
            <li>{weaponData.precision.join(' + ')}</li>
            <li>{weaponData.damage} {weaponData.damageType}</li>
        </ul>
        <div>{weaponData.description}</div>
    </div>
  )
}


type props = {
    weaponData: WeaponType,
}
