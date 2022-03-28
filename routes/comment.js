const { Router } = require("express");
const cartController = require("../controllers/comment.controllers");
const router = Router();

router.get("/:id", cartController.get_comment_items);
router.post("/:id", cartController.add_comment_item);

module.exports = router;
