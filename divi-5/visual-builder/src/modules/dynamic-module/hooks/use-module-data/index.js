import { useState, useEffect } from 'react';

const { loggedFetch } = divi.ajax;

/**
 * Custom hook to fetch module data.
 * 
 * @return {Object} Object containing getModuleData, moduleData and isLoading.
 */
export const useModuleData = () => {
  const [moduleData, setModuleData] = useState('');
  const [isLoading, setLoading]     = useState(false);
  const apiFetchController          = new AbortController();

  useEffect(() => () => {
    apiFetchController.abort(); // Abort fetch on unmount.
  }, []);

  // Fetch module data from REST API.
  const getModuleData = (title) => {
    setLoading(true);

    loggedFetch({
      restRoute: 'dtmc/v1/modules/dynamic-module',
      method:    'GET',
      data:      {
        title,
      },
      signal: apiFetchController.signal,
    }).then((value) => {
      if (! apiFetchController.signal.aborted) {
        setModuleData(value.data);
        setLoading(false);
      }
    }).catch(error => {
      console.log(error);
      setLoading(false);
    });
  }

  return {
    getModuleData,
    moduleData,
    isLoading,
  };
}