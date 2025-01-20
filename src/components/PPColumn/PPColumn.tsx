import PP from './PP/PP'
import styles from './PPColumn.module.css'

const PPColumn = () => {
  return (
    <div className={styles.pp_container}>
      <h5>Pet-Projects</h5>
      <PP />
    </div>
  )
}

export default PPColumn
