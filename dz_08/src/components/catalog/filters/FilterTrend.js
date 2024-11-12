import React from "react";
import HeaderParamsFilter from "./HeaderParamsFilter";

const FilterTrend = () => {
  return (
    <details className="description__filters__item">
      <HeaderParamsFilter title={"TRENDING NOW"} />
      <div className="description__filters__item-show">
        <form action="#">
          <label>
            <input type="checkbox" name="trending1" id="trending1" />
            TRENDING
          </label>
        </form>
      </div>
    </details>
  );
};

export default FilterTrend;
