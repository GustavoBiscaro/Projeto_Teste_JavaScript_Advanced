//FETCH
fetch('http://localhost:8080/data.json')
    .then(responseStream => {
        if (responseStream.status === 200) {
            return responseStream.json();
        } else {
            throw new Error('Request error');
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('Error: ', err);
    });

    // ES7 - Async / Await
    const simpleFunc = async () => {
        return 12345;
    };

    console.log(simpleFunc);

    //Outro exemplo
    const asyncTimer = () => 
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(12345);
            }, 1000);
            });

            const simpleFunc = async () => {
                const data = await Promise.all([asyncTimer(), fetch('/data.json').then(resStream => resStream.json())
                ]);

            return data;
            };

            simpleFunc()
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            });
        
