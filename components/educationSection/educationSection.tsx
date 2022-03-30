import Image from 'next/image'
import useWindowSize from '../utils'
import styles from './educationSection.module.css'

export default function EducationSection({ }) {
    const [width, height] = useWindowSize();
    const breakpoint = 600;

    return (
        <div id="education" className={styles.sectionContainer}>
            <h2 className={styles.sectionHeader}>Education</h2>
            <div>
                <h3 className={styles.subHeader}>Oregon State University</h3>
            </div>
            <div>
                <h4 className={styles.dates}>May 2022 &#47;&#47; Remote</h4>
            </div>
            <div className={styles.detailRow}>
                {width > breakpoint ? null :
                    <div className={styles.pictureCard}>
                        <div>
                            <Image
                                src="/images/osu-logo.jpg"
                                alt="OSU logo"
                                width={250}
                                height={100}
                            />
                        </div>
                    </div>
                }
                <div className={styles.detailCard}>
                    <div>
                        <h5 className={styles.cardHeader}>BS in Computer Science</h5>
                    </div>
                </div>
                {width > breakpoint ?
                    <div className={styles.pictureCard}>
                        <div>
                            <Image
                                src="/images/osu-logo.jpg"
                                alt="OSU logo"
                                width={1000}
                                height={400}
                            />
                        </div>
                    </div> : null
                }
                <div className={styles.detailCard}>
                    <div>
                        <h5 className={styles.cardHeader}>GPA: 3.95</h5>
                    </div>
                </div>
            </div>
            <div>
                <h3 className={styles.subHeader}>Texas A&M University</h3>
            </div>
            <div>
                <h4 className={styles.dates}>Dec. 2017 &#47;&#47; College Station, TX</h4>
            </div>
            <div className={styles.detailRow}>
                {width > breakpoint ? null :
                    <div className={styles.pictureCard}>
                        <div>
                            <Image
                                src="/images/tamu-logo.svg"
                                alt="TAMU logo"
                                width={250}
                                height={100}
                            />
                        </div>
                    </div>
                }
                <div className={styles.detailCard}>
                    <div>
                        <h5 className={styles.cardHeader}>BS in Applied Exercise Physiology</h5>
                    </div>
                </div>
                {width > breakpoint ?
                    <div className={styles.pictureCard}>
                        <div>
                            <Image
                                src="/images/tamu-logo.svg"
                                alt="TAMU logo"
                                width={1000}
                                height={400}
                            />
                        </div>
                    </div> : null
                }
                <div className={styles.detailCard}>
                    <div>
                        <h5 className={styles.cardHeader}>GPA: 4.0<br></br><br></br>Graduated an Honor
                            Undergraduate in 3.5 years.</h5>
                    </div>
                </div>
            </div>
        </div>
        )
}
