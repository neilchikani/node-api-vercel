const mongoose = require("mongoose");
const httpStatus = require("http-status");
const APIError = require("../../helpers/APIError");

/**
 * Book Schema
 */
const BookSchema = new mongoose.Schema({
  url_name: {
    type: String,
    value: "some_link",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

/**
 * - pre-post-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
BookSchema.method({});

/**
 * Statics
 */
BookSchema.statics = {
  /**
   * Get book
   * @param {ObjectId} id - The objectId of book.
   * @returns {Promise<Book, APIError>}
   */
  async get(id) {
    const url = await this.findById(id).exec();
    if (!url) {
      throw new APIError("No such URL's exists!", httpStatus.NOT_FOUND);
    }
    return url;
  },
  list() {
    return this.find().exec();
  },
};

/**
 * @typedef Book
 */
module.exports = mongoose.model("Book", BookSchema);
