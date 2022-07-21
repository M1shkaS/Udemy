function tabs(tabWrapperSelector, tabsHeaderSelector, tabsContentSelector, activeClass) {
   //!Tabs
   const wrapperTabs = document.querySelector(tabWrapperSelector),
      tabsHeader = wrapperTabs.querySelectorAll(tabsHeaderSelector),
      tabsContent = document.querySelectorAll(tabsContentSelector);

   wrapperTabs.addEventListener('click', event => {
      event.preventDefault();
      const target = event.target;

      if (target && target.classList.contains(tabsHeaderSelector.slice(1))) {

         removeClasses(tabsHeader, activeClass);
         hideTabsContent(tabsContent);

         tabsHeader.forEach((item, idx) => {
            if (target == item) {
               showTabsContent(idx, tabsContent);
            }
         });
         target.classList.add(activeClass);
      }
   });

   hideTabsContent(tabsContent);
   showTabsContent();

   function hideTabsContent(items) {
      items.forEach(tab => {
         tab.style.display = 'none';
      });
   }

   function showTabsContent(id = 0, showContent = tabsContent) {
      showContent[id].style.display = 'block';
   }

   function removeClasses(items, classRemove) {
      items.forEach(element => {
         element.classList.remove(classRemove);
      });
   }
}

export default tabs;