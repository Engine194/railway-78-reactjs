import React from "react";

export default function ActionButton(props) {
  const { className, title, onClick, Icon } = props || {};
  return (
    <button {...{ className, title, onClick }}>
      <Icon height="24px" width="24px" />
    </button>
  );
}
