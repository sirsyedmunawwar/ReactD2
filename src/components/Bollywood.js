import ArticleForBollywoodHolder from "./ArticleForBollywoodHolder"
import cssstyles from "./bollywood.css"
import Header from "./Header"
import { Link} from "react-router-dom"
import TopPost from './TopPost'
import content from './contentForHome.json'


function Bollywood(props) {
    return (
        
        <>
         <Header />
            <div className="top">
                <div className="left">
                <div>
                <h1 className="bollywoodtag">
                   Bollywood
                </h1>
                <hr className="bollywoodhr" />
            </div>
                    
                    <Link className="postforall" to="/post"><ArticleForBollywoodHolder /></Link>

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
                    <Link className="postforall" to="/post"><TopPost updater={content.TopPost}/></Link>
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