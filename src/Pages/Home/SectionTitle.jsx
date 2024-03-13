const SectionTitle = ({title1, title2}) =>{
    return (
        <div className="mb-6 flex justify-center">
            <span className="text-2xl text-center border-b-2 border-primaryColor pb-2 font-bold">{title1} <span className="text-primaryColor">{title2}</span></span>
        </div>
    )
}

export default SectionTitle