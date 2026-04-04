import styles from './GlassCard.module.css';

const GlassCard = ({ children, className = '', hover = true }) => {
  return (
    <div className={`${styles.card} ${hover ? styles.hover : ''} ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
