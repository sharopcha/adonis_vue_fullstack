"use strict";

const Project = use("App/Models/Project");
const AuthService = use("App/Services/AuthService");

class ProjectController {
  async index({ auth }) {
    const user = await auth.getUser();
    console.log(user);
    return await user.projects().fetch();
  }

  async create({ auth, request }) {
    const user = await auth.getUser();
    const { title } = request.all();
    const project = new Project();
    project.fill({
      title
    });

    await user.projects().save(project);
    return project;
  }

  async destroy({ auth, request, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const project = await Project.find(id);
    AuthService.verifyPermission(project, user);
    await project.delete();
    return project;
  }
}

module.exports = ProjectController;
