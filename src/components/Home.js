import css from "./home.css"
import Hz from "./Hz"
import { Link} from "react-router-dom"
import Header from "./Header"
import content from "./contentForHome.json"
import TheLatest from "./TheLatest"
import LatestArticle from "./latestArticle"
import LatestStories from "./LatestStories"
import TopPost from "./TopPost";



export default function Home(props) {
    return (
        <>
        <Header />
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
          
          

            <Link className="postforall" to="/post"> <TheLatest updater={content.TheLatest}/></Link>
            <div>
                <h1 className="latest">
                    Latest Article
                </h1>
                <hr className="latesthr" />
            </div>
            <div className="top">
                <div className="left">
                <Link className="postforall" to="/post"><LatestArticle updater={content.LatestArticle}/>
</Link>

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
                    <Link className="postforall" to="/post"><TopPost updater={content.TopPost}/>
</Link>

                </div>
            </div>
            <div>
                <h1 className="latest">Latest Stories</h1>
                <hr className="latesthr" />
            </div>
            <Hz />
            <Link className="postforall" to="/post"><LatestStories updater={content.LatestStories}/></Link>
            <Hz />
            <div className="arrowdiv">
                <div className="arrow">VIEW MORE</div>
                <div className="rightarrow"></div>
            </div>

            <div />
        </>
    )

}


