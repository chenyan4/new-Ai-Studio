const KleinResultPanel = ({ result, onOpen }) => {
  return (
    <div className="k-result">
      {result?.images?.[0] ? (
        <div className="k-result-wrap">
          <img src={result.images[0]} alt="klein-result" onClick={() => onOpen(result)} />
          <a href={result.images[0]} download className="k-download">
            下载
          </a>
        </div>
      ) : (
        <div className="k-empty">生成结果会显示在这里</div>
      )}
    </div>
  );
};

export default KleinResultPanel;

