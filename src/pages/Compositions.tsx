import { IonButton, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Compositions.css';
import compofrance from './compofrance.jpeg';

const Compositions: React.FC = () => {
  return (
    <IonPage className='safe-area'>
      <IonToolbar>
      </IonToolbar>
      
      <IonContent fullscreen>
      <div className='container4'>
        <IonButton color="light texte" routerLink='/'>Retour</IonButton>
        <IonButton color="light texte" routerLink='/Live'>Match</IonButton>
      </div>
      <IonImg className="" src={compofrance} />
      <div className= 'roulade'>
        <span color="light text bouton" > Avec une équipe comme ça le Rosbeef ça se mange cru ! 🤌👊 </span>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Compositions;
