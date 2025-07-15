import styles from "./StackSection.module.css";
import { Typography } from "../Typography/Typography";
import { SKILLS_DATA, STACK_DATA } from "@/data/stack";
import { Tag } from "../Tag/Tag";
import { ColumnsContainer } from "../ColumnsContainer/ColumnsContainer";

export const StackSection = () => {
  return (
    <ColumnsContainer title="My stack">
      <div className={styles.container}>
        {STACK_DATA.map((item) => (
          <div key={item.key}>
            <div className={styles.tagsContainer}>
              <Typography variant="small-paragraph" >
                {item.title}
              </Typography>

              {item.description.split(", ").map((tag) => (
                <Tag title={tag} key={tag} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <Typography variant="h3" className={styles.additional}>Additional skills</Typography>

        <div className={styles.additionalSkillsContainer}>
          {SKILLS_DATA.map((item, index) => (

            <Typography key={`skl-${index}`} opacity variant="small-paragraph">• {item}</Typography>

          ))}
        </div>
      </div>

    </ColumnsContainer>
  );
};
