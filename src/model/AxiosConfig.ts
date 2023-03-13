export default interface AxiosConfig {
    baseURL: string,
    headers?: Headers
}

interface Headers {
    "Content-Type": string,
}