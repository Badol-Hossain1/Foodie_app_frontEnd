

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div>
             <span
                className="text-center mb-4 w-full block text-yellow-300
                "
            >
              {heading}
            </span>
            <div className="flex mb-10 justify-center">
                <h1 className="md:text-4xl text-xl inline p-6 border-t-2 border-b-2 text-center ">
                  {subHeading}
                </h1>
            </div>
        </div>
    );
};

export default SectionTitle;