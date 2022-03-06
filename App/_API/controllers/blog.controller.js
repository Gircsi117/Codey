const User = require('../models/user.model');
const Blog = require('../models/blog.model');

exports.getAllActiveBlog = async (req, res) => {
  try {
    const blogs = await Blog.findAll({ where: { status: 1 } });

    if (!blogs) return res.send({ success: false });

    let blogsWithName = [];

    for await (const blog of blogs) {
      const user = await User.findOne({ where: { id: blog.felhasznalo_id } });
      blogsWithName.push({
        id: blog.id,
        cim: blog.cim,
        tartalom: blog.tartalom,
        felhazsnalo: user.nev,
        idopont: blog.idopont,
      });
    }

    return res.send({ success: true, blogs: blogsWithName });
  } catch (error) {
    console.log(error);
  }
};

exports.postBlog = async (req, res) => {
  try {
    const { felhasznalo_id, cim, tartalom, idopont } = req.body;

    const blog = await Blog.create({
      cim: cim,
      tartalom: tartalom,
      felhasznalo_id: felhasznalo_id,
      idopont: idopont,
      status: 0,
    });

    if (!blog) return res.send({ success: false });

    return res.send({ success: true });
  } catch (error) {
    console.log(error);
  }
};
