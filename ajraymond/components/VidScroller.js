import React from 'react';
import VidPopup from './VidPopup';
import videos from '../data/videos';

export default class VidScroller extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
          videos
        }
      }
    
  
    render() {
        return (
            <div className="strip">
            <h4>Video</h4>
            <div className="grid-container">
                {this.state.videos.map((videos) => (
                    <VidPopup videos={videos} />
                ))}

                <style jsx>{`
                    /* desktop */
                    @media (min-device-width:1224px) {
                        .grid-container {
                            display: grid;
                            grid-gap: 10px;
                            grid-template-columns: repeat(100, 45%) 5px; 
                            grid-template-rows: minmax(150px, 1fr);
                            overflow-x: scroll;
                            padding-bottom: 10px;
                            margin-bottom: 25px;
                            align-content: start;
                            overflow-y: hidden; 
                            overflow-x: scroll;
                        }
                        .grid-container > div {
                            text-align: center;
                            padding: 10px 0;
                            font-size: 30px;
                        }    
                    }
                    /* large desktop screen */
                    @media (min-device-width:1824px) {
                        .grid-container {
                            display: grid;
                            grid-gap: 10px;
                            grid-template-columns: repeat(100, 45%) 5px; 
                            grid-template-rows: minmax(150px, 1fr);
                            overflow-x: scroll;
                            padding-bottom: 10px;
                            margin-bottom: 25px;
                            align-content: start;
                            overflow-y: hidden; 
                            overflow-x: scroll;
                        }
                        .grid-container > div {
                            text-align: center;
                            padding: 10px 0;
                            font-size: 30px;
                        }
                    }
                    /* Small desktop screen */
                    @media (max-width:1224px) {
                        .grid-container {
                            display: grid;
                            grid-gap: 10px;
                            grid-template-columns: repeat(100, 65%) 5px; 
                            grid-template-rows: minmax(150px, 1fr);
                            overflow-x: scroll;
                            padding-bottom: 10px;
                            margin-bottom: 25px;
                            align-content: start;
                            overflow-y: hidden; 
                            overflow-x: scroll;
                        }
                        .grid-container > div {
                            text-align: center;
                            padding: 10px 0;
                            font-size: 30px;
                        }
                    }
                    /* Tablet Device */
                    @media (max-device-width:1224px) {
                    @media (orientation: portrait) {
                        .grid-container {
                            display: grid;
                            grid-gap: 10px;
                            grid-template-columns: repeat(100, 70%) 5px; 
                            grid-template-rows: minmax(150px, 1fr);
                            overflow-x: scroll;
                            padding-bottom: 10px;
                            margin-bottom: 25px;
                            align-content: start;
                            overflow-y: hidden; 
                            overflow-x: scroll;
                        }
                        .grid-container > div {
                            text-align: center;
                            padding: 10px 0;
                            font-size: 30px;
                        }
                    }
                    @media (orientation: landscape) {
                        .grid-container {
                            display: grid;
                            grid-gap: 10px;
                            grid-template-columns: repeat(100, 70%) 5px; 
                            grid-template-rows: minmax(150px, 1fr);
                            overflow-x: scroll;
                            padding-bottom: 10px;
                            margin-bottom: 25px;
                            align-content: start;
                            overflow-y: hidden; 
                            overflow-x: scroll;
                        }
                        .grid-container > div {
                            text-align: center;
                            padding: 10px 0;
                            font-size: 30px;
                        }
                    }
                    }
                    /* Mobile */
                    @media (max-device-width:850px) {
                    @media (orientation: portrait) {
                        .grid-container {
                            display: grid;
                            grid-gap: 10px;
                            grid-template-columns: repeat(100, 85%) 5px; 
                            grid-template-rows: minmax(150px, 1fr);
                            overflow-x: scroll;
                            padding-bottom: 10px;
                            margin-bottom: 25px;
                            align-content: start;
                            overflow-y: hidden; 
                            overflow-x: scroll;
                        }
                        .grid-container > div {
                            text-align: center;
                            padding: 10px 0;
                            font-size: 30px;
                        }
                    }
                    @media (orientation: landscape) {
                        .grid-container {
                            display: grid;
                            grid-gap: 10px;
                            grid-template-columns: repeat(100, 40%) 5px; 
                            grid-template-rows: minmax(150px, 1fr);
                            overflow-x: scroll;
                            padding-bottom: 10px;
                            margin-bottom: 25px;
                            align-content: start;
                            overflow-y: hidden; 
                            overflow-x: scroll;
                        }
                        .grid-container > div {
                            text-align: center;
                            padding: 10px 0;
                            font-size: 30px;
                        }
                    }
                    }
                  
                `}</style>
            </div>
            </div>
        )
    }
  }