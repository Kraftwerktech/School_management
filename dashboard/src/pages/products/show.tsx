import { useNavigation, useResource, useShow } from "@refinedev/core";

export const ProductShow = () => {
  const { edit, list } = useNavigation();
  const { id } = useResource();
  const { queryResult } = useShow({});
  const { data } = queryResult;

  const record = data?.data;
  return (
    <div style={{ padding: "16px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>Show</h1>
        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={() => list("products")}>List</button>
          <button onClick={() => edit("products", id ?? "")}>Edit</button>
        </div>
      </div>
      <div>
        <div style={{ marginTop: "6px" }}>
          <h5>ID</h5>
          <div>{record?.id ?? ""}</div>
        </div>
        <div style={{ marginTop: "6px" }}>
          <h5>Name</h5>
          <div>{record?.name}</div>
        </div>
      </div>
    </div>
  );
};
