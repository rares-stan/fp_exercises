// Ex. 5: Get a list of random jokes using the API from "https://official-joke-api.appspot.com/random_joke".
// The number of jokes to get will be provided as input. You can not use any iteration except map
// getRandomJokes : number -> string[]

import axios from 'axios';

// your code here...

async function getRandomJoke() {
  return axios
    .get('https://official-joke-api.appspot.com/random_joke')
    .then((rsp) => `${rsp.data.setup}\n${rsp.data.punchline}`);
}

async function getRandomJokes(n: number): Promise<string[]> {
  const proms = new Array(n).fill(undefined).map(getRandomJoke);

  return Promise.all(proms);
}

export async function runBeginnerEx5() {
  console.log(`Starting exercise 5 from category Beginner`);
  await getRandomJokes(5).then(console.log);
  console.log(`Finished exercise 5 from category Beginner`);
}
