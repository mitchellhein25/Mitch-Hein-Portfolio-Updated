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
                {/* Row 1*/}
                <div className={styles.detailRow}>
                    <div className={styles.lisamDetailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>Data Extraction</h5>
                        </div>
                        <p className={styles.cardDescription}>
                            Using Python, built a program that can perform data extraction
                            from thousands of PDF files, Word Docs, or JPEG photos at once.
                        </p>
                    </div>
                    <div className={styles.lisamDetailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>Data Cleaning</h5>
                        </div>
                        <p className={styles.cardDescription}>
                            Using Python and Excel, clean large data sets of customer
                            product information. Combine and transform the data for customer products
                            based on their needs and specifications.
                        </p>
                    </div>
                    <div className={styles.lisamDetailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>Web Scraping</h5>
                        </div>
                        <p className={styles.cardDescription}>
                            Using Python, create tools that acquire online data to automate list updates
                            that the team previously had to do manually on a regular basis.
                        </p>
                    </div>
                </div>
                {/* Row 2*/}
                <div className={styles.detailRow}>
                    <div className={styles.lisamDetailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>App Scripting</h5>
                        </div>
                        <p className={styles.cardDescription}>
                            Using C#, built custom features and worked with the Lisam
                            software API to create personalized functionality within the software for each
                            customer.
                        </p>
                    </div>
                    <div className={styles.lisamDetailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>Automation</h5>
                        </div>
                        <p className={styles.cardDescription}>
                            Using Batch scripts, Powershell Scripts, or Python, worked to
                            automate multiple processes for customers and the Lisam team.
                        </p>
                    </div>
                    <div className={styles.lisamDetailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>Database/Software Installation</h5>
                        </div>
                        <p className={styles.cardDescription}>
                            Worked with SQL to install and upgrade both
                            the back end and the front end of our software for clients. This includes
                            troubleshooting network or server errors and complications.
                        </p>
                    </div>
                </div>
                {/* Row 3*/}
                <div className={styles.detailRow}>
                    <div className={styles.lisamDetailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>Testing</h5>
                        </div>
                        <p className={styles.cardDescription}>
                            Performed Alpha and Beta testing of our software prior to and
                            following the release cycles. Implemented Test Driven Development
                            throughout the Service Delivery Team.
                        </p>
                    </div>
                    <div className={styles.lisamDetailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>Documentation</h5>
                        </div>
                        <p className={styles.cardDescription}>
                            Wrote technical software change requests to fix bugs or
                            inconsistencies in the software. Also created technical documentation for any
                            new or edited features that were built.
                        </p>
                    </div>
                    <div className={styles.lisamDetailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>Customer Support</h5>
                        </div>
                        <p className={styles.cardDescription}>
                            Aided the first line support team to assist clients with
                            technical challenges.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h3 className={styles.subHeader}>Web Developer &nbsp; <span className={styles.gray}>@ Freelance</span></h3>
            </div>
            <div>
                <h4 className={styles.dates}>January 2021 &#8211; Present // College Station, TX</h4>
            </div>
            <div className={styles.detailContainer}>
                <h4 className={styles.jobDetails}>Work</h4>
                <div className={styles.detailRow}>
                    <div className={styles.freelanceDetailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>bcsrei.com&nbsp;
                                <span className={styles.frameworkUsed}>// React, Next.js, Vercel</span>
                            </h5>
                        </div>
                        <p className={styles.cardDescription}>
                            Custom built React site. Calculator functionality with real-time
                            changes utilizing state.
                        </p>
                        <div className={styles.extLink}>
                            <a href='https://www.bcsrei.com' target="_blank">
                                Check it out    ->
                            </a>
                        </div>
                    </div>
                    <div className={styles.freelanceDetailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>crossfitaggieland.com&nbsp;
                                <span className={styles.frameworkUsed}>// Wordpress</span>
                            </h5>
                        </div>
                        <p className={styles.cardDescription}>
                            Full website redesign for a local Crossfit gym.
                            <div className={styles.cfaRow}>
                                <div className={styles.extLink}>
                                    <a href='https://www.loom.com/share/8049deb0130649efb2727ab0b8b7375b' target="_blank">Old Site -></a>
                                </div>
                                <div className={styles.extLink}>
                                    <a href='https://www.crossfitaggieland.com' target="_blank">New Site -></a>
                                </div>
                            </div>
                        </p>
                    </div>
                    <div className={styles.freelanceDetailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>hannahclardyphotos.com&nbsp;
                                <span className={styles.frameworkUsed}>// SquareSpace</span>
                            </h5>
                        </div>
                        <p className={styles.cardDescription}>
                            Basic portfolio website for a local photographer.
                        </p>
                        <div className={styles.extLink}>
                            <a href='https://www.hannahclardyphotos.com' target="_blank">
                                Check it out ->
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}
