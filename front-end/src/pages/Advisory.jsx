import useFetch from "../hooks/useFetch";
import { getAdvisories } from "../api/services/advisory.service";

export default function Advisory() {
  const { data: advisories, loading, error } = useFetch(getAdvisories);

  if (loading) return <p>Loading advisories...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="advisory">
      <h1 className="page-title">Farming Advisory</h1>
      <div className="advisory-cards">
        {advisories?.map((item, index) => (
          <div className="advisory-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}