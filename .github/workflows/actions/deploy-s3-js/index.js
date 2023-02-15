import core from '@actions/core';
import github from '@actions/github';
import { notice } from '@actions/core';

const run = () => {
  console.log('Hello World!');
  notice('This is test!');
};

run();
