import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Compositions.css';

const Compositions: React.FC = () => {
  return (
    <IonPage className='safe-area'>
      <IonToolbar>
      </IonToolbar>
      
      <IonContent fullscreen>
      <div className='container4'>
        <IonButton color="light texte"href=''>Retour</IonButton>
        <IonButton color="light texte"href='Live'>Match</IonButton>
      </div>
        <div className='background-image2 container1'>
        </div>
      <div className= 'roulade'>
        <span color="light text bouton" > Avec une équipe comme ça le Rosbeef ça se mange cru ! 🤌👊 </span>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Compositions;
