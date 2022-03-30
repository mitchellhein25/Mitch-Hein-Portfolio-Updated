import useWindowSize from '../utils'
import styles from './resumeSection.module.css'

export default function ResumeSection({ }) {
    const [width, height] = useWindowSize();
    const breakpoint = 600;
    return (
        <div id="resume" className={styles.sectionContainer}>
            <h2 className={styles.sectionHeader}>Resume</h2>
            <iframe src="/documents/Mitch-Hein-Resume.pdf" width="100%" height={width > breakpoint ? 1200 : 800}>
            </iframe> 
        </div>
        )
}
