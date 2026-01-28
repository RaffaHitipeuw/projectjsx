import { useState } from "react";

function ListSiswa() {
  const [nama, setNama] = useState("");
  const [siswa, setSiswa] = useState([]);

  const tambahSiswa = () => {
    if (nama.trim() === "") return;
    setSiswa([...siswa, nama]);
    setNama("");
  };

  return (
    <div>
      <h2>Daftar Nama Siswa</h2>

      <input
        type="text"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        placeholder="Masukkan nama siswa"
      />
      <button onClick={tambahSiswa}>Tambah</button>

      <table border="1" cellPadding="8" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          {siswa.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListSiswa;
