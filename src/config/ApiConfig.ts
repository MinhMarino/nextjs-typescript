import AxiosConfig from "@/model/AxiosConfig";

const Api1HeaderConfig: AxiosConfig = {
    baseURL: `http://localhost:8081`,
    headers: {
        "Content-Type": "application/json"
    }
}
export default Api1HeaderConfig;