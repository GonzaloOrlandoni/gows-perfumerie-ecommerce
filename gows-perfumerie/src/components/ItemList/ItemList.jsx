import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {productos.map((p) => (
        <Item key={p.id} {...p} />
      ))}
    </div>
  );
};

export default ItemList;
