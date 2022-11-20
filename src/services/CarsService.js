import { ApiService } from "./ApiService";

class CarsService extends ApiService {
  async getAll() {
    try {
      const response = await this.client.get("/cars");
      return response.data;
    } catch (error) {
      console.log("Something went wrong", error);
    }
    return [];
  }
  async add(car) {
    try {
      const response = this.client.post("/cars", car);
      return response.data;
    } catch (error) {
      console.log("Something went wrong", error);
    }
    return [];
  }
}
export default new CarsService();
