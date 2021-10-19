import axios from "axios";
import { useEffect, useState } from "react";
import { RecordResponse } from "./types";
import { formatDate } from "./helpers";
import Pagination from "./Pagination";
import './styles.css';
import Filters from "components/Filters";

const BASE_URL = "http://localhost:8080";

const Records = () => {
  const [recordsResponse, setRecordsResponse] = useState<RecordResponse>();
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/records?linesPerPage=12&page=${activePage}`)
      .then((response) => setRecordsResponse(response.data));
  }, [activePage]);

  const handlePageChange = (index: number) => {
    setActivePage(index)
  }

  return (
    <div className="page-container">
      <Filters link="/charts" linkText="VER GRÁFICO"/>
      <table className="records-table" cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>INSTANTE</th>
            <th>NOME</th>
            <th>IDADE</th>
            <th>PLATAFORMA</th>
            <th>GÊNERO</th>
            <th>TITULO DO GAME</th>
          </tr>
        </thead>
        <tbody>
          {recordsResponse?.content.map((record) => (
            <tr key={record.id}>
              <td>{formatDate(record.moment)}</td>
              <td>{record.name}</td>
              <td>{record.age}</td>
              <td className="text-warning">{record.gamePlatform}</td>
              <td>{record.genreName}</td>
              <td className="text-secondary">{record.gameTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
      activePage={activePage}
      goToPage={handlePageChange}
      totalPages={recordsResponse?.totalPages}
      />
    </div>
  );
};

export default Records;
