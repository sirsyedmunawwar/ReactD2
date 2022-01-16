import Ach1 from "./Ach1"
import Ach3 from "./Ach3"
import ArticleForBollywoodHolder from "./ArticleForBollywoodHolder"
import cssstyles from "./bollywood.css"


function Bollywood(props) {
    return (
        <>
            
            <div className="top">
                <div className="left">
                <div>
                <h1 className="bollywoodtag">
                   Bollywood
                </h1>
                <hr className="bollywoodhr" />
            </div>
                    <ArticleForBollywoodHolder />

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
                        <hr className="tophr" />
                    </div>
                    <Ach3 />
                    <div className="bollywoodadv">
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