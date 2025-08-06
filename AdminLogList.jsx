// AdminLogList.jsx
import React, { useEffect, useState } from "react";
import supabase from "../lib/supabase";

function AdminLogList() {
  const [loglar, setLoglar] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const { data, error } = await supabase.from("loglar").select("*").order("tarih", { ascending: false });
      if (!error) setLoglar(data);
    };

    fetchLogs();
  }, []);

  return (
    <div>
      <h2>Log Kayıtları</h2>
      <ul>
        {loglar.map((log) => (
          <li key={log.id}>
            <strong>{log.kullanici}</strong> - {log.islem_turu} - {log.aciklama} ({log.tarih})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminLogList;
