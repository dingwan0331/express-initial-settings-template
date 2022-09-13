import supertest from "supertest";

import app from "../src/app.js";

describe("GET /ping", () => {
  test("Success", async () => {
    const response = await supertest(app).get("/ping");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: "pong" });
    expect(response.headers["content-type"]).toBe(
      "application/json; charset=utf-8"
    );
  });
  test("404 Not Found Error", async () => {
    const response = await supertest(app).get("");
    expect(response.statusCode).toBe(404);
  });
});
