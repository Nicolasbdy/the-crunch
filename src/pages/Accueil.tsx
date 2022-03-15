import { IonCardSubtitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Accueil.css';

const Accueil: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <div className='background-image container'>
          <div className='container-bouton'>
            <IonButton color="light text bouton" href='/Compositions'>Équipes</IonButton>
            <IonButton color="light text bouton" href='/Live'>Match</IonButton>
          </div>
          <span className="Red title">🇫🇷 The Crunch 🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Accueil;
