const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const Adoption = await hre.ethers.getContractFactory("Adoption");

  console.log("Deploying Adoption contract...");
  const adoption = await Adoption.deploy(); // deploy
  await adoption.waitForDeployment();      // wait until mined

  console.log("Adoption deployed to:", await adoption.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
