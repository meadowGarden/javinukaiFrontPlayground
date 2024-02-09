const CategoryModalList = ({ category}) => {
  const { categoryName, description, totalSubmissions } = category;

  return (
    <div>
      <strong>{categoryName}</strong>, {description} ({totalSubmissions})     
    </div>
  );
};

export default CategoryModalList;
