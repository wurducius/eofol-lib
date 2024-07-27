import crypto from "crypto"

export type BinaryToTextEncoding = "base64" | "base64url" | "hex" | "binary"

const checksum = (content: string, algorithm?:string, encoding?:BinaryToTextEncoding) =>
    crypto
        .createHash(algorithm || "md5")
        .update(content, "utf8")
        .digest(encoding || "hex")

export default checksum