import { useRef, useState } from "react"
import { Enemy } from "../data/types"
import { defaultEnemy } from "../data/defaults"
import EnemyKindSelection from "../sequence/EnemyKindSelection";
import EnemyLevelAndDices from "../sequence/EnemyLevelAndDices";

const CreationSequence = [EnemyKindSelection, EnemyLevelAndDices];
export default function EnemyCreator() {
    const enemyData = useRef<Enemy>(defaultEnemy);
    const readyForNextStep = useRef(false);
    const [sequenceStep, setSequenceStep] = useState(0);
    const CreationWindow = CreationSequence[sequenceStep];
    return (
        <>
            <div>EnemyCreator</div>
            <CreationWindow enemyRef={enemyData} readyFeedback={readyForNextStep}/>
            <button onClick={handleNextButton}>Next</button>
        </>
    )

    function handleNextButton(){
        if (readyForNextStep.current) {
            readyForNextStep.current = false;
            incrementStep();
            return;
        }
        console.log('nie gotowy');
    }

    function incrementStep() {
        setSequenceStep(prev => prev + 1);
    }
}
