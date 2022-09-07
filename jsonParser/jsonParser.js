var fs = require('fs');


async function parseMetadata(){
    for (let i=0; i<100; i++) {
      var metadata = {
        "name" : "Charify.art Genesis",
        "description" : "Thank you for being an early supporter of Charify.art. This NFT communicates that you are an awesome person",
        "collection": "Charify.art Genesis collection",
        "utility": "What will you get?  1. FREE Mint for the First 2 project drops 2. Early access to the DAO & a flashy prestigious role in our Discord Server 3. You will be whitelisted for our upcoming drops 4EVER! And a variety of other rewards and perks in the future development of Charify.art.",
        "image": "https://ipfs.io/ipfs/QmXCVJPYdJnwGiJUg79XrADmd8FZZxyiNFiT4BaS8Ty7QN?filename=Charify.art%20Genesis.mp4"
                };
        
        const pathToWrite = 'jsonParser/metadataParsed/' + i + '.json';
        const objToWrite = JSON.stringify(metadata, null, 2);
        fs.writeFile(pathToWrite,objToWrite,(err) => {
            if (err)
              console.log(err);
            });
    }
    console.log("Files written successfully");
};

parseMetadata();