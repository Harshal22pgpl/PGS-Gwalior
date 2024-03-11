const updateItemByUuid = (setState, uuid) => {
  setState((prevItems) =>
    prevItems.map((item) => {
      if (item.uuid === uuid) {
        return updatedItem; // Replace the item with the updatedItem
      }
      return item; // Keep the original item
    })
  );
};
