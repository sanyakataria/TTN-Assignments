import { useState, useEffect } from "react";

export default (httpClient) => {
  const [error, setErrror] = useState(null);

  // componentWillMount() {
  const reqInterceptor = httpClient.interceptors.request.use((req) => {
    setErrror(null);
    return req;
  });
  const resInterceptor = httpClient.interceptors.response.use(
    (res) => res,
    (err) => {
      setErrror(err);
    }
  );
  // }

  useEffect(() => {
    //when we return a function from useeffect it is for cleanup and hence it is equivalent to componentWillUnmount
    return () => {
      httpClient.interceptors.request.eject(reqInterceptor);
      httpClient.interceptors.response.eject(resInterceptor);
    };
  }, [reqInterceptor, resInterceptor]);

  const errorConfirmedHandler = () => {
    setErrror(null);
  };

  return [error, errorConfirmedHandler];
};
