import "./Filter.css";

function Filter(props) {
  return (
    <div className={`filter-box ${props.showFilter ? "" : "invisible"}`}>
      <div className="tag-box">
        {props.filterTags.map((tag, index) => {
          return (
            <div className="keyword-box" key={index}>
              <p className="keyword">{tag}</p>
              <span className="remove" onClick={props.handleRemoveTag}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                  <path
                    fill="#FFF"
                    fillRule="evenodd"
                    d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                  />
                </svg>
              </span>
            </div>
          );
        })}
      </div>
      <button className="clear" onClick={props.handleClearTags}>
        Clear
      </button>
    </div>
  );
}

export default Filter;
