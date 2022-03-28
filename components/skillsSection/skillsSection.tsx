import Image from 'next/image'
import styles from './skillsSection.module.css'

export default function SkillsSection({ }) {
    return (
        <div className={styles.sectionContainer}>
            <h2 className={styles.sectionHeader}>Skills</h2>
            <div>
                <h3 className={styles.subHeader}>Programming Languages</h3>
            </div>
            <div className={styles.detailContainer}>
                {/* Row 1*/}
                <div className={styles.detailRow}>
                    <div className={styles.detailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>C#</h5>
                        </div>
                        <div className={styles.logo}>
                            <Image
                                src="/images/csharp-logo.png"
                                alt="C sharp logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                    <div className={styles.detailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>Python</h5>
                        </div>
                        <div className={styles.logo}>
                            <Image
                                src="/images/python-logo.png"
                                alt="Python logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                    <div className={styles.detailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>Javascript</h5>
                        </div>
                        <div className={styles.logo}>
                            <Image
                                src="/images/javascript-logo.svg"
                                alt="Javascript logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                    <div className={styles.detailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>HTML</h5>
                        </div>
                        <div className={styles.logo}>
                            <Image
                                src="/images/html-logo.svg"
                                alt="HTML logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                </div>
                {/* Row 2*/}
                <div className={styles.detailRow}>
                    <div className={styles.detailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>CSS</h5>
                        </div>
                        <div className={styles.logo}>
                            <Image
                                src="/images/css-logo.svg"
                                alt="CSS logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                    <div className={styles.detailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>SQL</h5>
                        </div>
                        <div className={styles.logo}>
                            <Image
                                src="/images/sql-logo.png"
                                alt="SQL logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                    <div className={styles.detailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>Dart</h5>
                        </div>
                        <div className={styles.logo}>
                            <Image
                                src="/images/Dart-logo.png"
                                alt="Dart logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className={styles.subHeader}>Libraries & Frameworks</h3>
            </div>
            <div className={styles.detailContainer}>
                {/*Row 1*/}
                <div className={styles.detailRow}>
                    <div className={styles.detailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>.NET</h5>
                        </div>
                        <div className={styles.logo}>
                            <Image
                                src="/images/dotnet-logo.png"
                                alt=".NET logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                    <div className={styles.detailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>React</h5>
                        </div>
                        <div className={styles.logo}>
                            <Image
                                src="/images/react-logo.svg"
                                alt="React logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                    <div className={styles.detailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>Node</h5>
                        </div>
                        <div className={styles.logo}>
                            <Image
                                src="/images/node-logo.svg"
                                alt="Node logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                    <div className={styles.detailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>Express</h5>
                        </div>
                        <div className={styles.logo}>
                            <Image
                                src="/images/express-logo.svg"
                                alt="Express logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                </div>
                {/*Row 2*/}
                <div className={styles.detailRow}>
                    <div className={styles.detailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>Next</h5>
                        </div>
                        <div className={styles.logo}>
                            <Image
                                src="/images/next-logo.svg"
                                alt="Next logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                    <div className={styles.detailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>Bootstrap</h5>
                        </div>
                        <div className={styles.logo}>
                            <Image
                                src="/images/bootstrap-logo.svg"
                                alt="Bootstrap logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                    <div className={styles.detailCard}>
                        <div>
                            <h5 className={styles.cardHeader}>Flutter</h5>
                        </div>
                        <div className={styles.logo}>
                            <Image
                                src="/images/flutter-logo.svg"
                                alt="Flutter logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className={styles.subHeader}>Tools & Platforms</h3>
                </div>
                <div className={styles.detailContainer}>
                    {/*Row 1*/}
                    <div className={styles.detailRow}>
                        <div className={styles.detailCard}>
                            <div>
                                <h5 className={styles.cardHeader}>Visual Studio</h5>
                            </div>
                            <div className={styles.logo}>
                                <Image
                                    src="/images/visualstudio-logo.svg"
                                    alt="Visual Studio logo"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        <div className={styles.detailCard}>
                            <div>
                                <h5 className={styles.cardHeader}>IIS</h5>
                            </div>
                            <div className={styles.logo}>
                                <Image
                                    src="/images/iis-logo.png"
                                    alt="IIS logo"
                                    width={175}
                                    height={100}
                                />
                            </div>
                        </div>
                        <div className={styles.detailCard}>
                            <div>
                                <h5 className={styles.cardHeader}>PyCharm</h5>
                            </div>
                            <div className={styles.logo}>
                                <Image
                                    src="/images/pycharm-logo.svg"
                                    alt="Pycharm logo"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        <div className={styles.detailCard}>
                            <div>
                                <h5 className={styles.cardHeader}>Beautiful Soup</h5>
                            </div>
                            <div className={styles.logo}>
                                <Image
                                    src="/images/beautifulsoup-logo.svg"
                                    alt="Beautiful Soup logo"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                    </div>
                    {/*Row 2*/}
                    <div className={styles.detailRow}>
                        <div className={styles.detailCard}>
                            <div>
                                <h5 className={styles.cardHeader}>Selenium</h5>
                            </div>
                            <div className={styles.logo}>
                                <Image
                                    src="/images/selenium-logo.svg"
                                    alt="Selenium logo"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        <div className={styles.detailCard}>
                            <div>
                                <h5 className={styles.cardHeader}>Pandas</h5>
                            </div>
                            <div className={styles.logo}>
                                <Image
                                    src="/images/pandas-logo.svg"
                                    alt="Pandas logo"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        <div className={styles.detailCard}>
                            <div>
                                <h5 className={styles.cardHeader}>Git</h5>
                            </div>
                            <div className={styles.logo}>
                                <Image
                                    src="/images/git-logo.svg"
                                    alt="Git logo"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        <div className={styles.detailCard}>
                            <div>
                                <h5 className={styles.cardHeader}>Heroku</h5>
                            </div>
                            <div className={styles.logo}>
                                <Image
                                    src="/images/heroku-logo.svg"
                                    alt="Heroku logo"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                    </div>
                    {/*Row 3*/}
                    <div className={styles.detailRow}>
                        <div className={styles.detailCard}>
                            <div>
                                <h5 className={styles.cardHeader}>Vercel</h5>
                            </div>
                            <div className={styles.logo}>
                                <Image
                                    src="/images/vercel-logo.svg"
                                    alt="Vercel logo"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        <div className={styles.detailCard}>
                            <div>
                                <h5 className={styles.cardHeader}>Wordpress</h5>
                            </div>
                            <div className={styles.logo}>
                                <Image
                                    src="/images/wordpress-logo.svg"
                                    alt="Wordpress logo"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
