const addStyle = (e: any) => {
  e.target.style.backgroundColor = "yellow";
  e.target.style.height = "60px";
};

const removeStyle = (e: any) => {
  e.target.style.backgroundColor = "transparent";
  e.target.style.height = "30px";
};

export const handleDragOver = (e:any) => {
  e.stopPropagation();
  e.preventDefault();
  addStyle(e);
};

export const handleDrop = (e:any, cb: (index: number, optionType: string) => void) => {
  const index = +e.target.dataset.index + 1;
  const dragData = e.dataTransfer.getData("text/plain");
  removeStyle(e);

  try {
    const optionType = JSON.parse(dragData);
    cb(index, optionType);
  } catch {
    return false;
  }
  
};

export const handleDragLeave = (e:any) => {
  removeStyle(e);
};

export const getTempId = () => Math.random();