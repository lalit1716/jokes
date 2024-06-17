
// const div = document.querySelector('#main-div')

// const btn = document.querySelector('#btn')

// const getjokes = () => {

//   const setHead = {
//     headers: {
//       Accept: 'application/json'
//     }
//   }


//   fetch('https://icanhazdadjoke.com/', setHead)
//     .then((res) => (res.json()))
//     .then((data) => {

//       div.innerHTML = 'joke loding...👻'
//       setTimeout(() => {

//         div.innerHTML = data.joke
//       }, 1000);
//     })

//     .catch(() => {
//       div.innerHTML = 'error';
//     })




// }


// btn.addEventListener('click', getjokes);

// getjokes();





// Using async and await 


const div = document.querySelector('#main-div')

const btn = document.querySelector('#btn')

const getjokes = async () => {

    try {
      const setHead = {
        headers: {
          Accept: 'application/json'
        }
      }

      const res = await fetch('https://icanhazdadjoke.com/', setHead)
      const data = await res.json();

      div.innerHTML = 'joke is loading...'
      setTimeout(() => {
        div.innerHTML = data.joke
      }, 1000);

    } catch (error) {
      div.innerHTML = 'error'
    }

  }


btn.addEventListener('click', getjokes);

getjokes();

