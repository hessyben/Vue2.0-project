import axios from 'axios';
function HttpService(){
	function getData(url,params){
		var request = axios.get(
			url,
			{
				"params":params,
				"headers" :  { 'Content-Type': 'application/json;charset=utf-8' } 
			}
		);
		return(request.then(handleSuccess, handleError));
	}
	function postData(url,params){
		var request = axios.post(
			url,
			{
				"params":params,
				"headers" :  { 'Content-Type': 'application/json;charset=utf-8' } 
			}
		);
		return(request.then(handleSuccess, handleError));	
	}
	function handleSuccess(response) {
        return response.data;
    }
    function handleError(response) {
    	return response;
    };
	return {
		getData:getData
	}
}
export default HttpService();