//styling
import style from "./userSkills.module.css";
import cn from "classnames";
import Tags from "../../MaterialUi/tags/tags";

export default function UserSkills({ user }) {
  const { skills } = user;

  return (
    skills && (
      <div>
        <label for="skills" className={cn(style.labelHeader)}>
          Skills
        </label>
        <div name="skills" className={cn(style.container)}>
          <ul className={cn(style.skillContainer)}>
            {skills.map((item) => {
              return (
                <div className={cn(style.skillTag)}>
                  <Tags item={item} showDelete />
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    )
  );
}
