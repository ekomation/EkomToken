const hre = require("hardhat");


async function main(){
	const [deployer] = await hre.ethers.getSigners();


	//settin of contract address

	const contractAddress = "0x5d261f71A192b8E299eAb277108fB50e38061728";
	const airdrop_amount = hre.ethers.utils.parseEther("10");



	//participants to be airdropped;

	const addresses = ["0x2360DE7a1d17aC8e18681De02A5040F44ae2c9A4", "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"];

	//setting token information;

	const token = await hre.ethers.getContractAt("EkomToken", contractAddress, deployer);

	for(i = 0; i < addresses.length; i++){
		const recipient = addresses[i];
		await token.transfer(recipient, airdrop_amount);

	}

	console.log("Successfully Distributed");


}

//running of the script


main()
.then(() => process.exit(0))
.catch(error => {
	console.error(error);
	process.exit(1);
});