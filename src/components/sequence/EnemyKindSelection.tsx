import { enemyKindsList } from "../data/enemy-kinds";
import { defaultEnemy } from "../data/defaults";
import { SequenceStepProps } from "../data/types";

export default function EnemyKindSelection({enemyRef, readyFeedback}: SequenceStepProps) {
    const setPositiveFeedback = () => readyFeedback.current = true;
    const setNegativeFeedback = () => readyFeedback.current = false;

    return(
        <select onChange = {handleSelect}>
            <option value = "default-notPermitted" >Wybierz rodzaj przeciwnika</option>
            {enemyKindsList.map(kind => (
                <option value = {kind.id} key={kind.id}> {kind.label} </option>
            )
            )}
        </select>
    )

    function handleSelect(event: React.FormEvent<HTMLSelectElement>) {
        if (event.currentTarget.value === 'default-notPermitted') {setNegativeFeedback(); return;}

        enemyRef.current = enemyKindsList.find(kind => kind.id === event.currentTarget.value)?.enemyKindFunction(enemyRef.current) ?? defaultEnemy; 
        setPositiveFeedback();
    }

}

