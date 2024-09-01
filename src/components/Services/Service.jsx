import { useServices } from '../../hooks/useServices';
import profImg from '../../assets/img/achive/Group 203.png';

function ServiceList({ subfeatures }) {
  return (
    <>
      {subfeatures.map((text, i) => (
        <p key={i} className="mt-2 font-semibold text-gray-500">
          {text}
        </p>
      ))}
    </>
  );
}

const Service = () => {
  const { service } = useServices();

  return (
    <div className="container mx-auto my-0" id="services">
      <span className="text-3xl text-gray-600 font-bold m-2">Services</span>
      {service.map(service => (
        <>
          <div
            key={service.id}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 p-6 bg-background text-foreground bg-yellow-50"
          >
            {/* BEGIN ONE */}
            <div className="flex-1">
              <h2 className="text-3xl text-gray-600 font-bold">
                {service.name}
              </h2>
              <p className="mt-4 text-2xl text-muted-foreground text-gray-600">
                {service.description}
              </p>
            </div>
            <div className="flex-1 mt-8 md:mt-0">
              <img className="pb-7" src={profImg} alt="" />
              <div className="flex items-center justify-center space-x-4">
                <div>
                  <ServiceList subfeatures={service.subfeatures} />
                </div>
              </div>
            </div>
            {/* END ONE */}
          </div>

          <div
            key={service.id2}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 p-6 bg-background text-foreground"
          >
            {/* BEGIN TWO */}
            <div className="flex-1 mt-8 md:mt-0">
              <img className="pb-7" src={profImg} alt="" />
              <div className="flex items-center justify-center space-x-4">
                <div>
                  <ServiceList subfeatures={service.subfeatures2} />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl text-gray-600 font-bold">
                {service.name2}
              </h2>
              <p className="mt-4 text-2xl text-muted-foreground text-gray-600">
                {service.description2}
              </p>
            </div>
            {/* END TWO */}
          </div>
        </>
      ))}
    </div>
  );
};

export default Service;
