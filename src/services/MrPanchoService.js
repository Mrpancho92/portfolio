import {useHttp} from "../hooks/http.hook";

const  useMrPanchoService = () => {
    const { request, clearError, process, setProcess} = useHttp();
    const getdata = async (url) => {
        const res = await request(`${url}`);
        return res;
    }
    return {
        clearError, 
        process, 
        setProcess,
        getdata
    }
}
export default useMrPanchoService;
