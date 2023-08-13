"use client";
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import FormButton from "../form/form-button";
import FormInput from "../form/form-input";
import { yupResolver } from "@hookform/resolvers/yup";
import { transactionSchema } from "@/lib/validations";
import { AddTransaction } from "@/types";
import FormSelect from "../form/form-select";
import { typeTranctionData } from "@/app/data";
import { addNewTransaction } from "@/services/transaction.service";
import { useSession } from "next-auth/react";
import MainContext from "@/contexts/main-contenxt";

export default function AddTransactionWrapper() {
  const [error, setError] = useState<any>({});
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const session = useSession({ required: true });
  const { register, handleSubmit, formState, control } = useForm({
    resolver: yupResolver(transactionSchema),
  });
  const { setCount }: any = useContext(MainContext);

  const { errors } = formState;
  const onSubmit = async (formData: any) => {
    if (session.status === "authenticated") {
      // @ts-ignore
      const result = { ...formData, userId: session?.data?.user?.id };
      addNewTransaction(result, setCount, setError);
    }
  };
  return (
    <div className="mt-5">
      <h3 className="text-sm font-bold">Add new transaction</h3>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mt-5">
            <div>
              <div>
                <FormInput
                  type="title"
                  placeholder="transaction title"
                  register={register}
                  label="title"
                />
                {errors.title && (
                  <p className="text-red-500">{errors.title.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="form-group mt-5">
            <div>
              <div>
                <FormSelect
                  label="type"
                  options={typeTranctionData}
                  defaultSelectText="choose the type of the transaction"
                  register={register}
                />
                {errors.type && (
                  <p className="text-red-500">{errors.type.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="form-group mt-5">
            <div>
              <div>
                <FormInput
                  type="number"
                  placeholder="amount"
                  register={register}
                  label="amount"
                />
                {errors.amount && (
                  <p className="text-red-500">{errors.amount.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-5">
            {isLoading ? (
              <FormButton
                type="button"
                text="Loading"
                isLoading={true}
                className=" 
                    text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
                  dark:bg-blue-600 dark:hover:bg-blue-700
                  dark:focus:ring-blue-800 
                  "
                disabled={true}
              />
            ) : (
              <FormButton
                type="submit"
                text="add"
                isLoading={false}
                className=" 
                    text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
                  dark:bg-blue-600 dark:hover:bg-blue-700
                  dark:focus:ring-blue-800 
                  "
                disabled={false}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
