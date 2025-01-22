
export default function DiceSelect() {
    const dices = [4, 6, 8, 10, 12];
    return(
        <select>
            {dices.map(oneDice => (
                <option key={oneDice} value={oneDice}>{`D${oneDice}`}</option>
            ))}
        </select>
    )
}
