export function getModalMessage(type, message) {
  switch (type) {
    case "create_success":
      return {
        title: "Success",
        message: "Data creation successful.",
        status: "success",
      };
    case "update_success":
      return {
        title: "Success",
        message: "Data modification successful.",
        status: "success",
      };
    case "delete_success":
      return {
        title: "Success",
        message: "Data deletion successful.",
        status: "success",
      };

    case "create_error":
      return {
        title: "Error",
        message: "Data creation unsuccessful.",
        status: "error",
      };
    case "update_error":
      return {
        title: "Error",
        message: "Data modification unsuccessful.",
        status: "error",
      };
    case "delete_error":
      return {
        title: "Error",
        message: "Data deletion unsuccessful.",
        status: "error",
      };
    case "warn":
      return {
        title: "Warning",
        message: "",
        status: "warn",
      };
    case "error":
      return {
        title: "Error",
        message: message,
        status: "error",
      };
    default:
      return {
        title: "",
        message: "Something went wrong",
        status: "error",
      };
  }
}
