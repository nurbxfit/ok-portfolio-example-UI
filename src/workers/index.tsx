import { Hono } from "hono"
import { reactSSR } from "@/middlewares/reactSSR"

const app = new Hono()


app.use(reactSSR())

app.get("/", (c) => c.reactRender("home", { title: "Ok portfolio" }))
// 404 fallback — must be at the end
app.notFound((c) => {
  return c.reactRender("notFound", { title: "404 - Not Found" })
})
export default app
