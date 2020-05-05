import React, { Component } from 'react';
import ReactPlayer from 'react-player';

const vid ={
  margin: '0 auto',
  textAlign: 'center',
}

export default class Video extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <>
        <h4></h4>
        <div className="reel">
          <ReactPlayer style={vid} url="https://www.youtube.com/watch?v=ysz5S6PUM-U" loop controls width={'100%'} height={'100%'}/>
        </div>

        <style jsx>{`
          /* desktop */
          @media (min-device-width:1224px) {
            .reel {
              height: 75vh;
            }
          }
          /* large desktop screen */
          @media (min-device-width:1824px) {
            .reel {
              height: 40vh;
            }
          }
          /* Small desktop screen */
          @media (max-width:1224px) {
            .reel {
              height: 60vh;
            }
          }
          /* Tablet Device */
          @media (max-device-width:1224px) {
          @media (orientation: portrait) {
            .reel {
              height: 50vh;
            }
          }
          @media (orientation: landscape) {
            .reel {
              height: 60vh;
            }
          }
          }
          /* Mobile */
          @media (max-device-width:850px) {
          @media (orientation: portrait) {
            .reel {
              height: 30vh;
            }
          }
          @media (orientation: landscape) {
            .reel {
              height: 65vh;
            }
          }
          }
        
      `}</style>

      </>
    )
  }
}