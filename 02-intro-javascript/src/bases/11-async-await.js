

const getImage = async() => {

    try{

        const apiKey = "Aidx5WqIsEKuRWiSJmTcYiFGKowzAsCZ";
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
    
        const {url} = data.images.original;
        const img = document.createElement('img');
        
        img.src = url;
        
        document.body.append(img);
    }catch(err){
        console.error(err);
    }

}

getImage();

// const apiKey = "Aidx5WqIsEKuRWiSJmTcYiFGKowzAsCZ";

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
//     .then((resp) => resp.json())
//     .then(({ data }) => {
//         const {url} = data.images.original;
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
//     })
//     .catch(console.warn);
