function AutocompleteItem({ id, name, image }: any) {
  return (
    <div className="text-gray-600" key={id}>
      {name}
    </div>
  );
}

export default AutocompleteItem;
