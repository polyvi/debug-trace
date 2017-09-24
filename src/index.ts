import * as _Debug from 'debug'

export const Trace = (namespace: string) =>
    (first: any, ...arg: any[]) => {
        _Debug(namespace)(first, ...arg)
        return first
    }