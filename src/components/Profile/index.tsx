import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengeContext'
import styles from './Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/luanribeiros.png" alt="Imagem Perfil Github Luan Ribeiro"/>
      <div>
        <strong>Luan Ribeiro</strong>
        
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level { level }
        </p>
      </div>
    </div>
  )
}