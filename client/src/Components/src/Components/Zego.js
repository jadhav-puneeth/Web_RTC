import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import {v4 as uuidV4} from 'uuid'
import { ZegoSuperBoardManager } from "zego-superboard-web";
import { useParams } from 'react-router-dom';

export default function Zego(props) {
    
    const id = props.roomId;
    let myMeeting = async (element) => {
        const appID = 1024162299;
        const serverSecret = "b841cc82c2ba631fe7cd0796d9b5233a";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, uuidV4(), props.name);
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.addPlugins({ZegoSuperBoardManager});
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
            whiteboardConfig: {            
                showAddImageButton: true, 
             },
        })
    }
    return (
        <>
            <div style={{color: "white",width: '60vw', height: '80vh' }} className='myCallContainer' ref={myMeeting} >
            </div>
        </>
    )
}

