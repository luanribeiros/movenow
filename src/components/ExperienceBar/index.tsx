import styles from './Experience.module.css'

export function ExperienceBar() {
    return (
      <header className={styles.experienceBar}>
        <span>0 xp</span>
        <div>
          <div style={{ width: '80%' }} />
  
          <span className={styles.currentExperience} style={{ left: '50%' }}>
            300 xp
          </span>
        </div>
        <span>600 xp</span>
      </header>
    )
  }