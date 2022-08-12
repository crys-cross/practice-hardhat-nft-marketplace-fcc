import { Provider } from "@ethersproject/providers"
import { assert, expect } from "chai"
import { Signer } from "ethers"
import { network, ethers, deployments, getNamedAccounts } from "hardhat"
import { developmentChains } from "../../helper-hardhat-config"
import { NftMarketplace, BasicNft } from "../../typechain-types"

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("NFT Marketplace Tests", () => {
          let nftMarketplace: NftMarketplace,
              nftMarketplaceContract: NftMarketplace,
              basicNft: BasicNft,
              basicNftContract: BasicNft
          let deployer: Signer
          let player: Signer
          const PRICE = ethers.utils.parseEther("0.1")
          const TOKEN_ID = 0

          beforeEach(async () => {
              //   deployer = (await getNamedAccounts()).deployer //another way of getting accounts
              //   player = (await getNamedAccounts()).player
              const accounts = await ethers.getSigners() // could also do with getNamedAccounts
              deployer = accounts[0]
              player = accounts[1]
              await deployments.fixture(["all"])
              nftMarketplaceContract = await ethers.getContract("NftMarketplace")
              nftMarketplace = nftMarketplaceContract.connect(deployer)
              basicNftContract = await ethers.getContract("BasicNft")
              basicNft = await basicNftContract.connect(deployer)
              await basicNft.mintNft()
              await basicNft.approve(nftMarketplaceContract.address, TOKEN_ID)
          })
          describe("listItem and buyItem", () => {
              it("lists and can be bought", async () => {
                  await nftMarketplace.listItem(basicNft.address, TOKEN_ID, PRICE)
                  const playerConnectedNftMarketplace = nftMarketplace.connect(player)
                  await playerConnectedNftMarketplace.buyItem(basicNft.address, TOKEN_ID, {
                      value: PRICE,
                  })
                  const newOwner = await basicNft.ownerOf(TOKEN_ID)
                  const deployerProceeds = await nftMarketplace.getProceeds(
                      await deployer.getAddress()
                  )
                  assert(newOwner.toString() == (await player.getAddress()))
                  assert((await deployerProceeds.toString()) == PRICE.toString())
              })
          }) // more tests to come below. Only applied tutorial test above(TODO: CHALLENGE)
      })
