function getMoviesFromApiAsync() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(getMoviesFromApiAsync())
    }, 3000)
  })
}