import express from 'express'
import { createTour,deleteTour,updateTour,getAllTour,getSingleTour, getTourBySearch, getFeaturedTour, getTourCount } from '../controllers/tourController.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

//create new tour
router.post('/',verifyAdmin , createTour)
//update tour
router.put('/:id',verifyAdmin , updateTour)
//delete tour
router.delete('/:id',verifyAdmin, deleteTour)
//getsingle tour
router.get('/:id', getSingleTour)
//getall tour
router.get('/', getAllTour)
//getall tour by search
router.get('/search/getTourBySearch', getTourBySearch)
router.get('/search/getFeaturedTours', getFeaturedTour)
router.get('/search/getTourCount', getTourCount)

export default router;