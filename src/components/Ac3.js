import React from 'react'
import Hz from './Hz'

export default function Ac3(props) {
    return (
        
        <div className="rightdiv" >
 
            {props.updater3.map((any) =>
                <>

                  
                    <div className='rightdivmain'>
                        
                        <img className="rightdivimage" src={any.img} />
                        <div className="Rightcontentdiv">
                            <h1 className='rightheading'>{any.heading}</h1>

                            <span className='rightspan1'>{any.type1}</span>
                            <span className='rightspan2' >{any.date1}</span>
                        </div>
                    </div>
                    <Hz className="hellohr"/>






                </>
            )}
        </div>

    )
}
