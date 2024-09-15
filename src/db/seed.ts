import { db } from "."
import { goalCompletions, goals } from "./schema"

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)
}
seed()