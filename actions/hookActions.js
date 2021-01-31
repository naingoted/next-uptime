import axios from 'axios';

export const getUpDownApi = async (setData, setServerError) => {
  // Challenge #5: Server Error
  var data = JSON.stringify({"api_key":"u718169-7e1615cfa3804577ae74d5ba","format":"json","limit":"5","offset":"5"});

  var config = {
    method: 'post',
    url: 'https://api.uptimerobot.com/v2/getMonitors',
    headers: { 
      'Content-Type': 'application/json', 
    },
    data : data
  };
  
  try {
    const response = await axios(config);
    setData(response.data);
  }
  catch {
    setServerError(true);
  }
  // END: Challenge #5: Server Error
}

// default export for mocking convenience
export default {
  getUpDownApi,
}