import { Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { triangle } from 'ionicons/icons';
import Accueil from './pages/Accueil';
import Compositions from './pages/Compositions';
import Live from './pages/Live';
import DeuxPoints from './pages/deuxpoints';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter basename='/the-crunch'>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/">
            <Accueil />
          </Route>
          <Route exact path="/Compositions">
            <Compositions />
          </Route>
          <Route path="/Live">
            <Live />
          </Route>
          <Route path="/DeuxPoints" render={(props) => (
            <DeuxPoints {...props} />
          )}>
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" style={{ 'display': 'none' }}>
          <IonTabButton tab="Accueil" href="/">
            <IonIcon icon={triangle} />
            <IonLabel>Accueil</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
