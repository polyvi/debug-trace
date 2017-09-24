import * as _Debug from 'debug'

export const Trace = (namespace: string) =>
    (first, ...arg) => {
        _Debug(namespace)(first, ...arg)
        return first
    }