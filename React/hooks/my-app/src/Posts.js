import data from './data';
import { useState, useMemo, useDeferredValue, useEffect, useTransition } from 'react';

function Posts() {
   const [text, setText] = useState('');
   const [posts, setPosts] = useState(data);
   const deferredValue = useDeferredValue(text);

   // Почему не useEffect?
   const filteredPosts = useMemo(() => {
      return posts.filter(item => item.name.toLowerCase().includes(deferredValue));
   }, [deferredValue]);

   // useEffect(() => {
   //    const filteredPosts = posts.filter(item => item.name.toLowerCase().includes(text))
   // }, [text])

   const onValueChange = (e) => {
      setText(e.target.value);
   }

   return (
      <>
         <input value={text} type='text' onChange={onValueChange} />

         <hr />

         <div>
            {filteredPosts.map(post => (
               <div key={post._id}>
                  <h4>{post.name}</h4>
               </div>
            ))}
         </div>
      </>
   );
}

export default Posts;

// useDeferredValue - он принимает в себя какое-то значение, которое потом будет отложено изменять
// Т.е реакт сперва выполнит все срочные рендеры и апдейты и только потом его для оптимизации работы
// useTransition - делает по сути тоже самое, т.е разьединяет какие-то рендеры для того чтобы сделать всё более опт. Только он предоставляет нам возможность самим указывать когда начнётся этот процесс  и также позволяет отслеживать состояния этого процесса
// Применение: их стоит использовать, когда у нас есть динамический список данных причём с большим количество и с какими то опреациями фильтрации, поиска, динамичискими подсказками или с табами