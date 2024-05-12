import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

const InterceptedImagePage = ({ params }) => {
  const newsId = params.id;
  const newsItem = DUMMY_NEWS.find((news) => news?.slug === newsId);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;