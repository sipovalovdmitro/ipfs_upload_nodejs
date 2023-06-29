const { resolve } = require("path")

const { config } = require("dotenv")
const { NFTStorage } = require('nft.storage')
const { CarIndexedReader } = require('@ipld/car/indexed-reader')
const { createReadStream } = require('fs')
// import { CarReader } from '@ipld/car'
config({ path: resolve(__dirname, "./.env") });
const API_TOKEN = process.env.NFTSTORAGE_API_KEY
function makeStorageClient() {

    const client = new NFTStorage({token:API_TOKEN})
    return client
}

async function storeCarFile(filePath) {
    //   const inStream = createReadStream(filename)
    const car = await CarIndexedReader.fromFile(filePath)

    const client = makeStorageClient()
    const cid = await client.storeCar(car)
    console.log('Stored CAR file! CID:', cid)

    car.close()
}

async function main() {
    const [path] = process.argv.slice(2)
    console.log(path)
    await storeCarFile(path)
}

main()