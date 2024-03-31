import assert from 'node:assert/strict';
import data from '../mock/data.js';
import userAnswers from './mockUserAnswers.js';
import testResultExpected from './testResultExpected.js';
import { calcResults } from '../lib/helpers.js';


const testResult = calcResults(data.questions, userAnswers);

assert.deepEqual(testResult, testResultExpected);
