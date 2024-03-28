const handleOptSelect = (setSelectState) => 
(e) => {
  const {id} = e.target;
  setSelectState(id);
};

export {
  handleOptSelect
};
