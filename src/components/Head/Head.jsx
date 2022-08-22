import "./Head.scss"
import { GlobalContext } from "../../App";
import { useContext, useRef, useEffect, useState } from "react";
import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
// import { TweenMax } from "gsap/all";


gsap.registerPlugin(CSSRulePlugin);



const Head = () => {
    const rule = CSSRulePlugin.getRule(".Head:before");
    const  [ isBookmarked, setIsBookmarked] = useState(true);

    const {setShowPledgeModalHandler} = useContext(GlobalContext);
    
    const headRef = useRef()
    
    useEffect (() => {
        gsap.fromTo(headRef.current, 
            {opacity : 0, translateX : '-50vh'}, {opacity : 1 , x : 0, duration : 1});
    
        gsap.to(rule, 0.4, {
            cssRule : {
                scale : 1.3
            },
            // scale: 1.02,
            repeat: -1,
            yoyo: true,
            ease: "Power0.easeNone",
            delay : 1,
        })
    
    },[] )
    






    return(
        <div ref={headRef} className="Head">
            <h1 className="Head__tag"> Mastercraft Bamboo Monitor Riser </h1>
            <p className="Head__text"> A beautiful & handcrafted monitor stand to reduce neck and eye strain. </p>
            <div className="Head__bottom">
                <button className="Head__bottom--button"
                        onClick={setShowPledgeModalHandler}> Back this project </button>
                {
                    isBookmarked ? 
                                    <>
                                    <svg id="bookmark-mobile" onClick={() => setIsBookmarked(!isBookmarked)}  width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
                                    <div className="Head__bottom--bookmark"
                                         onClick={() => setIsBookmarked(!isBookmarked)}>
                                        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
                                        Bookmark
                                    </div>
                                    </>
                                 :   <>
                                     <svg id="bookmarked-mobile"  onClick={() => setIsBookmarked(!isBookmarked)} width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
                                     <div className="Head__bottom--bookmarked"
                                          onClick={() => setIsBookmarked(!isBookmarked)}>
                                        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
                                         Bookmarked
                                     </div>
                                     </>
                }

            </div>
        </div>
    )
}

export default Head;