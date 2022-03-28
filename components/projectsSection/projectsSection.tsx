import Image from 'next/image'
import styles from './projectsSection.module.css'

export default function ProjectsSection({ }) {
    return (
        <div className={styles.sectionContainer}>
            <div>
                <h2 className={styles.sectionHeader}>Projects</h2>
            </div>
            <div className={styles.detailRow}>
                <div className={styles.detailCard}>
                    <div>
                        <h5 className={styles.cardHeader}>Finance Application</h5>
                    </div>
                    {/*<div className={styles.extLink}>*/}
                    {/*    <a href='https://www.loom.com/share/1ffe56e687d640c8bab4f0a7b9d67175' target="_blank">*/}
                    {/*        View Finance App Demo ->*/}
                    {/*        </a>*/}
                    {/*</div>*/}
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', margin: '20px'}}>
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
                    {/*<div className={styles.extLink}>*/}
                    {/*    <a href='https://www.loom.com/share/70910fa412e745768d9e6b5428fc7a4c' target="_blank">*/}
                    {/*        View Rental Search App Demo ->*/}
                    {/*            </a>*/}
                    {/*</div>*/}
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', margin: '20px' }}>
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
