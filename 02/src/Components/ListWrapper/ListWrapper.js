import React from "react";
import ListItem from "./ListItem/ListItem";
import "./ListWrapper.css";

import { twitterAccounts } from "../../data/twitterAccounts.js";

const ListWrapper = () => (
    <ul className="listWrapper__wrapper">
        {twitterAccounts.map((item) => (
            <ListItem {...item} />
        ))}
    </ul>
);

export default ListWrapper;
