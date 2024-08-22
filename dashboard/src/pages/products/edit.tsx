import { useNavigation } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import React from "react";

export const ProductEdit: React.FC = () => {
  const { list } = useNavigation();

  const {
    refineCore: { onFinish },
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit", // Ensures validation happens on submit
  });

  return (
    <div style={{ padding: "16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Edit Category</h1>
        <button onClick={() => list("categories")}>Back to List</button>
      </div>
      <form onSubmit={handleSubmit(onFinish)}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label>
            <span style={{ marginRight: "8px" }}>Title</span>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.title && (
              <span style={{ color: "red" }}>Alhamdullah</span>
            )}
          </label>
          <div>
            <input type="submit" value="Save" />
          </div>
        </div>
      </form>
    </div>
  );
};
