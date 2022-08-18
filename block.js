import crypto from "crypto"

export const Block = {
      genesis() {
        const genesis = {
          timestamp: Date.now(),
          lasthash: "--23-",
          hash: "0000000000000000000000000000000000000000000000000000000000000000",
          data: { name: "Luposki"}
        }

        return genesis
      },
      mineBlock(lastBlock, data) {
        const newBlock = {
            timestamp: Date.now(),
            lasthash: lastBlock.hash,
            hash: this.hash(this.timestamp, this.lasthash, this.data),
            data: data
        }

        return newBlock
      },
      hash(timestamp, lasthash, data) {
        const hash = crypto.createHash('sha256').update(`${timestamp}-${lasthash}-${data}`).digest('hex');
        return hash
      }
}
