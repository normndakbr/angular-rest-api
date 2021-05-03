module.exports = mongoose => {
    const Article = mongoose.model(
        "article",
        mongoose.Schema({
            title: String,
            description: String,
            writer: String,
            published: Boolean
        }, { timestamps: true })
    );

    return Article;
}