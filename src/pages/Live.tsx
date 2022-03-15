import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useState, useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Live.css';
import { GetHomeScore, GetAwayScore } from '../Wrapper';

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
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Live</IonTitle>
          <IonButton color="light texte"href=''>Retour</IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>

          {homeScore}

          {awayScore}

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Live;
