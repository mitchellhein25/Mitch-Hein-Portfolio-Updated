import styles from './experienceSection.module.css'

export default function ExperienceSection({ }) {
    return (
        <div className={styles.sectionContainer}>
            <h2 className={styles.sectionHeader}>Experience</h2>
            <div>
                <h3 className={styles.subHeader}>Product Developer &nbsp; <span className={styles.gray}>@ Lisam Systems</span></h3>
            </div>
            <div>
                <h4 className={styles.dates}>July 2020 &#8211; Present // Bryan, TX</h4>
            </div>
            <div className={styles.detailContainer}>
                <h4 className={styles.jobDetails}>Job Details</h4>
                <div className={styles.detailRow}>
                    <div className={styles.detailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>Data Extraction</h5>
                        </div>
                        <p className={styles.cardDescription}>
                            Using Python, built a program that can perform data extraction
                            from thousands of PDF files, Word Docs, or JPEG photos at once.
                        </p>
                    </div>
                    <div className={styles.detailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>Data Cleaning</h5>
                        </div>
                        <p className={styles.cardDescription}>
                            Using Python and Excel, clean large data sets of customer
                            product information. Combine and transform the data for customer products
                            based on their needs and specifications.
                        </p>
                    </div>
                    <div className={styles.detailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>Web Scraping</h5>
                        </div>
                        <p className={styles.cardDescription}>
                            Using Python, create tools that acquire online data to automate list updates
                            that the team previously had to do manually on a regular basis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        )
}
