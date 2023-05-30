import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  const secrets = {
    ENVIRONMENT: process.env.ENVIRONMENT,
  };
  res.status(200).json(secrets);
});

export default router;
