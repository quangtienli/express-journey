import express from 'express';
const router = express.Router();

const users = [
  {
    id: 0,
    name: 'Li Quang Tien',
  },
];

router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', (req, res) => {
  res.status(200).json(users);
});

router.post('/', (req, res) => {
  const data = req.body;
  //   res.status(200).send(data);
  const id = users.slice(-1)[0].id + 1;
  const newUser = { ...data, id };
  users.push(newUser);
  res.status(200).json(users);
});

router.put('/:userId', (req, res) => {
  const { userId } = req.params;
  const existingUserIndex = users.findIndex((u) => u.id === Number(userId));
  if (existingUserIndex < 0) {
    return res.status(400).send(`User ${userId} not found`);
  }
  const data = req.body;
  const updatedUser = {
    ...data,
    id: userId,
  };
  users.splice(existingUserIndex, 1, updatedUser);
  res.status(200).send(updatedUser);
});

router.delete('/:userId', (req, res) => {
  const { userId } = req.params;
  const existingUserIndex = users.findIndex((u) => u.id === Number(userId));
  if (existingUserIndex < 0) {
    return res.status(400).send(`User ${userId} not found`);
  }
  users.splice(existingUserIndex, 1);
  res.status(200).send(users);
});

export default router;
