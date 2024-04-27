#!/usr/bin/env node

console.clear();
console.log('\n\x1b[36m', 'Hi I am Sargam 👋', '\x1b[0m\n');

const greenStr = (str) => `\x1b[32m${str}\x1b[32m`;

const info = {
  status: 'ECS student',
  web: '',
  gh: 'https://github.com/OmChillure',
  desc: 'A Ai/Ml enthusisast',
  skills: {
    langs: ['.js', '.ts', '.py',],
    skils: ['gcp', 'git', 'docker', 'networking'],
  },
};

console.log(greenStr(JSON.stringify(info, null, 2)));