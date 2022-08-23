import {
  ORDER_DATA,
  INSTANTIATE_NEW_DELIVERY,
  INSERT_DELIVERY_ADDRESS,
  INSERT_PICKUP_ADDRESS,
  RESET_ORDER,
  ADD_IMAGE,
} from '../types';

const setOrderData = (payload) => ({
  type: ORDER_DATA,
  payload,
});

const insertDeliveryAddress = (payload) => ({
  type: INSERT_DELIVERY_ADDRESS,
  payload,
});

const addNewDelivery = () => ({
  type: INSTANTIATE_NEW_DELIVERY,
});

const setPickUpAddress = (payload) => ({
  type: INSERT_PICKUP_ADDRESS,
  payload,
});

const resetOrder = () => ({
  type: RESET_ORDER,
});

const addImages = (payload) => ({
  type: ADD_IMAGE,
  payload,
});

export default {
  setOrderData,
  addNewDelivery,
  insertDeliveryAddress,
  setPickUpAddress,
  resetOrder,
  addImages,
};
