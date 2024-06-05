import { Router} from 'express'

export const router = Router()

const guns = [
    {
        name: '9MM inches',
        quantity: 1
    },
    {
        name: '32mm inches',
        quantity: 3
    },
    {
        name: 'Ak 47',
        quantity: 1
    },
]
router.get('/guns', (req: any,res: any) => {
    res.cookie('newValue', true, {
        maxAge: 100000
    })
    console.log("Res", req.cookies)
    console.log("SignedRes", req.signedCookies)
    res.send(guns)
})

router.get('/guns/:gun', (req:any, res:any) => {
    const {gun} = req.params
    const gottenGun = guns.find((currentGuns) => currentGuns.name.toLowerCase().includes(gun) )
    res.status(200).send(gottenGun) 
})

router.post('/guns', (req:Request, res:any) => {
    console.log("Response", res)
    res.status(201).send(res.body)
})
