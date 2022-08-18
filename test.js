import { Block } from "./block.js"

//const block = Block(Date.now(), "sdasdas", "dasdasd", { name: "luposki"})

//console.log(block.toJSON());

const fistBlock = Block.mineBlock(Block.genesis(), { amount: 50000})

console.log(fistBlock)
