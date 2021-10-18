import axios from "axios";
import { useEffect, useState } from "react";
import { RecordResponse } from "./types";
import './styles.css';
import { formatDate } from "./helpers";

const BASE_URL = "http://localhost:8080";

const Records = () => {
  const [recordsResponse, setRecordsResponse] = useState<RecordResponse>();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/records?linesPerPage=12&page`)
      .then((response) => setRecordsResponse(response.data));
  }, []);

  return (
    <div className="page-container">
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
    </div>
  );
};

export default Records;
