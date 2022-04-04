const {Router}= require('express')
const {getAllJobs,createJob,updateJob,deleteJob,getSinglJob} = require ('../controllers/jobs')
const checkAuth =require('../middlewares/check-auth')

const router = Router()

router.get('/',getAllJobs)
router.post('/',checkAuth ,createJob)
router.put('/:id',checkAuth ,updateJob)
router.delete('/:id',checkAuth ,deleteJob)
router.get('/:id', getSinglJob)

module.exports= router