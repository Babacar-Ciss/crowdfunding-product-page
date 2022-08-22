import "./PledgeComponent.scss";
import { GlobalContext } from "../../App";
import { useState, useContext, useRef, useEffect } from "react";
import styled from "styled-components";


const PledgeComponentStyle = styled.div`
            
            position: relative;
            display: flex;
            justify-content: stretch;
            flex-wrap: wrap;
            width: 90%;
            margin-inline: auto;
            padding-top: 33px;
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


const PledgeComponent = ({title, details, defaultPledge , numberLeft}) => {
   
    const ref = useRef();

   
    
    const {setShowThankYouModalHandler,addPledgeHandler, 
                    pledgeValue,subtractNumberLeftHandler,selectedTitlePledge,setSelectedTitlePledge} = useContext(GlobalContext);


    // States
    const [checked, setChecked] = useState(false)

    // console.log(ref.current)

    // Functions Handlers
    const clickHandler = () => {
        setChecked(!checked)
        setChecked(!checked)
    }

    const onChangeHandler = (e) => {
        setChecked(true)
    }
    
    return (

        <>
            {
                (numberLeft > 0 || numberLeft === null) 
                ? 
                (
                    <div    
                            className="PledgeComponent" 
                            style={(checked || selectedTitlePledge === title) ? {border : "2px solid #3CB3AB" } : null}>
                   
                   <div className="PledgeComponent__form">
                       <input type="radio"
                            //   name="radio"
                              id="radio"
                              onChange={onChangeHandler}
                              checked={checked || selectedTitlePledge === title}
                              onClick={clickHandler}/>
       
                       <span className="checkmark"></span>
                   </div>
       
                   <div className="PledgeComponent__box"
                        onClick={clickHandler}>
                       <h3 className="PledgeComponent__box--title">{title}</h3>
       
                       <h4  className={`PledgeComponent__box--value`}> 
                                     
                                     {defaultPledge ? `Pledge $${defaultPledge} or more` : null}   </h4>
                       
                       <h2 className="PledgeComponent__box--left-backers">{defaultPledge ? `${numberLeft}` : null} <span className="PledgeComponent__box--left-backers__left">   {defaultPledge  ? `left` : null}</span></h2>
                       <p className="PledgeComponent__box--details">{details}</p>
                   </div>

                       {
                           (checked || selectedTitlePledge === title) ? (
                               <div className="PledgeComponent__submitting">
                               <p>Enter your pledge</p>
                               <div>
                                   <input type="number"
                                           pattern="[^0-9]+" 
                                          onChange={addPledgeHandler}
                                          className="PledgeComponent__submitting--input" 
                                          placeholder="0" />
                               </div>
                               {/* {console.log(ref.current)} */}
                               <button onClick={(pledgeValue >= defaultPledge && pledgeValue !== "0")  
                                                               ? 
                                                               () => {
                                                                   setShowThankYouModalHandler();
                                                                   subtractNumberLeftHandler(defaultPledge);
                                                               }
                                                               : null}
                                                     
                                       className="PledgeComponent__submitting--button"> Continue </button>
                            </div>
                           ) : null
                       }
               </div>
                )
                
                    :
                (
                    <PledgeComponentStyle className="PledgeComponent" 
                    style={(checked) ? {border : "2px solid #3CB3AB" } : null}>
                   
                   <div className="PledgeComponent__form">
                       <input type="radio"
                              name="radio"
                              onChange={onChangeHandler}
                              checked={checked}
                              onClick={clickHandler}/>
       
                       <span className="checkmark"></span>
                   </div>
       
                   <div className="PledgeComponent__box"
                        onClick={clickHandler}>
                       <h3 className="PledgeComponent__box--title">{title}</h3>
       
                       <h4 ref={ref} className={`PledgeComponent__box--value`}> 
                                     
                                     {defaultPledge ? `Pledge $${defaultPledge} or more` : null}   </h4>
                       
                       <h2 className="PledgeComponent__box--left-backers">{defaultPledge ? `${numberLeft}` : null} <span className="PledgeComponent__box--left-backers__left">   {defaultPledge  ? `left` : null}</span></h2>
                       <p className="PledgeComponent__box--details">{details}</p>
                   </div>
                   {/* {console.log(subtractNumberLeftHandler)} */}
           
                       {
                           checked ? (
                               <div className="PledgeComponent__submitting">
                               <p>Enter your pledge</p>
                               <div>
                                   <input type="number"
                                           pattern="[^0-9]+" 
                                          onChange={addPledgeHandler}
                                          className="PledgeComponent__submitting--input" 
                                          placeholder="0" />
                               </div>
                               <button onClick={(pledgeValue >= defaultPledge && pledgeValue !== "0")  
                                                               ? 
                                                               () => {
                                                                   setShowThankYouModalHandler();
                                                                   subtractNumberLeftHandler(defaultPledge);
                                                               }
                                                               : null}         
                                       className="PledgeComponent__submitting--button"> Continue </button>
                            </div>
                           ) : null
                       }
               </PledgeComponentStyle>)
            }
        </>
    )
}

export default PledgeComponent;