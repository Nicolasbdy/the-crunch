import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg } from '@ionic/react';
import { useState, useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Live.css';
import { GetHomeScore, GetAwayScore, GetData } from '../Wrapper';
import LogoAG from './logoag.png';
import LogoFFR from './logoffr.png';
import { useHistory } from 'react-router-dom';

const Live: React.FC = () => {
    const [homeScore, setHomeScore] = useState(0)
    const [awayScore, setAwayScore] = useState(0)
    const history = useHistory()

    useEffect(() => {
        const initScore = async () => {
            const hs = await GetHomeScore()
            setHomeScore(hs)
            const as = await GetAwayScore()
            setAwayScore(as)
        }
        initScore()
        const r = setInterval(logique, 2 * 1000)
        return () => {
            clearInterval(r)
        }
    }, [])

    const openGifPage = (url: string, text: string, player: string) => {
        history.push('/DeuxPoints', { url: url, text: text, player: player })
    }


    const logique = async () => {
        const data = await GetData()
        const hs = await GetHomeScore()
        setHomeScore(hs)
        const as = await GetAwayScore()
        setAwayScore(as)

        // Logique
        if (data.type == "Try") {
            if (data.team == 'home') {
                // essai France 
                openGifPage("https://media.giphy.com/media/ZY9PiiDRlKHjnG2q2v/giphy.gif", "te donne 1 shot/ 5 gorgées", data.player)
            }

            if (data.team == 'away') {
                //essai Angleterre
                openGifPage("https://media.giphy.com/media/8vUEXZA2me7vnuUvrs/giphy.gif", "te donne 1 shot/ 5 gorgées", data.player)
            }
        }

        if (data.type == "Penality") {
            if (data.team == 'home') {
                // pénalité France
                openGifPage("https://media.giphy.com/media/l2QE4TXbK1EuFy1Ms/giphy.gif", "te donne 3 gorgées", data.player)
            }

            if (data.team == 'away') {
                // pénalité Angleterre
                openGifPage("https://media.giphy.com/media/l2QE4TXbK1EuFy1Ms/giphy.gif", "te donne 3 gorgées", data.player)
            }
        }
        if (data.type == "Conversion") {
            if (data.team == 'home') {
                // Transformation France
                openGifPage("https://media.giphy.com/media/u2mV6urByEwplx49he/giphy.gif", "te donne 1 gorgée", data.player)
            }
            if (data.team == 'away') {
                // Transformation Angleterre
                openGifPage("https://media.giphy.com/media/26xBwYrIXjIlDjr7G/giphy.gif", "te donne 1 gorgée", data.player)
            }
        }
        if (data.type == "Yellow card") {
            if (data.team == 'home') {
                // Carton Jaune France
                openGifPage("https://media.giphy.com/media/HygtmkX83uQ3vSR5pg/giphy.gif", "te donne 2 gorgées", data.player)
            }
            if (data.team == 'away') {
                // Carton Jaune Angleterre  
                openGifPage("https://media.giphy.com/media/vvbGMpbhZMcHSsD50w/giphy.gif", "te donne 2 gorgées", data.player)
            }
        }
        if (data.type == "Red card") {
            if (data.team == 'home') {
                // Carton Rouge France
                openGifPage("https://media.giphy.com/media/e6TR9n00dL3JS/giphy.gif", "te donne un bon vieux cul-sec", data.player)
            }
            if (data.team == 'away') {
                // Carton Rouge Angleterre
                openGifPage("https://media.giphy.com/media/DxOZLQD93v4299fOn4/giphy.gif", "te donne un bon vieux cul-sec", data.player)
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
                    <IonButton color="light texte" onClick={() => openGifPage("https://media.giphy.com/media/8vUEXZA2me7vnuUvrs/giphy.gif", "Essai", "te donne 1 shot/ 5 gorgées")}>DeuxPoints</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Live;

