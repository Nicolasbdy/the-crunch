import { IonCardSubtitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg, IonVirtualScroll, IonItem } from '@ionic/react';
import './deuxpoints.css';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";


const DeuxPoints = (props: any) => {
    const location = useLocation();
    const [url, setUrl] = useState("")
    const [text, setText] = useState("")
    const [player, setPlayer] = useState("")

    useEffect(() => {
        console.log(props)
        const params = props.history.location.state
        setUrl(params.url)
        setText(params.text)
        setPlayer(params.player)
    }, [location]);

    return (
        <IonPage className='safe-area'>
            <IonHeader>
                <IonButton color="light texte textemarge" href='Live'>Match</IonButton>
            </IonHeader>
            <IonContent fullscreen>
                <div className='containergif'>
                    
                    <span className="text5"> {player}</span>
                    <IonImg className='gif1' src={url}></IonImg>
                    <span className='text6'>{text}</span>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default DeuxPoints;
