import $ from 'jquery';

export async function apiCall(method, path, body) {
  let res;
  try {
    res = await $.ajax({
      type: method,
      url: path,
      data: body,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    });
    return res;
  } catch (err) {
    return err;
  }
}