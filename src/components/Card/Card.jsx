import { useState } from 'react';
import PropTypes from 'prop-types';
import OptList from '../OptList/OptList.jsx';
import Button from '../Button/Button.jsx';
import { handleOptSelect } from '../../lib/helpers.js';

const cardSubtitle = 'Bitte kreuzen Sie an. Es gibt nur eine richtige Antwort.';

const buttonGroup = [
  {type: 'next', label: 'Nächste Frage &gt;', value: '+1'}
];

const Card = ({data,
  questionId,
  onButtonClick,
  updateUserAnswers,
  onSubmit
}) => {
  const [selectedOpt, setSelectedOpt] = useState('');

  const onSelect = handleOptSelect(setSelectedOpt);

  const formReset = () => {
    setSelectedOpt('');
  };

  const handleBtnClick = (e) => {
    onButtonClick(e);
    updateUserAnswers({
      questionId: data.questions[questionId].id,
      optId: selectedOpt.split('-')[1]
    });
    formReset();
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    updateUserAnswers({
      questionId: data.questions[questionId].id,
      optId: selectedOpt.split('-')[1]
    });
    // onButtonClick(e);
    // formReset();
  };

  const checkAnswer = (selected) => {
    const ans = data.questions[questionId].options.find((opt) => opt.label === selected.split('-')[1]);
    const result = ans ? ans.correct : false;
    return result;
  };

  return (
    <div className="question-card">
        <div className="question-card__title">
          Frage {questionId + 1} von {data.questions.length}
        </div>
        <span className="question-card__subtitle">
          {cardSubtitle}
        </span>
        <form onSubmit={onFormSubmit}>
        <div><span>{checkAnswer(selectedOpt) ? 'RICHTIG' : 'FALSCH'}</span></div>
          <p className="text">
            {data.questions[questionId].text}
          </p>
          <OptList
            optData={data.questions[questionId]}
            selectedId={selectedOpt}
            onSelect={onSelect}
          />
          {questionId > 0 && (
            <Button
              value='-1'
              onClick={handleBtnClick}
            >
              &lt; vorherige Frage
            </Button>
          )}
          {questionId !== data.questions.length - 1 ?
            (
              <Button
                disabled={!selectedOpt}
                value='+1'
                onClick={handleBtnClick}
              >
                Nächste Frage &gt;
              </Button>
            ):
          (
            <Button
              disabled={!selectedOpt}
              type='submit'
            >
              Fertig
            </Button>
          )}
        </form>
      </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
  questionId: PropTypes.number.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  updateUserAnswers: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Card;
