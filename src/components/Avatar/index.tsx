import styles from "./Avatar.module.css";

interface IAvatar {
  source: string;
  hasBorder?: boolean;
}

export const Avatar: React.FC<IAvatar> = ({
  source,
  hasBorder = true,
}: IAvatar) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={source}
    />
  );
};
