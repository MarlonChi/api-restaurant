import { Request, Response, NextFunction } from "express";
import { z } from "zod";

import { knex } from "@/database/knex";
import { AppError } from "@/utils/AppError";

export class TablesSessionsController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        table_id: z.number(),
      });

      const { table_id } = bodySchema.parse(request.body);

      const session = await knex<TablesSessionsRepository>("tables_sessions")
        .where({ table_id })
        .orderBy("opened_at", "desc")
        .first();

      if (session && !session.closed_at) {
        throw new AppError("A mesa está em aberto.");
      }

      await knex<TablesSessionsRepository>("tables_sessions").insert({
        table_id,
      });

      return response.status(201).json();
    } catch (error) {
      next(error);
    }
  }

  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const session = await knex<TablesSessionsRepository>(
        "tables_sessions"
      ).orderBy("closed_at");

      return response.json(session);
    } catch (error) {
      next(error);
    }
  }
}
