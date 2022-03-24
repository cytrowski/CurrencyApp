import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST'
}

export type AxiosConfig = {
  baseUrl: string;
  config?: AxiosRequestConfig;
  requestMethod: RequestMethod;
};
type IsLoading = boolean;
type ResponseError = string;
type AxiosClientResponse = [AxiosResponse | undefined, ResponseError | undefined, IsLoading];

const useAxiosClient = ({ baseUrl, requestMethod, config }: AxiosConfig): AxiosClientResponse => {
  // TODO in feature use useReducer to manage state;
  const [data, setData] = useState<AxiosResponse | undefined>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = () => {
    setIsLoading(true);
    axios({
      url: baseUrl,
      method: requestMethod,
      headers: {
        'Content-Type': 'application/json'
      },
      ...config
    })
      .then((response: AxiosResponse) => {
        setData(response);
        setIsLoading(false);
      })
      .catch(() => {
        setError('error on fetching data');
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return [data, error, isLoading];
};

export default useAxiosClient;
