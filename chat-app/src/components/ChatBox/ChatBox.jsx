import React from 'react'
import './ChatBox.css';
import assets from '../../assets/assets'
const ChatBox = () => {
  return (
    <div className='chat-box'>
        <div className="chat-user">
          <img src={assets.profile_img} alt="" />
          <p>Nobita <img className='dot' src={assets.green_dot} alt="" /></p>
          <img src={assets.help_icon} alt="" />
        </div>

           <div className="chat-msg">
            <div className='s-msg'>
              <p className='msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, debitis!</p>
              <div>
                <img src={assets.profile_img} alt="" />
                <p>2:30 PM</p>
              </div>
            </div>

            <div className='s-msg'>
            <img  className="msg-img" src={assets.pic1} alt="" />
              <div>
                <img  src={assets.profile_img} alt="" />
                <p>2:30 PM</p>
              </div>
            </div>

            <div className='r-msg'>
              <p className='msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, debitis!</p>
              <div>
                <img src={assets.profile_img} alt="" />
                <p>2:30 PM</p>
              </div>
            </div>
           </div>

        <div className="chat-input">
          <input type="text" placeholder=' send a message' />
          <input type="file" id='image' accept='image/png, image/jpeg' />
          <label htmlFor="image">
            <img src={assets.gallery_icon} alt="" />
          </label>
          <img src={assets.send_button} alt="" />
        </div>
        </div>
  )
}

export default ChatBox