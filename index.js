import express from "express"
import { PrismaClient } from "@prisma/client"
const app = express()
const prisma = new PrismaClient()

app.get("/", (req, res) => {
    console.log('req',req.query);

    res.send("Hello World!Hello World!Hello World!")
    }
)

app.get("/create/:title", async (req, res) => {
    const todo = await prisma.todo.create({
        data: {
            title: req.params.title,
            done: true
        },
})
res.send("作ったTODOのタイトルは" + todo.title + "です。")
})

app.get("/:id", async (req, res) => {
    const todo = await prisma.todo.findUnique({
        where: {
            id: Number(req.params.id),
        },
})
console.log('todo',todo);

res.send("作ったTODOのidは" + todo.id + "です。")
}
)

app.listen(8000, () => {
    console.log("Server running on port 8000")
    }
)
