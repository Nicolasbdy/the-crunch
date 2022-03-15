import { IonCardSubtitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Accueil.css';

const Accueil: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <div className='background-image'>
          <span className="Red text title">The Crunch</span>
          <IonButton color="medium text">Compositions</IonButton>
          <IonButton color="medium text">Match</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Accueil;
