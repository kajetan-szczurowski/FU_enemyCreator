import { useState, useEffect, useRef } from 'react';
import { SequenceStepProps } from "../data/types";
import EnemyState from '../mechanics/EnemyState';
import { damages } from '../data/damages';
import { states } from '../data/states';
import { ItemGroup, WeaponType } from '../data/types';
import ItemPicker from '../mechanics/itemPicking/ItemPicker';
import {getCommonWeapons} from '../data/inventory/common_weapons'

export default function EnemyLevelAndDices({enemyRef, readyFeedback}: SequenceStepProps) {
  return (
    <>
      <div>
          <EnemyState enemyRef={enemyRef} source = {damages} enemyValueKeyName = "resistances" label = "Odpornosci"/>
          <EnemyState enemyRef={enemyRef} source = {damages} enemyValueKeyName = "insensitivities" label = "Niewrazliwosci"/>
          <EnemyState enemyRef={enemyRef} source = {damages} enemyValueKeyName = "weaknesses" label = "Slabosci"/>
          <EnemyState enemyRef={enemyRef} source = {states.map(st => st.label)} enemyValueKeyName = "resistancesToEffects"  label = "Odpornosci na efekty"/>
      </div>
      <div>
        <ItemPicker<WeaponType> itemSources = {getCommonWeapons()}/>
      </div>
    </>

  )


}
