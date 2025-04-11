import React, { useRef } from 'react'
import "./Testominals.css"
import nextIcon from  "../../assets/next-icon.png"
import backIcon from  "../../assets/back-icon.png"
import user1 from  "../../assets/user-1.png"
import user2 from  "../../assets/user-2.png"
import user3 from  "../../assets/user-3.png"
import user4 from  "../../assets/user-4.png"




const Testominals = () => {
    const slider = useRef()
    let tx = 0
    const slideForward =()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slidebackword =()=>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div id='Testrimonials' className='testimonials'>
        <img onClick={slideForward} src={nextIcon} alt="" className='next-btn' />
        <img onClick={slidebackword} src={backIcon} alt="" className='back-btn' />
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user1} alt="" />
                            <div>
                                <h3>William barret</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>"Studying at Edusity has been a game-changer for me. The faculty are incredibly supportive and always push you to think critically. The curriculum is not just about passing exams—it's about truly understanding and applying what you learn."
                        — Riya Sharma, B.Tech Computer Science</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user2} alt="" />
                            <div>
                                <h3>William barret</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>"Studying at Edusity has been a game-changer for me. The faculty are incredibly supportive and always push you to think critically. The curriculum is not just about passing exams—it's about truly understanding and applying what you learn."
                        — Riya Sharma, B.Tech Computer Science</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user3} alt="" />
                            <div>
                                <h3>William barret</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>"Studying at Edusity has been a game-changer for me. The faculty are incredibly supportive and always push you to think critically. The curriculum is not just about passing exams—it's about truly understanding and applying what you learn."
                        — Riya Sharma, B.Tech Computer Science</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user4} alt="" />
                            <div>
                                <h3>William barret</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>"Studying at Edusity has been a game-changer for me. The faculty are incredibly supportive and always push you to think critically. The curriculum is not just about passing exams—it's about truly understanding and applying what you learn."
                        — Riya Sharma, B.Tech Computer Science</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testominals
