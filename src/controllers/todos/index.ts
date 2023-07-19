import { Response, Request } from "express"
import { ITodo } from "./../../types/todo"

import Todo from "../../models/todo"

const getTodos = async (req: Request, res: Response): Promise<void> => {