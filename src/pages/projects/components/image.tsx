const ImageBlock = ({image}: {image: string;}) => {
    return (
        <div className="mr-[20px]">
            <img src={image} alt="" className=" rounded aspect-video transistion object-cover h-[78px] lg:mb-0 lg:w-[140px] mb-2 border-2 border-[rgba(148,163,184,0.1)] hover:border-[rgba(148,163,184,0.3)]
" />
        </div>
    )
}

export default ImageBlock;