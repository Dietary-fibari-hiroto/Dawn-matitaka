import ImagesRoutes from "../assets/ImagesRoutes";

const Album = () => {
    return (
        <div className="bg-box-shadow  bg-white w-[300px] h-[400px] border border-black flex flex-col items-center justify-evenly">
            <figure>
                <img className="w-[250px] h-[300px]" src={ImagesRoutes.IMG_0197} alt="main" />
            </figure>
            <p>Title</p>
        </div>
    )
}

export default Album;