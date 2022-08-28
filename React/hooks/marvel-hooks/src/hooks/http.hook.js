import { useCallback, useState } from "react";

export const useHttp = () => {

   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);
   const [process, setProcess] = useState('waiting');

   const request = useCallback(async (url, method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {

      setLoading(true);
      setProcess('loading');
      try {
         const response = await fetch(url, { method, body, headers });

         if (!response.ok) {
            throw new Error(`Could not fetch ${url}, status: ${response.status}`);
         }
         const data = await response.json();

         setLoading(false);
         return data;

      } catch (e) {
         setError(e.message);
         setLoading(false);
         setProcess('error');
         throw e;
      }
   }, [])

   const clearError = useCallback(() => {
      setProcess('loading');
      setError(null);
   }, []);

   return { error, loading, request, clearError, process, setProcess }
}