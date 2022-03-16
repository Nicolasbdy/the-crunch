import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg } from '@ionic/react';
import { useState, useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Live.css';
import { GetHomeScore, GetAwayScore, GetData } from '../Wrapper';
import LogoAG from './logoag.png';
import LogoFFR from './logoffr.png';

const Live: React.FC = () => {
    const [homeScore, setHomeScore] = useState(0)
    const [awayScore, setAwayScore] = useState(0)

    useEffect(() => {
        const initScore = async () => {
            const hs = await GetHomeScore()
            setHomeScore(hs)
            const as = await GetAwayScore()
            setAwayScore(as)
        }
        initScore()
        const r = setInterval(logique, 10 * 1000)
        return () => {
            clearInterval(r)
        }
    }, [])


    const logique = async () => {
        const data = await GetData()
        console.log(data)

        // Logique

        if (data.type == "Try") {
            if (data.team == 'home') {
                // essai France 
            }

            if (data.team == 'away') {
                //essai Angleterre
            }
        }

        if (data.type == "Penality") {
            if (data.team == 'home') {
                // pénalité France
            }

            if (data.team == 'away') {
                // pénalité Angleterre
            }
        }
        if (data.type == "Conversion"){
            if (data.team == 'home'){
                // Transformation France
            }
            if (data.team == 'away'){
                // Transformation Angleterre
            }
        }
        if (data.type == "Yellow card"){
            if (data.team == 'home'){
                // Carton Jaune France
            }
            if (data.team == 'away'){
                // Carton Jaune Angleterre  
            }
        }
        if (data.type == "Red card"){
            if (data.team == 'home'){
                // Carton Rouge France
            }
            if (data.team == 'away'){
                // Carton Rouge Angleterre
            }
        }
    }


    return (
        <IonPage className='safe-area'>
            <IonHeader>
                <IonTitle>Live</IonTitle>
                <div className='container5'>
                    <IonButton color="light texte" href=''>Retour</IonButton>
                    <IonButton color="light texte" href='/Compositions'>Équipes</IonButton>
                </div>
            </IonHeader>
            <IonContent fullscreen>
                <div className='container2'>
                    <div className='container-bouton1'>
                        <IonImg className="fit-picture" src={LogoFFR} />
                        <IonImg className="fit-picture" src={LogoAG} />
                    </div>
                    <div className='container-bouton1'>
                        <IonButton color="light text bouton">{homeScore}</IonButton>
                        <IonButton color="light text bouton">{awayScore}</IonButton>
                    </div>
                </div>
                <div className='container5'>
                    <IonButton color="light texte" href='DeuxPoints'>DeuxPoints</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Live;

