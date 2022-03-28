import Image from 'next/image'
import styles from './projectsSection.module.css'

export default function ProjectsSection({ }) {
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
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', margin: '40px 0 100px 0'}}>
                        <iframe src="https://www.loom.com/embed/1ffe56e687d640c8bab4f0a7b9d67175"
                            frameBorder="0" allowFullScreen
                            width="1000"
                            height="700"
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
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', margin: '40px 0 80px 0' }}>
                        <iframe src="https://www.loom.com/embed/70910fa412e745768d9e6b5428fc7a4c"
                            frameBorder="0" allowFullScreen
                            width="1000"
                            height="700"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
        )
}
