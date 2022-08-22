import PledgeComponent from "../PledgeComponent/PledgeComponent";
import "./PledgeModal.scss";
import { GlobalContext } from "../../App";
import { useState, useContext, useEffect, useRef } from "react";
import gsap from "gsap";


const PledgeModal = () => {
    
    const {setShowPledgeModalHandler,numberLeftBambooStand,numberLeftBlackEdition,numberLeftMahogany, set} = useContext(GlobalContext);
    
    const pledgeModalRef = useRef()


    useEffect (() => {
        gsap.fromTo(pledgeModalRef.current, {y: "100vh"}, {y : "-35vh",  duration : 1} )
    }, [])


    return (
        <div className="PledgeModal" >
            <div className="PledgeModal__container">
                <div className="modal" ref={pledgeModalRef} >
                    <div className="modal__wrapper">
                        <h2>Back this project</h2>
                        <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world? </p>   
                        <svg onClick={setShowPledgeModalHandler}
                        width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fillRule="evenodd" opacity=".4"/></svg>
                    </div>
                    
                    <PledgeComponent defaultPledge =""
                                     numberLeft={null}
                                     title = "Pledge with no reward"
                                     details = "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."/>

                    <PledgeComponent defaultPledge ={25}
                                     numberLeft={numberLeftBambooStand}
                                     title = "Bamboo Stand"
                                     details = "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."/>
                    
                    
                    <PledgeComponent defaultPledge ={75}
                                     numberLeft={numberLeftBlackEdition}
                                     title = "Black Edition Stand"
                                     details = "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."/>

                    <PledgeComponent defaultPledge ={200}
                                     numberLeft={numberLeftMahogany}
                                     title = "Mahogany Special Edition"
                                     details = "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list.  Shipping is included."/>

                </div>
            </div>
        </div>
        )
}

export default PledgeModal;