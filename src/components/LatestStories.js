import React from 'react'
import Hz from './Hz'

export default function LatestStories(props) {
    return (
        <>
            <div className='bottomarticle'>
                {props.updater.map((any) =>
                    <>


                        <div className="Bottomcontentdiv">
                            <h1 className='bottomheading'>{any.heading}</h1>
                            <p className='bottomdesc'>{any.description}</p>
                            <span className='bottomspan1'>{any.type1}</span>
                            <span className='bottomspan2' >{any.date1}</span>
                        </div>
                    </>
                )}
            </div>
        </>

    )
}
