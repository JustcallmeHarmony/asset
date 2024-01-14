import axios from "axios";

/**
 * @params
 * {
 *  id: number,
 *  price: number,
 *  category: string,
 *  fundsAtTheTime: number,
 *  description: string,
 *  createAt: string,
 * }
 */
export const addConsumptionDetail = async (body) => {
  const { data } = await axios.post(
    "http://localhost:3002/consumption-details",
    body
  );
  return data;
};