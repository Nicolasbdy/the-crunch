import { IonCardSubtitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg, IonVirtualScroll, IonItem } from '@ionic/react';
import './deuxpoints.css';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";


const DeuxPoints = (props: any) => {
    const location = useLocation();
    const [url, setUrl] = useState("")
    const [text, setText] = useState("")
    const [text2, setText2] = useState("")
    const [player, setPlayer] = useState("")

    useEffect(() => {
        console.log(props)
        const params = props.history.location.state
        setUrl(params.url)
        setText(params.text)
        setPlayer(params.player)
        setText2(params.text2)
    }, [location]);

    return (
        <IonPage className='safe-area'>
            <IonHeader>
            </IonHeader>
            <IonContent fullscreen>
                <div className='containergif'>
                    <span className="text5"> {player} {text}</span>
                    <IonImg className='gif1' src={url}></IonImg>
                    <span className='text6'>{text2}</span>
                    <IonButton color="light texte textemarge" href='Live'>J'ai bu.</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default DeuxPoints;
