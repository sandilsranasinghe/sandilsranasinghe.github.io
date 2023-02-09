import experienceList from "./experience.json";

const ExperienceBubble = (props) => {
  return (
    <div className="horizontal-container">
      {props.index % 2 === 1 ? null : <div className="filler card card-2" />}
      <div
        className={
          "card card-2 timeline_bubble_" +
          (props.index % 2 === 1 ? "left" : "right")
        }
      >
        <h2 className="">{props.title}</h2>

        {props.duration ? (
          <h6 className="card-subtitle text-muted">{props.duration}</h6>
        ) : null}

        {props.additional_subtitle ? (
          <h6 className="card-subtitle mt-1">{props.additional_subtitle}</h6>
        ) : null}

        <hr />

        {props.content
          ? props.content.map((c) => {
              return (
                <div>
                  <h4>{c.value}</h4>
                  <ul>
                    {c.points.map((point) => {
                      if (point.extras.link) {
                        return (
                          <li>
                            <a href={`${point.extras.link}`} className="link-light">
                              {point.point}
                            </a>
                          </li>
                        );
                      }
                      return <li>{point.point}</li>;
                    })}
                  </ul>
                </div>
              );
            })
          : null}
      </div>
      {props.index % 2 === 1 ? <div className="filler card card-2" /> : null}
    </div>
  );
};
const ExperienceTab = (props) => {
  return (
    <div className="content-container timeline">
      <h2> EXPERIENCE </h2>

      {experienceList.map((exp) => (
        <ExperienceBubble {...exp} />
      ))}
    </div>
  );
};
export default ExperienceTab;
