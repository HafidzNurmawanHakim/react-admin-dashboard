import React from "react";
import "./components.scss";

const Absensi = () => {
  return (
    <div className="absensi">
      <h3>Absensi </h3>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Hafidz</td>
            <td>
              <span className="active"></span>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Hafidz</td>
            <td>
              <span className="inactive"></span>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Hafidz</td>
            <td>
              <span className="active"></span>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Hafidz</td>
            <td>
              <span className="inactive"></span>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Hafidz</td>
            <td>
              <span className="inactive"></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Absensi;
