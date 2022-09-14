import { useState, useCallback } from "react";

const useHttp = () => {
   const [process, setProcess] = useState('waiting');

   const request = useCallback(async (url, method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {

      setProcess('loading');
      try {
         const res = await fetch(url, { method, body, headers });

         if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
         }

         const data = await res.json();

         return data;
      }
      catch (e) {
         setProcess('error');
      }

   }, [])

   return { request, process, setProcess };
}

export default useHttp;