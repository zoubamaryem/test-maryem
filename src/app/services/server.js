const Post = require('./backend/models/Post');

// Route pour obtenir tous les posts
app.get('/post', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(400).send('Erreur lors de la récupération des posts');
  }
});

// Route pour obtenir un post par ID
app.get('/post/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send('Post non trouvé');
    }
    res.json(post);
  } catch (err) {
    res.status(400).send('Erreur lors de la récupération du post');
  }
});
app.post('/post', async (req, res) => {
    try {
      const { titre, contenu } = req.body;
      const newPost = new Post({ titre, contenu });
      await newPost.save();
      res.status(201).json(newPost);
    } catch (err) {
      res.status(400).send('Erreur lors de la création du post');
    }
  });

  const postRoutes = require('./backend/routes/post');

app.use('/api', postRoutes);

  