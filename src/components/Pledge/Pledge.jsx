import "./Pledge.scss";
import { GlobalContext } from "../../App";
import { useContext, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const PledgeStyle = styled.div`
    position: relative;
    z-index: 1;
    margin-top: 40px;
    margin-inline: auto;
    padding-top: 48px;
    padding-bottom: 32px;
    background-color: #FFF;
    border-radius: 8px;
    margin-bottom: 24px;
    border: 1px solid rgba(0, 0, 0, 0.15);



    &::after {
        z-index: 2;
        background-color: #FFF;
        width: 100%;
        height: 100%;
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.65;
        cursor: not-allowed;
    }
`

const Pledge = ({title, amount, text, numberLeft}) => {

        const pledgeRef = useRef()
        const revealsRefs = useRef([])
        revealsRefs.current = [];

        const {setShowPledgeModalHandler,setSelectedTitlePledge} = useContext(GlobalContext)
        
        const pledgeSelected = () => {
            setShowPledgeModalHandler()
            setSelectedTitlePledge(title)
        }

        useEffect(() => {
            
            revealsRefs.current.forEach((el, index) => {
                gsap.fromTo(el, 
                    {autoAlpha : 0}, 
                    {duration : 1, 
                    autoAlpha : 1, 
                    ease : "none",
                    scrollTrigger : {
                        id : `section-${index+1}`,
                        trigger : el,
                        start : "70% bottom",
                        toggleActions : "play none none none",
                        markers : false,
                    }})
            })
            
            
        }, [])



        const addToRefs = (el) => {
            if(el && !revealsRefs.current.includes(el)) {
                revealsRefs.current.push(el)
            }
        }


    return (
       <>
            {
                numberLeft != 0 ? 
                <div ref={addToRefs} className="Pledge" >
                
                <div className="Pledge__container">
                    <h3>{title}</h3>
                    <h4>Pledge ${amount} or more </h4>
                    <p> {text} </p>
                    <h2>{numberLeft} <span>left</span></h2>
                 {numberLeft !== 0 ? 
                                    <button onClick={pledgeSelected}>
                                        Select Reward
                                    </button> 
                                   : 
                                    <button id="out-of-stock">
                                        Out of stock
                                    </button> }   
                </div>
                </div>
                : 
                <PledgeStyle>
 
                <div className="Pledge__container">
                    <h3>{title}</h3>
                    <h4>Pledge ${amount} or more </h4>
                    <p> {text} </p>
                    <h2>{numberLeft} <span>left</span></h2>
                    <button id="out-of-stock">Out of stock</button>    
                </div>

                </PledgeStyle>
            }
       
       
       </>
       
            
    )
}

export default Pledge;