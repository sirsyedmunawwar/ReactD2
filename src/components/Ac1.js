import React from 'react'
import Hz from './Hz'

export default function Ac1(props) {
    return (
      <>
            {props.updater1.map((any) =>
                <>
     
                <Hz/>
                    <div className="leftdiv" >
                        <img className="imagediv" src={any.img} />
                        <div className="contentdiv">
                            <h1>{any.heading}</h1>
                            <p>{any.description}</p>
                            <span>{any.type1}</span>
                            <span>{any.date1}</span>
                        </div>
                    </div>
                   



                </>
            )}
            </>
       
    )
}
