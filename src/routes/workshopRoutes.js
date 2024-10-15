import { Router } from "express";
import {
    store,
    index,
    update,
    destroy
} from "../controllers/workshopController.js";

const router = Router();

router.post("/", store);
router.get("/", index);
router.get("/:id", index);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;