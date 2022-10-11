// Setup: npm install alchemy-sdk
import { Alchemy, Network } from "alchemy-sdk";

const config = {
    apiKey: process.env.ALCHMEY_API_KEY,
    network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

export async function main(contractAddress: string, tokenId: number) {
    // Print NFTs
    var nfts = await alchemy.nft.getNftMetadata(
        contractAddress,
        tokenId
    );
    // Print NFTs
    console.log(nfts);

};


