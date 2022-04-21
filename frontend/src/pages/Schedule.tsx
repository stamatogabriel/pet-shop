import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import ScheduleComponent from "../components/ScheduleComponent";
import { IOptions } from "../components/Select";
import api from "../services/api";
import { RootState } from "../store/modules/rootReducer";

import { IPet } from '../types/pet'

interface RouteParams {
  petId: string;
}

interface ScheduleProps extends RouteComponentProps<RouteParams> {}

const Schedule: React.FC<ScheduleProps> = ({
  match: {
    params: { petId },
  },
}) => {
  const [pet, setPet] = useState<IPet | null>(null)
  const [products, setProducts] = useState<IOptions[] | []>([])
  const { token } = useSelector((state: RootState) => state.auth);

  const getPet = useCallback(async () => {
    try {
      const response = await api.get(`/pets/${petId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setPet(response.data)
    } catch (error) {
      toast.error("Algo deu errado. Tente novamente mais tarde.");
    }
  }, [petId, token]);

  const getProducts = useCallback(async () => {
    try {
      const response = await api.get(`/products`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const options = response.data.products.map(item => {
        return {
          label: item.description,
          value: item._id
        }
      })

      setProducts(options);
    } catch (error) {
      toast.error("Algo deu errado. Tente novamente mais tarde.");
    }
  }, [token]);

  useEffect(() => {
    getPet();
    getProducts()
  }, [getPet, getProducts]);

  return pet && products && <ScheduleComponent pet={pet} products={products} />;
};

export default Schedule;
