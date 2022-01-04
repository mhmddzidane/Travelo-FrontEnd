import Buttons from "components/Buttons"
import Input from "components/Input"
import Layout from "components/Layout"
import styles from './Login.module.css'
import { useComponentLogic } from "./hooks"
import { REG_EXP } from "constants/regexp"

const Login = () => {
    const {register, handleSubmit, onSubmit, errors} = useComponentLogic()

    return(
        <Layout noFooter>
            <section className={styles.section}>
                <div className={styles.formWrapper}>
                    <p className="font-label text-heading-3 font-extrabold">Masuk</p>
                    <div className="flex mt-3">
                        <p className="font-semibold text-heading-5 text-gray-50">Belum Punya Akun?</p>
                        <a href="#" className="text-blue-100 text-heading-5 font-semibold ml-2 hover:underline">Daftar disini</a>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col mt-8">
                        <Input
                            register={register}
                            errors={errors}
                            required={{value: true, message: 'Email harus diisi!'}}
                            pattern={{
                                value : REG_EXP.email,
                                message : 'Gunakan format email yang valid'
                            }}
                            label="Email"
                            type="email"
                            name="email"
                            placeholder="Masukan alamat email"
                            className="mb-6"
                        />
                        <Input
                            register={register}
                            errors={errors}
                            required={{value: true, message: 'Password harus diisi!'}}
                            label="Password"
                            type="password"
                            name="password"
                            placeholder="Masukan password"
                            className="mb-6"
                        />
                        <a href="#" className="font-semibold text-heading-5 text-blue-100 mb-4 hover:underline">Lupa kata sandi?</a>
                        <Buttons type="submit" fullWidth>Masuk</Buttons>
                    </form>
                    <p className="my-8 text-heading-5 text-gray-70">Atau masuk dengan</p>
                    <Buttons className="mb-4" variant="google">
                        Masuk dengan google
                    </Buttons>
                    <Buttons variant="facebook">Masuk dengan facebook</Buttons>
                </div>
            </section>
        </Layout>
    )
}

export default Login