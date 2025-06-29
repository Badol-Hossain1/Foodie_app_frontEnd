

const MenuItem = ({item}) => {
    console.log("🚀 ~ MenuItem ~ item:", item)
    const {name,image,price,recipe} = item
   let images = 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'
    return (
        <div className="flex space-x-4">
            <img className="w-50 rounded-[0_200px_200px_200px]" src={images} alt="" />
            <div>
                <h3 className="uppercase">
                    {name}--------
                    <p>
                        {
                            recipe
                        }
                    </p>
                </h3>
            </div>
            <p className="text-yellow-400">
                ${price}
            </p>
        </div>
    );
};

export default MenuItem;