import fastify from "fastify";
import axios from "axios";
import cors from "@fastify/cors";
const app = fastify({
    logger: true,
});
await app.register(cors, {
    origin: "*",
});
const API_URL = "http://localhost:8080/v1/graphql";
/**
 * 全てのTODOを取得
 */
app.get("/getAll", async (request, reply) => {
    const query = `
    {
      todos(order_by: {id: asc}) {
        id
        title
        description
      }
    }
  `;
    const { data } = await axios.post(API_URL, {
        query,
    });
    reply.send(data.data);
});
/**
 * TODOを追加
 */
app.post("/create", async (request, reply) => {
    const body = request.body;
    const query = `
    mutation {
      insert_todos (objects: [{
        title: "${body.title}",
        description: "${body.description}",
      }]) {
        returning {
          id
          title
          description
        }
      }
    }
  `;
    const { data } = await axios.post(API_URL, {
        query,
    });
    reply.send(data.data);
});
/**
 * TODOを削除
 */
app.post("/delete", async (request, reply) => {
    const body = request.body;
    const query = `
    mutation {
      delete_todos(where: {id: {_eq: ${body.id}}}) {
        affected_rows
      }
    }
  `;
    await axios.post(API_URL, { query });
    return reply.send({ message: "正常に削除されました。" });
});
/**
 * TODOを更新
 */
app.post("/update", async (request, reply) => {
    const body = request.body;
    const query = `
    mutation {
      update_todos(
        where: {id: {_eq: ${body.id}}},
        _set: {
          title: "${body.title}",
          description: "${body.description}",
        }) {
        affected_rows
        returning {
          id
          title
          description
        }
      }
    }
  `;
    const { data } = await axios.post(API_URL, { query });
    return reply.send(data.data);
});
app.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`ローカルサーバー起動中${address}`);
});
//# sourceMappingURL=server.js.map