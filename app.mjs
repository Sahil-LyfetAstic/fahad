import express from 'express';
import router from './router.mjs';

const app = express()

/**router */
app.use(router)




const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});