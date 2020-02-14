"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProjectSchema extends Schema {
  up() {
    this.create("projects", table => {
      table.increments();
      // table
      //   .integer("user_id")
      //   .unsigned()
      //   .refrences("users.id")
      //   .inTable("users");
      table.integer("user_id").unsigned();
      table.foreign("user_id").references("users.id");
      table.string("title", 255);
      table.timestamps();
    });
  }

  down() {
    this.drop("projects");
  }
}

module.exports = ProjectSchema;
