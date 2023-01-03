const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const Tutorial = prisma.tutorials;
exports.create = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({ message: 'Content can not be empty' });
  }
  const data = await Tutorial.create({ data: req.body });
  res.status(201).send(data);
}
exports.findAll = async (req, res) => {
  const data = await Tutorial.findMany({
    where: { title: { contains: req.query.title } }
  })
  res.status(200).send(data);
}
exports.findOne = async (req, res) => {
  const data = await Tutorial.findUnique({
    where: { id: parseInt(req.params.id) }
  })
  res.status(200).send(data);
}
exports.update = async (req, res) => {
  const data = await Tutorial.update({
    where: { id: parseInt(req.params.id)},
    data: req.body
  })
  res.status(200).send(data);
}
exports.delete = async (req, res) => {
  await Tutorial.delete({
    where: { id: parseInt(req.params.id) }
  })
  res.status(204).send({ message: 'Tutorial was deleted successfully!' });
}
exports.deleteAll = async (req, res) => {
  await Tutorial.deleteMany();
  res.status(204).send({ message: 'Tutorials was deleted successfully!' });
}
exports.findAllPublished = async (req, res) => {
  const data = await Tutorial.findMany({
    where: { published: true }
  })
  res.status(200).send(data);
}