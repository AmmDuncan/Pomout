import React, { useContext, useRef } from "react";

import ThemeContext from "@context/ThemeContext";

import ListWrapper from "../ListWrapper/ListWrapper";
import ListInput from "../ListInput/ListInput";
import ListOfItems from "./ListOfItems";
import withNotFound from "../../../hoc/withNotFound";

const ItemsList = (props) => {
  const theme = useContext(ThemeContext);
  const listRef = useRef(null);
  const { items, addToItems, deleteItem, ...restOfProps } = props;

  // scroll down when new item is added
  const wrapAddItem = (item) => {
    addToItems(item);
    listRef.current.scrollTop = 0;
  };

  const onDelete = (itemId) => {
    deleteItem(itemId);
  };

  // show not found when empty
  let content = withNotFound(ListOfItems, items, {
    removeItem: onDelete,
    ...restOfProps,
  });

  return (
    <ListWrapper theme={theme} ref={listRef}>
      <ListInput
        items={items}
        addToItems={wrapAddItem}
        subject={props.subject}
      />
      {content}
    </ListWrapper>
  );
};

export default ItemsList;
