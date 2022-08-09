//!Ошибки
try {
   console.log('Ok');
   console.log(a);
} catch (error) {
   console.log(error.name);
   console.log(error.message);
   console.log(error.stack);
} finally {
   console.log('Finally');
}

console.log('end');

const data = [
   {
      id: 'box',
      tag: 'div'
   },
   {
      id: '',
      tag: 'nav'
   },
   {
      id: 'circle',
      tag: 'span'
   }
]



try {
   data.forEach((blockObj, idx) => {
      const block = document.createElement(blockObj.tag);
      if (!blockObj.id) throw new SyntaxError(`В данных под номером ${idx + 1} нет id`);

      block.setAttribute('id', blockObj.id);
      document.body.append(block);
   })
} catch (error) {
   if (error.name === 'SyntaxError') {
      console.error(error.name);
      console.error(error.message);
      console.log(error.stack);
   } else {
      throw error;
   }
}
