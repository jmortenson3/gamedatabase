import $ from 'jquery';

export async function createGame(path, body) {
  console.log(`Sending POST request to ${path} with body ${body.toString()}`);
  let game = await $.post(path, body)
    .done(data => data)
    .fail(err => err);
}