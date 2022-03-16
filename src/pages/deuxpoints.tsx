import { IonCardSubtitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg, IonVirtualScroll, IonItem } from '@ionic/react';
import './deuxpoints.css';

const DeuxPoints: React.FC = () => {
  return (
    <IonPage className='safe-area'>
      <IonHeader>
      <IonButton color="light texte textemarge" href='Live'>Match</IonButton>
      </IonHeader>
      <IonContent fullscreen>
        <div className='containergif'>
        <span className="text5">Merci à "insérer marqueur". Bois "insérer"</span>
        <IonImg className='gif1' src="https://media.giphy.com/media/9PaFsBEVO4EOKok7de/giphy.gif"></IonImg>
          <span className='text5'>"insérer évènement"</span>
          <video src='https://giphy.com/clips/theoffice-lkibHaGO1xmJXapEdq'></video>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DeuxPoints;
