import Pledge from "../Pledge/Pledge";
import { GlobalContext } from "../../App";
import { useIntersection } from "react-use";
import { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./Project.scss"

const Project = () => {

    const {numberLeftBambooStand,numberLeftBlackEdition,numberLeftMahogany} = useContext(GlobalContext)
 
    const projectRef = useRef();


    // useEffect (() => {
    //     gsap.fromTo(projectRef.current,{ opacity : 0.5},
    //                                    { opacity : 1 }),
            
    //         {  
    //             scrollTrigger : {
    //             trigger: "#Project",
    //             markers: true,
    //             start: "top bottom"
    //             }
    //         }
            
    //       }
            
            
            
            // )
    




    // useEffect (() => {
    //     gsap.from(projectRef.current, {opacity : 0.2});
    //     gsap.to(projectRef.current, {opacity : 1, duration : 0.5, delay : 2, scale : 1.03})
    //     gsap.to(projectRef.current, {opacity : 1, duration : 0.5, delay : 3, scale : 1})
    // })

    // const intersection = useIntersection(projectRef, {
    //     root : null,
    //     rootMargin : '0px',
    //     threshold : 0.5
    // })

    // console.log(intersection);
    // const fadeIn = el => {
    //     gsap.to(el, 1, {
    //         opacity: 1,
    //         ease : "power4.out",
    //     });
    // }

    // const fadeOut = el => {
    //     gsap.to(el, 1, {
    //         opacity: 0,
    //         ease : "power4.out",
    //     });
    // }

    // intersection && intersection.intersectionRatio < 0.5 ? fadeOut(".Project") : fadeIn(".Project")

    return (
        <div className="Project" id="Project" ref={projectRef}>
            <div className="Project__container">
                <h2>About this project</h2>
                <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
                <br />
                <br />
                <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
            <Pledge title="Bamboo Stand"
                    amount="25" 
                    text="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
                    numberLeft={numberLeftBambooStand}/>
            
            <Pledge title="Black Edition Stand"
                    amount="75" 
                    text="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                    numberLeft={numberLeftBlackEdition}/>

            <Pledge title="Mahogany Special Edition"
                    amount="200" 
                    text="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list.  Shipping is included."
                    numberLeft={numberLeftMahogany}/>
            
            </div>
        </div>
    )


}

export default Project;