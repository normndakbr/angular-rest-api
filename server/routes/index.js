const articleController = require('../controllers/articleController')
const router = require('express').Router()

router.post('/createArticle', articleController.createArticle);
router.get('/readAllArticles', articleController.readAllArticles);
router.get('/readPublishedArticle', articleController.readPublishedArticles);
router.get('/readArticleById', articleController.readArticleById);
router.get('/updateArticle', articleController.updateArticle);
router.delete('/deleteArticle', articleController.deleteArticle);

module.exports = router