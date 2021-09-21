import React from "react";
import NotFound from "@components/NotFound/NotFound";

const withNotFound = (Component, items, props) => {
  const { illustration, message, completed, ...remProps } = props;
  const activeItems = items.filter((item) =>
    completed ? item.completed : !item.completed
  );
  const noActiveItems = activeItems.length === 0;

  return (
    <>
      <Component items={items} noActiveItems={noActiveItems} {...remProps} />
      {noActiveItems && (
        <NotFound illustration={illustration} message={message} />
      )}
    </>
  );
};

export default withNotFound;
