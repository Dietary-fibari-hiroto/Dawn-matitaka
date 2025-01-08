import ImagesRoutes from "../assets/ImagesRoutes"
const Catch = ({ Class, Style }) => {
    return (
        <section className={`section-frame `}>
            <figure className={`relative h-full overflow-x-hidden`}>
                <img className={`${Class} ${Style} absolute z-[5] left-[30%] top-[40%] w-[200px] max-sm:left-[0]`} src={ImagesRoutes.group_98} alt="group_98" />
                <img className={`${Class} ${Style} absolute z-[3] left-[20%]  top-0 h-screen max-sm:w-full max-sm:left-0`} src={ImagesRoutes.haruhi2} alt="haruhi2" />

            </figure>
        </section>)
}

export default Catch