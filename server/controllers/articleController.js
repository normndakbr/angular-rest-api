const db = require('../models');
const Article = db.articles;

class articleController {
    static async create(req, res) {
        //input validation
        if (!req.body.title) {
            res.status(400).send({ message: "Title cannot be empty!" })
        }

        //create new data
        const article = new Article({
            title: req.body.title,
            description: req.body.description,
            writer: req.body.writer,
            published: req.body.published ? req.body.published : false
        })

        //save to database
        Article
            .save(article)
            .then(data => {
                res.status(201).json(data);
            })
            .catch(err => {
                res.status(500).json({ message: "Error while creating new data" });
            });
    };

    static async read(req, res) {
        const title = req.body.title,
            const condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {}

        Article.findAll(condition)
            .then(data => {
                res.status(200).json({ data })
            })
            .catch(err => {
                res.status(500).json({ message: "Error while retrieving data" })
            });
    };

    static async update(req, res) {
        const id = params.req.id

        //input validation
        if (!req.body) {
            res.status(400).send({ message: "Data cannot be empty!" })
        }

        Article.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
            .then(data => {
                if (!data) {
                    res.status(404).json({
                        message: `Update data with id ${id} failed, data not found`
                    })
                } else res.status(200).json({ message: `Article with id ${id} was updated!` })
            })
            .catch(err => {
                res.status(500).json({ message: "Update data Failed" })
            });
    }

    static async delete(req, res) {
        const id = req.params.id;

        Article.findByIdAndRemove(id)
            .then(data => {
                if (!data) {
                    res.status(404).json({
                        message: `Article with id ${id} was not found`
                    })
                } else res.status(200).json({ message: `Article with id ${id} has been deleted` })
            })
            .catch(err => {
                res.status(500).json({ message: "Delete data failed" })
            })
    }
}

module.exports = articleController