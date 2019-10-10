import * as React from "react";

import "./style.css";

interface IItem {
  label: string;
  icon?: string;
}

interface IProps {
  currentValue: number;
  items: Array<IItem>;
  onClick: (item: IItem, i: number) => void;
}

const SideScroll: React.FC<IProps> = props => {
  const { currentValue, items, onClick } = props;
  return (
    <div className="items-container">
      {items.map((item, i) => (
        <>
          {i !== 0 ? (
            <div
              className={currentValue > i - 1 ? "line line-active" : "line"}
            />
          ) : null}
          <div
            onClick={e => onClick(item, i)}
            key={item.label}
            className={currentValue === i ? "item item-active" : "item"}
          >
            <p>{item.label}</p>
          </div>
          {i !== items.length - 1 ? (
            <div
              className={currentValue > i  ? "line line-active" : "line"}
            />
          ) : null}
        </>
      ))}
    </div>
  );
};

export default SideScroll;
