import React, { useState } from "react";

// Cross SVG
import { ReactComponent as Cross } from "../images/icon-cross.svg";

// Redux Tools
import { UseSelector, useDispatch } from "react-redux";

const ListItem = () => {
  // React State Logic
  const [checked, isChecked] = useState(false);

  return <div>ListItem</div>;
};

export default ListItem;
