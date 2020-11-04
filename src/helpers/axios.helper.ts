import axios, {
  AxiosRequestConfig,
  CancelToken,
  CancelTokenSource,
} from "axios";

interface ICancelConfig {
  request?: CancelTokenSource | null;
  cancelToken?: CancelToken | null;
}

const cancelConfig: ICancelConfig = {
  request: null,
  cancelToken: null,
};

export async function axiosGetCancellable(
  url: string,
  config?: AxiosRequestConfig
) {
  const ERROR_MSG = "canceled";

  if (cancelConfig.request) {
    cancelConfig.request.cancel(ERROR_MSG);
  }
  cancelConfig.request = axios.CancelToken.source();
  cancelConfig.cancelToken = cancelConfig.request.token;
  Object.assign(cancelConfig, config);

  try {
    const res = await axios.get(url, cancelConfig as AxiosRequestConfig);
    return res;
  } catch (err) {
    if (err.message !== ERROR_MSG) {
      throw err;
    }
    console.log(err);
  }
}
