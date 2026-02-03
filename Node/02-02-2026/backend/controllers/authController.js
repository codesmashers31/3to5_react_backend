import bcrypt from 'bcrypt'
import authModel from '../models/authModle.js'
export const authRegister = async (req, res) => {

    //   console.log(req);

    try {

        const { name, email, password } = req.body

        const userExcite = await authModel.findOne({ email })

        if (userExcite) {

            return res.status(400).json({ msg: "User already" })

        }

        const hashpassword = await bcrypt.hash(password, 10)
        const user = await authModel.create({
            name, email, password: hashpassword
        })

        res.status(200).json({ msg: "Succfully donde", user })

    } catch (error) {

        res.status(500).json({ error: error.message })

    }

}



export const authLogin = async (req, res) => {

    try {

        const { email, password } = req.body

        const checkemail = await authModel.findOne({ email })

        //console.log(checkemail);

        if (!checkemail) {
            return res.status(400).json({ msg: "The User Is not Register" })
        }

        const matchnew = await bcrypt.compare(password, checkemail.password)
        //console.log('gasdjfgasd',matchnew);
        if (!matchnew) {

            return res.status(400).json({ msg: "Password note match" })
        }

        res.status(201).json({ msg: "Login Succfully done" })


    } catch (error) {
        res.status(500).json({ error: error.message })
    }


}





