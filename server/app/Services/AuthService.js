const InvalidAccessException = use("App/Exceptions/InvalidAccessException");
const ResourceNotExistException = use(
  "App/Exceptions/ResourceNotExistException"
);

class AuthService {
  static verifyPermission(project, user) {
    if (!project) {
      throw new ResourceNotExistException();
    }
    if (project.user_id !== user.id) {
      throw new InvalidAccessException();
      //   throw new Error("custom error");
    }
  }
}

module.exports = AuthService;
