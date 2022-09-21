import { ethers } from "hardhat"

export interface networkConfigItem {
    name?: string
    vrfCoordinatorV2?: string
    raffleEntranceFee?: any
    gasLane?: string
    subscriptionId?: string
    callbackGasLimit?: string
    keeperUpdateInterval?: string
}

export interface networkConfigInfo {
    [key: number]: networkConfigItem
}

export const networkConfig: networkConfigInfo = {
    // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
    // Default one is ETH/USD contract on Kovan
    31337: {
        name: "localhost",
        // vrfCoordinatorV2: "0x6168499c0cFfCaCD319c818142124B7A15E857ab",
        raffleEntranceFee: ethers.utils.parseEther("0.1"), // 0.1 ETH
        gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc", // 30 gwei
        subscriptionId: "6727",
        callbackGasLimit: "500000" /*500,000*/,
        keeperUpdateInterval: "30",

        // ethUsdPriceFeed: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
    },
    4: {
        name: "rinkeby",
        vrfCoordinatorV2: "0x6168499c0cFfCaCD319c818142124B7A15E857ab",
        raffleEntranceFee: "100000000000000000", // 0.1 ETH
        gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        subscriptionId: "6727", //for rinkeby
        callbackGasLimit: "500000" /*500,000*/,
        keeperUpdateInterval: "30",

        // ethUsdPriceFeed: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
    },
    5: {
        name: "goerli",
        vrfCoordinatorV2: "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
        raffleEntranceFee: "100000000000000000", // 0.1 ETH
        // entranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
        subscriptionId: "1255",
        callbackGasLimit: "500000" /*500,000*/,
        // ethUsdPriceFeed: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
    },
    80001: {
        name: "polygon(mumbai-testnet)",
        vrfCoordinatorV2: "0x7a1BaC17Ccc5b313516C5E16fb24f7659aA5ebed",
        raffleEntranceFee: "100000000000000000", // 0.1 ETH
        // entranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f",
        subscriptionId: "1766",
        callbackGasLimit: "500000" /*500,000*/,
        // ethUsdPriceFeed: "0x0715A7794a1dc8e42615F059dD6e406A6594651A",
    },
    4002: {
        name: "fantom-test",
        vrfCoordinatorV2: "	0xbd13f08b8352A3635218ab9418E340c60d6Eb418",
        raffleEntranceFee: "100000000000000000", // 0.1 ETH
        // entranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "0x121a143066e0f2f08b620784af77cccb35c6242460b4a8ee251b4b416abaebd4",
        subscriptionId: "93",
        callbackGasLimit: "500000" /*500,000*/,
        // ethUsdPriceFeed: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
    },
    43113: {
        name: "fuji",
        vrfCoordinatorV2: "0x2eD832Ba664535e5886b75D64C46EB9a228C2610",
        raffleEntranceFee: "100000000000000000", // 0.1 ETH
        // entranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "0x354d2f95da55398f44b7cff77da56283d9c6c829a4bdf1bbcaf2ad6a4d081f61",
        subscriptionId: "382",
        callbackGasLimit: "500000" /*500,000*/,
        // ethUsdPriceFeed: "0x0715A7794a1dc8e42615F059dD6e406A6594651A",
    },
}

export const developmentChains = ["hardhat", "localhost"]
export const DECIMALS = 8
export const INITIAL_ANSWER = 200000000000
export const VERIFICATION_BLOCK_CONFIRMATIONS = 6
