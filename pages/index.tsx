import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainLayout from '../components/mainLayout/mainLayout'
import ExperienceSection from '../components/experienceSection/experienceSection'
import SkillsSection from '../components/skillsSection/skillsSection'
import EducationSection from '../components/educationSection/educationSection'
import ProjectsSection from '../components/projectsSection/projectsSection'
import ResumeSection from '../components/resumeSection/resumeSection'
import ContactInfo from '../components/contactInfo/contactInfo'

const Home: NextPage = () => {
    return (
        <MainLayout>
            <div className={styles.topMargin}></div>
            <ContactInfo></ContactInfo>
            <div className={styles.center}>
                <h1><span className={styles.blue}>Software Developer</span> from College Station, TX</h1>
            </div>
            <div className={styles.center}>
                <Image
                    src='/images/Headshot-no-bg.png'
                    alt='Mitch Hein headshot photo'
                    width={645}
                    height={387}
                />
            </div>
            <div className={styles.center}>
                <h2>Currently working <span className={styles.orange}>@ Lisam Systems</span></h2>
            </div>
            <div className={styles.center}>
                <Image
                    src='/images/Lisam_Logo_cropped.png'
                    alt='Lisam Systems Logo'
                    width={199}
                    height={98}
                />
            </div>
            <hr className={styles.border}></hr>
            <ExperienceSection></ExperienceSection>
            <hr className={styles.border}></hr>
            <SkillsSection></SkillsSection>
            <hr className={styles.border}></hr>
            <EducationSection></EducationSection>
            <hr className={styles.border}></hr>
            <ProjectsSection></ProjectsSection>
            <hr className={styles.border}></hr>
            <ResumeSection></ResumeSection>
        </MainLayout>
    )
}

export default Home
