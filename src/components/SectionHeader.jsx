import styles from './SectionHeader.module.css';

const SectionHeader = ({ label, heading, gradientWord, subtitle, className = '' }) => {
  const renderHeading = () => {
    if (!gradientWord) return heading;
    const parts = heading.split(gradientWord);
    return (
      <>
        {parts[0]}
        <span className={styles.gradientWord}>{gradientWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`${styles.header} ${className}`}>
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.heading}>{renderHeading()}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
