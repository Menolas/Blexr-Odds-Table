export let createGameElement = (template) => {
   const newElement = document.createElement('div');
   newElement.innerHTML = template;

   return newElement.firstChild;
};
