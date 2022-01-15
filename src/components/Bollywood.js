import Ach1 from "./Ach1"
import Ach3 from "./Ach3"


function Bollywood(props) {
    return (
        <>
            
            <div className="top">
                <div className="left">
                <div>
                <h1 className="latest">
                   Bollywood
                </h1>
                <hr className="topposthr" />
            </div>
                    <Ach1 />

                    <div className="arrowdiv">
                        <div className="downarrow"></div>
                        <div className="arrow">LOAD MORE</div>
                    </div>




                </div>
                <div className="right" >

                    <div>
                        <h1 className="latest">
                            Top Posts
                        </h1>
                        <hr className="topposthr" />
                    </div>
                    <Ach3 />
                    <div className="advdiv">
                        <div className="adv" >
                            Advertistement
                        </div>

                    </div>

                </div>
            </div>


        </>

    )
}
export default Bollywood