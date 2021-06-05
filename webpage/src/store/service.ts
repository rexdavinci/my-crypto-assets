interface APIResponse<T> extends Response {
  data?: T;
}

async function requestDataFromAPI<T>(): Promise<APIResponse<T>> {
  const response: APIResponse<T> = await
  fetch('/api/data');
  try {
    response.data = await response.json();
  } catch (err) {
    console.log('error', err.response);
  }
  if (!response.ok) {
    console.log('error');
    throw new Error(response.statusText);
  }
  return response;
}


export default requestDataFromAPI;
