import "./Job.css";

function JobList(props) {
  return (
    <li className={`job-box ${props.featured ? "bordered" : ""}`}>
      <img src={props.logo} alt="company logo" className="company-logo" />
      <div className="company">
        <p className="company-name">{props.company}</p>
        <span className={`new ${props.new ? "yes" : ""}`}>
          {props.new ? "New!" : ""}
        </span>
        <span className={`featured ${props.featured ? "yes" : ""}`}>
          {props.featured ? "Featured" : ""}
        </span>
        <p className="position">{props.position}</p>
        <div className="more-info">
          <p className="date">{props.postedAt}</p>
          <p className="date">&bull;</p>
          <p className="contract">{props.contract}</p>
          <p className="date">&bull;</p>
          <p className="location">{props.location}</p>
        </div>
      </div>
      <div className="tags">
        <p className="tag role" onClick={props.handleAddTag}>
          {props.role}
        </p>
        <p className="tag level" onClick={props.handleAddTag}>
          {props.level}
        </p>
        {props.languages.map((language, index) => {
          return (
            <p
              className="tag language"
              key={index}
              onClick={props.handleAddTag}
            >
              {language}
            </p>
          );
        })}
        {props.tools.map((tool, index) => {
          return (
            <p className="tag tool" onClick={props.handleAddTag} key={index}>
              {tool}
            </p>
          );
        })}
      </div>
    </li>
  );
}

export default JobList;
