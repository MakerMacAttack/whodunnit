import React from "react";
import "./Notebook.css";

export default function Notebook(props) {
  const [notes, setNotes] = useState([]);
  async function getNotes() {
    const lineup = await getAllNotes();
    setNotes(lineup);
  }
  useEffect(() => {
    getNotes();
  }, []);
  return (
    <div>
      {notes.map(note => (
        
      ))}
      <button>New Note</button>
    </div>
  );
}
