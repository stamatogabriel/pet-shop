import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";


import api from "../services/api";

import { RootState } from "../store/modules/rootReducer";

import Loading from "../components/Loading";
import SaleList from "../components/SalesList";
import { Sale } from "../types/sale";

const Sales: React.FC = () => {
  const [products, setSales] = useState<Sale[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { token } = useSelector((state: RootState) => state.auth);

  const getSales = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get(`/sales/schedule`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setSales(response.data.schedules);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Algo deu errado. Tente novamente mais tarde.");
    }
  }, [token]);

  const deleteSale = useCallback(
    async (id: string) => {
      try {
        await api.delete(`/sales/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        getSales();

        return toast.success("Agendamento deletado com sucesso");
      } catch (error) {
        return toast.error(
          "Não foi possível excluir o agendamento no momento, por favor, tente novamente mais tarde."
        );
      }
    },
    [getSales, token]
  );

  useEffect(() => {
    getSales();
  }, [getSales]);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <SaleList sales={products} deleteSale={deleteSale} />
      )}
    </>
  );
};

export default Sales;
