import { model, Schema } from "mongoose";
import moment from "moment";

const CommentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    default: moment().format("YYYY-MM-DD hh:mm:ss"),
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "post",
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  creatorName: {
    type: String,
  },
});

const Comment = model("comment", CommentSchema);

export default Comment;
