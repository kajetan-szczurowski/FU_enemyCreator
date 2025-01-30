import { WeaponType } from "../data/types"
export default function Weapon({weaponData}: props) {
  return (
    <div>
        <label>{(weaponData.requireTraining)? `${weaponData.label} ◆`: weaponData.label}</label>
        <ul>
            <li>Koszt: {weaponData.cost}</li>
            <li>Test precyzji: {weaponData.precision}</li>
            <li>Obrazenia: {weaponData.damage} {weaponData.damageType}</li>
        </ul>
        <div>{weaponData.description}</div>
    </div>
  )
}

type props = {
    weaponData: WeaponType
}
