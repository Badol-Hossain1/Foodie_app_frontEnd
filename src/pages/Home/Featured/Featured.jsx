import SectionTitle from '../../../components/sectionTitle/SectionTitle'
import featuredImg from '../../../../public/home/featured.jpg'

const Featured = () => {
    return (
        <div
            className=" bg-fixed text-gray-300 font-bold bg:opacity-50"
            style={{
                backgroundImage: "url('../../../../public/home/featured.jpg')",
            }}
        >
            <SectionTitle heading="Featured Item" subHeading="check it out" />
            <div className="md:flex bg-slate-500 opacity-40 justify-center items-center py-8 gap-6 px-16">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>Aug 12,2050</p>
                    <p className="uppercase">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Dignissimos eius id voluptatem corporis
                        necessitatibus. Accusantium cumque aliquid distinctio
                        iusto ullam natus pariatur laborum a deleniti voluptatem
                        autem, reprehenderit unde nam repellat alias tempora.
                        Dolores possimus ipsum explicabo, veritatis ullam
                        expedita?
                    </p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Featured
