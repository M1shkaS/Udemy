const postData = async (url, data) => {
   const res = await fetch(url, {
      method: 'POST',
      body: data,
      headers: { 'Content-type': 'application/json' }
   });

   return await res.json();
}

const getResourse = async (url) => {
   const res = await fetch(url);

   if (!res.ok) {
      throw new Error(`Error, status: ${res.status}`);
   }
   return await res.json();
}


export { postData };
export { getResourse };