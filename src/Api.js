import axios from "axios";

const BASE_API_URL = "https://localhost:5000"

class ItemsApi {
  static async getItems() {
    const result = await axios.get(`${BASE_API_URL}/products`)
    return result.data;
  }
}

export default ItemsApi;