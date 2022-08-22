import "./ViewBoard.scss";
import { GlobalContext } from "../../App";
import { useContext, useRef, useEffect } from "react";
import gsap from "gsap";

const ViewBoard = () => {

    const BACKED_AMOUNT = 100000;
    const {totalBacked,backers} = useContext(GlobalContext);
    const nbr = 1000;

    const viewBoardRef = useRef()
    const progressBar = gsap.utils.selector(viewBoardRef)

    useEffect (() => {
        gsap.fromTo(viewBoardRef.current, 
            {opacity : 0, translateX : '50vh'}, {opacity : 1 , x : 0, duration : 1});
        },[])
    
    useEffect (() => {
        gsap.fromTo(progressBar(".ViewBoard__container--progress-bar__track"), {width : 0},
                                                                           {width : `${totalBacked * 100 / BACKED_AMOUNT}%`, 
                                                                            duration : 0.8, delay : 1.2, ease : "bounce.out"})
        }, [totalBacked])

    useEffect (() => {
        gsap.fromTo(progressBar("#total-backed"), {textContent : totalBacked * 0.9},
                                                  {textContent : totalBacked, 
                                                   duration : 1, snap : {textContent : 1 }})
        gsap.set(progressBar("#total-backed"),{textContent : totalBacked.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), delay : 1})
        
        gsap.fromTo(progressBar("#backers"), {textContent : backers * 0.5},
                                               {textContent : backers, 
                                                duration : 1, snap : {textContent : 1 }})
        gsap.set(progressBar("#backers"),{textContent : backers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), delay : 1})
    
    }, [totalBacked])
            
    useEffect(() => {
        gsap.fromTo(progressBar("#time-left"), {textContent : 100},
        {textContent : 56, 
        duration : 1, snap : {textContent : 1 }})
    },[]) 
    

    return (
        <div className="ViewBoard" ref={viewBoardRef}>
            <div className="ViewBoard__container">
                <div className="ViewBoard__container--datas">
                    <div className="ViewBoard__container--datas__total-backed">
                        <h1 id="total-backed">${totalBacked.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
                        <p>of ${BACKED_AMOUNT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} backed</p>
                    </div>

                    <div className="ViewBoard__container--datas__total-backers">
                        <h1 id="backers">{backers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
                        <p>total backers</p>
                    </div>

                    <div className="ViewBoard__container--datas__day-left">
                        <h1 id="time-left">56</h1>
                        <p>days left</p>
                    </div>
                
                    <div className="ViewBoard__container--progress-bar">
                        <div  style={{width :  `${totalBacked * 100 / BACKED_AMOUNT}%`}}
                              className="ViewBoard__container--progress-bar__track">
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default ViewBoard;