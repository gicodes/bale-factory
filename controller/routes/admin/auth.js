const express = require('express');
const usersRepo = require('../../../model/repositories/users');

const { handleErrors } = require('./middlewares');
const signupTemplate = require('../../../views/admin/auth/signup');
const signinTemplate = require('../../../views/admin/auth/signin');

const {
	requireEmail,
	requirePassword,
	requirePasswordCon,
	requireEmailExists,
	requireValidPasswordForUser } = require('./validators');

const router = express.Router();


router.get('/signup', (req, res) => {
	res.send(signupTemplate({ req }));
})

router.post(
	'/signup', [
	requireEmail,
	requirePassword,
	requirePasswordCon],
	handleErrors(signupTemplate),
	async (req, res) => {
		const { email, password } = req.body;
		const user = await usersRepo.create({ email, password });
		// res.send(`Account Created! \n Your id is: ${req.session.userId}`);
		req.session.userId = user.id;
		res.redirect('/user/{user.id}/');
	});

router.get('/signin', (req, res) => {
	res.send(signinTemplate({ req }));
})

router.post(
	'/signin', [
	requireEmailExists,
	requireValidPasswordForUser],
	handleErrors(signinTemplate),
	async (req, res) => {
		const { email } = req.body;
		const user = await usersRepo.getOneBy({ email });
		req.session.userId = user.id;
		res.redirect('/user/{user.id}/');
	})

router.get('/signout', (req, res) => {
	req.session = null;
	res.send('You are logged out!')
})

module.exports = router;