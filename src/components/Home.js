import Ach from "./Ach"
import Ach1 from "./Ach1"
import css from "./home.css"
import Hz from "./Hz"
import Ach2 from "./Ach2"
import Ach3 from "./Ach3"


export default function Home(props) {
    return (
        <>
            <div className="homeimages">
                <div className="verticalGallery">
                    <h1 className="titleofvg">
                        Title of Vertical Gallery
                    </h1>
                    <p className="dateofvg"> Travel / August 21 2017</p>
                </div>
                <div className="righttop">
                    <h1 className="titlert">
                        The Sound cloud You loved is doomed
                    </h1>
                    <p className="datert"> Travel / August 21 2017</p>
                </div>
                <div className="rightbottom">
                    <h1 className="titlert">
                        The Sound cloud You loved is doomed
                    </h1>
                    <p className="datert"> Travel / August 21 2017</p>
                </div>
            </div>
            <div>
                <h1 className="latest">
                    The Latest
                </h1>
                <hr className="latesthr" />
            </div>
            <Ach />


            <div>
                <h1 className="latest">
                    Latest Article
                </h1>
                <hr className="latesthr" />
            </div>
            <div className="top">
                <div className="left">
                    <Ach1 />

                    <div className="arrowdiv">
                        <div className="downarrow"></div>
                        <div className="arrow">LOAD MORE</div>
                    </div>

                    <div className="verticalGallerybottom">
                        <h1 className="vgbtitle" >
                            Title of Vertical Gallery
                        </h1>
                        <p className="vgbdate"> Travel / August 21 2017</p>
                    </div>



                </div>
                <div className="right" >
                    <div className="advdiv">
                        <div className="adv" >
                            Advertistement
                        </div>

                    </div>
                    <div>
                        <h1 className="latest">
                            Top Posts
                        </h1>
                        <hr className="topposthr" />
                    </div>
                    <Ach3/>

                </div>
            </div>
            <div>
                <h1 className="latest">Latest Stories</h1>
                <hr className="latesthr" />
            </div>
            <Hz />
            <Ach2 />
            <Hz />
            <div className="arrowdiv">
                <div className="arrow">VIEW MORE</div>
                <div className="rightarrow"></div>
            </div>

            <div />
        </>
    )

}


