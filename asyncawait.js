const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

// function getTop100Campers() {
//     fetch(apiUrl)
//         .then((resp) => resp.json())
//         .then((json) => {
//             console.log(json[0]);
//             // This is gonna return an array with some values
//         }).catch((err) => {
//             console.log('failed)');
//         });    
// }

// We can improve this previous code with async/await

async function getTop100Campers() {
    const resp = await fetch(apiUrl);
    const json = await resp.json();

    console.log(json[0]);
}


getTop100Campers();