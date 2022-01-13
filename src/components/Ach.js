import React from 'react'
import Ac from './Ac'
import content from "./Ac.json"

export default function Ach() {
    return (
        <div>
            <Ac updater={content}/>
        </div>
    )
}
