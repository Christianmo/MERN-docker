/* eslint-disable no-param-reassign */

export const startDragging = (optionEl, advertisementsEl) => {
  const el = optionEl.current;
  el.style.position = 'absolute';
  advertisementsEl.current.classList.add('dragging');
};

export const endDragging = (optionEl, advertisementsEl) => {
  const el = optionEl.current;
  advertisementsEl.current.classList.remove('dragging');

  el.style.position = 'static';
  el.style.left = 'auto';
  el.style.top = 'auto';
};

export const setUpDragAndDrop = (optionEl, advertisementsEl) => {
  const getCursorPosition = (e) => {
    if (!advertisementsEl.current.classList.contains('dragging')) return;

    const el = optionEl.current;
    el.style.left = `${e.clientX - (el.offsetWidth / 2)}px`;
    el.style.top = `${e.clientY - (el.offsetHeight / 2)}px`;
  };

  advertisementsEl.current.onmousemove = getCursorPosition;
  advertisementsEl.current.onmouseup = () => endDragging(optionEl, advertisementsEl);
};
