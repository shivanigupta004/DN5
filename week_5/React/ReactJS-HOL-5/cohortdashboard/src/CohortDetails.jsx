import styles from './CohortDetails.module.css'

export default function CohortDetails({ cohort }) {
  const titleColor = cohort.status === 'ongoing' ? 'green' : 'blue'

  return (
    <div className={styles.box}>
      <h3 style={{ color: titleColor }}>{cohort.name}</h3>
      <dl>
        <dt>Status</dt>
        <dd>{cohort.status}</dd>
        <dt>Start Date</dt>
        <dd>{cohort.startDate}</dd>
        <dt>End Date</dt>
        <dd>{cohort.endDate}</dd>
        <dt>Completed</dt>
        <dd>{cohort.completed ? 'Yes' : 'No'}</dd>
      </dl>
    </div>
  )
}
