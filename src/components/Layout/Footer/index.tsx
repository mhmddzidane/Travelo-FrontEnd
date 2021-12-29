import Container from "components/Container"
import React from "react"
import styles from './Footer.module.css'
import travelLogo from 'public/assets/travelo-logo-footer.png'
import Image from 'next/image'
import FooterInfo from "./FooterInfo"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container size="lg">
                <div className="flex bg-white p-16">
                <figure>
                    <Image src={travelLogo} alt="Travel Logo" placeholder="blur" height="98" width="136"></Image>
                </figure>
                <div className="flex flex-1 justify-between ml-[106px]">
                    <FooterInfo
                    title="Info"
                    content={[
                        {
                            label : 'Tentang Kami',
                            href : '/'
                        },
                        {
                            label : 'Testimonial',
                            href : '/'
                        },
                        {
                            label : 'Kontak',
                            href : '/'
                        },
                    ]}
                    />
                    <FooterInfo
                    title="Perusahaan"
                    content={[
                        {
                            label : 'Syarat & Ketentuan',
                            href : '/'
                        },
                        {
                            label : 'Kebijakan privasi',
                            href : '/'
                        },
                        {
                            label : 'Blog',
                            href : '/'
                        },
                        {
                            label : 'Bantuan pelayanan',
                            href : '/'
                        },
                    ]}
                    />
                    <FooterInfo
                    title="Kontak"
                    content={[
                        'Jl. Ciledug Raya. No 7C',
                        'Tangerang, Banten',
                        'Indonesia',
                        '021-14543532',
                        'travelo@gmail.com'
                    ]}
                    />
                </div>
                </div>
            </Container>
            <div className="bg-blue-100 p-3">
                <p className="text-heading-5 text-white font-bold text-center">Copyright 2021 Travelo. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer