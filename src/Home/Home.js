import React,{useState,useContext} from "react";
import { ContextAPI } from "../components/ContextAPI";


import css from "./home.css";
import Hz from "../components/Hz";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

export default function Home() {





    
    const [rows] = useContext(ContextAPI);

  return (
    <>


      <Header />
      <div className="homeimages">
        <div className="verticalGallery">
          <h1 className="titleofvg">Title of Vertical Gallery</h1>
          <p className="dateofvg"> Travel / August 21 2017</p>
        </div>
        <div className="righttop">
          <h1 className="titlert">The Sound cloud You loved is doomed</h1>
          <p className="datert"> Travel / August 21 2017</p>
        </div>
        <div className="rightbottom">
          <h1 className="titlert">The Sound cloud You loved is doomed</h1>
          <p className="datert"> Travel / August 21 2017</p>
        </div>
      </div>
      <div>
        <h1 className="latest">The Latest</h1>
        <hr className="latesthr" />
      </div>
      <div className="leftSide">
        {rows.map((item) =>
            <>
                <div className="leftsidediv">
                    <img className="leftsideimage" src={item.pic} />
                    <h1 className="leftSidehead">
                        {item.heading}
                    </h1>
                    <p className="leftSidedetails">
                        {item.description}
                    </p>
                    <span className="leftSidetype">
                        {item.category}
                    </span>
                    <span className="leftSidedate">
                        {item.date}
                    </span>
                </div>
            </>)}
</div>

      
      {/* <div>
        <h1 className="latest">Latest Article</h1>
        <hr className="latesthr" />
      </div>
      <div className="top">
        <div className="left">
        {rows.map((any) =>
                <>
     
                <Hz/>
                    <div className="leftdiv" >
                        <img className="imagediv" src={any.img} />
                        <div className="contentdiv">
                            <h1 className='bottomheading'>{any.heading}</h1>
                            <p className='bottomdesc'>{any.description}</p>
                            <span className='bottomspan1'>{any.type1}</span>
                            <span className='bottomspan2' >{any.date1}</span>
                        </div>
                    </div>
                   



                </>
            )}

          <div className="arrowdiv">
            <div className="downarrow"></div>
            <div className="arrow">LOAD MORE</div>
          </div>

          <div className="verticalGallerybottom">
            <h1 className="vgbtitle">Title of Vertical Gallery</h1>
            <p className="vgbdate"> Travel / August 21 2017</p>
          </div>
        </div>
        <div className="right">
          <div className="advdiv">
            <div className="adv">Advertistement</div>
          </div>
          <div>
            <h1 className="latest">Top Posts</h1>
            <hr className="topposthr" />
          </div>
          <div className="rightdiv" >
 
            {rows.map((any) =>
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
        </div>
      </div>
      <div>
        <h1 className="latest">Latest Stories</h1>
        <hr className="latesthr" />
      </div>
      <Hz />
      <div className='bottomarticle'>
                {rows.map((any) =>
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
      <Hz />
      <div className="arrowdiv">
        <div className="arrow">VIEW MORE</div>
        <div className="rightarrow"></div>
      </div>

      <div /> */}
    </>
  );
}
