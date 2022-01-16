import React from 'react'
import Hz from './Hz'

export default function ArticleForBollywood(props) {
    return (
      <>
            {props.updater.map((any) =>
                <>
     
                
                    <div className="leftdiv" >
                        <img className="imagediv" src={any.img} />
                        <div className="contentdiv">
                            <h1 className='bottomheading'>{any.heading}</h1>
                            <p className='bottomdesc'>{any.description}</p>
                            <span className='bottomspan1'>{any.type1}</span>
                            <span className='bottomspan2' >{any.date1}</span>
                        </div>
                    </div>
                    <hr className='inside'/>
                   



                </>
            )}
            </>
       
    )
}