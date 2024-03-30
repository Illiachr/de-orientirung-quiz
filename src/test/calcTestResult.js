import assert from 'node:assert/strict';
import data from './mockData.js';
import userAnswers from './mockUserAnswers.js';
import testResultExpected from './testResultExpected.js';

const calcResults = (data, userAnswers) => {
    let totalCorrect = 0;
    let totalFailed = 0;
    const totalMissed = data.questions.length - userAnswers.length;

    for (const userAnswer of userAnswers) {
      const question = data.questions.find((q) => q.id === userAnswer.questionId);
      const option = question.options.find((opt) => opt.label === userAnswer.optId);
      if (option.correct) {
          totalCorrect += 1;
        } else {
          totalFailed += 1;
        }
      }

    return {
      totalCorrect,
      totalFailed,
      totalMissed
    };
};

const testResult = calcResults(data, userAnswers);

assert.deepEqual(testResult, testResultExpected);
