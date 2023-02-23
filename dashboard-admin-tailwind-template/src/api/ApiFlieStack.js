import axios from "axios";

const URL = process.env.REACT_APP_SERVER_URL

export const getData = async ({ setResult, setGetDataLoading }) => {
  try {
    let res = await axios.get(`${URL}/all`);
    setGetDataLoading(false);
    setResult(res.data);
  } catch (error) {
    setGetDataLoading(false);
  }
};

export const postData = async ({ title, image, setPostDatas, setPostDataLoading }) => {
  try {
    const datas = { title, image: image.filesUploaded[0].url };
    setPostDataLoading(true)
    const res = await axios.post(`${URL}`, datas)
    if(res) {
      setPostDataLoading(false)
      setPostDatas(res.data)
    }
  } catch (error) {
    alert(error.response.data.msg);
    setPostDataLoading(false);
  }
} 