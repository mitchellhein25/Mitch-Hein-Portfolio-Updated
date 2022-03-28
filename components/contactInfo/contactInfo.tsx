import Image from 'next/image'
import styles from './contactInfo.module.css'

export default function ContactInfo({ }) {

    return (
        <div id='contact' className={styles.container}>
            <div className={styles.row}>
                <div className={styles.card}>
                    <Image
                        src='/images/email-icon.svg'
                        alt='Email Icon'
                        width={30}
                        height={30}
                    />
                    <a href="mailto:mitchelldalehein25@gmail.com" className={styles.extLink}>mitchelldalehein25@gmail.com</a>
                </div>
                <div className={styles.card}>
                    <Image
                        src='/images/phone-icon.svg'
                        alt='Phone Icon'
                        width={30}
                        height={30}
                    />
                    <a href="tel:2142085765" className={styles.extLink}>214-208-5765</a>
                </div>
                <div className={styles.card}>
                    <Image
                        src='/images/github-icon.svg'
                        alt='Github Icon'
                        width={30}
                        height={30}
                    />
                    <a href="https://github.com/mitchellhein25" target="_blank" className={styles.extLink}>
                        github.com/mitchellhein25
                    </a>
                </div>
            </div>
        </div>

        )
}