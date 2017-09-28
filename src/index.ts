import * as _Debug from 'debug'

export = (namespace: string) =>
    (first: any, ...arg: any[]) => {
        _Debug(namespace)(first, ...arg)
        return first
    }