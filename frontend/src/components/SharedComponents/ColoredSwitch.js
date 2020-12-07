import { React, useState } from 'react'
import Chip from './Chip'

function getColor(value) {
    if (value === 0 || value === 2) {
        return "rgb(255 255 255 / 68%)"
    }
    if (value === 1) {
        return "springgreen"
    }
    if (value === 3) {
        return "rgb(255, 71, 71)"
    }
}

function ColoredSwitch({ text, onTap }) {
    const [selected, setSelected] = useState(0)
    function switchValue() {
        let newVal = selected+1
        if (selected < 3) {
            setSelected(s => s + 1)
        }
        else {
            setSelected(0)
            newVal=0
        }
        onTap(newVal)
    }
    return (
        <span onClick={switchValue} style={{cursor:"pointer"}}>
            <Chip color={getColor(selected)} text={text}/>
        </span>
    )
}

export default ColoredSwitch
