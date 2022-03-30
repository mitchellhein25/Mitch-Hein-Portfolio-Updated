import useWindowSize from '../utils'
import styles from './projectsSection.module.css'

export default function ProjectsSection({ }) {
    const [width, height] = useWindowSize();
    const breakpoint = 600;
    return (
        <div id="projects" className={styles.sectionContainer}>
            <div>
                <h2 className={styles.sectionHeader}>Projects</h2>
            </div>
            <div className={styles.detailRow}>
                <div className={styles.detailCard}>
                    <div>
                        <h5 className={styles.cardHeader}>Finance Application</h5>
                    </div>
                    <div>
                        <iframe src="https://www.loom.com/embed/1ffe56e687d640c8bab4f0a7b9d67175"
                            frameBorder="0" allowFullScreen
                            width={width * .8}
                            height={width > breakpoint ? height * .5 : height * .3}
                            >
                        </iframe>
                    </div>
                </div>
            </div>
            <div className={styles.detailRow}>
                <div className={styles.detailCard}>
                    <div>
                        <h5 className={styles.cardHeader}>Rental Search Application</h5>
                    </div>
                    <div>
                        <iframe src="https://www.loom.com/embed/70910fa412e745768d9e6b5428fc7a4c"
                            frameBorder="0" allowFullScreen
                            width={width * .8}
                            height={width > breakpoint ? height * .5 : height * .3}
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
        )
}
