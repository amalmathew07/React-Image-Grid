import styles from './InfoPanel.module.css';
import { useLocation } from 'react-router-dom';

type InfoPanelProps = {
  id?: string;
  description?: string;
  dimensions?: string;
  createdAt?: string;
};

export const InfoPanel = () => {
  const location = useLocation<InfoPanelProps>();
  const { id, description, dimensions, createdAt } = location.state || {};

  if (!id) {
    return <aside className={styles.panel}></aside>;
  }

  return (
    <aside className={styles.panel}>
      <h2 className={styles.heading}>Block info</h2>
      <dl>
        <dt className={styles.title}>ID:</dt>
        <dd className={styles.details}>{id}</dd>

        <dt className={styles.title}>Description:</dt>
        <dd className={styles.details}>{description}</dd>

        <dt className={styles.title}>Dimensions:</dt>
        <dd className={styles.details}>{dimensions}</dd>

        <dt className={styles.title}>Created at:</dt>
        <dd className={styles.details}>{createdAt}</dd>
      </dl>
    </aside>
  );
};
