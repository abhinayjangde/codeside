

import {db} from "@/db"
const Home = async () => {
  const users = await db.user.findMany()
  return (
    <div>
      <pre>
        {JSON.stringify(users, null, 2)}
      </pre>
    </div>
  )
}

export default Home