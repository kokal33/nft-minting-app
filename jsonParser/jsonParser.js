var fs = require('fs');


async function parseMetadata(){
    for (let i=0; i<100; i++) {
      var metadata = {
        "name" : "Charify Genesis ",
        "description" : "Thank you for being an early supporter of Charify.art. This NFT communicates that you are an awesome person",
        "collection": "Charify.art Genesis collection",
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