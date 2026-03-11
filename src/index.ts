import { app } from './server.ts'
import { env } from '../env.ts'

console.log(env)

app.listen(env.PORT, () => {
  console.log('Server running on port: 3000')
})