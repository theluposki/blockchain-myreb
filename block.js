import crypto from "crypto"
import { genesis } from "./genesis.js"

export const Block = {
      genesis: () => genesis,
      hash(timestamp, lasthash, data) {
        return crypto
        .createHash('sha256')
        .update(`${timestamp}-${lasthash}-${data}`)
        .digest('hex');
      },
      mineBlock(lastBlock, data) {
        const newBlock = {
            timestamp: Date.now(),
            lasthash: lastBlock.hash,
            hash: this.hash(this.timestamp, this.lasthash, this.data),
            data: data
        }

        return newBlock
      }
}
