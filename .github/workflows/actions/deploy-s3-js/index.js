import core from '@actions/core';
import github from '@actions/github';
import { notice, error, warning } from '@actions/core';

const run = () => {
  console.log('Hello World!');
  notice('This is test!');
  error('Test');
  warning('test');
};

run();
