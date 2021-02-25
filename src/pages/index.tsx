import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { ChallengeBox } from '../components/ChallengeBox.tsx'

import Head from 'next/head'

import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | MoveNow</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}