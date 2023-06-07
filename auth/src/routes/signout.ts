import express, { Request, Response } from 'express';


const router = express.Router();


//Retrieves the current user
router.post('/api/users/signout', async (req: Request, res: Response) => {

    try {

        req.session = null;

        res.status(200).send({});

    } catch (err) {

    }

});


export { router as signoutRouter };