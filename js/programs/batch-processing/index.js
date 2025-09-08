/**
 * Have an array of say 10 files, upload them into s3 or anywhere in batches.
 * After finishing of 1 batch, 2nd batch should start
 */

function chunksArray(arr, batch){
    let result = []
    for(let i =0; i<arr.length; i+=batch)
        result.push(arr.slice(i, i + batch))

    return result
}

function upload(file){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("File Uploaded")
            resolve(file)
        }, 3000)
    })
}

async function fileProcessing(filesArr){
    const batches = chunksArray(filesArr, 2)

    for(let i =0; i < batches.length; i++){
        await Promise.allSettled(batches[i].map(f => upload(f)))
    }
}

const filesArr = ['file1', 'file2', 'file3', 'file4', 'file5','file6', 'file7']
fileProcessing(filesArr)