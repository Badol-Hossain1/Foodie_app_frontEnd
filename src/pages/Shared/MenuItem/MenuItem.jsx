

const MenuItem = ({item}) => {
    console.log("🚀 ~ MenuItem ~ item:", item)
    const {name,price,recipe} = item
   let images = 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'
    return (
        <div className="md:flex  space-x-4">
            <img className="w-50 mx-auto md:rounded-[0_200px_200px_200px]" src={images} alt="" />
            <div className="md:text-start text-center">
                <h3 className="uppercase">
                    {name}--------
                    <p className="">
                        {
                            recipe
                        }
                    </p>
                </h3>
            </div>
            <p className=" text-center md:text-start text-yellow-400">
                ${price}
            </p>
        </div>
    );
};

export default MenuItem;