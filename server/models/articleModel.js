module.exports = mongoose => {
    var schema = mongoose.Schema({
        title: String,
        description: String,
        writer: String,
        published: Boolean
    }, { timestamps: true });

    schema.method("toJSON", () => {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    })

    const Article = mongoose.model("tutorial", schema);
    return Article;
}