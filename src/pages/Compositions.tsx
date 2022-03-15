import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Compositions.css';

const Compositions: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <IonButton color="light texte"href=''>Retour</IonButton>
      </IonHeader>
      <IonContent fullscreen>
        <div className='background-image2'>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Compositions;
