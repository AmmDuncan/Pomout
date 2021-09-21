import React, { useContext } from "react";
import { useRouteMatch } from "react-router-dom";

import ThemeContext from "@context/ThemeContext";

import List from "@components/List/List";
import StyledListItem from "./StyledListItem";
import OptionList from "../OptionList/OptionList";
import StyledLink from "./StyledLink";

const ListOfItems = (props) => {
  const theme = useContext(ThemeContext);
  const { url } = useRouteMatch();
  const fill = theme.unfocused_icons;
  const {
    items,
    showOptions,
    noActiveItems,
    listItem,
    rootUrl,
    postUrl,
    proceedsProjectId,
    ...restProps
  } = props;

  // Map items to ListItems
  const itemsList = items.map((item, index) => {
    const { name, id, completed, projectId } = item;
    const root = rootUrl || url;
    const post = postUrl || "";
    const stem = proceedsProjectId ? `${projectId}/${id}` : `${id}`;
    const toPath = `${root}/${stem}${post}`;

    const Wrapper = listItem ? listItem : StyledListItem;

    return (
      <Wrapper
        showOptions={showOptions}
        key={id}
        theme={theme}
        style={{ animationDelay: `${index / 25}s` }}
        className={`${completed ? "completed" : ""}`}
      >
        <StyledLink theme={theme} to={toPath}>
          {name}
        </StyledLink>
        <OptionList
          id={id}
          fill={fill}
          theme={theme}
          completed={completed}
          {...restProps}
        />
      </Wrapper>
    );
  });

  return (
    <List style={noActiveItems ? {} : { paddingBottom: "5.6rem" }}>
      {itemsList}
    </List>
  );
};

export default ListOfItems;
