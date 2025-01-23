
export default function DiceSelect({label, setState}: props) {
    const dices = [4, 6, 8, 10, 12];
    return(
        <div>
            <label>{label}</label>
            <select onChange={(e) => handleChange(e.target.value)}>
            {dices.map(oneDice => (
                <option key={oneDice} value={oneDice}>{`D${oneDice}`}</option>
            ))}
        </select>
        </div>
        
    )

    function handleChange(newValue: string){
        setState(prevState => prevState.map(dice => dice.label === label? {...dice, value: Number(newValue)} : dice))
    }
}

type DiceType = {
    label:string,
    value: number
}

type props = {
    label: string,
    setState: React.Dispatch<React.SetStateAction<DiceType[]>>
}

