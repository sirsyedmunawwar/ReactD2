import css from "./page.css"
import Author from "./Author"
import Hz from "./Hz"
export default function Page() {
    return (
        <>
            <div className="smalltitle">
                <h3 className="smallthe">The</h3>
                <h1 className="smallsiren">Siren</h1>
                <button className="button">Get Stated</button>

            </div>
            <div className="reacthead">
                <div className="fixed">

                </div>
                <div className="notfixed">
                    <span className="five">5</span> <h1 className="fiveways">Ways to animate a React app.</h1>
                    <Author />
                    <div className="reactimage"></div>
                    <p className="reactpara">Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React. </p>
                    <p className="reactpara"> Let’s talk about them</p>
                    <div className="reactcode"></div>
                    <div className="buttonsdiv">
                        <buton className="threebuttons">React</buton>
                        <buton className="threebuttons">Javascript</buton>
                        <buton className="threebuttons">Animation</buton>
                    </div>
                    <div className="share">
                        <div className="clapimage"></div>
                        <div className="clapcount">9.3K claps</div>

                    </div>
                    <Hz />
                    <Author />
                    <Hz />
                </div>
            </div>


        </>

    )
}
