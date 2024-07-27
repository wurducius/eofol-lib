type Attributes = any

type Classname = (string | boolean | undefined | null)

const ax = (base: Attributes, conditional: Record<string, any>) =>
    Object.keys(conditional).reduce(
        (acc, next) => (conditional[next] ? { ...acc, [next]: conditional[next] } : acc),
        base,
    )

const cx = (...classnames: Classname[]) => classnames.filter(Boolean).join(" ")

export default { ax, cx};