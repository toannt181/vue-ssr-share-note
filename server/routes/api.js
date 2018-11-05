import { Router } from 'express'
import { sequelize, User, Company } from '../Models'
import { Op } from 'sequelize'

const router = Router()

router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (e) {
    console.error(e)
  }
})

router.get('/user/:id', async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if (!user) {
      res.send(404)
      return
    }
    res.send([user])
  } catch (e) {
    console.error(e)
  }
})

router.get('/user', async (req, res) => {
  try {
    const { first_name } = req.query
    const user = await User.findAll({
      where: {
        first_name: {
          [Op.like]: `%${first_name}%`
        },
      },
      include: [{ model: Company }],
    })
    if (!user) {
      res.send(404)
      return
    }
    res.send(user)
  } catch (e) {
    console.error(e)
  }
})

router.get('/companies', async (req, res) => {
  try {
    const companies = await Company.findAll()
    res.send(companies)
  } catch (e) {
    console.error(e)
  }
})

router.get('/count/user', async (req, res) => {
  try {
    const count = await User.count({ where: {}, offset: 10 })
    res.send([count])
  } catch (e) {
    console.error(e)
  }
})

module.exports = router
