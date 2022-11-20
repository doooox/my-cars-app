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
  async getCar(id) {
    try {
      const response = await this.client.get(`/cars/${id}`);
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
  async edit(id, car) {
    try {
      const response = await this.client.put(`/cars/${id}`, car);
      return response;
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  async delete(id){
    try{
      const response = await this.client.delete(`cars/${id}`);
      return response.data;
    }catch(error){
      console.log("Something went wrong", error);
    }
  }
}

export default new CarsService();
