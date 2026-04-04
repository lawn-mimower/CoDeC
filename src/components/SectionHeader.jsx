import styles from './SectionHeader.module.css';

const SectionHeader = ({ label, heading, gradientWord, subtitle, className = '' }) => {
  const renderHeading = () => {
    if (!heading) return null;
    if (!gradientWord || !heading.includes(gradientWord)) return heading;
    const idx = heading.indexOf(gradientWord);
    return (
      <>
        {heading.slice(0, idx)}
        <span className={styles.gradientWord}>{gradientWord}</span>
        {heading.slice(idx + gradientWord.length)}
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
