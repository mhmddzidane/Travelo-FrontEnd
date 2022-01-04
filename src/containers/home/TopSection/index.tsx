import styles from './TopSection.module.css'
import Container from 'components/Container'
import Buttons from 'components/Buttons'
import InfoItem from './InfoItem'

const TopSection = () => {
    return(
        <section className={styles.section}>
            <Container>
                <div className='flex flex-col pt-[112px] pb-[58px]'>
                    <div className="flex flex-col mb-[174px]">
                        <h1 className='text-heading-2 font-bold font-label text-gray-100 w-[500px] mb-8'>
                            Jelajahi Dunia Yang Indah Dengan Satu Sentuhan
                        </h1>
                        <p className='text-heading-4 text-gray-70 w-[526px] mb-7'>
                            Jelajahi dunia yang indah dengan satu sentuhan dengan pesan tiket di Travelo kamu akan dapatkan
                            pelayanan terbaik untuk wisata liburanmu dimana saja dan kapan saja
                        </p>
                        <Buttons className='w-[190px]'>Lihat Paket</Buttons>
                    </div>
                    <div className='flex gap-40 mx-auto pt-8'>
                        <InfoItem
                        label='+30'
                        subLabel='Negara'
                        />
                        <InfoItem
                        label='+1500'
                        subLabel='Penginapan'
                        />
                        <InfoItem
                        label='+100'
                        subLabel='Tempat Wisata'
                        />
                        <InfoItem
                        label='+30.000'
                        subLabel='Pelanggan'
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
   }
   
   export default TopSection