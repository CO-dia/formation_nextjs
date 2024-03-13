type props = {
  resources: {
    title: string;
    description: string;
    link: string;
    image: string;
    priority: number;
    timeToFinish: number;
    active: boolean;
  }[];
};

const ResourceHighlight = ({ resources }: props) => {
  return (
    <>
      {resources.map((resource, index) => {
        return (
          <section key={index} className="py-10">
            <div className="max-w-6xl mx-auto">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div
                    className="h-64 bg-gray-100 rounded-md"
                    style={{
                      backgroundImage: `url(${resource.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
                <div className="md:w-1/2 md:ml-6">
                  <h2 className="text-3xl mt-4">{resource.title}</h2>
                  <p className="text-justify mt-4">{resource.description}</p>
                  <div className="flex justify-start mt-4">
                    <a
                      href={resource.link}
                      className="bg-gray-900 text-white px-6 py-3 rounded-md"
                    >
                      Voir la ressource
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ResourceHighlight;
