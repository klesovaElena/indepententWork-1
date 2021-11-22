// const url = "https://jsonplaceholder.typicode.com/todos";
// const requestURl = "https://jsonplaceholder.typicode.com/users";
// const url = "https://jsonplaceholder.typicode.com/todos";
// const requestURl = "https://jsonplaceholder.typicode.com/users";

console.log("Preparing data...");

// setTimeout(() => {
// console.log('Request...');
// const responseData = {
//   server: "aws",
//   port: 8081,
//   status: "working",
//   modified: false
// }
// setTimeout(() => {
// responseData.modified = true;
// console.log("Data reseived", responseData)
// }, 2000)
// }, 2000)

//  const promise = new Promise((resolve, reject) => {
//    setTimeout(() => {
//     console.log('Request...');
//     const responseData = {
//       server: "aws",
//       port: 8081,
//       status: "working",
//       modified: false
//     }
//     resolve(responseData)
//    }, 2000)
//  })
//  promise
//  .then((data) => {
//    setTimeout(() => {
//      data.modified = true;
//      console.log("Data reseived", data)
//    }, 2000)
//   })
//   .catch((e) => console.error(e))

const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};
delay(3000).then(() => console.log("3 sec"));

Promise.all([delay(3000), delay(5000)]).then();

const url = "https://jsonplaceholder.typicode.com/todos";
// const fetchData = () => {
//   return delay(2000)
//     .then(() => fetch(url))
//     .then((data) => data.json());
// };
// fetchData().then((data) => console.log(data))

// const fetchData = async() => {
//   await delay(2000)
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// }
// fetchData();

const requestURl = "https://jsonplaceholder.typicode.com/users";

const getUsers = (method, url) => {
  return fetch(url).then((response) =>response.json() )
}

getUsers("GET", requestURl).then((data) => console.log(data))

const body = {
        name: "Oleg",
        age: 25 
    }
   const headers = {
     'Content-Type': 'application/json'
   } 
  const postUsers = (method, url, body) => {
    return fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: headers, 
    }).then((response) =>response.json() )
  }

  postUsers('POST',requestURl, body)
  .then(data => console.log(data))
  .catch(error => console.log(error))