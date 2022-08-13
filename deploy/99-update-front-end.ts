import fs from "fs"
import { ethers, network } from "hardhat"
import { DeployFunction } from "hardhat-deploy/types"

const frontEndContractsFile =
    "../practice-nextjs-nft-marketplace-moralis-fcc/constants/networkMapping.json"
const frontEndAbiFile = "../practice-nextjs-nft-marketplace-moralis-fcc/constants/"

const updateUI: DeployFunction = async () => {
    if (process.env.UPDATE_FRONT_END) {
        console.log("Updating Front End")
        updateContractAddresses()
        updateAbi()
        console.log("Front end written!")
    }
}
const updateContractAddresses = async () => {
    const nftMarketplace = await ethers.getContract("NftMarketplace")
    const chainId = network.config.chainId!.toString()
    const currentAddresses = JSON.parse(fs.readFileSync(frontEndContractsFile, "utf8"))
    if (chainId in currentAddresses) {
        if (!currentAddresses[chainId]["NftMarketplace"].includes(nftMarketplace.address)) {
            currentAddresses[chainId]["NftMarketplace"].push(nftMarketplace.address)
        }
    } else {
        currentAddresses[chainId] = { NftMarketplace: [nftMarketplace.address] }
    }
    fs.writeFileSync(frontEndContractsFile, JSON.stringify(currentAddresses))
    console.log("Addresses written!")
}
const updateAbi = async () => {
    const nftMarketplace = await ethers.getContract("NftMarketplace")
    fs.writeFileSync(
        "${frontEndAbiFile}NftMarketplace.json",
        nftMarketplace.interface.format(ethers.utils.FormatTypes.json).toString()
    )

    const basicNft = await ethers.getContract("BasicNft")
    fs.writeFileSync(
        "${frontEndAbiFile}BasicNft.json",
        basicNft.interface.format(ethers.utils.FormatTypes.json).toString()
    )
    console.log("ABI written!")
}

export default updateUI
updateUI.tags = ["all", "frontend"]
