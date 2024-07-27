// @TODO extract constant
const ID_GENERATED_LENGTH = 17

const generateString = (length: number) => () =>
    Array(length)
        .fill("")
        .map(() => Math.random().toString(36).charAt(2))
        .join("")

const generateId = generateString(ID_GENERATED_LENGTH)

export default generateId;