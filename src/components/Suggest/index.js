import styles from './Suggest.module.scss'
const Suggest = () => {
  const items = [
    {
      label: "website development",
      link: "#home",
    },
    {
      label: "website",
      link: "#home",
    },
    {
      label: "javascript",
      link: "#home",
    },
    {
      label: "website design",
      link: "#home",
    },
    {
      label: "wordpress",
      link: "#home",
    },
    {
      label: "python",
      link: "#home",
    },
    {
      label: "css",
      link: "#home",
    },
    {
      label: "front end web developer",
      link: "#home",
    },
    {
      label: "data entry",
      link: "#home",
    },
    {
      label: "logo design",
      link: "#home",
    },
  ];

  return (
      <div className={styles.suggest}>
        <div className={styles.contentSuggest}>
          <h3>Suggested</h3>
          <div className={styles.rowBtn}>
            {items.map( (item, index) => (
              <a href={item.link} key={index}>{item.label}</a>
            ))}
          </div>
        </div>
      </div>
  );
};
export default Suggest