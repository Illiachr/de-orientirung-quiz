import { useState } from 'react';

import OptListItem from './components/optListItem.jsx';


function App() {
  const [selectedOpt, setSelectedOpt] = useState('');
  const questionsTotal = 310;
  const currentQuestion = 1;

  return (
    <>
      <div className="header">
        <h1>Leben in Deutschland</h1>
        <h2>Einbürgerungstest</h2>
      </div>
      <div className="question-card">
        <div className="question-card__title">
          Frage {currentQuestion} von {questionsTotal}
        </div>
        <span className="question-card__subtitle">
          Bitte kreuzen Sie an. Es gibt nur eine richtige Antwort.
        </span>
        <form>
          <p className="text">
            In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil ...
          </p>
          <ul>
            <OptListItem 
              optName='opt-1'
              optId='opt1'
              optText='hier Religionsfreiheit gilt.'
              checked={selectedOpt === 'opt1'}
              selectedOpt={selectedOpt}
            />
            <OptListItem 
              optName='opt-2'
              optId='opt2'
              optText='die Menschen Steuern zahlen.'
              checked={selectedOpt === 'opt2'}
              selectedOpt={selectedOpt}
            />
            <OptListItem 
              optName='opt-3'
              optId='opt3'
              optText='die Menschen das Wahlrecht haben.'
              checked={selectedOpt === 'opt3'}
              selectedOpt={selectedOpt}
            />
            <OptListItem 
              optName='opt-4'
              optId='opt4'
              optText='hier Meinungsfreiheit gilt.'
              checked={selectedOpt === 'opt4'}
              selectedOpt={selectedOpt}
            />
          </ul>
          <button type="button" disabled='true'>Nächste Frage &gt;</button>
        </form>
      </div>
    </>
  );
}

export default App;
