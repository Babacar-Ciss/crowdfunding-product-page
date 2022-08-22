import "./ThanksYou.scss";
import { GlobalContext } from "../../App";
import { useContext, useEffect, useRef } from "react";
import gsap from "gsap";

const ThanksYou = ()  => {

    const {calculateBackedTotalHandler} = useContext(GlobalContext);

    const thankYouModalRef = useRef();

    useEffect(() => {
        gsap.fromTo(thankYouModalRef.current, {y: "-100%"}, {y : "25%", duration : 1} )

    })


    return (
        <div className="ThanksYou" >
            <div className="ThanksYou__container">
                <div className="modal" ref={thankYouModalRef}>
                    <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#3CB3AB" cx="32" cy="32" r="32"/><path stroke="#FFF" stroke-width="5" d="M20 31.86L28.093 40 44 24"/></g></svg>
                    <h2> Thanks for your support! </h2>
                    <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
                    <button onClick={calculateBackedTotalHandler}> Got it!</button>
                </div>
            </div>
        </div>
    )
}

export default ThanksYou;