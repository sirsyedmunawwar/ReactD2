import React from 'react'

export default function ThePost(props) {
    return (
        
        <div className="rightdiv" >
 
            {props.updater.map((any) =>
                <>

                  
                    <div className='rightdivmain'>
                        
                        <img className="rightdivimage" src={any.img} />
                        <div className="Rightcontentdiv">
                            <h1 className='rightheading'>{any.heading}</h1>

                            <span className='rightspan1'>{any.type1}</span>
                            <span className='rightspan2' >{any.date1}</span>
                        </div>
                    </div>
                    <hr className="minushr"/>






                </>
            )}
        </div>

    )
}
