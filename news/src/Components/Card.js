import "./Card.css";

const Card = ({ article }) => {
  function readMoreHandler() {
    window.open(article.url, "_blank");
  }

  return (
    <div className="card">
      <h3 className="card-title">{article.title ? article.title : null}</h3>
      <div>
        <div className="card-details">
          {article.publishedAt ? <p> {article.publishedAt} </p> : null}
          {article.description ? (
            <p className="card-description"> {article.description} </p>
          ) : null}
          {article.content ? (
            <p className="card-content">{`${article.content.substring(
              0,
              197
            )}...`}</p>
          ) : null}
          <button onClick={readMoreHandler} className="card-read-more">
            Read More
          </button>
        </div>
        <div>
          {article.urlToImage ? (
            <img src={article.urlToImage} alt="Media" className="card-image" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
