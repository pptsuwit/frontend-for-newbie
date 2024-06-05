import httpService from "@/utils/axios";

const path = "/user";

class userServices {
  gets(
    page = {
      currentPage: 1,
      recordPerPage: 10,
    }
  ) {
    return httpService.get(
      `${path}?page=${page?.currentPage}&pageSize=${page?.recordPerPage}`
    );
  }
  getById(id) {
    return httpService.get(`${path}/${id}`);
  }
  create(data) {
    let formData = new FormData();
    formData.append("username", data.username);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    if (data.password) formData.append("password", data.password);
    if (data.file) formData.append("file", data.file);
    return httpService.post(`${path}`, formData);
  }
  update(id, data) {
    let formData = new FormData();
    formData.append("id", id);
    formData.append("username", data.username);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    if (data.password) formData.append("password", data.password);
    if (data.file) formData.append("file", data.file);
    return httpService.put(`${path}`, formData);
  }
  delete(id) {
    return httpService.delete(`${path}/${id}`);
  }
}

export const service = new userServices();
