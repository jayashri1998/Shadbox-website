const ServiceCard = ({title,icon_url,about}) => {
    
  return (
    <div className="max-w-md mb-6 text-center border-2 rounded-lg px-5 py-8 hover:shadow-2xl transition-shadow duration-300 font-roboto">
    <img className="w-20 h-20 mx-auto" src={icon_url} alt="development"/>
    <h1 className="font-medium text-lg hover:text-red-500 transition duration-300">{title}</h1>
    <p className="text-justify text-gray-500 leading-7">{about}</p>
    </div>
  )
}

export default ServiceCard;