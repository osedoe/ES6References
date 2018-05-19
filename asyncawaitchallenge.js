function resolveAfer3Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolver');
        }, 3000);
    });
}

// resolveAfer3Seconds().then((data) => {
//     console.log(data);
// });

async function getAsyncData() {
    const result = await resolveAfter3Seconds();
    console.log(result);
}

getAsyncData();