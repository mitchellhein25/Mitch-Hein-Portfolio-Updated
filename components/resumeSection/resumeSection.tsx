import styles from './resumeSection.module.css'

export default function ResumeSection({ }) {
    return (
        <div className={styles.sectionContainer}>
            <h2 className={styles.sectionHeader}>Resume</h2>
            <iframe src="/documents/Development-Resume.pdf" width="100%" height="1200">
            </iframe>
        </div>
        )
}
