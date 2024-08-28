import styles from "./StackSection.module.css";
import { Typography } from "../Typography/Typography";
import { SKILLS_DATA, STACK_DATA } from "@/data/stack";
import { Tag } from "../Tag/Tag";

export const StackSection = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h2" className={styles.title}>
        My stack
      </Typography>
      <div className={styles.columnsContainer}>
        <div className={styles.column}>
          {STACK_DATA.map((item) => (
            <div key={item.key}>
              <div className={styles.tagsContainer}>
                <Typography variant="small-paragraph" weight="bold">
                  {item.title}:
                </Typography>

                {item.description.split(", ").map((tag) => (
                  <Tag title={tag} key={tag} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.column}>
          {SKILLS_DATA.map((item, index) => (
            <div key={`skl-${index}`}>
              <Typography variant="small-paragraph">
                {"•"} {item}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
