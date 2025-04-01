import Work from './Work';

const WorkList = ({ works }) => {
  return (
    <div className="bg-white py-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((post) => (
            <div key={post.slug} className="h-full">
              <Work post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkList;
