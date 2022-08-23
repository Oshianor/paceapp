import {
  CALCULATE_ORDER,
  INSTANTIATE_NEW_CALCULATION,
  INSERT_DELIVERY_ADDRESS_CALCULATE,
  INSERT_PICKUP_ADDRESS_CALCULATE,
  INSERT_VEHICLE
} from '../types';

const setOrderData = (payload) => ({
  type: CALCULATE_ORDER,
  payload,
});

const insertDeliveryAddress = (payload) => ({
  type: INSERT_DELIVERY_ADDRESS_CALCULATE,
  payload,
});

const addNewDelivery = () => ({
  type: INSTANTIATE_NEW_CALCULATION,
});

const setPickUpAddress = (payload) => ({
  type: INSERT_PICKUP_ADDRESS_CALCULATE,
  payload,
});

const setVehicle = (payload) => ({
    type: INSERT_VEHICLE,
    payload,
});

export default {
  setOrderData,
  addNewDelivery,
  insertDeliveryAddress,
  setPickUpAddress,
  setVehicle,
};
